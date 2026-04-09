import { Check, Phone, MessageCircle, Star, Flame, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import doctorImg from "@/assets/doctor-portrait.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative pt-16 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10"
      aria-label="Section principale — Clinique DentaCare Rabat"
    >
      <div className="container py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Urgency / scarcity badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-4 py-1.5 text-sm font-semibold text-red-600">
              <Flame className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              3 créneaux gratuits restants cette semaine
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
              Le sourire que vous{" "}
              <span className="text-gradient-primary">méritez</span>{" "}
              — à Rabat
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Clinique dentaire premium à Rabat — Blanchiment laser, implants,
              Hollywood Smile. Résultats visibles en <strong>1 séance</strong>,
              suivi personnalisé garanti.
            </p>

            {/* Trust bullet points */}
            <ul className="space-y-3">
              {[
                "Équipements 3D de dernière génération",
                "+15 ans d'expérience & +1 200 patients traités",
                "Résultats garantis, suivi inclus — zéro surprise",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </span>
                  <span className="font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>

            {/* Social proof micro-widget */}
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <span>
                <strong className="text-foreground">4.9/5</strong> — basé sur 237 avis Google
              </span>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                id="hero-cta-booking"
                size="lg"
                className="shadow-cta font-heading font-bold text-base px-8 animate-pulse-glow"
                onClick={() =>
                  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
                }
                aria-label="Prendre un rendez-vous gratuit à DentaCare Rabat"
              >
                <CalendarDays className="w-4 h-4" aria-hidden="true" />
                Consultation Gratuite
              </Button>
              <Button
                id="hero-cta-phone"
                size="lg"
                variant="outline"
                className="font-heading font-semibold gap-2 border-primary/30 text-primary hover:bg-primary/5"
                asChild
              >
                <a href="tel:+212600000000" aria-label="Appeler DentaCare Rabat">
                  <Phone className="w-4 h-4" />
                  Appeler maintenant
                </a>
              </Button>
              <Button
                id="hero-cta-whatsapp"
                size="lg"
                className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-heading font-semibold gap-2"
                asChild
              >
                <a
                  href="https://wa.me/212600000000?text=Bonjour%2C%20je%20souhaite%20une%20consultation%20gratuite"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contacter DentaCare Rabat via WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right image — eager loaded for LCP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 md:w-80 lg:w-96">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 transform rotate-3 scale-105" />
              <img
                src={doctorImg}
                alt="Dr. Amine Benali, chirurgien dentiste à Rabat — DentaCare"
                className="relative rounded-3xl object-cover w-full shadow-card"
                width={800}
                height={1024}
                loading="eager"
                fetchPriority="high"
              />
              {/* Star rating badge */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-card border border-border">
                <div className="flex items-center gap-2">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg" aria-hidden="true">★</span>
                    ))}
                  </div>
                  <span className="font-heading font-bold text-foreground">4.9</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">+1 200 patients satisfaits</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 