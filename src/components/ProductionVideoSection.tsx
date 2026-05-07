import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Factory } from "lucide-react";

// Замените на реальную ссылку на видео производства (YouTube embed, VK, MP4)
const VIDEO_EMBED_URL = ""; // например: "https://www.youtube.com/embed/XXXXX?autoplay=1"
const POSTER_IMAGE = "https://chlorella-green.ru/wp-content/uploads/2023/05/proizvodstvo-1.jpg";

const ProductionVideoSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [playing, setPlaying] = useState(false);

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            Видеоэкскурсия по производству
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Посмотрите, как это работает изнутри
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Действующий цех в Саратове. Биореакторы, лаборатория, отгрузка клиентам — всё что вы получаете по франшизе.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-3xl overflow-hidden border border-border shadow-xl bg-card aspect-video"
        >
          {playing && VIDEO_EMBED_URL ? (
            <iframe
              src={VIDEO_EMBED_URL}
              title="Производство хлореллы"
              className="w-full h-full"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
          ) : (
            <>
              <img
                src={POSTER_IMAGE}
                alt="Производство живой хлореллы — биореакторы и лаборатория"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
              <button
                onClick={() => VIDEO_EMBED_URL && setPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Воспроизвести видео"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full gradient-emerald flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 md:h-10 md:w-10 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </button>
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 flex items-center gap-2 text-white">
                <Factory className="h-4 w-4" />
                <span className="text-xs md:text-sm font-medium">
                  {VIDEO_EMBED_URL ? "Экскурсия · 3 мин" : "Видео скоро · напишите нам, пришлём ссылку"}
                </span>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductionVideoSection;
