import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const objections = [
  {
    q: "А если у меня не получится? Я никогда не занимался производством.",
    a: "Технология рассчитана на людей без опыта в биотехнологиях. Очное обучение 5 дней + куратор на 6 месяцев + чат поддержки 24/7. Процессы настолько отлажены, что справится человек без профильного образования. А если всё равно не получится — мы выкупаем оборудование обратно по 70% стоимости.",
  },
  {
    q: "Сколько реально часов в день нужно работать?",
    a: "После выхода на стабильный режим — 15 минут на контроль. Система автоматизирована: она сама поддерживает температуру, освещение и подачу CO₂. Ваша задача — раз в день посмотреть показатели и отгрузить готовую продукцию клиентам.",
  },
  {
    q: "А что если вы закроетесь? Я останусь без поддержки.",
    a: "За технологией стоит команда с многолетним опытом в биотехнологиях и культивировании микроводорослей. Все технологии и документы передаются вам в собственность по договору — производство принадлежит вам и продолжит работать в любом случае. Вы не зависите от нас технологически.",
  },
  {
    q: "Можно ли купить франшизу в кредит или в рассрочку?",
    a: "Да. Работаем с банками-партнёрами: Россельхозбанк, МСП Банк — оформляем под программы поддержки малого бизнеса (ставка от 7%). Также возможна внутренняя рассрочка от компании на 6–12 месяцев под 0% при первоначальном взносе от 50%.",
  },
  {
    q: "Сколько франшиз вы продаёте в год? Не «штампуете» ли вы партнёров?",
    a: "Сознательно ограничиваем количество партнёров — это потолок по качеству сопровождения. Каждый партнёр получает личного куратора и работаем с ним до выхода на стабильную прибыль. Мы тщательно отбираем партнёров по результатам собеседования и анализа региона. Качество, а не масштаб.",
  },
  { q: "А если хлорелла погибнет?", a: "Наша технология включает систему автоматического контроля параметров среды. В случае отклонений система оповестит вас и скорректирует условия. Кроме того, мы предоставляем гарантийный запас маточного раствора и круглосуточную техподдержку." },
  { q: "Кому продавать готовую продукцию?", a: "Основные каналы сбыта: фермерские хозяйства (биостимулятор), животноводческие предприятия (кормовая добавка), ЗОЖ-магазины и маркетплейсы (суперфуд), агрохолдинги. Мы помогаем выстроить все каналы." },
  { q: "Сложно ли обслуживать оборудование?", a: "Нет. Система автоматизирована на 90%. Ежедневное обслуживание занимает 1–2 часа. Мы обучаем вашу команду и предоставляем подробные регламенты на каждый процесс." },
  { q: "Какая площадь помещения нужна?", a: "Минимальная площадь — от 50 м² для стартового комплекта из 3 биореакторов. Оптимально — от 100 м² для 5–10 реакторов. Помещение может быть промышленным или даже подвальным при наличии вентиляции." },
  { q: "Нужны ли специальные разрешения?", a: "Для производства хлореллы как кормовой добавки и биостимулятора не требуется специальная лицензия. Для пищевого сегмента — потребуется сертификация, в чём мы полностью помогаем." },
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-5">
            Не нашли ответ на свой вопрос?
          </p>
          <a
            href="https://wa.me/79277022777?text=Здравствуйте!%20У%20меня%20вопрос%20по%20франшизе%20хлореллы"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl gradient-emerald text-primary-foreground font-display font-bold uppercase tracking-wider hover:scale-105 transition-transform"
          >
            Задать вопрос в WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ObjectionsFaqSection;
