import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Leaf, Menu, X, Home, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import ApplicationModal from "@/components/ApplicationModal";

const WHATSAPP_NUMBER = "79277022777";
const TELEGRAM_USERNAME = "chlorella_green";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const isHome = location.pathname === "/";
  const forceScrolled = !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Главная", href: "/", icon: Home },
    { label: "О проекте", href: "#problem" },
    { label: "Сферы применения", href: "/applications" },
    { label: "Калькулятор", href: "#calculator" },
    { label: "Пакет", href: "#package" },
    { label: "Запуск", href: "#steps" },
    { label: "FAQ", href: "#faq" },
  ];

  const isRoute = (href: string) => !href.startsWith("#");

  const NavItem = ({ l, className }: { l: typeof links[0]; className: string }) => {
    const content = l.icon ? <l.icon className="h-4 w-4" /> : l.label;
    if (isRoute(l.href)) {
      return <Link to={l.href} onClick={() => setOpen(false)} className={className} title={l.label}>{content}</Link>;
    }
    const target = location.pathname === "/" ? l.href : `/${l.href}`;
    return <a href={target} onClick={() => setOpen(false)} className={className} title={l.label}>{content}</a>;
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${forceScrolled ? "bg-background/80 backdrop-blur-xl shadow-sm border-b border-border" : "bg-gradient-to-b from-black/50 to-transparent"}`}>
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-emerald flex items-center justify-center">
                <Leaf className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className={`font-display font-bold text-lg ${forceScrolled ? "text-foreground" : "text-primary-foreground"}`}>
                Chlorella Green
              </span>
            </Link>

            <div className={`hidden lg:flex items-center gap-3 ml-2 pl-4 border-l ${forceScrolled ? "border-border" : "border-primary-foreground/20"}`}>
              <a href="tel:+79277022777" className={`flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors ${forceScrolled ? "text-muted-foreground" : "text-primary-foreground/70"}`}>
                <Phone className="h-3.5 w-3.5" />
                +7 (927) 702-27-77
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className={`hover:text-[#25D366] transition-colors ${forceScrolled ? "text-muted-foreground" : "text-primary-foreground/70"}`} title="WhatsApp">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href={`https://t.me/${TELEGRAM_USERNAME}`} target="_blank" rel="noopener noreferrer" className={`hover:text-[#0088cc] transition-colors ${forceScrolled ? "text-muted-foreground" : "text-primary-foreground/70"}`} title="Telegram">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <NavItem key={l.href} l={l}
                className={`text-sm font-medium transition-colors hover:text-primary ${forceScrolled ? "text-muted-foreground" : "text-primary-foreground/70"}`} />
            ))}
            <Button size="sm" onClick={() => setModalOpen(true)} className="gradient-emerald border-0 text-primary-foreground rounded-lg">
              Оставить заявку
            </Button>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X className={forceScrolled ? "text-foreground" : "text-primary-foreground"} /> : <Menu className={forceScrolled ? "text-foreground" : "text-primary-foreground"} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border p-4 space-y-3">
            {links.map((l) => (
              <NavItem key={l.href} l={l} className="block text-sm font-medium text-foreground py-2" />
            ))}
            <Button size="sm" onClick={() => { setOpen(false); setModalOpen(true); }} className="w-full gradient-emerald border-0 text-primary-foreground">
              Оставить заявку
            </Button>
          </div>
        )}
      </nav>
      <ApplicationModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

export default Navbar;
