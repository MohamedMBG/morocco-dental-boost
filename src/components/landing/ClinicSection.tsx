import { motion } from "framer-motion";
import clinicImg from "@/assets/hero-clinic.jpg";
import { Button } from "@/components/ui/button";

const ClinicSection = () => {
  return (
    <section className="bg-secondary/30 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={clinicImg}
              alt="Clinique dentaire moderne a Rabat"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card"
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
            <h2 className="font-heading text-3xl font-extrabold text-foreground md:text-4xl">
              Une clinique a la pointe de la technologie
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Notre cabinet a Rabat est equipe des dernieres technologies en imagerie 3D,
              laser dentaire et materiaux biocompatibles. Chaque traitement est realise
              dans un environnement sterile, confortable et premium.
            </p>
            <ul className="space-y-2 text-sm text-foreground">
              {[
                "Scanner 3D et radiographie numerique",
                "Salle de sterilisation aux normes internationales",
                "Ambiance calme et accueil chaleureux",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Button
              className="font-heading font-bold shadow-cta"
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
            >
              Prendre RDV
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClinicSection;
