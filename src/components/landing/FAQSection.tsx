import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/lib/analytics";
import { clinicInfo } from "@/lib/clinic-info";

const faqs = [
  {
    question: "Combien coute un blanchiment dentaire a Rabat ?",
    answer:
      `Le prix d'un blanchiment dentaire a ${clinicInfo.clinicName} depend du traitement choisi. Contactez-nous pour une estimation personnalisee.`,
  },
  {
    question: "Comment prendre RDV ?",
    answer:
      "Remplissez le formulaire de reservation ou envoyez-nous un message WhatsApp. Nous vous repondons en moins de 30 minutes pour confirmer votre jour de preference.",
  },
  {
    question: "Faites-vous des implants dentaires a Rabat ?",
    answer:
      "Oui. Le cabinet propose des traitements en implantologie pour remplacer une ou plusieurs dents manquantes avec une solution durable et naturelle.",
  },
  {
    question: "Etes-vous disponibles pour les urgences dentaires ?",
    answer:
      "Oui, nous prenons en charge les urgences dentaires pendant les horaires du cabinet. En cas de douleur intense, fracture dentaire ou autre urgence, contactez-nous immediatement via WhatsApp ou par telephone.",
  },
  {
    question: "Proposez-vous des solutions esthetiques pour le sourire a Rabat ?",
    answer:
      `Oui, ${clinicInfo.clinicName} propose des solutions esthetiques pour le sourire, notamment blanchiment dentaire et facettes, avec un plan de traitement personnalise.`,
  },
  {
    question: "Quels sont les horaires de la clinique ?",
    answer:
      `Notre clinique ${clinicInfo.clinicName} est situee a Rabat. Nous sommes ouverts de 9h a 18h.`,
  },
  {
    question: "Qui est le docteur en charge des soins ?",
    answer:
      `${clinicInfo.doctorName} est laureat de la faculte de medecine dentaire de Rabat - Universite Mohamed V, titulaire d'un Diplome Universitaire d'implantologie et compte 10 ans d'experience.`,
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      className="bg-background py-16 md:py-24"
      id="faq"
      aria-label={`Questions frequentes - ${clinicInfo.clinicName}`}
    >
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-extrabold text-foreground md:text-4xl">
              Questions frequentes
            </h2>
            <p className="mt-3 text-muted-foreground">
              Tout ce que vous devez savoir avant votre premiere visite a {clinicInfo.clinicName}.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between p-5 text-left font-heading font-semibold text-foreground transition-colors hover:bg-primary/5"
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-primary transition-transform duration-200 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-question-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-border px-5 pb-5 pt-4 text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="mb-4 text-sm text-muted-foreground">
              Vous avez d'autres questions ? Contactez-nous directement.
            </p>
            <Button
              id="faq-cta"
              size="lg"
              className="btn-rdv-blue font-heading font-bold shadow-cta"
              onClick={() => {
                trackButtonClick({
                  buttonId: "faq-cta",
                  buttonText: "Prendre RDV",
                  buttonLocation: "faq",
                  actionType: "scroll_to_booking",
                  destination: "#booking",
                });
                document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
              }}
              aria-label={`Prendre RDV a la clinique dentaire ${clinicInfo.clinicName}`}
            >
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              Prendre RDV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
