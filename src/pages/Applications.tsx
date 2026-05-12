import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, TrendingUp, CheckCircle2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { applications } from "@/components/ApplicationsTabsSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ApplicationForm = ({ sphere }: { sphere: string }) => {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  if (sent) {
    return (
      <div className="rounded-xl bg-primary/10 border border-primary/20 p-6 text-center">
        <CheckCircle2 className="h-8 w-8 text-primary mx-auto mb-3" />
        <p className="font-semibold text-foreground">Заявка отправлена!</p>
        <p className="text-sm text-muted-foreground mt-1">Мы свяжемся с вами в ближайшее время</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl bg-card border border-border p-6 space-y-4">
      <h4 className="font-display font-semibold text-foreground">Получить консультацию по направлению «{sphere}»</h4>
      <div className="grid sm:grid-cols-2 gap-4">
        <input required type="text" placeholder="Имя" maxLength={100} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
        <input required type="tel" placeholder="Телефон" maxLength={20} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
      </div>
      <input type="email" placeholder="Email (необязательно)" maxLength={255} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
      <textarea placeholder="Комментарий (необязательно)" maxLength={1000} rows={3} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
      <Button type="submit" className="w-full gradient-emerald border-0 text-primary-foreground rounded-xl">
        Отправить заявку <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
};

