import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import clinicMain from "@/assets/cabinet-dentaire-hay-riad-rabat.jpeg";
import clinicDetailA from "@/assets/IMG_9234.jpeg";
import clinicDetailB from "@/assets/IMG_9279.jpeg";
import clinicDetailC from "@/assets/IMG_9412.jpeg";

const gallery = [
  {
    src: clinicDetailA,
    alt: "Fauteuil de soin et equipement de la clinique dentaire",
  },
  {
    src: clinicDetailB,
    alt: "Espace interieur du cabinet dentaire a Rabat",
  },
  {
    src: clinicDetailC,
    alt: "Vue detaillee d'une salle de traitement moderne",
  },
];

const ClinicSection = () => {
  return (
    <section className="bg-secondary/30 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.15fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <img
              src={clinicMain}
              alt="Clinique dentaire moderne a Rabat Hay Riad"
              className="aspect-[4/3] w-full rounded-2xl object-cover object-[center_22%] shadow-card"
              loading="lazy"
              width={1920}
              height={1440}
            />

            <div className="grid grid-cols-3 gap-3">
              {gallery.map((image) => (
                <img
                  key={image.alt}
                  src={image.src}
                  alt={image.alt}
                  className="aspect-square w-full rounded-2xl object-cover shadow-card"
                  loading="lazy"
                  width={900}
                  height={900}
                />
              ))}
            </div>
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
              Decouvrez nos vrais espaces de soin a Rabat Hay Riad: environnement soigne,
              fauteuils modernes, imagerie de precision et parcours patient pense pour le
              confort du premier accueil jusqu'au suivi.
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
