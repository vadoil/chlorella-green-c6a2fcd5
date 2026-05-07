import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import farmImage from "@/assets/chlorella-facility-wide.jpg";

const roiData = [
  {
    label: "Потенциальная маржа",
    value: "55%+",
    sub: "при стабильном производстве",
    details:
      "Выручка с 1 биореактора ~180 000 ₽/мес, прямые расходы (вода, питательная среда, электричество, упаковка) — около 35 000 ₽. На 3+ реакторах постоянные расходы размазываются, и маржа растёт до 60–70%.",
  },
  {
    label: "Срок окупаемости",
    value: "4–6 мес.",
    sub: "при работе на 3+ биореакторах",
    details:
      "Расчёт: инвестиции ~1 339 000 ₽ (франшиза 899 000 ₽ + 2 доп. реактора по 220 000 ₽) ÷ чистая прибыль ~295 000 ₽/мес = 4,5 мес. На 1 реакторе срок дольше (8–10 мес.) — но и вход дешевле.",
  },
  {
    label: "Себестоимость литра",
    value: "~15 ₽",
    sub: "при оптовых закупках сырья",
    details:
      "Литр живой хлореллы продаётся от 180 ₽ опт и до 350 ₽ розница. Себестоимость складывается из питательной среды (~6 ₽), электричества и воды (~5 ₽), упаковки и логистики (~4 ₽). Наценка x10–x20.",
  },
  {
    label: "Рост рынка",
    value: "~9%",
    sub: "CAGR до 2030 года",
    details:
      "По данным Mordor Intelligence и Grand View Research мировой рынок хлореллы растёт на 8–10% в год. В России спрос подогревают рыбоводство, БАДы, косметика и эко-фермерство — конкуренция в регионах минимальная.",
  },
];

const whyChlorella = [
  "Экологически чистый продукт — растущий мировой тренд",
  "Востребована в 6+ отраслях: от рыбоводства до косметики",
  "Минимальная конкуренция в большинстве регионов России",
  "Компактное производство — не нужен большой цех",
  "Быстрый цикл: от запуска до первой продажи — 2 недели",
  "Повторные продажи: клиенты закупают регулярно",
];

const InvestorRoiSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background image with dark emerald overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={farmImage}
          alt="Производство хлореллы — биореакторы"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(160_84%_6%)]/98 via-[hsl(160_75%_9%)]/96 to-[hsl(160_84%_7%)]/98" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(160_84%_4%)/0.7_100%)]" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-sm font-semibold text-primary-foreground/70 uppercase tracking-widest mb-4">
            Почему хлорелла
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 uppercase">
            Бизнес с реальной ценностью
          </h2>
          <p className="text-white/75 text-lg max-w-2xl mb-12">
            Хлорелла — не хайп, а востребованный продукт с растущим рынком и низким порогом входа.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 mb-12 rounded-xl overflow-hidden backdrop-blur-md">
          {roiData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="bg-white/5 backdrop-blur-md p-6 md:p-8 flex flex-col"
            >
              <div className="text-white/60 text-xs uppercase tracking-widest font-display mb-3 text-center">
                {item.label}
              </div>
              <div className="font-display font-bold text-3xl md:text-5xl text-white mb-2 text-center">
                {item.value}
              </div>
              <div className="text-white/60 text-xs text-center mb-4">{item.sub}</div>
              <div className="text-white/75 text-xs leading-relaxed border-t border-white/10 pt-4 mt-auto">
                {item.details}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-xl border border-white/15 bg-white/5 backdrop-blur-md p-8 md:p-10"
        >
          <div className="font-display font-bold text-sm uppercase tracking-widest text-white mb-6">
            Почему это выгодный бизнес
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {whyChlorella.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-primary-foreground bg-primary/80 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs mt-0.5 font-bold">✓</span>
                <span className="text-white/90 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorRoiSection;
