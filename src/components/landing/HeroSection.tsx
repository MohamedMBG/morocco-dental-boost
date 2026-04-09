import { Check, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import doctorImg from "@/assets/doctor-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-16 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="container py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              Consultation gratuite cette semaine
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
              Le sourire que vous <span className="text-gradient-primary">méritez</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Clinique dentaire premium à Rabat — Soins modernes, résultats exceptionnels, en toute confiance.
            </p>

            <ul className="space-y-3">
              {[
                "Équipements de dernière génération",
                "+15 ans d'expérience certifiée",
                "Résultats garantis & suivi personnalisé",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </span>
                  <span className="font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                size="lg"
                className="shadow-cta font-heading font-bold text-base px-8 animate-pulse-glow"
                onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
              >
                Prendre Rendez-vous
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-heading font-semibold gap-2 border-primary/30 text-primary hover:bg-primary/5"
                asChild
              >
                <a href="tel:+212600000000">
                  <Phone className="w-4 h-4" />
                  Appeler
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-heading font-semibold gap-2"
                asChild
              >
                <a href="https://wa.me/212600000000?text=Bonjour, je souhaite prendre rendez-vous" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right image */}
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
                alt="Dr. Amine Benali — Chirurgien dentiste à Rabat"
                className="relative rounded-3xl object-cover w-full shadow-card"
                width={800}
                height={1024}
              />
              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-card border border-border">
                <div className="flex items-center gap-2">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                  <span className="font-heading font-bold text-foreground">4.9</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">+1200 patients satisfaits</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
