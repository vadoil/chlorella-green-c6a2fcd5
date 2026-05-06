import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import macroImage from "@/assets/chlorella-macro.jpg";

const ParallaxBannerSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={macroImage}
          alt="Макросъёмка живой хлореллы"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(160_84%_8%)]/85 via-[hsl(160_70%_15%)]/65 to-[hsl(160_84%_8%)]/85" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto"
      >
        <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-emerald-glow mb-6">
          Природа × Технология
        </span>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
          Один организм.<br />
          <span className="shimmer-text">Шесть индустрий.</span>
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed">
          Хлорелла удваивает биомассу каждые 8 часов. Это самый быстрорастущий белок на планете — и самый недооценённый бизнес в России.
        </p>
      </motion.div>
    </section>
  );
};

export default ParallaxBannerSection;
