import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ApplicationModal from "@/components/ApplicationModal";
import CallbackButton from "@/components/CallbackButton";
import heroImage from "@/assets/hero-ibc-cubes.jpg";

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Промышленные IBC-биореакторы с живой хлореллой и системой аэрации" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/75 to-foreground/30" />
      </div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-float" />

      <div className="container relative z-10 mx-auto py-20">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 mb-8 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-glow animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/90">Франшиза с маржинальностью от 300%</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary-foreground">
            Запустите высокотехнологичное производство{" "}
            <span className="text-emerald-glow">живой хлореллы</span> в своём регионе
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl leading-relaxed">
            Готовая бизнес-модель «под ключ»: от настройки биореакторов до сбыта готовой продукции. Окупаемость — 4–6 месяцев.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => setModalOpen(true)}
              className="gradient-emerald text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-emerald-glow/30 transition-all duration-300 hover:scale-105 border-0 text-primary-foreground">
              Получить финансовую модель
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" asChild
              className="text-lg px-8 py-6 rounded-xl border-2 border-emerald-glow/50 text-emerald-glow hover:bg-emerald-glow/10 backdrop-blur-sm">
              <a href="/chlorella-presentation.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Скачать презентацию
              </a>
            </Button>
            <CallbackButton variant="light" size="lg" className="text-lg px-8 py-6" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/10 max-w-xl">
            {[
              { value: "55%+", label: "Маржинальность" },
              { value: "4–6 мес", label: "Окупаемость" },
              { value: "9.8%", label: "Рост рынка" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl md:text-3xl font-bold text-emerald-glow">{stat.value}</div>
                <div className="text-sm text-primary-foreground/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#problem"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.2, duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors hidden md:flex flex-col items-center gap-1 z-10"
        aria-label="Прокрутить вниз"
      >
        <span className="text-xs uppercase tracking-widest">Подробнее</span>
        <ChevronDown className="h-5 w-5" />
      </motion.a>

      <ApplicationModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

export default HeroSection;
