import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Combien coûte un blanchiment dentaire à Rabat ?",
    answer:
      "Le prix d'un blanchiment dentaire laser à DentaCare Rabat dépend du traitement choisi (blanchiment laser en cabinet ou gouttières personnalisées). Contactez-nous pour un devis gratuit et personnalisé — réponse en moins de 30 min via WhatsApp.",
  },
  {
    question: "Proposez-vous des consultations gratuites ?",
    answer:
      "Oui ! Cette semaine, nous offrons une consultation initiale 100% gratuite et sans engagement. Remplissez le formulaire ci-dessus ou envoyez-nous un message WhatsApp — nous vous répondons en moins de 30 minutes.",
  },
  {
    question: "Faites-vous des implants dentaires à Rabat ?",
    answer:
      "Absolument. Nous sommes spécialisés dans la pose d'implants dentaires en titane biocompatible. Les implants sont la solution la plus durable pour remplacer une dent manquante, avec un résultat naturel et une durée de vie de plus de 20 ans.",
  },
  {
    question: "Êtes-vous disponibles pour les urgences dentaires ?",
    answer:
      "Oui, nous prenons en charge les urgences dentaires 6 jours sur 7, de 8h à 20h. En cas de douleur intense, fracture dentaire ou autre urgence, contactez-nous immédiatement via WhatsApp pour une prise en charge prioritaire.",
  },
  {
    question: "Proposez-vous l'Invisalign (orthodontie invisible) à Rabat ?",
    answer:
      "Oui, DentaCare Rabat est partenaire Invisalign®. Les aligneurs invisibles corrigent votre sourire discrètement, sans les désagréments des bagues métalliques. Une consultation gratuite permet d'évaluer si vous êtes candidat.",
  },
  {
    question: "Quel est l'adresse et les horaires de la clinique ?",
    answer:
      "Notre clinique est située au 123 Avenue Mohammed V, Rabat (centre-ville). Nous sommes ouverts du lundi au vendredi de 8h à 20h, et le samedi de 8h à 18h. Parking à proximité disponible.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      className="py-16 md:py-24 bg-background"
      id="faq"
      aria-label="Questions fréquentes — DentaCare Rabat"
    >
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
              Questions fréquentes
            </h2>
            <p className="text-muted-foreground mt-3">
              Tout ce que vous devez savoir avant votre première visite à DentaCare Rabat.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-card border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-5 text-left font-heading font-semibold text-foreground hover:bg-primary/5 transition-colors"
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-primary transition-transform duration-200 ${
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
                      <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-muted-foreground text-sm mb-4">
              Vous avez d'autres questions ? Contactez-nous directement.
            </p>
            <Button
              id="faq-cta"
              size="lg"
              className="shadow-cta font-heading font-bold"
              onClick={() =>
                document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
              }
              aria-label="Prendre rendez-vous à la clinique dentaire DentaCare Rabat"
            >
              📅 Prendre RDV — Consultation gratuite
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
