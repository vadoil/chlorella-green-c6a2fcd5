import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Почему хлорелла
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 uppercase">
            Бизнес с реальной ценностью
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-12">
            Хлорелла — не хайп, а востребованный продукт с растущим рынком и низким порогом входа.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-12 rounded-xl overflow-hidden">
          {roiData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="bg-card p-6 md:p-8 text-center"
            >
              <div className="text-muted-foreground text-xs uppercase tracking-widest font-display mb-3">
                {item.label}
              </div>
              <div className="font-display font-bold text-3xl md:text-5xl text-primary mb-2">
                {item.value}
              </div>
              <div className="text-muted-foreground text-xs">{item.sub}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-xl border border-border bg-card p-8 md:p-10"
        >
          <div className="font-display font-bold text-sm uppercase tracking-widest text-foreground mb-6">
            Почему это выгодный бизнес
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {whyChlorella.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span className="text-foreground/80 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorRoiSection;
