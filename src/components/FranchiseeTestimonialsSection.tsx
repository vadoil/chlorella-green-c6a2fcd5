import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Андрей К.",
    city: "Краснодар",
    role: "Франчайзи с 2025 года",
    invest: "899 тыс. ₽",
    revenue: "1.2 млн ₽/мес",
    payback: "5 месяцев",
    quote: "Вышел из найма в 45 лет. За первые полгода окупил 70% вложений. Главное — клиентов передали готовых, не пришлось искать с нуля.",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=600&h=650&fit=crop",
  },
  {
    name: "Елена М.",
    city: "Новосибирск",
    role: "Франчайзи с 2025 года",
    invest: "1.5 млн ₽",
    revenue: "1.8 млн ₽/мес",
    payback: "6 месяцев",
    quote: "Боялась, что не разберусь в биотехнологии. Куратор провёл за руку. Сейчас у меня 2 биореактора и поставки в 4 региона.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=650&fit=crop",
  },
  {
    name: "Дмитрий С.",
    city: "Екатеринбург",
    role: "Франчайзи с 2026 года",
    invest: "899 тыс. ₽",
    revenue: "950 тыс. ₽/мес",
    payback: "4 месяца",
    quote: "Запустился за 52 дня. Первая отгрузка — рыбхоз из базы франшизы. Дальше — сарафанное радио. Очередь на полгода вперёд.",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&h=650&fit=crop",
  },
];

const FranchiseeTestimonialsSection = () => {
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
            Истории франчайзи
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Реальные люди. Реальные цифры.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Не отзывы «для сайта». Можем дать прямой контакт любого франчайзи для разговора.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl bg-card border border-border overflow-hidden hover-lift flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="font-display font-bold text-lg text-white">{t.name}</div>
                  <div className="text-sm text-white/80">{t.city} · {t.role}</div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <Quote className="h-6 w-6 text-primary mb-3" />
                <p className="text-sm text-muted-foreground leading-relaxed italic mb-4 flex-1">«{t.quote}»</p>
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Вложил</div>
                    <div className="font-display font-bold text-sm text-foreground">{t.invest}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Выручка</div>
                    <div className="font-display font-bold text-sm text-primary">{t.revenue}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Окуп.</div>
                    <div className="font-display font-bold text-sm text-foreground">{t.payback}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FranchiseeTestimonialsSection;
