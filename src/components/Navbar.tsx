import { useState, useEffect } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "О проекте", href: "#problem" },
    { label: "Сферы применения", href: "/applications" },
    { label: "Калькулятор", href: "#calculator" },
    { label: "Пакет", href: "#package" },
    { label: "Запуск", href: "#steps" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl shadow-sm border-b border-border" : ""}`}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-emerald flex items-center justify-center">
            <Leaf className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className={`font-display font-bold text-lg ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
            Chlorella Green
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? "text-muted-foreground" : "text-primary-foreground/70"}`}>
              {l.label}
            </a>
          ))}
          <Button size="sm" className="gradient-emerald border-0 text-primary-foreground rounded-lg">
            Оставить заявку
          </Button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X className={scrolled ? "text-foreground" : "text-primary-foreground"} /> : <Menu className={scrolled ? "text-foreground" : "text-primary-foreground"} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border p-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-foreground py-2">
              {l.label}
            </a>
          ))}
          <Button size="sm" className="w-full gradient-emerald border-0 text-primary-foreground">
            Оставить заявку
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
