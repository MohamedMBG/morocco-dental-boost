import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { trackButtonClick } from "@/lib/analytics";
import { clinicInfo } from "@/lib/clinic-info";

const quickLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Avis", href: "/#reviews" },
  { label: "Prendre RDV", href: "/#booking" },
];

const Footer = () => {
  return (
    <footer className="bg-trust py-12 pb-24 text-trust-foreground md:pb-12" role="contentinfo">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 text-center md:grid-cols-[1.2fr_0.95fr_0.85fr] md:text-left">
            <section className="md:pr-6">
              <div className="flex justify-center md:justify-start">
                <img
                  src="/title.png"
                  alt={`${clinicInfo.clinicName} title`}
                  className="h-auto w-full max-w-[280px] object-contain md:max-w-[340px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="mt-4 max-w-md text-sm leading-6 text-trust-foreground/75">
                Clinique dentaire à Rabat dirigée par {clinicInfo.doctorName}. Implantologie, facettes, blanchiment
                dentaire et soins dentaires complets.
              </p>
            </section>

            <section className="rounded-2xl border border-white/15 bg-white/5 p-5">
              <h3 className="mb-4 font-heading text-base font-bold uppercase tracking-[0.14em] text-trust-foreground">
                Contact
              </h3>
              <address className="not-italic space-y-4 text-sm text-trust-foreground/80">
                <div className="flex items-start justify-center gap-3 text-left md:justify-start">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  <a
                    href={clinicInfo.mapsDirectionsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-trust-foreground"
                  >
                    {clinicInfo.addressShort}
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3 md:justify-start">
                  <Phone className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  <a
                    href={clinicInfo.landlineHref}
                    className="transition-colors hover:text-trust-foreground"
                    onClick={() =>
                      trackButtonClick({
                        buttonId: "footer-phone-link",
                        buttonText: clinicInfo.landlineDisplay,
                        buttonLocation: "footer",
                        actionType: "phone_call",
                        destination: clinicInfo.landlineHref,
                      })
                    }
                  >
                    {clinicInfo.landlineDisplay}
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3 md:justify-start">
                  <MessageCircle className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  <a
                    href={clinicInfo.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-trust-foreground"
                    aria-label={`Contacter ${clinicInfo.clinicName} sur WhatsApp`}
                    onClick={() =>
                      trackButtonClick({
                        buttonId: "footer-whatsapp-link",
                        buttonText: clinicInfo.whatsappDisplay,
                        buttonLocation: "footer",
                        actionType: "whatsapp",
                        destination: clinicInfo.whatsappHref,
                      })
                    }
                  >
                    {clinicInfo.whatsappDisplay}
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3 md:justify-start">
                  <Clock className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  <span>{clinicInfo.hoursDetailed}</span>
                </div>
              </address>
            </section>

            <section className="rounded-2xl border border-white/15 bg-white/5 p-5">
              <h3 className="mb-4 font-heading text-base font-bold uppercase tracking-[0.14em] text-trust-foreground">
                Navigation
              </h3>
              <nav aria-label="Liens de navigation rapide">
                <ul className="space-y-3 text-sm text-trust-foreground/80">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="transition-colors hover:text-trust-foreground">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-6 border-t border-white/10 pt-4 text-sm text-trust-foreground/65">
                <p>Clinique agréée par le Ministère de la Santé du Maroc</p>
                <p className="mt-2 text-xs leading-5">
                  <span className="font-semibold text-trust-foreground/80">
                    Dentiste à Rabat Hay Riad - {clinicInfo.doctorName}
                  </span>{" "}
                  - Implantologie, blanchiment, facettes
                </p>
              </div>
            </section>
          </div>

          <div className="mt-8 border-t border-white/10 pt-5 text-center text-sm text-trust-foreground/55 md:flex md:items-center md:justify-between md:text-left">
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <img
                src="/logo%201.png"
                alt={`${clinicInfo.clinicName} logo`}
                className="h-11 w-11 object-contain"
                loading="lazy"
                decoding="async"
              />
              <span>(c) 2026 ORIS DENTAL CENTER. Tous droits réservés.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
