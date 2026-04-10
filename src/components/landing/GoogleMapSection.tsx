import { motion } from "framer-motion";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const GoogleMapSection = () => {
  return (
    <section className="bg-background py-16 md:py-24" id="location">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-extrabold text-foreground md:text-4xl">
            Nous trouver
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Idealement situes a Rabat, avec un acces simple, proche des axes principaux
            et pratique pour un RDV rapide.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[350px] overflow-hidden rounded-2xl border border-border shadow-card md:col-span-3 md:h-[420px]"
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

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-card md:col-span-2"
          >
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">Adresse</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    123 Avenue Mohammed V
                    <br />
                    Rabat, Maroc
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">Horaires</h3>
                  <div className="mt-0.5 space-y-0.5 text-sm text-muted-foreground">
                    <p>Lun - Ven : 8h00 - 20h00</p>
                    <p>Samedi : 8h00 - 18h00</p>
                    <p className="font-medium text-destructive">Dimanche : Ferme</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">Contact</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    <a href="tel:+212631581901" className="transition-colors hover:text-primary">
                      +212 631-581901
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <Button className="w-full gap-2 font-bold" asChild>
                <a
                  href="https://www.google.com/maps/dir//33.9716,-6.8498"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="h-4 w-4" />
                  Itineraire Google Maps
                </a>
              </Button>
              <Button
                variant="outline"
                className="w-full border-primary/30 font-semibold text-primary hover:bg-primary/5"
                onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
              >
                Prendre RDV
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMapSection;
