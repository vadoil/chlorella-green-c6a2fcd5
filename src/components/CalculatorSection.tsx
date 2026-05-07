import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calculator, TrendingUp, Clock } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const INVESTMENT = 899_000;
// Консервативный сценарий — окупаемость 6 мес
const MONTHLY_PROFIT_CONSERVATIVE = Math.round(INVESTMENT / 6); // ≈ 149 833
// Оптимистичный сценарий — окупаемость 4 мес
const MONTHLY_PROFIT_OPTIMISTIC = Math.round(INVESTMENT / 4); // ≈ 224 750

const CalculatorSection = () => {
  const [months, setMonths] = useState(12);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const profitConservative = MONTHLY_PROFIT_CONSERVATIVE * months - INVESTMENT;
  const profitOptimistic = MONTHLY_PROFIT_OPTIMISTIC * months - INVESTMENT;
  const paybackConservative = 6;

  const formatNumber = (n: number) => new Intl.NumberFormat("ru-RU").format(n);
  const formatMoney = (n: number) => `${formatNumber(n)} ₽`;

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-emerald opacity-[0.03]" />
      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            Экономика проекта
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Рассчитайте свою прибыль
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Двигайте ползунок — узнайте, сколько вы заработаете за выбранный срок после вычета франшизы 899 000 ₽
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto glass-card rounded-2xl p-6 sm:p-8 md:p-12 glow-emerald"
        >
          <div className="mb-10">
            <div className="flex flex-wrap justify-between items-end gap-2 mb-4">
              <label className="font-display font-semibold text-foreground text-base sm:text-lg">
                Срок работы производства
              </label>
              <span className="font-display text-2xl sm:text-3xl font-bold text-primary">
                {months} мес
              </span>
            </div>
            <Slider
              value={[months]}
              onValueChange={(v) => setMonths(v[0])}
              min={6}
              max={60}
              step={6}
              className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_.relative>div]:bg-primary"
            />
            <div className="flex justify-between text-xs sm:text-sm text-muted-foreground mt-2">
              <span>6 мес</span>
              <span>5 лет</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="rounded-xl p-5 sm:p-6 text-center gradient-emerald text-primary-foreground sm:col-span-2">
              <TrendingUp className="h-6 w-6 mx-auto mb-3 text-primary-foreground" />
              <div className="text-xs sm:text-sm mb-2 opacity-80">
                Чистая прибыль за {months} мес <span className="opacity-70">(минус франшиза)</span>
              </div>
              <div className="font-display text-2xl sm:text-4xl font-bold leading-tight">
                {formatMoney(Math.max(0, profitConservative))}
              </div>
              <div className="text-xs sm:text-sm mt-2 opacity-80">
                при оптимистичном сценарии:{" "}
                <span className="font-semibold text-emerald-glow">
                  {formatMoney(Math.max(0, profitOptimistic))}
                </span>
              </div>
            </div>

            <div className="rounded-xl p-5 sm:p-6 text-center bg-muted">
              <Clock className="h-6 w-6 mx-auto mb-3 text-primary" />
              <div className="text-xs sm:text-sm mb-2 text-muted-foreground">
                Срок окупаемости
              </div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                4–6 мес
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                Инвестиции: {formatMoney(INVESTMENT)}
              </div>
            </div>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-6">
            Базовый расчёт: окупаемость 6 мес (~{formatMoney(MONTHLY_PROFIT_CONSERVATIVE)}/мес).
            Оптимистичный: окупаемость 4 мес (~{formatMoney(MONTHLY_PROFIT_OPTIMISTIC)}/мес).
            Фактические цифры зависят от региона, каналов сбыта и операционной эффективности.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <a
              href={`https://wa.me/79277022777?text=${encodeURIComponent(
                `Здравствуйте! Рассчитал на сайте: за ${months} мес чистая прибыль от ${formatMoney(Math.max(0, profitConservative))} до ${formatMoney(Math.max(0, profitOptimistic))} (после франшизы 899 000 ₽). Хочу обсудить.`
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
