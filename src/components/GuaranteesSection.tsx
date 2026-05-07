import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HeartHandshake, Megaphone, ShoppingBag, Globe, GraduationCap, Phone } from "lucide-react";

const guarantees = [
  {
    icon: GraduationCap,
    title: "Обучаем технологии с нуля",
    desc: "Не нужно быть биологом. Технолог проводит за руку через первые циклы — пока вы не получите стабильный результат своими руками.",
  },
  {
    icon: Phone,
    title: "Куратор на связи 7 дней в неделю",
    desc: "Личный куратор отвечает в WhatsApp в течение часа. Возникла проблема в 22:00 в субботу — разберём вместе, не оставим одного.",
  },
  {
    icon: Globe,
    title: "Делаем сайт под ваш регион",
    desc: "Современный продающий сайт с приёмом онлайн-платежей и SEO под ваш город. Запускаем, наполняем и обновляем — это уже включено в пакет.",
  },
  {
    icon: Megaphone,
    title: "Помогаем с рекламой и трафиком",
    desc: "Готовые рекламные креативы, шаблоны для соцсетей, настройка первых кампаний. Делимся тем, что уже работает у действующих франчайзи.",
  },
  {
    icon: ShoppingBag,
    title: "Заводим вас на маркетплейсы",
    desc: "Помогаем оформить карточки на Wildberries, Ozon и Я.Маркете — фото, описания, сертификаты. Без хождения по чатам поддержки в одиночку.",
  },
  {
    icon: HeartHandshake,
    title: "Передаём первых клиентов",
    desc: "Делимся базой заявок из вашего региона — рыбхозы, фермеры, садоводы, которые уже искали хлореллу. Стартуете не с нуля, а с тёплых контактов.",
  },
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
            Что мы делаем для вас
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Вы не остаётесь один на один с производством
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Франшиза — это не только оборудование и инструкция. Это команда, которая помогает вам зарабатывать.
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
            Каждый франчайзи — это наш проект. Ваш успех = наш успех. Поэтому мы рядом, а не «продали и забыли».
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteesSection;
