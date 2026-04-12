import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/lib/analytics";
import { clinicInfo } from "@/lib/clinic-info";
import clinicMain from "@/assets/cabinet-dentaire-hay-riad-rabat.optimized.jpg";
import clinicDetailA from "@/assets/IMG_9234.optimized.jpg";
import clinicDetailB from "@/assets/IMG_9279.optimized.jpg";
import clinicDetailC from "@/assets/IMG_9412.optimized.jpg";

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
              Expertise, confort et precision
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              {clinicInfo.doctorName} met a votre service 10 ans d'experience, une
              formation universitaire solide a Rabat et un diplome universitaire en
              implantologie pour vous proposer des soins precis et rassurants.
            </p>
            <ul className="space-y-2 text-sm text-foreground">
              {clinicInfo.credentials.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Button
              className="font-heading font-bold shadow-cta"
              onClick={() => {
                trackButtonClick({
                  buttonId: "clinic-cta",
                  buttonText: "Prendre RDV",
                  buttonLocation: "clinic",
                  actionType: "scroll_to_booking",
                  destination: "#booking",
                });
                document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Prendre RDV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicSection;
