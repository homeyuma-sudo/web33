import { useScroll, useTransform, motion, useReducedMotion } from "framer-motion";

// Efek latar interaktif ringan yang mengikuti scroll pengunjung.
// Sengaja memakai sedikit node DOM (blob SVG) agar optimal di perangkat spek rendah.
const Leaf = ({ className, color }) => (
  <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
    <path
      fill={color}
      d="M45.7,-59.6C58.9,-51.1,68.6,-36.5,72.6,-20.4C76.6,-4.4,74.9,13.2,67.4,27.9C59.9,42.6,46.6,54.4,31.5,61.9C16.4,69.5,-0.6,72.8,-17.2,69.4C-33.8,66,-50,55.9,-60.4,41.7C-70.8,27.5,-75.4,9.2,-72.7,-7.7C-70,-24.6,-60,-40.1,-46.8,-48.8C-33.6,-57.6,-16.8,-59.6,0.3,-60C17.4,-60.4,34.8,-59.2,45.7,-59.6Z"
      transform="translate(100 100)"
    />
  </svg>
);

export const BackgroundEffect = () => {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -260]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 220]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -160]);
  const rot = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 45]);

  return (
    <div
      data-testid="background-effect"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#FDFBF7] dark:bg-[#0F130D]"
    >
      <motion.div style={{ y: y1, rotate: rot }} className="absolute -left-24 top-24">
        <Leaf className="h-80 w-80 opacity-[0.13]" color="#2C5E3B" />
      </motion.div>
      <motion.div style={{ y: y2, rotate: rot }} className="absolute -right-28 top-1/3">
        <Leaf className="h-96 w-96 opacity-[0.10]" color="#4C8C4A" />
      </motion.div>
      <motion.div style={{ y: y3 }} className="absolute left-1/4 bottom-10">
        <Leaf className="h-72 w-72 opacity-[0.08]" color="#E5A93D" />
      </motion.div>
    </div>
  );
};