const detailedInfo: Record<string, { paragraphs: string[]; points: string[] }> = {
  cattle: {
    paragraphs: [
      "Хлорелла — это уникальная одноклеточная водоросль, которая содержит более 60 биоактивных веществ, необходимых для здоровья крупного рогатого скота. Её применение в кормлении КРС позволяет значительно повысить продуктивность стада и снизить затраты на ветеринарию.",
      "Суспензия хлореллы добавляется в питьевую воду или непосредственно в корм в дозировке 50–100 мл на голову в сутки. Уже через 2–3 недели наблюдается улучшение общего состояния животных: повышается аппетит, улучшается шерстный покров, возрастает двигательная активность.",
      "Особенно эффективна хлорелла для молодняка — телята, получающие добавку, набирают вес на 15–20% быстрее сверстников. Регулярное применение снижает потребность в антибиотиках на 50–70%, что положительно сказывается на качестве конечной продукции.",
    ],
    points: [
      "Надои молока увеличиваются на 15–25% за счёт улучшения метаболизма",
      "Снижение заболеваемости стада на 40% благодаря укреплению иммунитета",
      "Экономия на кормах до 20% за счёт лучшей усвояемости питательных веществ",
      "Повышение содержания белка и жирности молока",
      "Снижение расходов на ветпрепараты и антибиотики",
      "Ускорение набора массы молодняком на 15–20%",
    ],
  },
  fish: {
    paragraphs: [
      "Аквакультура — главный рынок сбыта суспензии хлореллы. Промышленные рыбоводческие хозяйства и владельцы частных прудов используют живую хлореллу для трёх ключевых задач: борьбы с токсичным цветением водоёмов, активации клёва на платных рыбалках и увеличения набора массы выращиваемой рыбы.",
      "Хлорелла подавляет развитие синезелёных водорослей, вызывающих токсичное цветение и массовый замор рыбы. Параллельно она формирует естественную кормовую базу — фито- и зоопланктон, благодаря которому товарная рыба набирает массу до 20% быстрее. На платных водоёмах внесение суспензии заметно повышает активность клёва и удерживает посетителей.",
      "Дозировка вносится напрямую в водоём по простой схеме. Эффект виден в течение 2–4 недель: вода становится прозрачнее, исчезает запах гнили, рыба активнее кормится и быстрее растёт. Это сезонный, но очень ёмкий и стабильный канал продаж в каждом регионе.",
    ],
    points: [
      "Борьба с токсичным цветением водоёмов без химии",
      "Активация клёва на платных водоёмах и рыбалках",
      "Прирост массы выращиваемой рыбы до +20%",
      "Естественная кормовая база — фито- и зоопланктон",
      "Снижение замора рыбы летом",
      "Сезонный спрос с весны по осень в каждом регионе",
    ],
  },
  bees: {
    paragraphs: [
      "Пчеловодство — одна из наиболее перспективных сфер применения хлореллы. Добавление суспензии в сахарный сироп для подкормки пчёл значительно укрепляет иммунитет семей, снижает заболеваемость нозематозом и варроатозом, повышает жизнеспособность маток.",
      "Хлорелла содержит полный спектр витаминов, аминокислот и микроэлементов, необходимых пчёлам в период активного медосбора и подготовки к зимовке. Пчелиные семьи, получающие подкормку с хлореллой, быстрее наращивают силу весной и демонстрируют более высокую лётную активность.",
      "Результаты полевых испытаний показывают, что мёд от пчёл, получавших хлореллу, содержит больше полезных ферментов и имеет улучшенные органолептические характеристики. Гибель пчёл в зимовку снижается на 30–35%.",
    ],
    points: [
      "Повышение активности пчелиных семей на 20% в сезон медосбора",
      "Улучшение качества мёда и повышение содержания ферментов",
      "Снижение гибели пчёл в зимовку на 30–35%",
      "Укрепление иммунитета против нозематоза и варроатоза",
      "Ускоренное наращивание силы семей после зимовки",
      "Повышение жизнеспособности и плодовитости маток",
    ],
  },
  water: {
    paragraphs: [
      "Биоремедиация водоёмов с помощью хлореллы — экологически чистый и экономически выгодный метод восстановления качества воды. Хлорелла активно поглощает тяжёлые металлы (свинец, кадмий, ртуть), фосфаты, нитраты и другие токсичные соединения.",
      "Технология применяется для очистки прудов, озёр, водохранилищ, а также сточных вод промышленных и сельскохозяйственных предприятий. Один литр концентрированной суспензии способен очистить до 1000 литров загрязнённой воды, что делает метод значительно дешевле химических аналогов.",
      "Помимо очистки, хлорелла насыщает воду кислородом, восстанавливая естественную экосистему водоёма. Это приводит к возвращению рыбы и другой водной фауны, улучшению рекреационных свойств территории.",
    ],
    points: [
      "Снижение содержания аммиака и нитратов на 80%",
      "Повышение уровня растворённого кислорода на 60%",
      "Полный отказ от химических реагентов при очистке",
      "Поглощение тяжёлых металлов: свинец, кадмий, ртуть",
      "Экономия до 70% по сравнению с химической очисткой",
      "Восстановление экосистемы водоёма за 1–2 сезона",
    ],
  },
  poultry: {
    paragraphs: [
      "В птицеводстве хлорелла применяется как натуральная кормовая добавка для кур-несушек, бройлеров, индеек и уток. Суспензия добавляется в поилки или смешивается с кормом, обеспечивая птицу полным комплексом витаминов, аминокислот и микроэлементов.",
      "У кур-несушек хлорелла стимулирует яйценоскость: количество яиц увеличивается на 15–18%, при этом скорлупа становится толще и прочнее, что снижает бой при транспортировке. Желток приобретает более насыщенный цвет благодаря высокому содержанию каротиноидов в хлорелле.",
      "Бройлеры, получающие хлореллу, достигают убойного веса на 7–10 дней раньше стандартных сроков. Привес увеличивается на 22%, при этом улучшаются вкусовые качества мяса. Снижается падёж молодняка и расход антибиотиков.",
    ],
    points: [
      "Яйценоскость кур-несушек увеличивается на 15–18%",
      "Привес бройлеров повышается на 22% при тех же объёмах корма",
      "Укрепление скорлупы — снижение боя при транспортировке",
      "Насыщенный цвет желтка благодаря каротиноидам",
      "Достижение убойного веса на 7–10 дней раньше",
      "Снижение падёжа молодняка и расхода антибиотиков",
    ],
  },
  crops: {
    paragraphs: [
      "Садоводы-частники — массовый розничный канал сбыта. Суспензия хлореллы используется на участках в качестве натурального биоудобрения: для замачивания семян, полива рассады, корневых и внекорневых подкормок овощей, ягод, плодовых деревьев и комнатных растений.",
      "Хлорелла содержит фитогормоны, аминокислоты и микроэлементы, которые стимулируют рост корневой системы и повышают всхожесть семян на 25–30%. Растения становятся устойчивее к стрессам и болезням, урожайность овощных и ягодных культур растёт на 25–40% без применения химии.",
      "Это огромный рынок: дачники и владельцы ЛПХ покупают биоудобрение каждый сезон, а часто — несколько раз за лето. Продажи идут через интернет-магазин (входит в франшизу), садовые ярмарки, садовые центры и сообщества дачников в соцсетях.",
    ],
    points: [
      "Натуральное биоудобрение для огорода и сада",
      "Всхожесть семян выше на 25–30% при замачивании",
      "Урожайность овощей и ягод выше на 25–40%",
      "Здоровая рассада с мощной корневой системой",
      "Полная замена химических удобрений",
      "Массовый розничный спрос — миллионы дачников по РФ",
    ],
  },
};

