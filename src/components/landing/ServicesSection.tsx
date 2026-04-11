import { motion } from "framer-motion";
import { Sparkles, Shield, Smile, Zap, HeartPulse, ScanFace, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/lib/analytics";

const services = [
  {
    icon: Sparkles,
    title: "Blanchiment Dentaire",
    desc: "Sourire eclatant en 1 seance laser. Resultats immediats et durables.",
  },
  {
    icon: Shield,
    title: "Implants Dentaires",
    desc: "Implants en titane biocompatibles. Solutions permanentes et naturelles.",
  },
  {
    icon: Smile,
    title: "Orthodontie Invisalign",
    desc: "Aligneurs invisibles Invisalign pour un sourire parfait, sans metal.",
  },
  {
    icon: Zap,
    title: "Urgences Dentaires",
    desc: "Prise en charge immediate 6j/7. Appelez ou contactez via WhatsApp.",
  },
  {
    icon: HeartPulse,
    title: "Soins Generaux",
    desc: "Detartrage, traitement des caries, controle annuel complet.",
  },
  {
    icon: ScanFace,
    title: "Hollywood Smile",
    desc: "Facettes en ceramique et Hollywood Smile. Sourire de star en quelques seances.",
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
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-extrabold text-foreground md:text-4xl">
            Soins Dentaires a Rabat - Tous traitements
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Blanchiment, implants, Hollywood Smile, orthodontie et plus. Traitements
            modernes avec des materiaux de haute qualite.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group cursor-pointer rounded-xl border border-border bg-card p-6 shadow-card transition-colors hover:border-primary/30"
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
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <service.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-heading font-bold text-foreground">{service.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            id="services-cta"
            size="lg"
            className="font-heading font-bold shadow-cta"
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
