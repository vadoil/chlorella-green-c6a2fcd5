import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award } from "lucide-react";

const team = [
  {
    name: "Алексей",
    role: "Основатель и CEO",
    bio: "12 лет в биотехнологиях. Запустил производство в Саратове в 2013 году, вывел компанию в лидеры российского рынка живой хлореллы.",
    awards: ["Премия «Бизнес года» 2023", "Член Союза биотехнологов РФ"],
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=700&fit=crop",
  },
  {
    name: "Мария",
    role: "Главный технолог",
    bio: "Кандидат биологических наук. Разработала уникальную питательную среду, сократившую цикл культивирования на 30%.",
    awards: ["К.б.н., специалист по микроводорослям", "10+ научных публикаций"],
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=700&fit=crop",
  },
  {
    name: "Игорь",
    role: "Куратор франчайзи",
    bio: "Сопровождает партнёров от подписания договора до выхода на проектную мощность. Лично запустил 20+ точек по России.",
    awards: ["Сопровождает 20+ партнёров", "На связи 7 дней в неделю"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop",
  },
];

const TeamSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            Команда франшизы
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Кто стоит за проектом
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Не агентство и не маркетологи. Действующее производство и технологи, которые сами запускали каждую точку.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl bg-card border border-border overflow-hidden hover-lift flex flex-col"
            >
              <div className="relative h-72 overflow-hidden">
                <img src={m.image} alt={m.role} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="font-display font-bold text-xl text-white">{m.name}</div>
                  <div className="text-sm text-white/80">{m.role}</div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{m.bio}</p>
                <div className="space-y-2 pt-4 border-t border-border">
                  {m.awards.map((a) => (
                    <div key={a} className="flex items-start gap-2">
                      <Award className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-xs text-foreground">{a}</span>
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

export default TeamSection;
