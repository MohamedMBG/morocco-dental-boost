import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/lib/analytics";
import { clinicInfo } from "@/lib/clinic-info";
import clinicMain from "@/assets/cabinet-dentaire-hay-riad-rabat.optimized.jpg";
import clinicDetailA from "@/assets/IMG_9157.jpeg";
import clinicDetailB from "@/assets/IMG_9279.optimized.jpg";
import clinicDetailC from "@/assets/IMG_9135.jpeg";

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

const reasons = [
  {
    title: "Des soins reellement sans douleur",
    description:
      "Chaque geste est maitrise pour garantir votre confort. Meme les patients les plus anxieux ressortent surpris : ils n’ont rien ressenti.",
  },
  {
    title: "Vous comprenez exactement ce qu’on fait",
    description:
      "On prend le temps de vous expliquer chaque etape simplement. Vous avancez en toute confiance, sans stress ni zone d’ombre.",
  },
  {
    title: "Une prise en charge rapide, meme en urgence",
    description:
      "Douleur, infection, extraction, vous etes traite rapidement et efficacement. Pas d’attente inutile, pas de negligence.",
  },
  {
    title: "Des resultats naturels et durables",
    description:
      "Implants, couronnes, soins esthetiques, le travail est precis, discret et pense pour durer dans le temps.",
  },
  {
    title: "Une vraie ecoute, sans pression",
    description:
      "Ici, vous n’etes jamais presse ni pousse a faire un soin. On vous conseille, vous decidez.",
  },
];

const ClinicSection = () => {
  return (
    <section className="bg-secondary/30 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.15fr_0.95fr]">
          <div className="space-y-4">
            <img
              src={clinicMain}
              alt="Clinique dentaire moderne a Rabat Hay Riad"
              className="aspect-[4/3] w-full rounded-2xl object-cover object-[center_22%] shadow-card"
              loading="lazy"
              width={1920}
              height={1440}
              decoding="async"
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
                  decoding="async"
                />
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h2 className="font-heading text-3xl font-extrabold text-foreground md:text-4xl">
              Pourquoi nos patients ne changent plus de dentiste ?
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Une experience pensee pour rassurer, expliquer, soulager rapidement et offrir des soins qui durent.
            </p>
            <div className="space-y-4">
              {reasons.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-card/70 p-4 shadow-card">
                  <h3 className="font-heading text-base font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
            <Button
              className="btn-rdv-blue font-heading font-bold shadow-cta"
              onClick={() => {
                trackButtonClick({
                  buttonId: "clinic-cta",
                  buttonText: "Reserver ma consultation",
                  buttonLocation: "clinic",
                  actionType: "scroll_to_booking",
                  destination: "#booking",
                });
                document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Reserver ma consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicSection;
