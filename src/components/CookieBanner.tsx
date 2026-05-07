import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "cookie-consent-v1";

const CookieBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      const t = setTimeout(() => setShow(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-[60] animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="rounded-2xl bg-card/95 backdrop-blur-xl border border-border shadow-2xl p-4 md:p-5">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg gradient-emerald flex items-center justify-center shrink-0">
            <Cookie className="h-4 w-4 text-primary-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-foreground leading-relaxed">
              Мы используем cookie для удобства работы с сайтом, аналитики и
              улучшения сервиса. Продолжая просмотр, вы соглашаетесь с{" "}
              <Link to="/privacy" className="text-primary underline underline-offset-2">
                политикой конфиденциальности
              </Link>{" "}
              и{" "}
              <Link to="/cookies" className="text-primary underline underline-offset-2">
                использованием cookie
              </Link>
              .
            </p>
            <div className="flex items-center gap-2 mt-3">
              <Button onClick={accept} size="sm" className="gradient-emerald border-0 text-primary-foreground rounded-lg">
                Принять
              </Button>
              <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground px-2">
                Подробнее
              </Link>
            </div>
          </div>
          <button
            onClick={accept}
            aria-label="Закрыть"
            className="text-muted-foreground hover:text-foreground p-1"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
