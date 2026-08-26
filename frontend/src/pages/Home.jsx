import { motion } from "framer-motion";
import { Leaf, Sparkles } from "lucide-react";
import { plants } from "../data/plants";
import { PlantCard } from "../components/PlantCard";

// Pola bento: kartu tertentu dibuat lebih lebar agar lobby terasa seperti galeri.
const wideCards = new Set(["mangga", "lidah-buaya", "jambu-air"]);

export default function Home() {
  return (
    <main data-testid="home-page">
      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 md:px-12 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D5DCC4] bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#2C5E3B] backdrop-blur dark:border-white/15 dark:bg-white/5 dark:text-[#8FCB7E]">
            <Sparkles className="h-3.5 w-3.5 text-[#E5A93D]" />
            Ensiklopedia Tanaman Tropis
          </span>
          <h1 className="mt-6 font-heading text-5xl font-semibold leading-[1.02] tracking-tighter text-[#1E2923] dark:text-[#EDF1E6] md:text-7xl">
            Jelajahi kekayaan
            <span className="text-[#2C5E3B] dark:text-[#8FCB7E]"> buah & tanaman </span>
            Nusantara
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5C6B61] dark:text-[#A2AE9F] md:text-lg">
            Selamat datang di <strong className="text-[#2C5E3B] dark:text-[#8FCB7E]">Nano Fruits Pedia</strong>.
            Pilih salah satu tanaman di lobby koleksi kami untuk membaca deskripsi,
            klasifikasi ilmiah, manfaat, hingga panduan penanaman secara lengkap.
          </p>
          <a
            href="#koleksi"
            data-testid="hero-cta"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#2C5E3B] px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#244d31]"
          >
            <Leaf className="h-4 w-4" />
            Mulai Menjelajah
          </a>
        </motion.div>

        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-[#D5DCC4] pt-8 dark:border-[#2B3326]">
          {[
            { angka: `${plants.length}`, label: "Tanaman & Buah" },
            { angka: "100%", label: "Bahasa Indonesia" },
            { angka: "4", label: "Kategori Informasi" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-heading text-4xl font-semibold text-[#2C5E3B] dark:text-[#8FCB7E]">
                {s.angka}
              </p>
              <p className="text-sm text-[#5C6B61] dark:text-[#A2AE9F]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* KOLEKSI / LOBBY */}
      <section
        id="koleksi"
        data-testid="koleksi-section"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-16 md:px-12"
      >
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-[#1E2923] dark:text-[#EDF1E6] md:text-5xl">
              Lobby Koleksi
            </h2>
            <p className="mt-2 max-w-lg text-[#5C6B61] dark:text-[#A2AE9F]">
              Ketuk salah satu kartu untuk membuka halaman informasi lengkapnya.
            </p>
          </div>
          <span className="text-sm font-medium text-[#5C6B61] dark:text-[#A2AE9F]">
            {plants.length} entri tersedia
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plants.map((plant, i) => (
            <PlantCard
              key={plant.slug}
              plant={plant}
              index={i}
              wide={wideCards.has(plant.slug)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
