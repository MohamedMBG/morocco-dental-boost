import { motion } from "framer-motion";
import { Star, Quote, ThumbsUp } from "lucide-react";

const reviews = [
  {
    name: "Karim E.",
    avatar: "K",
    rating: 5,
    date: "Il y a 2 semaines",
    text: "Expérience incroyable du début à la fin. Le Dr. Benali a pris le temps de tout m'expliquer avant l'intervention. Mon implant est parfait, aucune douleur. Le personnel est aux petits soins.",
    service: "Implant dentaire",
    source: "Google",
    helpful: 12,
  },
  {
    name: "Nadia K.",
    avatar: "N",
    rating: 5,
    date: "Il y a 1 mois",
    text: "J'avais très peur du dentiste mais l'équipe de DentaCare m'a mise en confiance dès mon arrivée. Le blanchiment a donné un résultat spectaculaire. Je souris enfin sans complexe !",
    service: "Blanchiment dentaire",
    source: "Google",
    helpful: 8,
  },
  {
    name: "Omar T.",
    avatar: "O",
    rating: 5,
    date: "Il y a 3 semaines",
    text: "Clinique ultra moderne, on se croirait dans un cabinet européen. Les facettes que j'ai posées sont magnifiques et naturelles. Rapport qualité-prix imbattable au Maroc.",
    service: "Facettes dentaires",
    source: "Google",
    helpful: 15,
  },
  {
    name: "Amina R.",
    avatar: "A",
    rating: 5,
    date: "Il y a 1 semaine",
    text: "Prise de rendez-vous rapide via WhatsApp, zéro temps d'attente. Mon fils a eu une urgence dentaire et ils l'ont pris en charge immédiatement. Merci infiniment !",
    service: "Urgence dentaire",
    source: "Google",
    helpful: 6,
  },
  {
    name: "Hassan B.",
    avatar: "H",
    rating: 4,
    date: "Il y a 2 mois",
    text: "Très bon suivi pour mon traitement Invisalign. Les résultats sont déjà visibles après 3 mois. Le seul bémol : le parking est un peu compliqué dans le quartier.",
    service: "Orthodontie Invisalign",
    source: "Google",
    helpful: 4,
  },
  {
    name: "Leila M.",
    avatar: "L",
    rating: 5,
    date: "Il y a 5 jours",
    text: "Hollywood Smile parfait ! Mes amies n'en reviennent pas du résultat. Le Dr. Benali est un vrai artiste. Je recommande les yeux fermés à toute personne qui hésite.",
    service: "Hollywood Smile",
    source: "Google",
    helpful: 19,
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden>
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="font-heading font-bold text-lg text-foreground">Avis Google</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
            Ce que nos patients disent de nous
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-heading font-bold text-xl text-foreground">4.9</span>
            <span className="text-muted-foreground text-sm">basé sur 237 avis</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl p-5 shadow-card border border-border hover:shadow-soft transition-shadow"
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-heading font-bold text-primary text-sm flex-shrink-0">
                  {review.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-foreground text-sm">{review.name}</span>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" aria-hidden>
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, j) => (
                        <Star key={j} className="w-3 h-3 fill-gold text-gold" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="relative">
                <Quote className="w-4 h-4 text-primary/20 absolute -top-1 -left-1" />
                <p className="text-sm text-foreground/80 leading-relaxed pl-4">{review.text}</p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                <span className="text-xs bg-primary/10 text-primary font-medium px-2.5 py-1 rounded-full">
                  {review.service}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <ThumbsUp className="w-3 h-3" />
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
