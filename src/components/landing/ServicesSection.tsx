import { motion } from "framer-motion";
import { Sparkles, Shield, Smile, Zap, HeartPulse, ScanFace } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Sparkles, title: "Blanchiment", desc: "Sourire éclatant en 1 séance" },
  { icon: Shield, title: "Implants", desc: "Solutions durables et naturelles" },
  { icon: Smile, title: "Orthodontie", desc: "Alignement invisible Invisalign" },
  { icon: Zap, title: "Urgences", desc: "Prise en charge immédiate" },
  { icon: HeartPulse, title: "Soins généraux", desc: "Détartrage, caries, contrôle" },
  { icon: ScanFace, title: "Esthétique", desc: "Facettes & Hollywood Smile" },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background" id="services">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
            Nos Soins Dentaires
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Des traitements modernes adaptés à chaque besoin, avec les meilleurs résultats.
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
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            size="lg"
            className="shadow-cta font-heading font-bold"
            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
          >
            Réserver une consultation gratuite
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
