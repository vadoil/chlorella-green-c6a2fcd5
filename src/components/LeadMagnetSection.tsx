import { useRef, useState } from "react";
import { FileDown, FileSpreadsheet, Video, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { honeypotProps } from "@/lib/formGuard";

const magnets = [
  {
    icon: FileDown,
    title: "PDF-гайд: 5 ошибок при запуске био-производства",
    description: "Разбираем типичные ошибки новичков и даём пошаговые решения на основе опыта 20+ запусков.",
    cta: "Скачать бесплатно",
    source: "lead_magnet_pdf",
  },
  {
    icon: FileSpreadsheet,
    title: "Финансовая модель в Excel под ваш регион",
    description: "Готовая таблица: расходы, выручка, ФОТ, налоги, точка безубыточности. Меняете 5 параметров — получаете свой план.",
    cta: "Получить файл",
    source: "lead_magnet_excel",
  },
  {
    icon: Video,
    title: "Онлайн-встреча с основателем · среда 19:00 МСК",
    description: "Личный созвон в Zoom: ответы на вопросы про производство, рынок, окупаемость. Без презентаций — только практика.",
    cta: "Записаться",
    source: "webinar",
  },
];


const LeadMagnetSection = () => {
  const [submitted, setSubmitted] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const mountedAt = useRef(Date.now());
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (index: number) => {
    if (!email) return;
    if (hp.trim() || Date.now() - mountedAt.current < 2000) {
      setSubmitted(index);
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("leads").insert({
      email,
      source: magnets[index].source,
      comment: magnets[index].title,
    });
    setLoading(false);
    if (error) {
      toast.error("Ошибка отправки. Попробуйте позже.");
      return;
    }
    setSubmitted(index);
    setEmail("");
    setTimeout(() => setSubmitted(null), 4000);
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-2 block">
            Бесплатные материалы
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Начните изучение прямо сейчас
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Скачайте полезные материалы — без обязательств. Просто оставьте email.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {magnets.map((m, i) => (
            <div key={i} className="rounded-xl border border-border bg-background p-8 flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <m.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{m.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-1">{m.description}</p>
              {submitted === i ? (
                <div className="flex items-center gap-2 text-primary font-medium text-sm">
                  <CheckCircle className="h-5 w-5" />
                  Отправлено! Проверьте почту.
                </div>
              ) : (
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    onClick={() => handleSubmit(i)}
                    disabled={loading}
                    className="gradient-emerald border-0 text-primary-foreground shrink-0"
                  >
                    {m.cta}
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
