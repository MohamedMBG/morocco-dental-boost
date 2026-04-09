import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-trust text-trust-foreground py-12 pb-24 md:pb-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center md:text-left">
          <div>
            <h3 className="font-heading font-bold text-lg mb-3">DentaCare Rabat</h3>
            <p className="text-sm text-trust-foreground/60">
              Votre clinique dentaire de confiance au cœur de Rabat.
            </p>
          </div>
          <div className="space-y-2 text-sm text-trust-foreground/70">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              123 Avenue Mohammed V, Rabat
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <a href="tel:+212600000000" className="hover:text-trust-foreground transition-colors">+212 6 00 00 00 00</a>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Clock className="w-4 h-4 flex-shrink-0" />
              Lun-Sam : 8h-20h
            </div>
          </div>
          <div className="text-sm text-trust-foreground/50">
            <p>© 2026 DentaCare. Tous droits réservés.</p>
            <p className="mt-1">Clinique agréée par le Ministère de la Santé</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
