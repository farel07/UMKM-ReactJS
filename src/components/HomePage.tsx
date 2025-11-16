import { useState, useMemo, useRef } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { UMKMCard } from "./UMKMCard";
import { umkmData } from "../data/umkmData";
import { motion, useScroll, useTransform } from "framer-motion";
import { LayoutDashboard, Store, Sparkles } from "lucide-react";

interface HomePageProps {
  onDetailClick: (id: number) => void;
}

export function HomePage({ onDetailClick }: HomePageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  // State untuk kategori yang aktif, default-nya "Semua"
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const { scrollY } = useScroll();

  const umkmSectionRef = useRef<HTMLElement>(null);

  const handleScrollToUMKM = () => {
    umkmSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Membuat daftar kategori secara dinamis dari data
  const categories = useMemo(() => {
    const uniqueCategories = new Set(umkmData.map((umkm) => umkm.filter));
    return ["Semua", ...Array.from(uniqueCategories)];
  }, []);

  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Logika filter diperbarui untuk menangani search & kategori
  const filteredUMKM = useMemo(() => {
    let results = umkmData;

    // Filter berdasarkan kategori terlebih dahulu
    if (selectedCategory !== "Semua") {
      results = results.filter((umkm) => umkm.filter === selectedCategory);
    }

    // next, filter berdasarkan pencarian
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter((umkm) => umkm.name.toLowerCase().includes(query) || umkm.description.toLowerCase().includes(query) || umkm.address.toLowerCase().includes(query));
    }

    return results;
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-slate-950 via-purple-950 to-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div style={{ y: y1 }} className="absolute top-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <motion.div style={{ y: y2 }} className="absolute top-40 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <motion.div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
      </div>

      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Hero Banner with Organic Shape */}
      <section className="relative pb-32 overflow-hidden">
        <motion.div style={{ opacity }} className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-6">
                <Sparkles className="size-4 text-yellow-400" />
                <span className="text-white/90">Platform UMKM Ketintang & Sekitarnya</span>
              </div>
              <h1 className="text-white mb-6">
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">UMKM Indonesia</span>
              </h1>
              <p className="text-white/70 mb-8 max-w-xl">
                Selamat datang di tempat di mana kamu bisa menemukan berbagai UMKM seru dan unik di daerah Ketintang dan sekitarnya! Di tiap halaman UMKM, kamu bisa lihat deskripsi lengkap, foto, hingga lokasi Google Maps yang langsung bisa
                kamu klik. Yuk, jelajahi satu per satu, siapa tahu kamu nemu tempat makan favorit baru atau layanan yang selama ini kamu cari!
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button onClick={handleScrollToUMKM} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl shadow-lg shadow-blue-500/50">
                  Mulai Jelajah
                </motion.button>
              </div>
            </motion.div>

            {/* Right Stats Grid */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="grid grid-cols-2 gap-4">
              {[
                { icon: Store, label: "UMKM", value: `${umkmData.length}+`, color: "from-blue-500 to-cyan-500" },
                { icon: LayoutDashboard, label: "kategori", value: `${categories.length - 1}+`, color: "from-purple-500 to-pink-500" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className={`relative p-6 rounded-3xl bg-gradient-to-br ${stat.color} group cursor-pointer`}
                >
                  <div className="absolute inset-0 bg-black/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <stat.icon className="size-10 text-white mb-3 relative z-10" />
                  <div className="text-white mb-1 relative z-10">{stat.value}</div>
                  <div className="text-white/80 relative z-10">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* UMKM Bento Grid */}
      <section ref={umkmSectionRef} className="relative max-w-7xl mx-auto px-6 pb-20">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-white mb-2">Koleksi UMKM Pilihan</h2>
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)} // Mengubah state saat diklik
                  className={`px-4 py-2 rounded-xl transition-all ${
                    selectedCategory === category
                      ? "bg-white/20 text-white border border-white/30" // style untuk tombol aktif
                      : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10" // style untuk tombol tidak aktif
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {filteredUMKM.length > 0 ? (
            <div className="grid grid-cols-12 gap-4 auto-rows-[280px]">
              {filteredUMKM.map((umkm, index) => {
                const gridPatterns = [
                  "col-span-12 md:col-span-7 row-span-2",
                  "col-span-12 md:col-span-5 row-span-1",
                  "col-span-12 md:col-span-5 row-span-1",
                  "col-span-12 md:col-span-4 row-span-1",
                  "col-span-12 md:col-span-4 row-span-1",
                  "col-span-12 md:col-span-4 row-span-1",
                  "col-span-12 md:col-span-6 row-span-2",
                  "col-span-12 md:col-span-6 row-span-1",
                  "col-span-12 md:col-span-6 row-span-1",
                  "col-span-12 md:col-span-12 row-span-1",
                ];
                const pattern = gridPatterns[index % gridPatterns.length];
                return <UMKMCard key={umkm.id} umkm={umkm} onDetailClick={onDetailClick} index={index} className={pattern} />;
              })}
            </div>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
              <div className="text-white/40 mb-4">🔍</div>
              <p className="text-white/70">Tidak ada UMKM yang cocok dengan filter Anda.</p>
            </motion.div>
          )}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
