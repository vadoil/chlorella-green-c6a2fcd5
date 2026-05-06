import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, RefreshCw, MapPin, Clock, Award, Wrench } from "lucide-react";

const guarantees = [
  { icon: Clock, title: "Запуск за 60 дней", desc: "Если не запустим производство в срок — компенсируем 10% от стоимости франшизы за каждую неделю задержки." },
  { icon: ShieldCheck, title: "Выкуп вашей продукции", desc: "Готовы выкупить до 30% произведённой пасты по фиксированной цене в первые 6 месяцев." },
  { icon: MapPin, title: "Защита территории", desc: "Эксклюзивное право на регион. Мы не продадим франшизу другому в радиусе 200 км." },
  { icon: RefreshCw, title: "Возврат при неудаче", desc: "Если за первый год не вышли на план — выкупаем оборудование обратно по 70% стоимости." },
  { icon: Award, title: "Гарантия штаммов", desc: "Бесплатная замена маточной культуры в течение 12 месяцев при любых проблемах." },
  { icon: Wrench, title: "Сервис оборудования", desc: "Бесплатный ремонт и замена комплектующих первые 24 месяца. Выезд инженера за наш счёт." },
];

const GuaranteesSection = () => {
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
            Гарантии
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Мы отвечаем за ваш результат
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            6 письменных обязательств в договоре. Не маркетинг — юридическая ответственность.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {guarantees.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-primary/20 bg-card p-6 relative overflow-hidden group hover-lift"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:bg-primary/10 transition-colors" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl gradient-emerald flex items-center justify-center mb-4">
                  <g.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{g.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 rounded-2xl bg-primary/5 border border-primary/20 p-6 text-center"
        >
          <p className="text-foreground font-medium">
            Все гарантии прописаны в договоре франчайзинга и заверены юридически
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteesSection;
