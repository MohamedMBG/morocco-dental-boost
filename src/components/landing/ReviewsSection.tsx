import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clinicInfo } from "@/lib/clinic-info";

type ReviewItem = {
  name: string;
  meta: string;
  rating: number;
  text: string;
};

const googleReviews: ReviewItem[] = [
  {
    name: "Youssef TADLI",
    meta: "Il y a un mois",
    rating: 5,
    text: "J’ai consulte le Dr Fatih El Mehdi a Rabat en urgence pour une infection dentaire ayant necessite une extraction. Tout a ete parfait du debut a la fin. Le docteur explique clairement et l’intervention s’est tres bien passee.",
  },
  {
    name: "Rajae dahani",
    meta: "Il y a 3 mois",
    rating: 5,
    text: "Excellent dentiste. Tres professionnel, a l’ecoute et surtout tres ponctuel, ce qui est rare et appreciable. Le cabinet est propre et l’accueil est de qualite. Je recommande vivement.",
  },
  {
    name: "Nouhaila Ch",
    meta: "Il y a 4 mois",
    rating: 5,
    text: "Je n’aurais jamais cru dire ca un jour, mais je suis detendue chez le dentiste. Dr Fatih est hyper pro, tres sympa et vraiment a l’ecoute. Il m’a fait oublier ma phobie. Service top, je recommande a 100 %.",
  },
  {
    name: "Sofia Moatassim",
    meta: "Il y a 7 mois",
    rating: 5,
    text: "Dr Fatih est un dentiste tres competent avec de vraies qualites humaines. Il prend le temps d’expliquer et de rassurer, surtout quand il sent l’anxiete du patient. Sa bienveillance fait toute la difference.",
  },
  {
    name: "Basma Abdallah",
    meta: "Il y a 2 mois",
    rating: 5,
    text: "Je recommande vivement Dr Fatih El Mehdi. Tres rassurant, professionnel et attentif, je me suis sentie en confiance du debut a la fin. Merci beaucoup pour votre travail.",
  },
  {
    name: "Fatima Ezzahrae Sassine",
    meta: "Il y a 7 mois",
    rating: 5,
    text: "Un dentiste remarquable. Toujours a l’ecoute, patient et bienveillant. Les soins sont realises sans douleur, avec professionnalisme et une reelle competence. Je recommande les yeux fermes.",
  },
  {
    name: "Soumia Bouazouz",
    meta: "Il y a 6 mois",
    rating: 5,
    text: "Excellente experience, le docteur est tres professionnel et explique tout clairement avant de commencer. Le cabinet est tres propre et les rendez-vous sont respectes.",
  },
  {
    name: "Fatima FADILI",
    meta: "Il y a 9 mois",
    rating: 5,
    text: "J’ai eu recours aux services du Dr Mehdi Fatih pour une extraction de dent de sagesse. L’intervention a ete realisee avec une grande maitrise, de maniere simple et totalement indolore.",
  },
  {
    name: "Boutaina Ziyout",
    meta: "Il y a un an",
    rating: 5,
    text: "J’ai effectue plusieurs soins chez Dr Fatih et je ne peux que recommander. Il est tres competent, attentionne et d’une grande humanite. Loin de toute approche commerciale, il m’a donne de precieux conseils.",
  },
  {
    name: "Kenza Kechab",
    meta: "Il y a 2 ans",
    rating: 5,
    text: "Un excellent docteur. Tres satisfaite du docteur Fatih qui a fait preuve d’un tres grand professionnalisme dans mon cas. Les soins sont de tres bonne qualite, sans douleur ni stress.",
  },
  {
    name: "Dounia Bargach",
    meta: "Il y a un an",
    rating: 5,
    text: "Je suis vraiment satisfaite de mon experience. Je redoutais un peu le rendez-vous au debut, mais au fil des seances, je me suis sentie en confiance. Le Dr a pris le temps de tout expliquer.",
  },
  {
    name: "Abdelouahab Agoumi",
    meta: "Il y a 3 ans",
    rating: 5,
    text: "Le cabinet est equipe des dernieres technologies en matiere de soins dentaires et le dentiste est tres competent et professionnel. Il a pris le temps de m’expliquer chaque etape.",
  },
  {
    name: "Caterina De Nicolo",
    meta: "Il y a 3 ans",
    rating: 5,
    text: "Je recommande vivement ce cabinet dentaire pour la qualite des soins. Venue en urgence pendant mes vacances au Maroc, j’ai trouve chez Dr Fatih un professionnalisme et un accueil excellents.",
  },
  {
    name: "Karima Essaghir",
    meta: "Il y a 10 mois",
    rating: 5,
    text: "J’ai apprecie les resultats de mes soins chez Dr Fatih. Experience agreable, docteur competent et cabinet propre et accueillant. Merci.",
  },
  {
    name: "Adnane Naili",
    meta: "Il y a 10 mois",
    rating: 5,
    text: "Accueil tres aimable. Dr Mehdi est a la fois tres professionnel, rassurant et surtout humain. Je n’ai absolument rien senti pendant les soins et les prix sont tres justes.",
  },
  {
    name: "Saad Chouar",
    meta: "Il y a 2 ans",
    rating: 5,
    text: "Je recommande vivement Dr Fatih pour son service de qualite, sa bienveillance et son ecoute. Mention speciale pour l’hygiene et la proprete du cabinet et des outils utilises.",
  },
  {
    name: "Mahdi Lafram",
    meta: "Il y a 11 mois",
    rating: 5,
    text: "Dr Fatih est un excellent dentiste. Ponctuel, rigoureux et competent. Je le recommande vivement.",
  },
  {
    name: "Salwa Benomar",
    meta: "Il y a un an",
    rating: 5,
    text: "Un excellent dentiste, serieux et bienveillant. Le centre dentaire est tres agreable, l’equipe est tres professionnelle et le protocole d’hygiene est parfait.",
  },
  {
    name: "Houda Tahoune",
    meta: "Il y a 3 mois",
    rating: 5,
    text: "Excellent accueil. Travail minutieux.",
  },
  {
    name: "Khachfani Aziz",
    meta: "Il y a 5 jours",
    rating: 5,
    text: "Je recommande vivement Dr. El Mehdi Fatih. Tres professionnel, a l’ecoute et rassurant, il prend le temps d’expliquer clairement toutes les options de traitement. On se sent vraiment en confiance.",
  },
  {
    name: "chakir (chak_dady)",
    meta: "Il y a une semaine",
    rating: 5,
    text: "I cannot recommend Dr. El Mehdi and his team enough. The office is modern and clean, the welcome is warm, and the whole experience immediately puts you at ease.",
  },
  {
    name: "aya yatim",
    meta: "Il y a une semaine",
    rating: 5,
    text: "Docteur dynamique et tres professionnel. Il m’a rapidement mise a l’aise et a pris le temps de tout m’expliquer avant de commencer le travail.",
  },
  {
    name: "Fatimazohra Louji",
    meta: "Il y a un mois",
    rating: 5,
    text: "Le Dr Fatih se distingue par sa competence, son professionnalisme, ses techniques modernes et sa facon rassurante de communiquer avec les patients.",
  },
  {
    name: "Yousra ABROUD",
    meta: "Il y a un an",
    rating: 5,
    text: "Dr. Fatih est un dentiste competent et attentif qui rend chaque visite agreable. Il combine expertise et bienveillance pour offrir une experience dentaire remarquable.",
  },
];

