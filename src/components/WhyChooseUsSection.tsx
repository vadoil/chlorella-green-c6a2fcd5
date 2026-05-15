import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const advantages = [
  { keyword: "ВЫСОКАЯ МАРЖА", desc: "Суспензия хлореллы — высокомаржинальный товар. Себестоимость литра в разы ниже отпускной цены, и спрос превышает предложение во многих регионах." },
  { keyword: "15 МИНУТ В ДЕНЬ", desc: "Реальные трудозатраты технолога — около 15 минут в день на контроль показателей. Остальное время оборудование работает само." },
  { keyword: "БЕЗ КВАЛИФИКАЦИИ", desc: "Не нужен биолог, химик или инженер. По нашей технологической документации производство освоит любой ответственный человек." },
  { keyword: "0,5 кВт·ч", desc: "Потребление электроэнергии — всего 0,5 кВт·ч. Можно подключить от обычной бытовой розетки, счета за свет вас не удивят." },
  { keyword: "20 м²", desc: "Производство помещается в комнате 20 м²: гараж, подсобка, часть склада. Не нужен большой цех или промышленная площадка." },
  { keyword: "60–90 Л/СУТКИ", desc: "Один биореактор даёт от 60 до 90 литров готовой суспензии в сутки при товарной плотности от 32 млн клеток на мл." },
];

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Преимущества бизнеса
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 uppercase">
            Почему это работает
          </h2>
        </motion.div>

        <div className="space-y-0">
          {advantages.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-8 border-b border-border group"
            >
              <span className="md:col-span-5 lg:col-span-4 font-display font-bold text-lg md:text-xl lg:text-2xl text-foreground group-hover:text-primary transition-colors leading-tight">
                {a.keyword}
              </span>
              <span className="md:col-span-7 lg:col-span-8 text-muted-foreground leading-relaxed">{a.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
