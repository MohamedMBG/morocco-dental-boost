import { MessageCircle, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  return (
    <>
      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/212600000000?text=Bonjour, je souhaite prendre rendez-vous"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-4 z-50 w-14 h-14 rounded-full bg-whatsapp text-whatsapp-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-float"
        aria-label="Contacter via WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Sticky bottom CTA on mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-md border-t border-border p-3">
        <div className="flex gap-2">
          <Button
            className="flex-1 h-12 font-heading font-bold shadow-cta gap-2"
            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
          >
            <CalendarDays className="w-4 h-4" />
            Prendre RDV
          </Button>
          <Button
            className="h-12 px-4 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-bold"
            asChild
          >
            <a href="https://wa.me/212600000000?text=Bonjour, je souhaite prendre rendez-vous" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default FloatingCTA;
