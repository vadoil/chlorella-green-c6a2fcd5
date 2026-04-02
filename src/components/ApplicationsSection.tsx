import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Beef, Fish, Bug, Droplets, Egg, Sprout } from "lucide-react";

const applications = [
  {
    icon: Beef,
    title: "Крупнорогатый скот",
    desc: "Укрепляет здоровье стада, повышает продуктивность. Богата белками, витаминами и минералами для полноценного роста и развития животных.",
    image: "https://chlorella-green.ru/wp-content/uploads/2024/08/Screenshot_78-600x650.png",
  },
  {
    icon: Fish,
    title: "Рыбоводство",
    desc: "Ускоряет рост рыб, укрепляет иммунитет. Улучшает чистоту и прозрачность воды, снижает уровень токсинов и поддерживает кислородный баланс.",
    image: "https://chlorella-green.ru/wp-content/uploads/2024/08/i-13-e1724748040603-600x650.webp",
  },
  {
    icon: Bug,
    title: "Пчеловодство",
    desc: "Укрепляет иммунитет пчёл, увеличивает активность и улучшает качество мёда. Снижает заболеваемость в улье.",
    image: "https://chlorella-green.ru/wp-content/uploads/2024/08/vVgtEKgnem0-600x650.jpg",
  },
  {
    icon: Droplets,
    title: "Очистка водоёмов",
    desc: "Устраняет загрязнители, поглощает тяжёлые металлы, улучшает кислородный баланс. Экологичная биоремедиация водоёмов.",
    image: "https://chlorella-green.ru/wp-content/uploads/2024/08/suspenziya-hlorelly-dlya-rastenij-effektivnost-i-pravila-ispolzovaniya-8-600x650.jpg",
  },
  {
    icon: Egg,
    title: "Птицеводство",
    desc: "Укрепляет иммунную систему птиц, улучшает качество оперения и яиц, стимулирует рост молодняка.",
    image: "https://chlorella-green.ru/wp-content/uploads/2024/08/atg_news_800_96557-600x650.jpg",
  },
  {
    icon: Sprout,
    title: "Растениеводство",
    desc: "Обогащает почву питательными веществами, улучшает её структуру и водоудерживающую способность, стимулирует здоровый рост.",
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
            Сферы применения хлореллы
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Хлорелла — универсальная микроводоросль с широким спектром применения в сельском хозяйстве, экологии и пищевой промышленности
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
                <p className="text-sm text-muted-foreground leading-relaxed">{app.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
