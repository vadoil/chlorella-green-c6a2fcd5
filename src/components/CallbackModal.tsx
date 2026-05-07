import { useState, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { honeypotProps } from "@/lib/formGuard";

interface CallbackModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CallbackModal = ({ open, onOpenChange }: CallbackModalProps) => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hp, setHp] = useState("");
  const openedAt = useRef(Date.now());
  const [form, setForm] = useState({ name: "", phone: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (hp.trim() || Date.now() - openedAt.current < 2000) {
      setSent(true);
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("leads").insert({
      name: form.name,
      phone: form.phone,
      source: "callback",
      comment: "Заказ обратного звонка",
    });
    setLoading(false);
    if (error) {
      toast.error("Ошибка отправки. Попробуйте позже.");
      return;
    }
    setSent(true);
  };

  const handleClose = (val: boolean) => {
    onOpenChange(val);
    if (!val) {
      setTimeout(() => {
        setSent(false);
        setForm({ name: "", phone: "" });
      }, 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-xl flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            {sent ? "Звонок заказан!" : "Заказать обратный звонок"}
          </DialogTitle>
          <DialogDescription>
            {sent
              ? "Мы перезвоним вам в ближайшее время"
              : "Оставьте номер — наш эксперт перезвонит в течение 15 минут в рабочее время"}
          </DialogDescription>
        </DialogHeader>

        {sent ? (
          <div className="flex flex-col items-center py-6 gap-4">
            <CheckCircle2 className="h-16 w-16 text-primary" />
            <p className="text-muted-foreground text-center">
              Спасибо! Ожидайте звонок с номера +7 (927) 702-27-77
            </p>
            <Button onClick={() => handleClose(false)} className="gradient-emerald border-0 text-primary-foreground rounded-xl">
              Закрыть
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <input
              required
              type="text"
              placeholder="Ваше имя"
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              required
              type="tel"
              placeholder="Телефон"
              maxLength={20}
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button
              type="submit"
              disabled={loading}
              className="w-full gradient-emerald border-0 text-primary-foreground rounded-xl py-3"
            >
              <Phone className="mr-2 h-4 w-4" />
              {loading ? "Отправка..." : "Заказать звонок"}
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CallbackModal;
