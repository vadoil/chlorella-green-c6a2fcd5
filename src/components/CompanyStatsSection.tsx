import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "12+", label: "лет на рынке хлореллы" },
  { value: "47", label: "действующих франчайзи" },
  { value: "23", label: "региона России" },
  { value: "180+", label: "тонн пасты в год" },
  { value: "320", label: "B2B-клиентов в базе" },
  { value: "94%", label: "франчайзи окупились за год" },
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
            Цифры компании
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Не стартап. Действующий бизнес.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Мы передаём франчайзи технологию, отработанную на десятках производств
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
