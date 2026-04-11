import { motion } from "framer-motion";
import { Star, Quote, ThumbsUp } from "lucide-react";

const reviews = [
  {
    name: "Karim E.",
    avatar: "K",
    rating: 5,
    date: "Il y a 2 semaines",
    text: "Experience incroyable du debut a la fin. Le Dr EL Mehdi FATIH a pris le temps de tout m'expliquer avant l'intervention. Mon implant est parfait, aucune douleur. Le personnel est aux petits soins.",
    service: "Implant dentaire",
    helpful: 12,
  },
  {
    name: "Nadia K.",
    avatar: "N",
    rating: 5,
    date: "Il y a 1 mois",
    text: "J'avais tres peur du dentiste mais l'equipe de ORIS DENTAL CENTER m'a mise en confiance des mon arrivee. Le blanchiment a donne un resultat spectaculaire. Je souris enfin sans complexe.",
    service: "Blanchiment dentaire",
    helpful: 8,
  },
  {
    name: "Omar T.",
    avatar: "O",
    rating: 5,
    date: "Il y a 3 semaines",
    text: "Clinique ultra moderne, on se croirait dans un cabinet europeen. Les facettes que j'ai posees sont magnifiques et naturelles. Rapport qualite-prix imbattable au Maroc.",
    service: "Facettes dentaires",
    helpful: 15,
  },
  {
    name: "Amina R.",
    avatar: "A",
    rating: 5,
    date: "Il y a 1 semaine",
    text: "Prise de RDV rapide via WhatsApp, zero temps d'attente. Mon fils a eu une urgence dentaire et ils l'ont pris en charge immediatement. Merci infiniment.",
    service: "Urgence dentaire",
    helpful: 6,
  },
  {
    name: "Hassan B.",
    avatar: "H",
    rating: 4,
    date: "Il y a 2 mois",
    text: "Tres bon suivi pour mon traitement Invisalign. Les resultats sont deja visibles apres 3 mois. Le seul bemol : le parking est un peu complique dans le quartier.",
    service: "Orthodontie Invisalign",
    helpful: 4,
  },
  {
    name: "Leila M.",
    avatar: "L",
    rating: 5,
    date: "Il y a 5 jours",
    text: "Hollywood Smile parfait. Mes amies n'en reviennent pas du resultat. Le Dr EL Mehdi FATIH est un vrai artiste. Je recommande les yeux fermes a toute personne qui hesite.",
    service: "Hollywood Smile",
    helpful: 19,
  },
];

const ReviewsSection = () => {
  return (
    <section className="bg-secondary/30 py-16 md:py-24" id="reviews">
      <div className="container">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="font-heading text-lg font-bold text-foreground">Avis Google</span>
          </div>

          <h2 className="font-heading text-3xl font-extrabold text-foreground md:text-4xl">
            Ce que nos patients disent de nous
          </h2>

          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-heading text-xl font-bold text-foreground">4.9</span>
            <span className="text-sm text-muted-foreground">base sur 237 avis</span>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-5 shadow-card transition-shadow hover:shadow-soft"
            >
              <div className="mb-3 flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {review.avatar}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-sm font-bold text-foreground">{review.name}</span>
                    <svg viewBox="0 0 24 24" className="h-4 w-4 flex-shrink-0" aria-hidden="true">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </div>
                  <div className="mt-0.5 flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, j) => (
                        <Star key={j} className="h-3 w-3 fill-gold text-gold" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Quote className="absolute -left-1 -top-1 h-4 w-4 text-primary/20" />
                <p className="pl-4 text-sm leading-relaxed text-foreground/80">{review.text}</p>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                  {review.service}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <ThumbsUp className="h-3 w-3" />
                  {review.helpful} utile
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
