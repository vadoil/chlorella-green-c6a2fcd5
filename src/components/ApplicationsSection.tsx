import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Beef, Fish, Bug, Droplets, Egg, Sprout, TrendingUp } from "lucide-react";

const applications = [
  {
    icon: Beef,
    title: "Крупнорогатый скот",
    desc: "Укрепляет здоровье стада, повышает продуктивность.",
    benefits: ["Надои +15–25%", "Снижение заболеваемости на 40%", "Экономия на кормах до 20%"],
    image: "https://chlorella-green.ru/wp-content/uploads/2024/08/Screenshot_78-600x650.png",
  },
  {
    icon: Fish,
    title: "Рыбоводство",
    desc: "Ускоряет рост рыб, укрепляет иммунитет.",
    benefits: ["Рост массы +30%", "Выживаемость малька +50%", "Чистота воды без химии"],
    image: "https://chlorella-green.ru/wp-content/uploads/2024/08/i-13-e1724748040603-600x650.webp",
  },
  {
    icon: Bug,
    title: "Пчеловодство",
    desc: "Укрепляет иммунитет пчёл, улучшает качество мёда.",
    benefits: ["Активность пчёл +20%", "Качество мёда выше", "Снижение гибели в зимовку"],
    image: "https://chlorella-green.ru/wp-content/uploads/2024/08/vVgtEKgnem0-600x650.jpg",
  },
  {
    icon: Droplets,
    title: "Очистка водоёмов",
    desc: "Биоремедиация: поглощает токсины и тяжёлые металлы.",
    benefits: ["Снижение аммиака на 80%", "Кислород в воде +60%", "Без химических реагентов"],
    image: "https://chlorella-green.ru/wp-content/uploads/2024/08/suspenziya-hlorelly-dlya-rastenij-effektivnost-i-pravila-ispolzovaniya-8-600x650.jpg",
  },
  {
    icon: Egg,
    title: "Птицеводство",
    desc: "Стимулирует рост молодняка и улучшает яйценоскость.",
    benefits: ["Яйценоскость +18%", "Привес бройлеров +22%", "Крепче скорлупа"],
    image: "https://chlorella-green.ru/wp-content/uploads/2024/08/atg_news_800_96557-600x650.jpg",
  },
  {
    icon: Sprout,
    title: "Растениеводство",
    desc: "Обогащает почву, стимулирует здоровый рост растений.",
    benefits: ["Урожайность +25–40%", "Всхожесть семян +30%", "Восстановление почвы"],
    image: "https://chlorella-green.ru/wp-content/uploads/2024/08/i-14-scaled-e1724774758545-600x650.webp",
  },
];

const ApplicationsSection = () => {
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
            Области применения
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Сферы применения и выгода
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Каждая сфера — это готовый канал сбыта с измеримыми результатами для ваших клиентов
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, i) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover-lift"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <div className="w-10 h-10 rounded-lg gradient-emerald flex items-center justify-center">
                    <app.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{app.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{app.desc}</p>
                <div className="space-y-1.5">
                  {app.benefits.map((b) => (
                    <div key={b} className="flex items-center gap-2 text-sm">
                      <TrendingUp className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
