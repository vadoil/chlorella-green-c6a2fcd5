import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ApplicationModal from "@/components/ApplicationModal";

const scenarios = [
  {
    title: "ДОМАШНИЙ СТАРТ",
    desc: "Начните с минимальных вложений прямо у себя дома. Компактное оборудование, первые продажи фермерам и садоводам в вашем районе.",
    result: "Первый доход — уже через 2–3 недели",
    tag: "от 490 000 ₽",
  },
  {
    title: "РЕГИОНАЛЬНАЯ ФЕРМА",
    desc: "Полноценное производство на 500+ литров в сутки. Контракты с рыбхозами, птицефабриками и агрохозяйствами вашего региона.",
    result: "Стабильные повторные заказы от B2B-клиентов",
    tag: "от 1 700 000 ₽",
  },
  {
    title: "ПРОМЫШЛЕННЫЙ МАСШТАБ",
    desc: "Крупное производство с сетью сбыта. Маркетплейсы, оптовые поставки, собственный бренд. Максимальная прибыль с литра.",
    result: "Собственный бренд и выход на федеральный рынок",
    tag: "от 5 200 000 ₽",
  },
];

const ScenariosSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Варианты запуска
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 uppercase">
            Как это может выглядеть
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-12">
            Три сценария — от домашнего производства до промышленного масштаба.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
          {scenarios.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="bg-card p-8 flex flex-col"
            >
              <div className="font-display font-bold text-sm text-primary mb-2 tracking-widest">
                {s.title}
              </div>
              <div className="text-xs text-muted-foreground mb-6">{s.tag}</div>
              <p className="text-foreground/80 leading-relaxed mb-6 flex-1 text-sm">
                {s.desc}
              </p>
              <div className="border-t border-border pt-4">
                <div className="text-muted-foreground text-xs">{s.result}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-display font-bold text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors rounded-lg"
          >
            Узнать подробности →
          </button>
        </motion.div>
      </div>
      <ApplicationModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

export default ScenariosSection;