const ApplicationCard = ({ app, index }: { app: typeof applications[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const details = detailedInfo[app.id];
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      id={app.id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="rounded-2xl bg-card border border-border overflow-hidden scroll-mt-24"
    >
      <div className={`grid md:grid-cols-2 ${!isEven ? "md:[direction:rtl]" : ""}`}>
        <div className="relative h-72 md:h-auto md:min-h-[400px] overflow-hidden md:[direction:ltr]">
          <img src={app.image} alt={app.fullTitle} className="w-full h-full object-cover" loading="lazy" />
          <div className={`absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent ${isEven ? "md:bg-gradient-to-r" : "md:bg-gradient-to-l"}`} />
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
            <div className="w-14 h-14 rounded-xl gradient-emerald flex items-center justify-center shadow-lg">
              <app.icon className="h-7 w-7 text-primary-foreground" />
            </div>
          </div>
        </div>

        <div className="p-6 md:p-10 space-y-5 md:[direction:ltr]">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{app.fullTitle}</h2>
          <p className="text-muted-foreground leading-relaxed text-base">{details.paragraphs[0]}</p>
          <p className="text-muted-foreground leading-relaxed text-sm">{details.paragraphs[1]}</p>

          <div className="grid grid-cols-3 gap-3">
            {app.benefits.map((b) => (
              <div key={b} className="rounded-xl bg-primary/10 border border-primary/20 p-3 text-center">
                <TrendingUp className="h-4 w-4 text-primary mx-auto mb-1" />
                <span className="text-xs font-semibold text-foreground">{b}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-primary font-medium text-sm hover:underline"
          >
            {expanded ? "Свернуть" : "Подробнее и заявка"}
            <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>

      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-border"
        >
          <div className="p-6 md:p-10 grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-3">Как это работает</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{details.paragraphs[2]}</p>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-3">Ключевые результаты</h3>
                <ul className="space-y-3">
                  {details.points.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <ApplicationForm sphere={app.fullTitle} />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const ApplicationsPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Сферы применения хлореллы — АПК, рыбоводство, БАД"
        description="Где применяется живая хлорелла: животноводство, птицеводство, рыбоводство, растениеводство, БАД и пищепром. Конкретные результаты и эффект для каждой отрасли."
        path="/applications"
        keywords="применение хлореллы, хлорелла для коров, хлорелла для рыб, хлорелла для птиц, хлорелла для растений, биоудобрение хлорелла"
      />
      <Navbar />
      <section className="pt-28 pb-12 section-padding">
        <div className="container mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            Области применения
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Сферы применения хлореллы
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Подробное описание каждого направления с конкретными цифрами и возможностью оставить заявку
          </p>
        </div>
      </section>

      <section className="pb-20 section-padding">
        <div className="container mx-auto space-y-10">
          {applications.map((app, i) => (
            <ApplicationCard key={app.id} app={app} index={i} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ApplicationsPage;
