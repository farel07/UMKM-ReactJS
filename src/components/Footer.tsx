import { Heart, Store, Instagram, Twitter, Facebook } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative bg-black/20 backdrop-blur-xl border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-50" />
                <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-2xl">
                  <Store className="size-6 text-white" />
                </div>
              </div>
              <div>
                <div className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Kuda Lumping Digital</div>
              </div>
            </div>
            <p className="text-white/60">Menghubungkan UMKM dengan konsumen</p>
          </div>

          <div>
            <h4 className="text-white mb-4">Tautan</h4>
            <ul className="space-y-2">
              {["Tentang Kami", "Kontak", "Kebijakan Privasi"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Ikuti Kami</h4>
            <div className="flex gap-3">
              {[
                { icon: Instagram, color: "from-pink-500 to-purple-500" },
                { icon: Twitter, color: "from-blue-400 to-blue-600" },
                { icon: Facebook, color: "from-blue-500 to-blue-700" },
              ].map((social, index) => (
                <motion.a key={index} href="#" whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }} className={`p-3 bg-gradient-to-br ${social.color} rounded-xl text-white hover:shadow-lg transition-all`}>
                  <social.icon className="size-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-white/60 flex items-center justify-center gap-2 flex-wrap">
            © 2025 KudaLumpingDigital • Dibuat dengan
            <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}>
              <Heart className="size-4 text-red-400 fill-red-400 inline" />
            </motion.span>
            untuk UMKM Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
