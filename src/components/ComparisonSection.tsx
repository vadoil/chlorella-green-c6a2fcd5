import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { X, Check } from "lucide-react";

const withoutFranchise = [
  "12–24 месяца на R&D и подбор штаммов",
  "Риск загубить первые партии без опыта",
  "Самостоятельный поиск каналов сбыта",
  "Покупка оборудования по розничным ценам",
  "Сертификация с нуля: ТУ, ГОСТ, декларации",
  "Обучение методом проб и ошибок",
  "Маркетинг и сайт — ещё 500–800 тыс. ₽",
  "Никаких гарантий выхода на окупаемость",
];

const withFranchise = [
  "Запуск производства за 45–60 дней",
  "Готовые штаммы и отлаженная технология",
  "Передача базы B2B-клиентов на старте",
  "Оборудование по партнёрской цене −25%",
  "Все документы и сертификаты включены",
  "Очное обучение + куратор на 6 месяцев",
  "Готовый сайт, CRM, скрипты, реклама",
  "Сопровождение до первой прибыли",
];

const ComparisonSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            Почему франшиза
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Самостоятельно или с нами?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Один и тот же бизнес — два разных пути. Сравните риски и сроки.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-border bg-card p-8"
          >
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-semibold uppercase tracking-wider mb-3">
                Без франшизы
              </span>
              <h3 className="font-display text-2xl font-bold text-foreground">Запуск с нуля своими силами</h3>
              <p className="text-muted-foreground text-sm mt-2">Долго, дорого и с высоким риском</p>
            </div>
            <ul className="space-y-3">
              {withoutFranchise.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="h-3 w-3 text-destructive" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl border-2 border-primary bg-primary/5 p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-bl-2xl uppercase tracking-wider">
              Рекомендуем
            </div>
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                С нашей франшизой
              </span>
              <h3 className="font-display text-2xl font-bold text-foreground">Готовый бизнес «под ключ»</h3>
              <p className="text-muted-foreground text-sm mt-2">Быстрый старт, минимум рисков, прозрачный путь</p>
            </div>
            <ul className="space-y-3">
              {withFranchise.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full gradient-emerald flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <span className="text-sm text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
