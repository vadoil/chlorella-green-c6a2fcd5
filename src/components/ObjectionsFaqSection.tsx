import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const objections = [
  {
    q: "А если у меня не получится? Я никогда не занимался производством.",
    a: "Технология рассчитана на людей без опыта в биотехнологиях. Очное обучение 5 дней + куратор на 6 месяцев + чат поддержки 24/7. Процессы настолько отлажены, что справится человек без профильного образования. А если всё равно не получится — мы выкупаем оборудование обратно по 70% стоимости.",
  },
  {
    q: "А вдруг не будет спроса в моём регионе?",
    a: "Перед подписанием договора мы проводим бесплатный анализ вашего региона: оцениваем спрос, конкурентов, потенциальных клиентов. Если рынок неперспективен — честно скажем и не возьмём в работу. Дополнительно передаём готовую базу B2B-контактов: рыбхозы, агрохолдинги, производители БАД именно вашего региона.",
  },
  {
    q: "Сколько реально часов в день нужно работать?",
    a: "После выхода на стабильный режим — 2–3 часа в день. Это не «работа на заводе», а контроль процесса: проверка показателей, отгрузки клиентам, переговоры. Многие наши франчайзи совмещают с основной работой первые 6 месяцев, а потом переходят полностью.",
  },
  {
    q: "Почему такая высокая маржа? Где подвох?",
    a: "Подвоха нет — есть рыночная ситуация. Россия импортирует 87% хлореллы по цене 4–6 тыс. ₽/кг. Себестоимость нашего производства — 800–1200 ₽/кг. Разница и есть маржа. Это не навсегда: через 5–7 лет рынок насытится. Поэтому входить выгоднее сейчас.",
  },
  {
    q: "А что если вы закроетесь? Я останусь без поддержки.",
    a: "За технологией стоит команда с многолетним опытом в биотехнологиях и культивировании микроводорослей. Все технологии, штаммы и документы передаются вам в собственность по договору — производство принадлежит вам и продолжит работать в любом случае. Вы не зависите от нас технологически.",
  },
  {
    q: "Можно ли купить франшизу в кредит или в рассрочку?",
    a: "Да. Работаем с банками-партнёрами: Россельхозбанк, МСП Банк — оформляем под программы поддержки малого бизнеса (ставка от 7%). Также возможна внутренняя рассрочка от компании на 6–12 месяцев под 0% при первоначальном взносе от 50%.",
  },
  {
    q: "Сколько франшиз вы продаёте в год? Не «штампуете» ли вы партнёров?",
    a: "Сознательно ограничиваем количество партнёров — это потолок по качеству сопровождения. Каждый партнёр получает личного куратора и работаем с ним до выхода на стабильную прибыль. Мы тщательно отбираем партнёров по результатам собеседования и анализа региона. Качество, а не масштаб.",
  },
];

const ObjectionsFaqSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            Честные ответы
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Что вас останавливает?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Самые частые возражения от потенциальных партнёров и наши прямые ответы
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {objections.map((o, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-border bg-card px-6 data-[state=open]:border-primary/40"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                  {o.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {o.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default ObjectionsFaqSection;
