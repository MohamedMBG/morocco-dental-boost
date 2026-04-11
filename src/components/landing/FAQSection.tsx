import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Combien coute un blanchiment dentaire a Rabat ?",
    answer:
      "Le prix d'un blanchiment dentaire a ORIS DENTAL CENTER depend du traitement choisi. Contactez-nous pour une estimation personnalisee et une reponse en moins de 30 min via WhatsApp.",
  },
  {
    question: "Comment prendre RDV ?",
    answer:
      "Remplissez le formulaire de reservation ou envoyez-nous un message WhatsApp. Nous vous repondons en moins de 30 minutes pour confirmer votre jour de preference.",
  },
  {
    question: "Faites-vous des implants dentaires a Rabat ?",
    answer:
      "Absolument. Nous sommes specialises dans la pose d'implants dentaires en titane biocompatible. Les implants sont une solution durable pour remplacer une dent manquante, avec un resultat naturel et une duree de vie de plus de 20 ans.",
  },
  {
    question: "Etes-vous disponibles pour les urgences dentaires ?",
    answer:
      "Oui, nous prenons en charge les urgences dentaires 6 jours sur 7, de 8h a 20h. En cas de douleur intense, fracture dentaire ou autre urgence, contactez-nous immediatement via WhatsApp pour une prise en charge prioritaire.",
  },
  {
    question: "Proposez-vous des solutions esthetiques pour le sourire a Rabat ?",
    answer:
      "Oui, ORIS DENTAL CENTER propose des solutions esthetiques pour le sourire, notamment blanchiment, facettes et plans de traitement personnalises selon votre besoin.",
  },
  {
    question: "Quelle est l'adresse et les horaires de la clinique ?",
    answer:
      "Notre clinique ORIS DENTAL CENTER est situee a Rabat. Nous sommes ouverts du lundi au vendredi de 8h a 20h, et le samedi de 8h a 18h.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      className="bg-background py-16 md:py-24"
      id="faq"
      aria-label="Questions frequentes - ORIS DENTAL CENTER"
    >
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-extrabold text-foreground md:text-4xl">
              Questions frequentes
            </h2>
            <p className="mt-3 text-muted-foreground">
              Tout ce que vous devez savoir avant votre premiere visite a ORIS DENTAL CENTER.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
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
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="mb-4 text-sm text-muted-foreground">
              Vous avez d'autres questions ? Contactez-nous directement.
            </p>
            <Button
              id="faq-cta"
              size="lg"
              className="font-heading font-bold shadow-cta"
              onClick={() =>
                document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
              }
              aria-label="Prendre RDV a la clinique dentaire ORIS DENTAL CENTER"
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
