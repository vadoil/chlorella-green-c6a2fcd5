import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Boxes, FileText, HeadphonesIcon, FlaskConical, Globe, Sprout } from "lucide-react";

const items = [
  { icon: Boxes, title: "Кит-комплект биореактора", desc: "Полный комплект для самостоятельной сборки по подробной инструкции — без выезда монтажников." },
  { icon: FileText, title: "Технологическая документация", desc: "Полный регламент производства суспензии хлореллы: рецептура, режимы, контроль качества." },
  { icon: HeadphonesIcon, title: "Консультирование и сопровождение", desc: "Поддержка по технологии культивирования суспензии хлореллы на всех этапах — от запуска до выхода на проектную мощность." },
  { icon: Sprout, title: "Маточная культура хлореллы", desc: "Живая маточная культура суспензии хлореллы для старта франшизы — основа для всех последующих циклов производства." },
  { icon: FlaskConical, title: "Питательная среда на 2000 л", desc: "Унифицированная питательная среда для старта производства — её хватает на 2000 литров готовой суспензии хлореллы." },
  { icon: Globe, title: "Сайт интернет-магазин с эквайрингом", desc: "Готовый сайт с подключённым приёмом онлайн-платежей — продавайте продукцию с первого дня." },
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
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            Что входит во франшизу
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Пакет «под ключ» за 899 000 ₽
          </h2>
          <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full bg-primary/10 border border-primary/20 px-5 py-2 text-sm">
            <span className="text-muted-foreground">Ценность пакета:</span>
            <span className="font-display font-bold text-foreground line-through opacity-60">~1 800 000 ₽</span>
            <span className="text-muted-foreground">→ ваша цена:</span>
            <span className="font-display font-bold text-primary">899 000 ₽</span>
          </div>
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
