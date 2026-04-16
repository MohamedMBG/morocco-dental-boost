import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/lib/analytics";
import { clinicInfo } from "@/lib/clinic-info";

const faqs = [
  {
    question: "Comment prendre RDV ?",
    answer:
      "Remplissez le formulaire de réservation ou envoyez-nous un message WhatsApp. Nous vous répondons en moins de 30 minutes pour confirmer votre jour de préférence.",
  },
  {
    question: "Faites-vous des traitements en implantologie à Rabat ?",
    answer:
      "Oui. Le cabinet propose des traitements en implantologie pour remplacer une ou plusieurs dents manquantes avec une solution durable et naturelle.",
  },
  {
    question: "Proposez-vous des facettes et un blanchiment dentaire ?",
    answer:
      `Oui, ${clinicInfo.clinicName} propose des solutions esthétiques pour le sourire, notamment le blanchiment dentaire et les facettes, avec un plan de traitement personnalisé.`,
  },
  {
    question: "Êtes-vous disponibles pour les urgences dentaires ?",
    answer:
      "Oui, nous prenons en charge les urgences dentaires pendant les horaires du cabinet. En cas de douleur intense, fracture dentaire ou autre urgence, contactez-nous immédiatement via WhatsApp ou par téléphone.",
  },
  {
    question: "Combien coûte un blanchiment dentaire à Rabat ?",
    answer:
      `Le prix d'un blanchiment dentaire à ${clinicInfo.clinicName} dépend du traitement choisi. Contactez-nous pour une estimation personnalisée.`,
  },
  {
    question: "Combien de médecins exercent à la clinique ?",
    answer:
      `${clinicInfo.doctorName} assure les soins au cabinet. Contactez-nous si vous souhaitez en savoir plus sur l'organisation des rendez-vous.`,
  },
  {
    question: "Quels sont les horaires de la clinique ?",
    answer:
      `Notre clinique ${clinicInfo.clinicName} est située à Rabat. Nous sommes ouverts du lundi au vendredi de 09:00 à 18:00 et le samedi de 09:00 à 13:00.`,
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      className="bg-background py-16 md:py-24"
      id="faq"
      aria-label={`Questions fréquentes - ${clinicInfo.clinicName}`}
    >
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-extrabold text-foreground md:text-4xl">
              Questions fréquentes
            </h2>
            <p className="mt-3 text-muted-foreground">
              Tout ce que vous devez savoir avant votre première visite à {clinicInfo.clinicName}.
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
              aria-label={`Prendre RDV à la clinique dentaire ${clinicInfo.clinicName}`}
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
