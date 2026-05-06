import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Boxes, FileText, HeadphonesIcon, FlaskConical, Globe, Sprout } from "lucide-react";

const items = [
  { icon: Boxes, title: "Кит-комплект биореактора", desc: "Готовый комплект для самостоятельной сборки по пошаговой инструкции." },
  { icon: FileText, title: "Технологическая документация", desc: "Полный регламент производства суспензии хлореллы: рецептура, режимы, контроль." },
  { icon: HeadphonesIcon, title: "Консультирование и сопровождение", desc: "Поддержка по технологии культивирования суспензии хлореллы на всех этапах." },
  { icon: Sprout, title: "Маточная культура хлореллы", desc: "Живая маточная культура для старта франшизы — основа всех производственных циклов." },
  { icon: FlaskConical, title: "Питательная среда на 2000 л", desc: "Унифицированная среда для старта — хватает на 2000 литров готовой суспензии." },
  { icon: Globe, title: "Сайт-магазин с эквайрингом", desc: "Готовый интернет-магазин с подключённым приёмом онлайн-платежей." },
];

const StarterKitSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            Стартовый пакет
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Что вы получаете в день старта
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            6 ключевых компонентов готового бизнеса — всё включено в стоимость франшизы
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl bg-card border border-border p-6 hover-lift"
            >
              <div className="w-12 h-12 rounded-xl gradient-emerald flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-base text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StarterKitSection;
