import { Check, Phone, MessageCircle, Star, Flame, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import doctorImg from "@/assets/doctor-portrait.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10 pt-16"
      aria-label="Section principale - Clinique DentaCare Rabat"
    >
      <div className="container py-12 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-sm font-semibold text-red-600">
              <Flame className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              3 jours de RDV encore disponibles cette semaine
            </div>

            <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              a Rabat Hay Riad
            </span>

            <h1 className="font-heading text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Le sourire que vous <span className="text-gradient-primary">meritez</span>
            </h1>

            <p className="max-w-lg text-lg text-muted-foreground">
              Clinique dentaire premium a Rabat Hay Riad. Blanchiment laser, implants,
              Hollywood Smile. Resultats visibles des la <strong>1re seance</strong>,
              accompagnement personnalise et experience haut de gamme.
            </p>

            <ul className="space-y-3">
              {[
                "Equipements 3D de derniere generation",
                "+15 ans d'experience et +1 200 patients traites",
                "Suivi inclus, parcours fluide, zero surprise",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <span>
                <strong className="text-foreground">4.9/5</strong> - base sur 237 avis Google
              </span>
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              <Button
                id="hero-cta-booking"
                size="lg"
                className="w-full animate-pulse-glow px-8 text-base font-bold shadow-cta sm:w-auto"
                onClick={() =>
                  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
                }
                aria-label="Prendre RDV a DentaCare Rabat"
              >
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                Prendre RDV
              </Button>

              <Button
                id="hero-cta-phone"
                size="lg"
                variant="outline"
                className="w-full gap-2 border-primary/30 font-semibold text-primary hover:bg-primary/5 sm:w-auto"
                asChild
              >
                <a href="tel:+212631581901" aria-label="Prendre RDV par appel avec DentaCare Rabat">
                  <Phone className="h-4 w-4" />
                  Prendre RDV par appel
                </a>
              </Button>

              <Button
                id="hero-cta-whatsapp"
                size="lg"
                className="w-full gap-2 bg-whatsapp font-semibold text-whatsapp-foreground hover:bg-whatsapp/90 sm:w-auto"
                asChild
              >
                <a
                  href="https://wa.me/212631581901?text=Bonjour%2C%20je%20souhaite%20prendre%20RDV"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Prendre RDV sur WhatsApp avec DentaCare Rabat"
                >
                  <MessageCircle className="h-4 w-4" />
                  Prendre RDV sur WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 md:w-80 lg:w-96">
              <div className="absolute inset-0 scale-105 rotate-3 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5" />
              <img
                src={doctorImg}
                alt="Dr. Amine Benali, chirurgien dentiste a Rabat - DentaCare"
                className="relative w-full rounded-3xl object-cover shadow-card"
                width={800}
                height={1024}
                loading="eager"
                fetchPriority="high"
              />

              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-card p-4 shadow-card">
                <div className="flex items-center gap-2">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="font-heading font-bold text-foreground">4.9</span>
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground">+1 200 patients satisfaits</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
