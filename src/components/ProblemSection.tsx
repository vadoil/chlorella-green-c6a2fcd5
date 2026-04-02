import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Leaf, TrendingUp } from "lucide-react";
import chlorellaImg from "@/assets/chlorella-closeup.jpg";

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    { icon: AlertTriangle, title: "Деградация почв", desc: "80% сельхозугодий требуют восстановления плодородия" },
    { icon: Leaf, title: "Нехватка кормов", desc: "Спрос на качественные биодобавки для скота растёт на 25% в год" },
    { icon: TrendingUp, title: "Запрос на эко-продукты", desc: "Рынок суперфудов достигнет $250 млрд к 2028 году" },
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
              Проблема и решение
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Хлорелла — универсальное решение для{" "}
              <span className="text-gradient-emerald">агросектора и пищепрома</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Микроводоросль хлорелла содержит более 650 биоактивных веществ.
              Используется как биостимулятор роста растений, кормовая добавка
              и суперфуд. Технология выращивания основана на управляемом
              фотосинтезе в закрытых биореакторах.
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
                alt="Хлорелла крупным планом"
                className="w-full h-auto rounded-2xl"
                loading="lazy"
                width={800}
                height={800}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-card rounded-xl p-4 max-w-[200px]">
              <div className="font-display text-2xl font-bold text-primary">650+</div>
              <div className="text-sm text-muted-foreground">биоактивных веществ</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
