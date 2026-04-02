import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface ApplicationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ApplicationModal = ({ open, onOpenChange }: ApplicationModalProps) => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", city: "", comment: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("leads").insert({
      name: form.name,
      phone: form.phone,
      email: form.email || null,
      city: form.city || null,
      comment: form.comment || null,
      source: "cta",
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
        setForm({ name: "", phone: "", email: "", city: "", comment: "" });
      }, 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">
            {sent ? "Заявка отправлена!" : "Оставить заявку"}
          </DialogTitle>
          <DialogDescription>
            {sent
              ? "Мы свяжемся с вами в ближайшее время"
              : "Заполните форму и мы свяжемся с вами для консультации"}
          </DialogDescription>
        </DialogHeader>

        {sent ? (
          <div className="flex flex-col items-center py-6 gap-4">
            <CheckCircle2 className="h-16 w-16 text-primary" />
            <p className="text-muted-foreground text-center">
              Наш менеджер свяжется с вами в течение рабочего дня
            </p>
            <Button onClick={() => handleClose(false)} className="gradient-emerald border-0 text-primary-foreground rounded-xl">
              Закрыть
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <input required type="text" placeholder="Ваше имя" maxLength={100}
              value={form.name} onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
            <input required type="tel" placeholder="Телефон" maxLength={20}
              value={form.phone} onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
            <input type="email" placeholder="Email (необязательно)" maxLength={255}
              value={form.email} onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
            <input type="text" placeholder="Город (необязательно)" maxLength={100}
              value={form.city} onChange={(e) => setForm(f => ({ ...f, city: e.target.value }))}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
            <textarea placeholder="Комментарий (необязательно)" maxLength={1000} rows={3}
              value={form.comment} onChange={(e) => setForm(f => ({ ...f, comment: e.target.value }))}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
            <Button type="submit" disabled={loading} className="w-full gradient-emerald border-0 text-primary-foreground rounded-xl py-3">
              {loading ? "Отправка..." : "Отправить заявку"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationModal;
