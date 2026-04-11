import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/lib/analytics";

const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-card/90 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="font-heading text-lg font-bold text-primary-foreground">OD</span>
          </div>
          <div className="leading-tight">
            <span className="block font-heading text-sm font-bold uppercase tracking-[0.18em] text-foreground">
              ORIS DENTAL CENTER
            </span>
            <span className="block text-xs text-muted-foreground">Dr EL MEHDI FATIH</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:+212631581901"
            className="hidden items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary sm:flex"
            onClick={() =>
              trackButtonClick({
                buttonId: "header-phone-link",
                buttonText: "+212 631-581901",
                buttonLocation: "header",
                actionType: "phone_call",
                destination: "tel:+212631581901",
              })
            }
          >
            <Phone className="h-4 w-4" />
            +212 631-581901
          </a>
          <Button
            size="sm"
            className="font-heading font-semibold shadow-cta"
            asChild
          >
            <a
              href="tel:+212631581901"
              aria-label="Appeler ORIS DENTAL CENTER"
              onClick={() =>
                trackButtonClick({
                  buttonId: "header-call-cta",
                  buttonText: "Appeler maintenant",
                  buttonLocation: "header",
                  actionType: "phone_call",
                  destination: "tel:+212631581901",
                })
              }
            >
              Appeler maintenant
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
