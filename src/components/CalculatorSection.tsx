import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calculator, TrendingUp, Clock } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const CalculatorSection = () => {
  const [reactors, setReactors] = useState(5);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Франшиза 899 000 ₽ включает первый биореактор; каждый доп. реактор +220 000 ₽
  const monthlyRevenue = reactors * 180000;
  const monthlyCosts = reactors * 35000 + 50000;
  const monthlyProfit = monthlyRevenue - monthlyCosts;
  const investment = 899000 + Math.max(0, reactors - 1) * 220000;
  // Честный расчёт окупаемости (без принудительного клэмпа снизу)
  const paybackMonths = Math.max(1, Math.ceil(investment / monthlyProfit));

  const formatNumber = (n: number) =>
    new Intl.NumberFormat("ru-RU").format(n);

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-emerald opacity-[0.03]" />
      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            Экономика проекта
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Рассчитайте свою прибыль
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12 glow-emerald"
        >
          <div className="mb-10">
            <div className="flex justify-between items-end mb-4">
              <label className="font-display font-semibold text-foreground text-lg">
                Количество биореакторов
              </label>
              <span className="font-display text-3xl font-bold text-primary">{reactors}</span>
            </div>
            <Slider
              value={[reactors]}
              onValueChange={(v) => setReactors(v[0])}
              min={1}
              max={20}
              step={1}
              className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_.relative>div]:bg-primary"
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>1 реактор</span>
              <span>20 реакторов</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                label: "Чистая прибыль / мес",
                value: `${formatNumber(monthlyProfit)} ₽`,
                highlight: true,
              },
              {
                icon: Clock,
                label: "Срок окупаемости",
                value: `${paybackMonths} мес`,
                highlight: false,
              },
              {
                icon: Calculator,
                label: "Начальные инвестиции",
                value: `${formatNumber(investment)} ₽`,
                highlight: false,
              },
            ].map((item) => (
              <div
                key={item.label}
                className={`rounded-xl p-6 text-center ${
                  item.highlight
                    ? "gradient-emerald text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                <item.icon className={`h-6 w-6 mx-auto mb-3 ${item.highlight ? "text-primary-foreground" : "text-primary"}`} />
                <div className="text-sm mb-2 opacity-80">{item.label}</div>
                <div className="font-display text-2xl font-bold">{item.value}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-6">
            Расчёт по средним показателям действующих партнёров. Фактические цифры зависят от региона, каналов сбыта и операционной эффективности.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <a
              href={`https://wa.me/79277022777?text=${encodeURIComponent(
                `Здравствуйте! Хочу обсудить расчёт: ${reactors} биореакторов, прибыль ${formatNumber(monthlyProfit)} ₽/мес, инвестиции ${formatNumber(investment)} ₽, окупаемость ${paybackMonths} мес.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl gradient-emerald text-primary-foreground font-semibold hover:scale-105 transition-transform"
            >
              Отправить расчёт в WhatsApp
            </a>
            <a
              href="tel:+79277022777"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-primary/40 text-primary font-semibold hover:bg-primary/10 transition-colors"
            >
              Позвонить эксперту
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CalculatorSection;
