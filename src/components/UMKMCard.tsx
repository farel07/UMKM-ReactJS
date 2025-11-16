import { Card } from "./ui/card";
import { Button } from "./ui/button";
import type { UMKM } from "../data/umkmData";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

interface UMKMCardProps {
  umkm: UMKM;
  onDetailClick: (id: number) => void;
  index: number;
  className?: string;
}

export function UMKMCard({ umkm, onDetailClick, index, className = "" }: UMKMCardProps) {
  // Different styles for different card sizes
  const isFeatured = className.includes("row-span-2");

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.05 }} whileHover={{ scale: 1.02, rotate: isFeatured ? 0 : Math.random() > 0.5 ? 1 : -1 }} className={className}>
      <Card className={`relative overflow-hidden h-full border-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 group cursor-pointer ${isFeatured ? "shadow-2xl shadow-purple-500/20" : "shadow-xl"}`}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback src={umkm.image} alt={umkm.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-6">
          {/* Top Badge */}
          <div className="flex items-start justify-between">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1.5 rounded-full border border-transparent">
              <span className="text-white">{umkm.filter}</span>
            </div>

            {isFeatured && (
              <div className="flex items-center gap-1 bg-yellow-500/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-yellow-500/30">
                {/* <Star className="size-4 text-yellow-400 fill-yellow-400" /> */}
                {/* <span className="text-yellow-200">Featured</span> */}
              </div>
            )}
          </div>

          {/* Bottom Content */}
          <div className="space-y-3">
            <div>
              <h3 className={`text-white mb-2 group-hover:text-blue-300 transition-colors ${isFeatured ? "text-3xl" : ""}`}>{umkm.name}</h3>
              <p className={`text-white/80 ${isFeatured ? "" : "line-clamp-2"}`}>{umkm.description}</p>
            </div>

            <div className="flex items-center gap-2 text-white/70">
              <MapPin className="size-4 flex-shrink-0" />
              <span className="line-clamp-1">{umkm.address.split(",")[1]?.trim() || umkm.address}</span>
            </div>

            <Button onClick={() => onDetailClick(umkm.id)} className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 group/btn">
              Lihat Detail
              <ArrowRight className="size-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20" />
        </div>
      </Card>
    </motion.div>
  );
}
