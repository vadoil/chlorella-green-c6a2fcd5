import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const advantages = [
  { keyword: "ПРОСТО", desc: "Не нужен опыт в биотехнологиях. Мы даём пошаговую инструкцию, оборудование и обучение — вы запускаете за 2–4 недели." },
  { keyword: "МАРЖА 55%+", desc: "Себестоимость литра хлореллы — около 15 ₽, а продаётся от 50 ₽. Это один из самых маржинальных продуктов в агросекторе." },
  { keyword: "СТАБИЛЬНЫЙ СПРОС", desc: "Хлореллу покупают фермеры, рыбхозы, птицефабрики, садоводы. Это не разовая покупка — клиенты возвращаются каждый месяц." },
  { keyword: "КОМПАКТНО", desc: "Производство помещается в гараже или подсобке. Не нужен большой цех, склад или сложная логистика." },
  { keyword: "ПОДДЕРЖКА", desc: "Помогаем на каждом этапе: от запуска до первых продаж. Если что-то не получается — разбираемся вместе." },
];

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Преимущества бизнеса
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 uppercase">
            Почему это работает
          </h2>
        </motion.div>

        <div className="space-y-0">
          {advantages.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 py-8 border-b border-border group"
            >
              <span className="font-display font-bold text-xl md:text-3xl text-foreground group-hover:text-primary transition-colors md:min-w-[280px]">
                {a.keyword}
              </span>
              <span className="text-muted-foreground leading-relaxed">{a.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
