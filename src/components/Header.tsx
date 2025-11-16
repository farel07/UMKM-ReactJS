import { Search, Store, Menu, X } from "lucide-react";
import { Input } from "./ui/input";
import { motion } from "framer-motion";
import { useState } from "react";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function Header({ searchQuery, onSearchChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} className="fixed w-full left-0 top-0 z-50 bg-black/20 backdrop-blur-2xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-50" />
              <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-2.5 rounded-2xl">
                <Store className="size-6 text-white" />
              </div>
            </motion.div>
            <div>
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Kuda Lumping Digital</span>
            </div>
          </a>

          {/* Navigation - Desktop */}
          {/* <nav className="hidden lg:flex items-center gap-1">
            {["Beranda"].map((item) => (
              <a key={item} href={item === "Beranda" ? "/" : `#${item.toLowerCase()}`} className="px-4 py-2 text-white/70 hover:text-white transition-all relative group rounded-xl hover:bg-white/10">
                {item}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-1/2 transition-all duration-300" />
              </a>
            ))}
          </nav> */}

          {/* Search Bar */}
          <div className="relative flex-1 max-w-md hidden md:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-white/40" />
            <Input
              type="text"
              placeholder="Cari UMKM..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-12 bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/40 focus:bg-white/20 focus:border-purple-400 transition-all rounded-xl"
            />
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-white hover:bg-white/10 rounded-xl transition-all">
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="lg:hidden mt-4 pt-4 border-t border-white/10 space-y-2">
            <div className="mb-4">
              {/* <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-white/40 pointer-events-none" /> */}
              <Input
                type="text"
                placeholder="Cari UMKM..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-12 bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/40 rounded-xl"
              />
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
