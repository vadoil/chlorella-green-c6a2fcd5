import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Target, Wallet, ArrowRight, ArrowLeft, CheckCircle2, Calculator } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

type Step = {
  title: string;
  subtitle: string;
  icon: typeof MapPin;
  options: { label: string; value: string }[];
};

const steps: Step[] = [
  {
    title: "Ваш регион",
    subtitle: "Где планируете запуск?",
    icon: MapPin,
    options: [
      { label: "Москва / МО", value: "moscow" },
      { label: "Санкт-Петербург / ЛО", value: "spb" },
      { label: "Поволжье", value: "volga" },
      { label: "Юг России", value: "south" },
      { label: "Урал / Сибирь", value: "ural" },
      { label: "Другой регион", value: "other" },
    ],
  },
  {
    title: "Направление бизнеса",
    subtitle: "Какой рынок вам интересен?",
    icon: Target,
    options: [
      { label: "Животноводство", value: "livestock" },
      { label: "Растениеводство", value: "crops" },
      { label: "Очистка водоёмов", value: "water" },
      { label: "Пищевая продукция", value: "food" },
      { label: "Несколько направлений", value: "multi" },
    ],
  },
  {
    title: "Бюджет на старт",
    subtitle: "Какую сумму готовы инвестировать?",
    icon: Wallet,
    options: [
      { label: "До 1 млн ₽", value: "under2" },
      { label: "1–2 млн ₽", value: "2to3" },
      { label: "2–3,5 млн ₽", value: "3to5" },
      { label: "Более 3,5 млн ₽", value: "over5" },
    ],
  },
];

const resultData: Record<string, { revenue: string; payback: string; margin: string }> = {
  "under2": { revenue: "350–500 тыс. ₽/мес", payback: "4–6 мес", margin: "45–55%" },
  "2to3": { revenue: "500–900 тыс. ₽/мес", payback: "4–5 мес", margin: "50–60%" },
  "3to5": { revenue: "900 тыс. – 1,5 млн ₽/мес", payback: "3–4 мес", margin: "55–65%" },
  "over5": { revenue: "1,5–3 млн ₽/мес", payback: "3–4 мес", margin: "60–70%" },
};

const QuizSection = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const selectOption = (value: string) => {
    const updated = [...answers];
    updated[step] = value;
    setAnswers(updated);
  };

  const next = () => {
    if (step < steps.length - 1) setStep(step + 1);
    else setShowResult(true);
  };

  const prev = () => {
    if (showResult) setShowResult(false);
    else if (step > 0) setStep(step - 1);
  };

  const result = resultData[answers[2]] || resultData["2to3"];

  const regionLabel = steps[0].options.find(o => o.value === answers[0])?.label || "—";
  const directionLabel = steps[1].options.find(o => o.value === answers[1])?.label || "—";

  const handleSubmit = async () => {
    if (!name.trim() || !phone.trim()) return;
    setLoading(true);
    const { error } = await supabase.from("leads").insert({
      name: name.trim(),
      phone: phone.trim(),
      source: "quiz",
      quiz_region: answers[0] || null,
      quiz_direction: answers[1] || null,
      quiz_budget: answers[2] || null,
      quiz_result: result,
    });
    setLoading(false);
    if (error) {
      toast.error("Ошибка отправки. Попробуйте позже.");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="w-16 h-16 rounded-full gradient-emerald flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
          </div>
          <h3 className="text-2xl font-display font-bold text-foreground mb-3">Заявка отправлена!</h3>
          <p className="text-muted-foreground">
            Мы подготовим персональный бизнес-план для запуска в регионе «{regionLabel}» и свяжемся с вами в течение 24 часов.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Calculator className="h-4 w-4" />
            Квиз — 3 вопроса
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            Рассчитайте стоимость запуска
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ответьте на 3 вопроса и получите персональный расчёт окупаемости франшизы в вашем регионе
          </p>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-2 mb-8 max-w-md mx-auto">
          {steps.map((_, i) => (
            <div key={i} className="flex-1 h-2 rounded-full overflow-hidden bg-border">
              <div
                className="h-full gradient-emerald transition-all duration-500"
                style={{ width: i < step ? "100%" : i === step && !showResult ? "50%" : showResult ? "100%" : "0%" }}
              />
            </div>
          ))}
        </div>

        {!showResult ? (
          <div className="bg-card rounded-2xl border border-border p-6 md:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              {(() => {
                const Icon = steps[step].icon;
                return (
                  <div className="w-10 h-10 rounded-xl gradient-emerald flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                );
              })()}
              <div>
                <p className="text-xs text-muted-foreground font-medium">Шаг {step + 1} из {steps.length}</p>
                <h3 className="text-lg font-display font-bold text-foreground">{steps[step].title}</h3>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">{steps[step].subtitle}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {steps[step].options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => selectOption(opt.value)}
                  className={`text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 font-medium text-sm ${
                    answers[step] === opt.value
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border bg-background text-foreground hover:border-primary/40"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div className="flex justify-between">
              <Button variant="ghost" onClick={prev} disabled={step === 0} className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Назад
              </Button>
              <Button onClick={next} disabled={!answers[step]} className="gradient-emerald border-0 text-primary-foreground gap-2">
                {step === steps.length - 1 ? "Показать результат" : "Далее"} <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="bg-card rounded-2xl border border-border p-6 md:p-10 shadow-sm">
            <h3 className="text-xl font-display font-bold text-foreground mb-2">Ваш персональный расчёт</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Регион: <span className="font-medium text-foreground">{regionLabel}</span> · Направление: <span className="font-medium text-foreground">{directionLabel}</span>
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: "Выручка", value: result.revenue },
                { label: "Окупаемость", value: result.payback },
                { label: "Маржа", value: result.margin },
              ].map((item) => (
                <div key={item.label} className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-lg font-bold text-primary">{item.value}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground mb-4">Оставьте контакт — отправим подробный бизнес-план:</p>
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div className="flex justify-between">
              <Button variant="ghost" onClick={prev} className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Назад
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={!name.trim() || !phone.trim() || loading}
                className="gradient-emerald border-0 text-primary-foreground gap-2"
              >
                {loading ? "Отправка..." : "Получить бизнес-план"} <CheckCircle2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuizSection;
