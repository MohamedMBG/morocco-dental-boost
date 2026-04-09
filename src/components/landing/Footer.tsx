import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-trust text-trust-foreground py-12 pb-24 md:pb-12" role="contentinfo">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center md:text-left">
          {/* Brand */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-3">DentaCare Rabat</h3>
            <p className="text-sm text-trust-foreground/60 mb-3">
              Votre clinique dentaire de confiance au cœur de Rabat — Blanchiment, implants,
              Hollywood Smile & orthodontie Invisalign.
            </p>
            <nav aria-label="Liens de navigation rapide">
              <ul className="space-y-1 text-sm text-trust-foreground/70">
                {[
                  { label: "Nos Soins Dentaires", href: "#services" },
                  { label: "Avis Patients", href: "#faq" },
                  { label: "Prendre RDV", href: "#booking" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="hover:text-trust-foreground transition-colors underline-offset-2 hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <address className="not-italic space-y-2 text-sm text-trust-foreground/70">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <MapPin className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              <span>123 Avenue Mohammed V, Rabat 10000</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              <a href="tel:+212600000000" className="hover:text-trust-foreground transition-colors">
                +212 6 00 00 00 00
              </a>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <MessageCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              <a
                href="https://wa.me/212600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-trust-foreground transition-colors"
                aria-label="Contacter DentaCare Rabat sur WhatsApp"
              >
                WhatsApp
              </a>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Clock className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              <span>Lun–Ven : 8h–20h | Sam : 8h–18h</span>
            </div>
          </address>

          {/* Legal */}
          <div className="text-sm text-trust-foreground/50">
            <p>© 2026 DentaCare Rabat. Tous droits réservés.</p>
            <p className="mt-1">Clinique agréée par le Ministère de la Santé du Maroc</p>
            <p className="mt-3 text-xs">
              <span className="font-semibold text-trust-foreground/70">Clinique dentaire à Rabat</span>{" "}
              — Blanchiment, implants, Hollywood Smile
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

