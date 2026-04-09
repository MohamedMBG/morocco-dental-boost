import { motion } from "framer-motion";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const GoogleMapSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background" id="location">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
            Nous trouver
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Idéalement situés au cœur de Rabat, à proximité du tramway et avec un accès facile.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 rounded-2xl overflow-hidden shadow-card border border-border h-[350px] md:h-[420px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.5!2d-6.8498!3d33.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU4JzE3LjgiTiA2wrA1MCc1OS4zIlc!5e0!3m2!1sfr!2sma!4v1700000000000!5m2!1sfr!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation DentaCare Rabat"
            />
          </motion.div>

          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-card rounded-2xl p-6 shadow-card border border-border flex flex-col justify-between"
          >
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-sm">Adresse</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    123 Avenue Mohammed V<br />
                    Rabat, Maroc
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-sm">Horaires</h3>
                  <div className="text-sm text-muted-foreground mt-0.5 space-y-0.5">
                    <p>Lun – Ven : 8h00 – 20h00</p>
                    <p>Samedi : 8h00 – 18h00</p>
                    <p className="text-destructive font-medium">Dimanche : Fermé</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-sm">Contact</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    <a href="tel:+212600000000" className="hover:text-primary transition-colors">+212 6 00 00 00 00</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <Button className="w-full font-heading font-bold gap-2" asChild>
                <a
                  href="https://www.google.com/maps/dir//33.9716,-6.8498"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="w-4 h-4" />
                  Itinéraire Google Maps
                </a>
              </Button>
              <Button
                variant="outline"
                className="w-full font-heading font-semibold border-primary/30 text-primary hover:bg-primary/5"
                onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
              >
                Prendre rendez-vous
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMapSection;
