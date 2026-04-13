import { Sparkles, Shield, Smile, Zap, HeartPulse, ScanFace, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/lib/analytics";

const services = [
  {
    icon: Sparkles,
    title: "Blanchiment Dentaire",
    desc: "Eclaircissement du sourire avec un protocole professionnel pour un resultat harmonieux.",
  },
  {
    icon: Shield,
    title: "Implantologie",
    desc: "Remplacement durable des dents manquantes avec une prise en charge precise et personnalisee.",
  },
  {
    icon: Smile,
    title: "Orthodontie",
    desc: "Correction de l'alignement dentaire pour ameliorer l'esthetique et la fonction.",
  },
  {
    icon: Zap,
    title: "Urgences Dentaires",
    desc: "Prise en charge rapide pour douleur, fracture, infection ou autre urgence dentaire.",
  },
  {
    icon: HeartPulse,
    title: "Parodontologie",
    desc: "Soins des gencives et prevention pour proteger durablement votre sante bucco-dentaire.",
  },
  {
    icon: ScanFace,
    title: "Facettes",
    desc: "Facettes esthetiques pour harmoniser la forme, la teinte et l'eclat du sourire.",
  },
];

const ServicesSection = () => {
  return (
    <section
      className="bg-background py-16 md:py-24"
      id="services"
      aria-label="Nos soins dentaires a Rabat"
    >
      <div className="container">
        <div className="mb-10 text-center md:mb-12">
          <h2 className="font-heading text-3xl font-extrabold text-foreground md:text-4xl">
            Soins Dentaires a Rabat - Tous traitements
          </h2>
          <p className="mx-auto mt-3 max-w-md px-2 text-sm leading-relaxed text-muted-foreground md:px-0 md:text-base">
            Services principaux: implantologie, facettes, blanchiment dentaire. Le
            cabinet propose egalement orthodontie, chirurgie orale, parodontologie,
            protheses, endodontie, detartrage et urgences dentaires.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group cursor-pointer rounded-2xl border border-border bg-card p-4 shadow-card transition-colors hover:border-primary/30 sm:p-5 md:p-6"
              onClick={() => {
                trackButtonClick({
                  buttonId: `service-card-${i + 1}`,
                  buttonText: service.title,
                  buttonLocation: "services",
                  actionType: "scroll_to_booking",
                  destination: "#booking",
                  serviceName: service.title,
                });
                document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
              }}
              role="button"
              tabIndex={0}
              aria-label={`Prendre RDV pour ${service.title}`}
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20 sm:mb-4 sm:h-12 sm:w-12">
                <service.icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-base font-bold leading-snug text-foreground sm:text-lg">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:mt-10">
          <Button
            id="services-cta"
            size="lg"
            className="btn-rdv-blue font-heading font-bold shadow-cta"
            onClick={() => {
              trackButtonClick({
                buttonId: "services-cta",
                buttonText: "Prendre RDV",
                buttonLocation: "services",
                actionType: "scroll_to_booking",
                destination: "#booking",
              });
              document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
            }}
            aria-label="Prendre RDV a Rabat"
          >
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            Prendre RDV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
