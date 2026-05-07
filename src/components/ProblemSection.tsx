import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingDown, Users, ShieldQuestion } from "lucide-react";
import chlorellaImg from "@/assets/chlorella-closeup.jpg";

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    {
      icon: TrendingDown,
      title: "Перенасыщенные ниши",
      desc: "Общепит, кофейни, барбершопы — высокая конкуренция, низкая маржа, постоянный демпинг.",
    },
    {
      icon: ShieldQuestion,
      title: "Франшизы без производства",
      desc: "Большинство франшиз — это перепродажа чужих товаров. Вы зависите от поставщика и его цен.",
    },
    {
      icon: Users,
      title: "Сложно начать в одиночку",
      desc: "Своё производство требует технологии, оборудования, поиска клиентов — годы проб и ошибок.",
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
              Для кого эта франшиза
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Для тех, кто хочет{" "}
              <span className="text-gradient-emerald">своё производство</span>, а не очередную «точку»
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Наши франчайзи — предприниматели 30–55 лет, инвесторы, фермеры
              и руководители, которые ищут реальный бизнес с понятной экономикой.
              Без сезонности, без зависимости от арендодателя и поставщика —
              вы производите продукт сами и продаёте его в свой регион.
            </p>
            <div className="space-y-5">
              {problems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg gradient-emerald flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glow-emerald">
              <img
                src={chlorellaImg}
                alt="Производство живой хлореллы"
                className="w-full h-auto rounded-2xl"
                loading="lazy"
                width={800}
                height={800}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-card rounded-xl p-4 max-w-[220px]">
              <div className="font-display text-xl font-bold text-primary">Своё производство</div>
              <div className="text-sm text-muted-foreground">с первого дня — а не точка продаж</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
