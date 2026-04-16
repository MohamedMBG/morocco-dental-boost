import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/lib/analytics";
import clinicMain from "@/assets/cabinet-dentaire-hay-riad-rabat.optimized.jpg";
import clinicDetailA from "@/assets/IMG_9157.optimized.jpg";
import clinicDetailB from "@/assets/IMG_9279.optimized.jpg";
import clinicDetailC from "@/assets/IMG_9144.optimized.jpg";

const gallery = [
  {
    src: clinicDetailA,
    alt: "Fauteuil de soin et équipement de la clinique dentaire",
  },
  {
    src: clinicDetailB,
    alt: "Espace intérieur du cabinet dentaire à Rabat",
  },
  {
    src: clinicDetailC,
    alt: "Vue détaillée d'une salle de traitement moderne",
  },
];

const reasons = [
  {
    title: "Des soins réellement sans douleur",
    description:
      "Chaque geste est maîtrisé pour garantir votre confort. Même les patients les plus anxieux ressortent surpris : ils n'ont rien ressenti.",
  },
  {
    title: "Vous comprenez exactement ce qu'on fait",
    description:
      "On prend le temps de vous expliquer chaque étape simplement. Vous avancez en toute confiance, sans stress ni zone d'ombre.",
  },
  {
    title: "Une prise en charge rapide, même en urgence",
    description:
      "Douleur, infection, extraction, vous êtes traité rapidement et efficacement. Pas d'attente inutile, pas de négligence.",
  },
  {
    title: "Des résultats naturels et durables",
    description:
      "Implants, couronnes, soins esthétiques : le travail est précis, discret et pensé pour durer dans le temps.",
  },
  {
    title: "Une vraie écoute, sans pression",
    description:
      "Ici, vous n'êtes jamais pressé ni poussé à faire un soin. On vous conseille, vous décidez.",
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
              alt="Clinique dentaire moderne à Rabat Hay Riad"
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
              Pourquoi nos patients restent chez Dr Fatih ?
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Une expérience pensée pour rassurer, expliquer, soulager rapidement et offrir des soins qui durent.
            </p>
            <div className="space-y-4">
              {reasons.map((item) => (
                <div
                  key={item.title}
                  className="gpu-smooth rounded-2xl border border-border bg-card/70 p-4 shadow-card transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1"
                >
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
                  buttonText: "Réserver ma consultation",
                  buttonLocation: "clinic",
                  actionType: "scroll_to_booking",
                  destination: "#booking",
                });
                document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Réserver ma consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicSection;
