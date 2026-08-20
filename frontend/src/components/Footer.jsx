import { Leaf } from "lucide-react";

export const Footer = () => (
  <footer
    data-testid="site-footer"
    className="relative z-10 mt-24 border-t border-[#D5DCC4] bg-[#2C5E3B] text-[#E9EED9]"
  >
    <div className="mx-auto max-w-7xl px-6 py-14 md:px-12">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E5A93D] text-[#1E2923]">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="font-heading text-2xl font-semibold">
              Nano Fruits Pedia
            </span>
          </div>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[#E9EED9]/80">
            Ensiklopedia digital tanaman & buah tropis Nusantara — mengenal
            lebih dekat kekayaan hayati di sekitar kita.
          </p>
        </div>
        <div className="text-left md:text-right">
          <p className="text-sm uppercase tracking-widest text-[#E5A93D]">
            Dibuat oleh
          </p>
          <p className="font-heading text-3xl font-semibold text-white">
            C# Group
          </p>
        </div>
      </div>
      <div className="mt-10 border-t border-white/15 pt-6 text-xs text-[#E9EED9]/70">
        © {new Date().getFullYear()} Nano Fruits Pedia · Dibuat oleh C# Group.
        Seluruh informasi disusun untuk tujuan edukasi.
      </div>
    </div>
  </footer>
);
