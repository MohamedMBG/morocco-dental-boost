import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/lib/analytics";
import { clinicInfo } from "@/lib/clinic-info";

const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-card/95">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <img
            src="/logo%201.png"
            alt={`${clinicInfo.clinicName} logo`}
            className="h-20 w-auto object-contain"
            loading="eager"
            decoding="async"
          />
        </div>

        <div className="flex items-center gap-3">
          <a
            href={clinicInfo.landlineHref}
            className="hidden items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary sm:flex"
            onClick={() =>
              trackButtonClick({
                buttonId: "header-phone-link",
                buttonText: clinicInfo.landlineDisplay,
                buttonLocation: "header",
                actionType: "phone_call",
                destination: clinicInfo.landlineHref,
              })
            }
          >
            <Phone className="h-4 w-4" />
            {clinicInfo.landlineDisplay}
          </a>
          <Button
            size="sm"
            className="btn-rdv-blue font-heading font-semibold shadow-cta"
            asChild
          >
            <a
              href={clinicInfo.landlineHref}
              aria-label={`Appeler ${clinicInfo.clinicName}`}
              onClick={() =>
                trackButtonClick({
                  buttonId: "header-call-cta",
                  buttonText: "Prendre RDV",
                  buttonLocation: "header",
                  actionType: "phone_call",
                  destination: clinicInfo.landlineHref,
                })
              }
            >
              Prendre RDV
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
