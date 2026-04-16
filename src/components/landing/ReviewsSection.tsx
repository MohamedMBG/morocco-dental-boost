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
    text: "J’ai consulté le Dr Fatih El Mehdi à Rabat en urgence pour une infection dentaire ayant nécessité une extraction. Tout a été parfait du début à la fin. Le docteur explique clairement et l’intervention s’est très bien passée.",
  },
  {
    name: "Rajae dahani",
    meta: "Il y a 3 mois",
    rating: 5,
    text: "Excellent dentiste. Très professionnel, à l’écoute et surtout très ponctuel, ce qui est rare et appréciable. Le cabinet est propre et l’accueil est de qualité. Je recommande vivement.",
  },
  {
    name: "Nouhaila Ch",
    meta: "Il y a 4 mois",
    rating: 5,
    text: "Je n’aurais jamais cru dire ça un jour, mais je suis détendue chez le dentiste. Dr Fatih est hyper pro, très sympa et vraiment à l’écoute. Il m’a fait oublier ma phobie. Service top, je recommande à 100 %.",
  },
  {
    name: "Sofia Moatassim",
    meta: "Il y a 7 mois",
    rating: 5,
    text: "Dr Fatih est un dentiste très compétent avec de vraies qualités humaines. Il prend le temps d’expliquer et de rassurer, surtout quand il sent l’anxiété du patient. Sa bienveillance fait toute la différence.",
  },
  {
    name: "Basma Abdallah",
    meta: "Il y a 2 mois",
    rating: 5,
    text: "Je recommande vivement Dr Fatih El Mehdi. Très rassurant, professionnel et attentif, je me suis sentie en confiance du début à la fin. Merci beaucoup pour votre travail.",
  },
  {
    name: "Fatima Ezzahrae Sassine",
    meta: "Il y a 7 mois",
    rating: 5,
    text: "Un dentiste remarquable. Toujours à l’écoute, patient et bienveillant. Les soins sont réalisés sans douleur, avec professionnalisme et une réelle compétence. Je recommande les yeux fermés.",
  },
  {
    name: "Soumia Bouazouz",
    meta: "Il y a 6 mois",
    rating: 5,
    text: "Excellente expérience, le docteur est très professionnel et explique tout clairement avant de commencer. Le cabinet est très propre et les rendez-vous sont respectés.",
  },
  {
    name: "Fatima FADILI",
    meta: "Il y a 9 mois",
    rating: 5,
    text: "J’ai eu recours aux services du Dr Mehdi Fatih pour une extraction de dent de sagesse. L’intervention a été réalisée avec une grande maîtrise, de manière simple et totalement indolore.",
  },
  {
    name: "Boutaina Ziyout",
    meta: "Il y a un an",
    rating: 5,
    text: "J’ai effectué plusieurs soins chez Dr Fatih et je ne peux que recommander. Il est très compétent, attentionné et d’une grande humanité. Loin de toute approche commerciale, il m’a donné de précieux conseils.",
  },
  {
    name: "Kenza Kechab",
    meta: "Il y a 2 ans",
    rating: 5,
    text: "Un excellent docteur. Très satisfaite du docteur Fatih qui a fait preuve d’un très grand professionnalisme dans mon cas. Les soins sont de très bonne qualité, sans douleur ni stress.",
  },
  {
    name: "Dounia Bargach",
    meta: "Il y a un an",
    rating: 5,
    text: "Je suis vraiment satisfaite de mon expérience. Je redoutais un peu le rendez-vous au début, mais au fil des séances, je me suis sentie en confiance. Le Dr a pris le temps de tout expliquer.",
  },
  {
    name: "Abdelouahab Agoumi",
    meta: "Il y a 3 ans",
    rating: 5,
    text: "Le cabinet est équipé des dernières technologies en matière de soins dentaires et le dentiste est très compétent et professionnel. Il a pris le temps de m’expliquer chaque étape.",
  },
  {
    name: "Caterina De Nicolo",
    meta: "Il y a 3 ans",
    rating: 5,
    text: "Je recommande vivement ce cabinet dentaire pour la qualité des soins. Venue en urgence pendant mes vacances au Maroc, j’ai trouvé chez Dr Fatih un professionnalisme et un accueil excellents.",
  },
  {
    name: "Karima Essaghir",
    meta: "Il y a 10 mois",
    rating: 5,
    text: "J’ai apprécié les résultats de mes soins chez Dr Fatih. Expérience agréable, docteur compétent et cabinet propre et accueillant. Merci.",
  },
  {
    name: "Adnane Naili",
    meta: "Il y a 10 mois",
    rating: 5,
    text: "Accueil très aimable. Dr Mehdi est à la fois très professionnel, rassurant et surtout humain. Je n’ai absolument rien senti pendant les soins et les prix sont très justes.",
  },
  {
    name: "Saad Chouar",
    meta: "Il y a 2 ans",
    rating: 5,
    text: "Je recommande vivement Dr Fatih pour son service de qualité, sa bienveillance et son écoute. Mention spéciale pour l’hygiène et la propreté du cabinet et des outils utilisés.",
  },
  {
    name: "Mahdi Lafram",
    meta: "Il y a 11 mois",
    rating: 5,
    text: "Dr Fatih est un excellent dentiste. Ponctuel, rigoureux et compétent. Je le recommande vivement.",
  },
  {
    name: "Salwa Benomar",
    meta: "Il y a un an",
    rating: 5,
    text: "Un excellent dentiste, sérieux et bienveillant. Le centre dentaire est très agréable, l’équipe est très professionnelle et le protocole d’hygiène est parfait.",
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
    text: "Je recommande vivement Dr. El Mehdi Fatih. Très professionnel, à l’écoute et rassurant, il prend le temps d’expliquer clairement toutes les options de traitement. On se sent vraiment en confiance.",
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
    text: "Docteur dynamique et très professionnel. Il m’a rapidement mise à l’aise et a pris le temps de tout m’expliquer avant de commencer le travail.",
  },
  {
    name: "Fatimazohra Louji",
    meta: "Il y a un mois",
    rating: 5,
    text: "Le Dr Fatih se distingue par sa compétence, son professionnalisme, ses techniques modernes et sa façon rassurante de communiquer avec les patients.",
  },
  {
    name: "Yousra ABROUD",
    meta: "Il y a un an",
    rating: 5,
    text: "Dr. Fatih est un dentiste compétent et attentif qui rend chaque visite agréable. Il combine expertise et bienveillance pour offrir une expérience dentaire remarquable.",
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
            Une sélection de vrais avis Google Maps changés automatiquement chaque semaine.
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
