import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Package, FlaskConical, GraduationCap, Users, FileCheck, Globe, Megaphone, HeadphonesIcon } from "lucide-react";

const items = [
  { icon: Package, title: "Полный комплект оборудования", desc: "Биореакторы, аэрация, освещение, насосы, тара — всё доставлено и смонтировано." },
  { icon: FlaskConical, title: "Маточные культуры штаммов", desc: "Отобранные штаммы хлореллы с протоколом культивирования и паспортом качества." },
  { icon: GraduationCap, title: "Очное обучение 5 дней", desc: "Технология производства, контроль качества, упаковка — на действующей ферме." },
  { icon: FileCheck, title: "Пакет документов", desc: "ТУ, декларация соответствия, инструкции, журналы, шаблоны договоров с клиентами." },
  { icon: Globe, title: "Готовый сайт и CRM", desc: "Лендинг под ваш регион, настроенная CRM, телефония и Telegram-бот для заявок." },
  { icon: Megaphone, title: "Маркетинг-кит", desc: "Реклама в Яндекс.Директ, креативы, скрипты продаж, презентации для B2B-клиентов." },
  { icon: Users, title: "База B2B-клиентов", desc: "Контакты агрохолдингов, рыбхозов и производителей БАД в вашем регионе." },
  { icon: HeadphonesIcon, title: "Куратор на 6 месяцев", desc: "Личный наставник, чат поддержки 24/7, еженедельные созвоны до первой прибыли." },
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
            8 ключевых компонентов готового бизнеса — никаких «доплат за дополнительные модули»
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
