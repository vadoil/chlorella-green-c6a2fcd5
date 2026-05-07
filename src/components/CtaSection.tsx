import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import ApplicationModal from "@/components/ApplicationModal";
import CallbackButton from "@/components/CallbackButton";

const CtaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section ref={ref} className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl gradient-emerald p-6 sm:p-12 md:p-20 text-center overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary-foreground/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-primary-foreground/5 blur-3xl" />
          <div className="relative z-10">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-[1.15] break-words [overflow-wrap:anywhere] hyphens-auto" lang="ru">
              Готовы запустить производство хлореллы?
            </h2>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Получите персональный расчёт инвестиций, подробную презентацию проекта и консультацию эксперта — бесплатно
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
              <Button size="lg" onClick={() => setModalOpen(true)}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-10 py-6 rounded-xl shadow-xl hover:scale-105 transition-all duration-300">
                Получить презентацию
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" asChild variant="outline"
                className="bg-transparent border-2 border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 rounded-xl">
                <a href="/chlorella-presentation.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Скачать PDF
                </a>
              </Button>
              <CallbackButton variant="light" size="lg" className="text-lg px-8 py-6" />
            </div>
          </div>
        </motion.div>
      </div>
      <ApplicationModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

export default CtaSection;
