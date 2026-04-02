import { Leaf } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12 bg-muted/30">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-emerald flex items-center justify-center">
            <Leaf className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-lg text-foreground">Chlorella Green</span>
        </div>
        <div className="flex gap-8 text-sm text-muted-foreground">
          <a href="https://chlorella-green.ru" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            chlorella-green.ru
          </a>
          <span>info@chlorella-green.ru</span>
          <span>+7 (XXX) XXX-XX-XX</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Chlorella Green
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
