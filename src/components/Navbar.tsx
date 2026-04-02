import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Leaf, Menu, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import ApplicationModal from "@/components/ApplicationModal";

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
    if (isRoute(l.href)) {
      return <Link to={l.href} onClick={() => setOpen(false)} className={className}>{l.label}</Link>;
    }
    const target = location.pathname === "/" ? l.href : `/${l.href}`;
    return <a href={target} onClick={() => setOpen(false)} className={className}>{l.label}</a>;
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${forceScrolled ? "bg-background/80 backdrop-blur-xl shadow-sm border-b border-border" : ""}`}>
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-emerald flex items-center justify-center">
              <Leaf className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className={`font-display font-bold text-lg ${forceScrolled ? "text-foreground" : "text-primary-foreground"}`}>
              Chlorella Green
            </span>
          </Link>

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
