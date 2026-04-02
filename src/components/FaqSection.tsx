import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "А если хлорелла погибнет?", a: "Наша технология включает систему автоматического контроля параметров среды. В случае отклонений система оповестит вас и скорректирует условия. Кроме того, мы предоставляем гарантийный запас маточного раствора и круглосуточную техподдержку." },
  { q: "Кому продавать готовую продукцию?", a: "Основные каналы сбыта: фермерские хозяйства (биостимулятор), животноводческие предприятия (кормовая добавка), ЗОЖ-магазины и маркетплейсы (суперфуд), агрохолдинги. Мы помогаем выстроить все каналы." },
  { q: "Сложно ли обслуживать оборудование?", a: "Нет. Система автоматизирована на 90%. Ежедневное обслуживание занимает 1–2 часа. Мы обучаем вашу команду и предоставляем подробные регламенты на каждый процесс." },
  { q: "Какая площадь помещения нужна?", a: "Минимальная площадь — от 50 м² для стартового комплекта из 3 биореакторов. Оптимально — от 100 м² для 5–10 реакторов. Помещение может быть промышленным или даже подвальным при наличии вентиляции." },
  { q: "Нужны ли специальные разрешения?", a: "Для производства хлореллы как кормовой добавки и биостимулятора не требуется специальная лицензия. Для пищевого сегмента — потребуется сертификация, в чём мы полностью помогаем." },
];

const FaqSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            Вопросы и ответы
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Частые вопросы
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-card rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="font-display font-semibold text-left hover:no-underline text-foreground">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
