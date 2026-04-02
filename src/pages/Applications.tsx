import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, TrendingUp, CheckCircle2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { applications } from "@/components/ApplicationsTabsSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ApplicationForm = ({ sphere }: { sphere: string }) => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

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
      <h4 className="font-display font-semibold text-foreground">
        Получить консультацию по направлению «{sphere}»
      </h4>
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          required
          type="text"
          placeholder="Имя"
          maxLength={100}
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <input
          required
          type="tel"
          placeholder="Телефон"
          maxLength={20}
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>
      <input
        type="email"
        placeholder="Email (необязательно)"
        maxLength={255}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
      <textarea
        placeholder="Комментарий (необязательно)"
        maxLength={1000}
        rows={3}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
      />
      <Button type="submit" className="w-full gradient-emerald border-0 text-primary-foreground rounded-xl">
        Отправить заявку
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
};

const detailedInfo: Record<string, string[]> = {
  cattle: [
    "Хлорелла содержит более 60 биоактивных веществ, которые укрепляют иммунную систему КРС.",
    "Регулярная добавка суспензии в рацион снижает потребность в антибиотиках на 50–70%.",
    "Улучшается качество молока: повышается содержание белка и жирность.",
    "Телята, получающие хлореллу, набирают вес на 15–20% быстрее.",
  ],
  fish: [
    "Хлорелла — естественный корм для фитопланктона, который составляет основу пищевой цепи.",
    "Суспензия очищает воду от аммиака и нитритов, снижая необходимость в фильтрации.",
    "Мальки, выращенные на хлорелле, демонстрируют выживаемость на 50% выше.",
    "Рыба набирает товарную массу на 2–3 месяца быстрее.",
  ],
  bees: [
    "Хлорелла в сиропе укрепляет иммунитет пчёл, снижая заболеваемость нозематозом.",
    "Пчелиные семьи быстрее наращивают силу после зимовки.",
    "Мёд от пчёл, получающих хлореллу, содержит больше полезных ферментов.",
    "Снижается гибель маток и рабочих пчёл в неблагоприятных условиях.",
  ],
  water: [
    "Хлорелла поглощает тяжёлые металлы, фосфаты и нитраты из загрязнённой воды.",
    "Один литр суспензии способен очистить до 1000 литров воды.",
    "Биоремедиация не требует дорогостоящих химических реагентов.",
    "Насыщение воды кислородом восстанавливает естественную экосистему водоёма.",
  ],
  poultry: [
    "Добавка хлореллы повышает яйценоскость кур-несушек на 15–18%.",
    "Скорлупа становится толще и прочнее, снижая бой при транспортировке.",
    "Бройлеры достигают убойного веса на 7–10 дней раньше.",
    "Улучшается цвет желтка и вкусовые качества мяса птицы.",
  ],
  crops: [
    "Полив суспензией хлореллы стимулирует развитие корневой системы растений.",
    "Восстанавливается микрофлора истощённой почвы за 1–2 сезона.",
    "Всхожесть семян, обработанных хлореллой, возрастает на 25–30%.",
    "Урожайность зерновых и овощных культур повышается на 25–40%.",
  ],
};

const ApplicationCard = ({ app, index }: { app: typeof applications[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const details = detailedInfo[app.id] || [];

  return (
    <motion.div
      ref={ref}
      id={app.id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="rounded-2xl bg-card border border-border overflow-hidden scroll-mt-24"
    >
      <div className="grid md:grid-cols-2">
        <div className="relative h-64 md:h-auto overflow-hidden">
          <img src={app.image} alt={app.fullTitle} className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent md:bg-gradient-to-r" />
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
            <div className="w-12 h-12 rounded-xl gradient-emerald flex items-center justify-center">
              <app.icon className="h-6 w-6 text-primary-foreground" />
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-5">
          <h2 className="font-display text-2xl font-bold text-foreground">{app.fullTitle}</h2>
          <p className="text-muted-foreground leading-relaxed">{app.desc}</p>

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
            {expanded ? "Свернуть" : "Подробнее"}
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
          <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-display font-semibold text-lg text-foreground">Преимущества</h3>
              <ul className="space-y-3">
                {details.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>
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
        <div className="container mx-auto space-y-8">
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
