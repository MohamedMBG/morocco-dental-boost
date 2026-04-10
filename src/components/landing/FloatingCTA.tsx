import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 p-3 backdrop-blur-md md:hidden">
      <Button
        className="h-12 w-full gap-2 font-heading font-bold shadow-cta"
        size="lg"
        asChild
      >
        <a href="tel:+212631581901" aria-label="Appeler le docteur maintenant">
          <Phone className="h-4 w-4" />
          Appeler nous
        </a>
      </Button>
    </div>
  );
};

export default FloatingCTA;
