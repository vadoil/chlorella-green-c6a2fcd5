import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Beef, Fish, Bug, Droplets, Egg, Sprout, TrendingUp, ArrowRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const applications = [
  {
    id: "fish",
    icon: Fish,
    title: "Аквакультура",
    fullTitle: "Аквакультура: рыбхозы и пруды",
    desc: "Главный рынок сбыта. Промышленные и частные пруды по разведению рыбы используют суспензию хлореллы для борьбы с токсичным цветением водоёмов, активации клёва на платных рыбалках и увеличения набора массы рыбы до 20%.",
    benefits: ["Прирост массы рыбы до +20%", "Активация клёва", "Без токсичного цветения"],
    image: "https://chlorella-green.ru/wp-content/uploads/2024/08/i-13-e1724748040603-600x650.webp",
  },
  {
    id: "crops",
    icon: Sprout,
    title: "Садоводы",
    fullTitle: "Садоводы-частники",
    desc: "Массовый розничный рынок. Суспензия хлореллы используется как биоудобрение: повышает всхожесть семян, ускоряет рост рассады, увеличивает урожайность овощных и плодовых культур без применения химии.",
    benefits: ["Биоудобрение для огорода", "Урожайность +25–40%", "Всхожесть семян +30%"],
    image: "https://chlorella-green.ru/wp-content/uploads/2024/08/i-14-scaled-e1724774758545-600x650.webp",
  },
  {
    id: "cattle",
    icon: Beef,
    title: "КРС",
    fullTitle: "Крупнорогатый скот",
    desc: "Хлорелла укрепляет здоровье стада, повышает иммунитет и продуктивность. Добавка в рацион снижает расходы на ветеринарию и корма.",
    benefits: ["Надои +15–25%", "Заболеваемость −40%", "Экономия на кормах до 20%"],
    image: "https://chlorella-green.ru/wp-content/uploads/2024/08/Screenshot_78-600x650.png",
  },
  {
    id: "bees",
    icon: Bug,
    title: "Пчеловодство",
    fullTitle: "Пчеловодство",
    desc: "Укрепляет иммунитет пчёл, повышает активность семьи и улучшает качество мёда. Снижает гибель в зимовку.",
    benefits: ["Активность пчёл +20%", "Качество мёда выше", "Гибель в зимовку −35%"],
    image: "https://chlorella-green.ru/wp-content/uploads/2024/08/vVgtEKgnem0-600x650.jpg",
  },
  {
    id: "water",
    icon: Droplets,
    title: "Очистка воды",
    fullTitle: "Очистка водоёмов",
    desc: "Биоремедиация: хлорелла поглощает токсины, тяжёлые металлы и насыщает воду кислородом без химических реагентов.",
    benefits: ["Аммиак −80%", "Кислород в воде +60%", "Без химреагентов"],
    image: "https://chlorella-green.ru/wp-content/uploads/2024/08/suspenziya-hlorelly-dlya-rastenij-effektivnost-i-pravila-ispolzovaniya-8-600x650.jpg",
  },
  {
    id: "poultry",
    icon: Egg,
    title: "Птицеводство",
    fullTitle: "Птицеводство",
    desc: "Стимулирует рост молодняка, улучшает яйценоскость и укрепляет скорлупу. Повышает привес бройлеров.",
    benefits: ["Яйценоскость +18%", "Привес бройлеров +22%", "Крепче скорлупа"],
    image: "https://chlorella-green.ru/wp-content/uploads/2024/08/atg_news_800_96557-600x650.jpg",
  },
];

export { applications };

const ApplicationsTabsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            Рынки сбыта
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Кому продавать суспензию хлореллы
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Два основных рынка — аквакультура и садоводы-частники. Плюс растущий спрос в животноводстве и экологии.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="fish" className="w-full">
            <TabsList className="w-full flex flex-wrap h-auto gap-1 bg-muted/50 p-1.5 rounded-xl mb-8">
              {applications.map((app) => (
                <TabsTrigger
                  key={app.id}
                  value={app.id}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm font-medium flex-1 min-w-[120px]"
                >
                  <app.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{app.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {applications.map((app) => (
              <TabsContent key={app.id} value={app.id}>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                    <img
                      src={app.image}
                      alt={app.fullTitle}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl gradient-emerald flex items-center justify-center">
                        <app.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-foreground">
                        {app.fullTitle}
                      </h3>
                    </div>

                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {app.desc}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {app.benefits.map((b) => (
                        <div
                          key={b}
                          className="rounded-xl bg-primary/10 border border-primary/20 p-4 text-center"
                        >
                          <TrendingUp className="h-5 w-5 text-primary mx-auto mb-2" />
                          <span className="text-sm font-semibold text-foreground">{b}</span>
                        </div>
                      ))}
                    </div>

                    <Link to={`/applications#${app.id}`}>
                      <Button className="gradient-emerald border-0 text-primary-foreground rounded-xl mt-2">
                        Подробнее
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationsTabsSection;
