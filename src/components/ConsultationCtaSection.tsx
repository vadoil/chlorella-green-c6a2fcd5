import { motion } from "framer-motion";
import CallbackButton from "@/components/CallbackButton";

const ConsultationCtaSection = () => (
  <section className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-primary/10 p-8 sm:p-12 text-center shadow-lg"
      >
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/20 blur-[100px]" />
        <div className="relative z-10">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            Бесплатная консультация
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Остались вопросы по франшизе?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Эксперт перезвонит в течение 15 минут, рассчитает окупаемость для вашего региона и пришлёт финансовую модель
          </p>
          <CallbackButton
            variant="default"
            size="lg"
            label="Получить консультацию"
            className="w-full sm:w-auto max-w-full text-sm sm:text-lg px-5 sm:px-8 py-5 sm:py-6 whitespace-normal"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default ConsultationCtaSection;
