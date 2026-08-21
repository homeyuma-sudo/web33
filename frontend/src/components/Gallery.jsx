import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Gallery = ({ galeri, aksen }) => {
  const [active, setActive] = useState(0);
  if (!galeri || galeri.length === 0) return null;
  const current = galeri[active];

  return (
    <div data-testid="plant-gallery">
      <div className="relative overflow-hidden rounded-3xl border border-[#D5DCC4] dark:border-[#2B3326]">
        <AnimatePresence mode="wait">
          <motion.img
            key={active}
            src={current.url}
            alt={current.caption}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="h-72 w-full object-cover md:h-96"
          />
        </AnimatePresence>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5">
          <p className="text-sm font-medium text-white">{current.caption}</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {galeri.map((g, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            data-testid={`gallery-thumb-${i}`}
            aria-label={g.caption}
            className="relative overflow-hidden rounded-xl border-2 transition-transform duration-200 hover:-translate-y-0.5"
            style={{ borderColor: active === i ? aksen : "transparent" }}
          >
            <img
              src={g.url}
              alt={g.caption}
              loading="lazy"
              className={`h-20 w-full object-cover transition-opacity duration-200 md:h-24 ${
                active === i ? "opacity-100" : "opacity-60 hover:opacity-100"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
