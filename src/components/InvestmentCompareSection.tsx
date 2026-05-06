import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const rows = [
  { label: "Доходность годовая", deposit: "16–20%", realestate: "8–12%", stocks: "10–25%", chlorella: "120–180%", best: "chlorella" },
  { label: "Срок окупаемости", deposit: "5+ лет", realestate: "12–18 лет", stocks: "5–10 лет", chlorella: "8–12 мес", best: "chlorella" },
  { label: "Контроль над активом", deposit: "Низкий", realestate: "Средний", stocks: "Низкий", chlorella: "Полный", best: "chlorella" },
  { label: "Инфляционная защита", deposit: "Нет", realestate: "Да", stocks: "Частично", chlorella: "Да", best: "chlorella" },
  { label: "Порог входа", deposit: "от 100 тыс.", realestate: "от 8 млн", stocks: "от 50 тыс.", chlorella: "от 1.5 млн", best: "deposit" },
  { label: "Ликвидность бизнеса", deposit: "—", realestate: "Высокая", stocks: "Высокая", chlorella: "Средняя", best: "realestate" },
];

const headers = [
  { key: "deposit", label: "Депозит" },
  { key: "realestate", label: "Недвижимость" },
  { key: "stocks", label: "Акции" },
  { key: "chlorella", label: "Хлорелла", primary: true },
];

const InvestmentCompareSection = () => {
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
            Сравнение инвестиций
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Куда выгоднее вложить 2 млн ₽?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Объективное сравнение хлореллы с классическими инструментами инвестирования
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-border overflow-hidden bg-card"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-border bg-secondary/50">
                  <th className="text-left p-4 font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider">Параметр</th>
                  {headers.map((h) => (
                    <th
                      key={h.key}
                      className={`text-center p-4 font-display text-sm font-bold uppercase tracking-wider ${
                        h.primary ? "bg-primary/10 text-primary" : "text-foreground"
                      }`}
                    >
                      {h.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.label} className={`border-b border-border last:border-0 ${i % 2 === 1 ? "bg-secondary/20" : ""}`}>
                    <td className="p-4 font-medium text-sm text-foreground">{row.label}</td>
                    {headers.map((h) => {
                      const value = row[h.key as keyof typeof row];
                      const isBest = row.best === h.key;
                      return (
                        <td
                          key={h.key}
                          className={`text-center p-4 text-sm ${
                            h.primary ? "bg-primary/5 font-bold text-primary" : "text-muted-foreground"
                          } ${isBest && !h.primary ? "font-semibold text-foreground" : ""}`}
                        >
                          {value}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-xs text-muted-foreground mt-6"
        >
          Данные приведены для сравнения. Доходность франшизы рассчитана на основе показателей действующих партнёров.
        </motion.p>
      </div>
    </section>
  );
};

export default InvestmentCompareSection;
