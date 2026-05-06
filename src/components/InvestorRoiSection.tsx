import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import farmImage from "@/assets/chlorella-farm-closeup.jpg";

const roiData = [
  { label: "Потенциальная маржа", value: "55%+", sub: "при стабильном производстве" },
  { label: "Срок окупаемости", value: "8–12 мес.", sub: "в зависимости от пакета" },
  { label: "Себестоимость литра", value: "~15 ₽", sub: "одна из самых низких в отрасли" },
  { label: "Рост рынка", value: "9.8%", sub: "CAGR до 2030 года" },
];

const whyChlorella = [
  "Экологически чистый продукт — растущий мировой тренд",
  "Востребована в 6+ отраслях: от рыбоводства до косметики",
  "Минимальная конкуренция в большинстве регионов России",
  "Компактное производство — не нужен большой цех",
  "Быстрый цикл: от запуска до первой продажи — 2 недели",
  "Повторные продажи: клиенты закупают регулярно",
];

const InvestorRoiSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background image with dark emerald overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={farmImage}
          alt="Производство хлореллы — биореакторы"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(160_84%_8%)]/95 via-[hsl(160_70%_12%)]/92 to-[hsl(160_84%_10%)]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,hsl(160_84%_6%)/0.6_100%)]" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-sm font-semibold text-primary-foreground/70 uppercase tracking-widest mb-4">
            Почему хлорелла
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 uppercase">
            Бизнес с реальной ценностью
          </h2>
          <p className="text-white/75 text-lg max-w-2xl mb-12">
            Хлорелла — не хайп, а востребованный продукт с растущим рынком и низким порогом входа.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 mb-12 rounded-xl overflow-hidden backdrop-blur-md">
          {roiData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="bg-white/5 backdrop-blur-md p-6 md:p-8 text-center"
            >
              <div className="text-white/60 text-xs uppercase tracking-widest font-display mb-3">
                {item.label}
              </div>
              <div className="font-display font-bold text-3xl md:text-5xl text-white mb-2">
                {item.value}
              </div>
              <div className="text-white/60 text-xs">{item.sub}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-xl border border-white/15 bg-white/5 backdrop-blur-md p-8 md:p-10"
        >
          <div className="font-display font-bold text-sm uppercase tracking-widest text-white mb-6">
            Почему это выгодный бизнес
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {whyChlorella.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-primary-foreground bg-primary/80 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs mt-0.5 font-bold">✓</span>
                <span className="text-white/90 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorRoiSection;
