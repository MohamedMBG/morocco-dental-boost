import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-lg">D+</span>
          </div>
          <span className="font-heading font-bold text-xl text-foreground">DentaCare</span>
        </div>

        <div className="flex items-center gap-3">
          <a href="tel:+212600000000" className="hidden sm:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            +212 6 00 00 00 00
          </a>
          <Button
            size="sm"
            className="shadow-cta font-heading font-semibold"
            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
          >
            Prendre RDV
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
