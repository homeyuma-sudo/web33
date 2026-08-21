import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const PlantCard = ({ plant, index, wide }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
    className={wide ? "md:col-span-2" : "md:col-span-1"}
  >
    <Link
      to={`/tanaman/${plant.slug}`}
      data-testid={`plant-card-${plant.slug}`}
      className="group relative block h-full overflow-hidden rounded-3xl border border-[#D5DCC4] bg-white shadow-[0_10px_40px_-20px_rgba(30,41,35,0.35)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(30,41,35,0.5)] dark:border-[#2B3326] dark:bg-[#161C13] dark:shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]"
    >
      <div className={`overflow-hidden ${wide ? "h-64 md:h-80" : "h-56"}`}>
        <img
          src={plant.image}
          alt={plant.nama}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-black/10 to-transparent" />
      </div>
      <div className="flex items-start justify-between gap-4 p-6 md:p-7">
        <div>
          <span
            className="mb-2 inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#1E2923]"
            style={{ backgroundColor: `${plant.aksen}33` }}
          >
            {plant.slug === "lidah-buaya" ||
            plant.slug === "palem-putri" ||
            plant.slug === "palem-rawa"
              ? "Tanaman"
              : "Buah"}
          </span>
          <h3 className="font-heading text-2xl font-semibold text-[#1E2923] dark:text-[#EDF1E6] md:text-3xl">
            {plant.nama}
          </h3>
          <p className="mt-1 text-sm italic text-[#5C6B61] dark:text-[#A2AE9F]">{plant.latin}</p>
          <p className="mt-3 text-sm leading-relaxed text-[#5C6B61] dark:text-[#A2AE9F]">
            {plant.tagline}
          </p>
        </div>
        <span
          className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:rotate-45"
          style={{ backgroundColor: plant.aksen }}
        >
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
    </Link>
  </motion.div>
);
