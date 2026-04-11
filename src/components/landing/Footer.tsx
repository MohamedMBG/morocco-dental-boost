import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { trackButtonClick } from "@/lib/analytics";

const Footer = () => {
  return (
    <footer className="bg-trust py-12 pb-24 text-trust-foreground md:pb-12" role="contentinfo">
      <div className="container">
        <div className="mx-auto grid max-w-4xl gap-8 text-center md:grid-cols-3 md:text-left">
          <div>
            <h3 className="mb-3 font-heading text-lg font-bold">ORIS DENTAL CENTER</h3>
            <p className="mb-3 text-sm text-trust-foreground/60">
              Clinique dentaire a Rabat dirigee par Dr EL MEHDI FATIH. Implants,
              blanchiment, facettes et soins dentaires.
            </p>
            <nav aria-label="Liens de navigation rapide">
              <ul className="space-y-1 text-sm text-trust-foreground/70">
                {[
                  { label: "Nos Soins Dentaires", href: "#services" },
                  { label: "Avis Patients", href: "#reviews" },
                  { label: "Prendre RDV", href: "#booking" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="underline-offset-2 transition-colors hover:text-trust-foreground hover:underline"
                      onClick={() =>
                        trackButtonClick({
                          buttonId: `footer-nav-${link.href.replace("#", "")}`,
                          buttonText: link.label,
                          buttonLocation: "footer",
                          actionType: "anchor_navigation",
                          destination: link.href,
                        })
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <address className="not-italic space-y-2 text-sm text-trust-foreground/70">
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <MapPin className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              <span>Hay Riad, Rabat 10000</span>
            </div>
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <Phone className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              <a
                href="tel:+212631581901"
                className="transition-colors hover:text-trust-foreground"
                onClick={() =>
                  trackButtonClick({
                    buttonId: "footer-phone-link",
                    buttonText: "+212 631-581901",
                    buttonLocation: "footer",
                    actionType: "phone_call",
                    destination: "tel:+212631581901",
                  })
                }
              >
                +212 631-581901
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <MessageCircle className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              <a
                href="https://wa.me/212631581901"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-trust-foreground"
                aria-label="Contacter ORIS DENTAL CENTER sur WhatsApp"
                onClick={() =>
                  trackButtonClick({
                    buttonId: "footer-whatsapp-link",
                    buttonText: "WhatsApp",
                    buttonLocation: "footer",
                    actionType: "whatsapp",
                    destination: "https://wa.me/212631581901",
                  })
                }
              >
                WhatsApp
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <Clock className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              <span>Lun-Ven : 8h-20h | Sam : 8h-18h</span>
            </div>
          </address>

          <div className="text-sm text-trust-foreground/50">
            <p>© 2026 ORIS DENTAL CENTER. Tous droits reserves.</p>
            <p className="mt-1">Clinique agreee par le Ministere de la Sante du Maroc</p>
            <p className="mt-3 text-xs">
              <span className="font-semibold text-trust-foreground/70">
                Dentiste a Rabat Hay Riad - Dr EL MEHDI FATIH
              </span>{" "}
              - Implants, blanchiment, facettes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
