import { motion } from "framer-motion";
import clinicImg from "@/assets/hero-clinic.jpg";
import { Button } from "@/components/ui/button";

const ClinicSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={clinicImg}
              alt="Clinique dentaire moderne à Rabat"
              className="rounded-2xl shadow-card w-full object-cover aspect-[4/3]"
              loading="lazy"
              width={1920}
              height={1080}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
              Une clinique à la pointe de la technologie
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Notre cabinet à Rabat est équipé des dernières technologies en imagerie 3D, laser dentaire et matériaux biocompatibles. Chaque traitement est réalisé dans un environnement stérile et confortable.
            </p>
            <ul className="space-y-2 text-sm text-foreground">
              {[
                "Scanner 3D & radiographie numérique",
                "Salle de stérilisation aux normes internationales",
                "Ambiance calme et accueil chaleureux",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Button
              className="shadow-cta font-heading font-bold"
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
            >
              Visiter & Réserver
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClinicSection;
