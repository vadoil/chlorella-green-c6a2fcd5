import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, Wrench, TrendingUp, Coins, Building2, Crown } from "lucide-react";

const milestones = [
  { month: "Месяц 1", icon: Rocket, title: "Подписание и обучение", desc: "Договор, оплата, очное обучение 5 дней. Подбор помещения, проектирование цеха.", highlight: "Старт" },
  { month: "Месяц 2", icon: Wrench, title: "Монтаж и запуск", desc: "Доставка оборудования, монтаж, посев маточной культуры, выход на проектную мощность.", highlight: "Производство" },
  { month: "Месяц 3", icon: TrendingUp, title: "Первые продажи", desc: "Первая отгрузка B2B-клиентам по нашей базе. Запуск рекламы. Окупаемость операционки.", highlight: "Доход" },
  { month: "Месяц 4–5", icon: Building2, title: "Возврат вложений", desc: "Полная окупаемость инвестиций. Чистая прибыль каждый месяц без долгов.", highlight: "Окупаемость" },
  { month: "Месяц 6", icon: Coins, title: "Выход на план", desc: "Стабильная выручка 800 тыс.–1.5 млн ₽/мес. Постоянные клиенты, повторные заказы.", highlight: "Прибыль" },
  { month: "Месяц 12", icon: Crown, title: "Масштабирование", desc: "Расширение цеха, второй биореактор, новые продукты (капсулы, порошок). Рост х2.", highlight: "Рост" },
];

const TimelineSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            Дорожная карта
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Ваш первый год по месяцам
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Прозрачный план от подписания договора до окупаемости и масштабирования
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2" />

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <motion.div
                key={m.month}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 mt-6 z-10 shadow-lg shadow-primary/50" />

                <div className={`pl-20 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="rounded-2xl bg-card border border-border p-6 hover-lift">
                    <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">{m.month}</span>
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                        {m.highlight}
                      </span>
                    </div>
                    <div className={`flex items-center gap-3 mb-2 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="w-10 h-10 rounded-lg gradient-emerald flex items-center justify-center flex-shrink-0">
                        <m.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-foreground">{m.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
