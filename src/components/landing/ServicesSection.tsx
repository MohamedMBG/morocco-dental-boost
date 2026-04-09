import { motion } from "framer-motion";
import { Sparkles, Shield, Smile, Zap, HeartPulse, ScanFace } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Sparkles,
    title: "Blanchiment Dentaire",
    desc: "Sourire éclatant en 1 séance laser. Résultats immédiats et durables.",
    keyword: "blanchiment dentaire Rabat",
  },
  {
    icon: Shield,
    title: "Implants Dentaires",
    desc: "Implants en titane biocompatibles. Solutions permanentes et naturelles.",
    keyword: "implants dentaires Maroc",
  },
  {
    icon: Smile,
    title: "Orthodontie Invisalign",
    desc: "Aligneurs invisibles Invisalign® pour un sourire parfait, sans métal.",
    keyword: "Invisalign Rabat",
  },
  {
    icon: Zap,
    title: "Urgences Dentaires",
    desc: "Prise en charge immédiate 6j/7. Appelez ou contactez via WhatsApp.",
    keyword: "urgence dentaire Rabat",
  },
  {
    icon: HeartPulse,
    title: "Soins Généraux",
    desc: "Détartrage, traitement des caries, contrôle annuel complet.",
    keyword: "dentiste soins Rabat",
  },
  {
    icon: ScanFace,
    title: "Hollywood Smile",
    desc: "Facettes en céramique & Hollywood Smile. Sourire de star en quelques séances.",
    keyword: "Hollywood Smile Rabat",
  },
];

const ServicesSection = () => {
  return (
    <section
      className="py-16 md:py-24 bg-background"
      id="services"
      aria-label="Nos soins dentaires à Rabat"
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
            Soins Dentaires à Rabat — Tous Traitements
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Blanchiment, implants, Hollywood Smile, orthodontie & plus — traitements modernes
            avec des matériaux de haute qualité.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-xl p-6 shadow-card border border-border hover:border-primary/30 transition-colors group cursor-pointer"
              onClick={() =>
                document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
              }
              role="button"
              tabIndex={0}
              aria-label={`Prendre RDV pour ${s.title}`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-heading font-bold text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            id="services-cta"
            size="lg"
            className="shadow-cta font-heading font-bold"
            onClick={() =>
              document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
            }
            aria-label="Réserver une consultation dentaire gratuite à Rabat"
          >
            🎁 Réserver ma consultation gratuite
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
