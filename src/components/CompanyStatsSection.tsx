import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "60–90 л", label: "суспензии в сутки с одного биореактора" },
  { value: "0,5 кВт·ч", label: "потребление электроэнергии" },
  { value: "1 час", label: "работы технолога на цикл 2–3 суток" },
  { value: "20 м²", label: "площадь производственного помещения" },
  { value: "32 млн", label: "клеток на мл — товарная плотность" },
  { value: "2000 л", label: "стартовой питательной среды в комплекте" },
];

const CompanyStatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            Технология производства
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Простое производство — высокая маржа
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Минимум трудозатрат, минимум площади, минимум электричества — и высокомаржинальный продукт на выходе
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-card p-8 text-center hover:bg-primary/5 transition-colors"
            >
              <div className="font-display font-bold text-4xl md:text-5xl text-primary mb-2">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStatsSection;
