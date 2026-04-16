import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/lib/analytics";
import { clinicInfo } from "@/lib/clinic-info";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Avis", href: "/#reviews" },
  { label: "RDV", href: "/#booking" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-card/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center">
          <img
            src="/logo%201.png"
            alt={`${clinicInfo.clinicName} logo`}
            className="h-20 w-auto object-contain"
            loading="eager"
            decoding="async"
          />
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-border bg-background/80 p-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

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
          <Button size="sm" className="btn-rdv-blue font-heading font-semibold shadow-cta" asChild>
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
