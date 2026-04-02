import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, FlaskConical, GraduationCap, Megaphone, Monitor } from "lucide-react";

const items = [
  { icon: Cpu, title: "Оборудование", desc: "Автоматизированные фотобиореакторы с системой контроля температуры, pH и освещения" },
  { icon: FlaskConical, title: "Маточный раствор", desc: "Сертифицированные штаммы хлореллы с высокой продуктивностью и стабильностью" },
  { icon: GraduationCap, title: "Обучение и регламенты", desc: "Полный курс обучения персонала, технологические карты и SOP-документация" },
  { icon: Megaphone, title: "Маркетинг и лиды", desc: "Готовая маркетинговая стратегия, лендинг, CRM и поток заявок от клиентов" },
  { icon: Monitor, title: "ПО для мониторинга", desc: "Облачная система контроля всех параметров выращивания в реальном времени" },
];

const PackageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            Что входит
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Пакет франшизы «под ключ»
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 hover-lift group"
            >
              <div className="w-12 h-12 rounded-xl gradient-emerald flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageSection;