const REVIEWS_PER_WEEK = 6;

const getWeekSeed = () => {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const daysSinceStart = Math.floor((now.getTime() - startOfYear.getTime()) / 86400000);
  return now.getFullYear() * 100 + Math.ceil((daysSinceStart + startOfYear.getDay() + 1) / 7);
};

const getWeeklyReviews = () => {
  const seed = getWeekSeed();
  const ranked = googleReviews
    .map((review, index) => ({
      review,
      score: (index * 37 + seed * 17) % 997,
    }))
    .sort((a, b) => a.score - b.score)
    .slice(0, REVIEWS_PER_WEEK)
    .map(({ review }) => review);

  return ranked;
};

const weeklyReviews = getWeeklyReviews();

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
            Avis Google Maps
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Une selection de vrais avis Google Maps changes automatiquement chaque semaine.
          </p>

          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[#0596de] text-[#0596de]" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">Source : fiche Google Maps officielle</span>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {weeklyReviews.map((review, i) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-card p-5 shadow-card"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-heading text-sm font-bold text-foreground">{review.name}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, index) => (
                        <Star key={index} className="h-3.5 w-3.5 fill-[#0596de] text-[#0596de]" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">{review.meta}</span>
                  </div>
                </div>

                <svg viewBox="0 0 24 24" className="h-4 w-4 flex-shrink-0" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-foreground/80">{review.text}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button className="gap-2 font-bold" asChild>
            <a href={clinicInfo.mapsReviewsHref} target="_blank" rel="noopener noreferrer">
              Voir tous les avis Google Maps
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
