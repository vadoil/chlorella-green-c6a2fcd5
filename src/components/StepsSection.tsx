import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, MapPin, Wrench, GraduationCap, Banknote } from "lucide-react";

const steps = [
  { icon: FileText, title: "Заявка", desc: "Оставьте заявку и получите финансовую модель" },
  { icon: MapPin, title: "Помещение", desc: "Подбор и адаптация помещения под производство" },
  { icon: Wrench, title: "Монтаж", desc: "Установка и запуск оборудования нашей командой" },
  { icon: GraduationCap, title: "Обучение", desc: "Полный курс для вас и вашего персонала" },
  { icon: Banknote, title: "Первая прибыль", desc: "Выход на прибыль уже через 30 дней работы" },
];

const StepsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            Как это работает
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            5 шагов к запуску
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute left-8 top-8 bottom-8 w-px bg-border" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-6 items-start group"
              >
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 rounded-2xl gradient-emerald flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <step.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                </div>
                <div className="pt-2">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-bold text-primary">Шаг {i + 1}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground mt-1">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
