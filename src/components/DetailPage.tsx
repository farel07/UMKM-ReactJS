import { ArrowLeft, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Footer } from "./Footer";
import type { UMKM } from "../data/umkmData";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "./ui/badge";
import { useRef, useEffect } from "react";

interface DetailPageProps {
  umkm: UMKM;
  onBack: () => void;
}

export function DetailPage({ umkm, onBack }: DetailPageProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      {/* Floating Header */}
      <motion.header initial={{ y: -100 }} animate={{ y: 0 }} className="bg-black/20 backdrop-blur-2xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button onClick={onBack} variant="ghost" className="gap-2 text-white hover:bg-white/10 border border-white/20 rounded-xl group">
            <ArrowLeft className="size-5 group-hover:-translate-x-1 transition-transform" />
            Kembali
          </Button>
        </div>
      </motion.header>

      <section className="relative h-[60vh] overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <ImageWithFallback src={umkm.image} alt={umkm.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        </motion.div>

        <div className="relative h-full flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-12 w-full">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 px-4 py-2 rounded-xl">✓ Approved</Badge>
                <Badge className="bg-white/10 backdrop-blur-md text-white border-white/30 px-4 py-2 rounded-xl">{umkm.filter}</Badge>
              </div>
              <h1 className="text-white mb-4 max-w-3xl">{umkm.name}</h1>
              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <MapPin className="size-5 text-blue-400" />
                  <span>{umkm.address.split(",").slice(-2).join(",")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-5 text-purple-400" />
                  <span>Buka setiap hari</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content - Split Layout */}
      <main className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h2 className="text-white mb-6 flex items-center gap-3">
                Tentang Kami
                <div className="h-px flex-1 bg-gradient-to-r from-blue-500 to-transparent" />
              </h2>
              <p className="text-white/80 leading-relaxed">{umkm.fullDescription}</p>
            </motion.div>

            {/* Gallery Section */}
            {umkm.gallery.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <h2 className="text-white mb-6 flex items-center gap-3">
                  Galeri & Produk
                  <div className="h-px flex-1 bg-gradient-to-r from-purple-500 to-transparent" />
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {umkm.gallery.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      whileHover={{ scale: 1.05, rotate: Math.random() > 0.5 ? 2 : -2 }}
                      className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
                    >
                      <ImageWithFallback src={image} alt={`${umkm.name} - Foto ${index + 1}`} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-4 left-4">
                          <span className="text-white">Foto {index + 1}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column - Sticky Sidebar */}
          <div className="lg:col-span-1">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="sticky top-24 space-y-6">
              {/* Contact Card */}
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
                <h3 className="text-white mb-4">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <MapPin className="size-5 text-blue-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-white/60 mb-1">Alamat</div>
                      <div className="text-white break-words">{umkm.address}</div>
                    </div>
                  </div>
                  {umkm.socialMedia && (
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-white/10 rounded-lg flex-shrink-0">
                        <Phone className="size-5 text-purple-400" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="text-white/60 mb-1">Contact</div>

                        <div className="bg-white/5 rounded-lg p-3 max-w-full overflow-hidden">
                          <a
                            href={umkm.socialMedia}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-400 transition-colors break-all word-break-break-all text-sm truncate block w-full"
                            title={umkm.socialMedia}
                          >
                            {umkm.socialMedia}
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all">Hubungi Sekarang</Button>
              </div>

              {/* Map Card */}
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
                <h3 className="text-white mb-4">Lokasi</h3>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <iframe
                    src={`https://www.google.com/maps?q=${umkm.coordinates.lat},${umkm.coordinates.lng}&hl=id&z=15&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Peta lokasi ${umkm.name}`}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
