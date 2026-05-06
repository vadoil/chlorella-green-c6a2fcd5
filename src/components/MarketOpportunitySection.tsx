import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const uses = [
  { keyword: "БАДы", desc: "Капсулы и порошки — крупнейший сегмент, рост 12% в год" },
  { keyword: "ДЕТОКС", desc: "Программы очищения — премиальный ценовой сегмент" },
  { keyword: "СПОРТ", desc: "Восстановление и протеин — растущий спрос среди атлетов" },
  { keyword: "КОСМЕТИКА", desc: "Антивозрастной уход — маржа до 70% на готовом продукте" },
  { keyword: "ЕДА", desc: "Функциональные напитки и снеки — массовый рынок" },
];

const stats = [
  { value: "₽1.1 трлн", label: "Мировой рынок суперфудов к 2028" },
  { value: "9.8%", label: "Ежегодный рост (CAGR)" },
  { value: "340%", label: "Рост спроса с 2018 года" },
];

const MarketOpportunitySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="market" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Рыночная возможность
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 uppercase">
            Рынок растёт. Предложение отстаёт.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-12">
            Спрос на хлореллу опережает производство. Те, кто входит сейчас, занимают рынок с минимальной конкуренцией и максимальной маржой.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border mb-12 rounded-xl overflow-hidden">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="bg-card p-8"
            >
              <div className="font-display font-bold text-3xl md:text-4xl text-primary mb-2">{s.value}</div>
              <div className="text-muted-foreground text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-xl border border-primary/30 bg-primary/5 p-8 mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <div className="font-display font-bold text-lg text-foreground mb-2 uppercase">
                Дефицит предложения = ваша возможность
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Россия импортирует 87% хлореллы. Локальное производство покрывает менее 13% спроса. Каждая новая ферма находит покупателей ещё до запуска.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-0">
          {uses.map((u, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
              className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 py-5 border-b border-border group"
            >
              <span className="font-display font-bold text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors md:min-w-[200px]">
                {u.keyword}
              </span>
              <span className="text-muted-foreground text-sm md:text-base">{u.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunitySection;
