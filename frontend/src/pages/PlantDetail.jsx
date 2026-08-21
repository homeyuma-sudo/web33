import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  ArrowLeft,
  Sun,
  Droplets,
  Sprout,
  Scissors,
  CalendarDays,
  HeartPulse,
  FlaskConical,
  Salad,
  Images,
  Share2,
  Printer,
} from "lucide-react";
import { getPlant, plants } from "../data/plants";
import { Gallery } from "../components/Gallery";

const iconMap = { Sun, Droplets, Sprout, Scissors, CalendarDays };

const SectionTitle = ({ icon: Icon, children }) => (
  <div className="mb-5 flex items-center gap-3">
    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E9EED9] text-[#2C5E3B] dark:bg-[#243021] dark:text-[#8FCB7E]">
      <Icon className="h-5 w-5" />
    </span>
    <h2 className="font-heading text-2xl font-semibold text-[#1E2923] dark:text-[#EDF1E6] md:text-3xl">
      {children}
    </h2>
  </div>
);

export default function PlantDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const plant = getPlant(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!plant) {
    return (
      <main
        data-testid="notfound-page"
        className="mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center"
      >
        <h1 className="font-heading text-4xl font-semibold text-[#1E2923] dark:text-[#EDF1E6]">
          Tanaman tidak ditemukan
        </h1>
        <p className="mt-3 text-[#5C6B61] dark:text-[#A2AE9F]">
          Maaf, halaman yang Anda cari tidak tersedia.
        </p>
        <Link
          to="/"
          data-testid="back-home-link"
          className="mt-8 rounded-full bg-[#2C5E3B] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#244d31]"
        >
          Kembali ke Lobby
        </Link>
      </main>
    );
  }

  const others = plants.filter((p) => p.slug !== plant.slug).slice(0, 3);

  const handleShare = async () => {
    const url = window.location.href;
    const shareData = {
      title: `${plant.nama} — Nano Fruits Pedia`,
      text: `Baca info lengkap ${plant.nama} (${plant.latin}) di Nano Fruits Pedia`,
      url,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(url);
        toast.success("Tautan disalin ke clipboard!");
      }
    } catch (e) {
      // pengguna membatalkan share — abaikan
    }
  };

  const handlePrint = () => window.print();

  return (
    <main data-testid={`detail-page-${plant.slug}`}>
      {/* HERO */}
      <section className="relative h-[52vh] min-h-[380px] w-full overflow-hidden">
        <img
          src={plant.image}
          alt={plant.nama}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-12 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <button
                onClick={() => navigate("/")}
                data-testid="back-button"
                className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/25"
              >
                <ArrowLeft className="h-4 w-4" />
                Kembali ke Lobby
              </button>
              <span
                className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#1E2923]"
                style={{ backgroundColor: plant.aksen }}
              >
                {plant.slug === "lidah-buaya" || plant.slug === "palem-putri"
                  ? "Tanaman"
                  : "Buah"}
              </span>
              <h1
                className="font-heading text-5xl font-semibold tracking-tighter text-white md:text-7xl"
                style={{ textShadow: "0 2px 24px rgba(0,0,0,0.5)" }}
              >
                {plant.nama}
              </h1>
              <p className="mt-2 text-lg italic text-white/85">{plant.latin}</p>
              <p className="mt-3 max-w-xl text-white/90">{plant.tagline}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div
          data-testid="action-toolbar"
          className="mb-10 flex flex-wrap items-center gap-3 print:hidden"
        >
          <button
            onClick={handleShare}
            data-testid="share-button"
            className="inline-flex items-center gap-2 rounded-full bg-[#2C5E3B] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#244d31] dark:bg-[#4C8C4A] dark:hover:bg-[#3f7a3d]"
          >
            <Share2 className="h-4 w-4" />
            Bagikan
          </button>
          <button
            onClick={handlePrint}
            data-testid="print-button"
            className="inline-flex items-center gap-2 rounded-full border border-[#D5DCC4] bg-white px-5 py-2.5 text-sm font-semibold text-[#2C5E3B] transition-colors duration-300 hover:bg-[#F0F2E9] dark:border-[#2B3326] dark:bg-[#161C13] dark:text-[#8FCB7E] dark:hover:bg-[#20271D]"
          >
            <Printer className="h-4 w-4" />
            Cetak
          </button>
        </div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-3">
          {/* KONTEN UTAMA */}
          <div className="space-y-16 lg:col-span-2">
            <section data-testid="section-galeri">
              <SectionTitle icon={Images}>Galeri Foto</SectionTitle>
              <Gallery galeri={plant.galeri} aksen={plant.aksen} />
            </section>

            <section data-testid="section-deskripsi">
              <SectionTitle icon={Salad}>Deskripsi Umum</SectionTitle>
              <div className="space-y-4">
                {plant.deskripsi.map((par, i) => (
                  <p key={i} className="text-base leading-relaxed text-[#3d4a41] dark:text-[#C6D0C0] md:text-lg">
                    {par}
                  </p>
                ))}
              </div>
            </section>

            <section data-testid="section-manfaat">
              <SectionTitle icon={HeartPulse}>Manfaat</SectionTitle>
              <ul className="grid gap-3 sm:grid-cols-2">
                {plant.manfaat.map((m, i) => (
                  <li
                    key={i}
                    className="flex gap-3 rounded-2xl border border-[#D5DCC4] bg-white p-4 text-sm leading-relaxed text-[#3d4a41] dark:border-[#2B3326] dark:bg-[#161C13] dark:text-[#C6D0C0]"
                  >
                    <span
                      className="mt-1.5 h-2 w-2 flex-none rounded-full"
                      style={{ backgroundColor: plant.aksen }}
                    />
                    {m}
                  </li>
                ))}
              </ul>
            </section>

            <section data-testid="section-perawatan">
              <SectionTitle icon={Sprout}>Panduan Penanaman &amp; Perawatan</SectionTitle>
              <div className="space-y-4">
                {plant.perawatan.map((step, i) => {
                  const Icon = iconMap[step.icon] || Sprout;
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-4 rounded-2xl border border-[#D5DCC4] bg-white p-5 dark:border-[#2B3326] dark:bg-[#161C13]"
                    >
                      <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-[#F0F2E9] text-[#2C5E3B] dark:bg-[#20271D] dark:text-[#8FCB7E]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h4 className="font-semibold text-[#1E2923] dark:text-[#EDF1E6]">{step.judul}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-[#5C6B61] dark:text-[#A2AE9F]">
                          {step.isi}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            <div
              data-testid="section-klasifikasi"
              className="rounded-3xl border border-[#D5DCC4] bg-white p-7 dark:border-[#2B3326] dark:bg-[#161C13]"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E9EED9] text-[#2C5E3B] dark:bg-[#243021] dark:text-[#8FCB7E]">
                  <FlaskConical className="h-5 w-5" />
                </span>
                <h2 className="font-heading text-xl font-semibold text-[#1E2923] dark:text-[#EDF1E6]">
                  Klasifikasi Ilmiah
                </h2>
              </div>
              <dl className="divide-y divide-[#EDEFE4] dark:divide-[#2B3326]">
                {Object.entries(plant.klasifikasi).map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between py-2.5 text-sm">
                    <dt className="text-[#5C6B61] dark:text-[#A2AE9F]">{k}</dt>
                    <dd className="text-right font-medium italic text-[#1E2923] dark:text-[#EDF1E6]">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-3xl border border-[#D5DCC4] bg-[#2C5E3B] p-7 text-[#E9EED9]">
              <h2 className="font-heading text-xl font-semibold text-white">
                Nutrisi &amp; Kandungan
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {plant.nutrisi.map((n, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 flex-none rounded-full bg-[#E5A93D]" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* TANAMAN LAINNYA */}
        <section className="mt-20 border-t border-[#D5DCC4] pt-12 dark:border-[#2B3326]" data-testid="section-lainnya">
          <h2 className="mb-8 font-heading text-2xl font-semibold text-[#1E2923] dark:text-[#EDF1E6] md:text-3xl">
            Jelajahi Lainnya
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                to={`/tanaman/${p.slug}`}
                data-testid={`related-${p.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-[#D5DCC4] bg-white p-4 transition-transform duration-300 hover:-translate-y-1 dark:border-[#2B3326] dark:bg-[#161C13]"
              >
                <img
                  src={p.image}
                  alt={p.nama}
                  loading="lazy"
                  className="h-16 w-16 flex-none rounded-xl object-cover"
                />
                <div>
                  <h4 className="font-semibold text-[#1E2923] dark:text-[#EDF1E6]">{p.nama}</h4>
                  <p className="text-xs italic text-[#5C6B61] dark:text-[#A2AE9F]">{p.latin}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
