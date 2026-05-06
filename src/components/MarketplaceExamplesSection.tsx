import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, ShoppingBag } from "lucide-react";
import mp1 from "@/assets/marketplace/mp-1.png";
import mp2 from "@/assets/marketplace/mp-2.png";
import mp3 from "@/assets/marketplace/mp-3.png";
import mp4 from "@/assets/marketplace/mp-4.png";
import mp5 from "@/assets/marketplace/mp-5.png";
import mp6 from "@/assets/marketplace/mp-6.png";
import mp7 from "@/assets/marketplace/mp-7.png";
import mp8 from "@/assets/marketplace/mp-8.png";

const products = [
  { img: mp1, title: "А-Хлорелла 20 л", subtitle: "Для очистки прудов и водоёмов", price: "6 084 ₽", badge: "Хит продаж" },
  { img: mp2, title: "А-Хлорелла 5 л", subtitle: "Раннее применение для прудов", price: "2 416 ₽", badge: "Бестселлер" },
  { img: mp3, title: "Концентрат 1 л", subtitle: "Для непрогретой воды (апрель–май)", price: "1 120 ₽", badge: "Новинка" },
  { img: mp4, title: "Концентрат 5 л", subtitle: "Биологическая очистка водоёмов", price: "2 792 ₽", badge: "Сезон" },
  { img: mp5, title: "Хлорелла «БиоПруд» 5 л", subtitle: "Биофильтр 60 млн клеток", price: "1 836 ₽", badge: "Топ" },
  { img: mp6, title: "Концентрат 10 л", subtitle: "Для биологической очистки", price: "4 687 ₽", badge: "Выгодно" },
  { img: mp7, title: "АльгоТек Аква 20 л", subtitle: "Очистка от цветения", price: "11 539 ₽", badge: "−69%" },
  { img: mp8, title: "Аквариус 20 л", subtitle: "До 70 млн клеток на мл", price: "5 348 ₽", badge: "−60%" },
];

const MarketplaceExamplesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            <ShoppingBag className="h-4 w-4" />
            Маркетплейсы
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Примеры продаж на маркетплейсах
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Реальные товары конкурентов на Wildberries и Ozon — рынок уже сформирован, спрос стабильный
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl bg-card border border-border overflow-hidden hover-lift"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-md">
                  {p.badge}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-display font-semibold text-base text-foreground line-clamp-1">{p.title}</h3>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2 min-h-[2rem]">{p.subtitle}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-display text-lg font-bold text-primary">{p.price}</span>
                  <TrendingUp className="h-4 w-4 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-xs text-muted-foreground mt-8 max-w-2xl mx-auto"
        >
          Изображения товаров с открытых маркетплейсов приведены для иллюстрации сегмента и спроса.
        </motion.p>
      </div>
    </section>
  );
};

export default MarketplaceExamplesSection;
