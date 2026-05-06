import { Leaf, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "79277022777";
const TELEGRAM_USERNAME = "chlorella_green";

const navLinks = [
  { label: "О проекте", href: "/#problem" },
  { label: "Сферы применения", href: "/applications" },
  { label: "Калькулятор", href: "/#calculator" },
  { label: "Пакет", href: "/#package" },
  { label: "Запуск", href: "/#steps" },
  { label: "FAQ", href: "/#faq" },
  { label: "Блог", href: "/blog" },
];

const Footer = () => (
  <footer className="relative overflow-hidden bg-[hsl(160_84%_8%)] text-white pt-20 pb-8">
    <div className="absolute inset-0 opacity-30 pointer-events-none">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/30 blur-[150px] animate-drift" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-400/20 blur-[120px] animate-drift" style={{ animationDelay: "3s" }} />
    </div>

    <div className="container mx-auto relative z-10 px-4">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg gradient-emerald flex items-center justify-center shadow-lg">
              <Leaf className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl">Chlorella Green</span>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed">
            Франшиза производства живой хлореллы. Готовый бизнес «под ключ» от лидера российского рынка.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">Навигация</h4>
          <ul className="space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="text-sm text-white/60 hover:text-white transition-colors story-link">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">Контакты</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="tel:+79277022777" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-primary-foreground/80" />
                +7 (927) 702-27-77
              </a>
            </li>
            <li>
              <a href="mailto:info@chlorella-green.ru" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-primary-foreground/80" />
                info@chlorella-green.ru
              </a>
            </li>
            <li>
              <a href="https://chlorella-green.ru" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <MapPin className="h-4 w-4 text-primary-foreground/80" />
                chlorella-green.ru
              </a>
            </li>
          </ul>
        </div>

        {/* Messengers */}
        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">Мессенджеры</h4>
          <div className="flex gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-all hover:-translate-y-1"
              title="WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
              </svg>
            </a>
            <a
              href={`https://t.me/${TELEGRAM_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#0088cc] flex items-center justify-center transition-all hover:-translate-y-1"
              title="Telegram"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </div>
          <p className="text-xs text-white/50 mt-4">
            Ответим в течение 30 минут в рабочее время
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-white/50">
          © {new Date().getFullYear()} Chlorella Green. Все права защищены.
        </p>
        <p className="text-xs text-white/40">
          Информация на сайте не является публичной офертой
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
