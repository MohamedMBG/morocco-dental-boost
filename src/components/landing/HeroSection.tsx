import { Check, Phone, Star, Flame, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/lib/analytics";
import { clinicInfo } from "@/lib/clinic-info";
import heroPortrait from "@/assets/IMG_1909.optimized.jpg";
import heroClinicA from "@/assets/IMG_9182.optimized.jpg";
import heroClinicB from "@/assets/IMG_9269.optimized.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10 pt-16"
      aria-label={`Section principale - ${clinicInfo.clinicName} Rabat`}
    >
      <div className="container py-12 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-sm font-semibold text-red-600">
              <Flame className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              3 jours de RDV encore disponibles cette semaine
            </div>

            <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              {clinicInfo.clinicName} à Rabat Hay Riad
            </span>

            <h1 className="font-heading text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Le dentiste à qui vous faites <span className="text-gradient-primary">enfin confiance</span>
            </h1>

            <p className="max-w-lg text-lg text-muted-foreground">
              Une prise en charge humaine, rassurante et professionnelle du début à la fin.
            </p>

            <ul className="space-y-3">
              {[
                "Lauréat de la faculté de médecine dentaire de Rabat - Université Mohamed V",
                "Diplôme Universitaire d'implantologie - Université Internationale de Rabat",
                "10 ans d'expérience et un suivi personnalisé",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#0596de] text-[#0596de]" />
                ))}
              </div>
              <span>
                <strong className="text-foreground">4.9/5</strong> - basé sur 91 avis Google
              </span>
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              <Button
                id="hero-cta-booking"
                size="lg"
                className="btn-rdv-blue w-full px-8 text-base font-bold shadow-cta sm:w-auto"
                onClick={() => {
                  trackButtonClick({
                    buttonId: "hero-cta-booking",
                    buttonText: "Réserver ma consultation",
                    buttonLocation: "hero",
                    actionType: "scroll_to_booking",
                    destination: "#booking",
                  });
                  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
                }}
                aria-label={`Prendre RDV à ${clinicInfo.clinicName}`}
              >
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                Réserver ma consultation
              </Button>

              <Button
                id="hero-cta-phone"
                size="lg"
                variant="outline"
                className="w-full gap-2 border-primary/30 font-semibold text-primary hover:bg-primary/5 sm:w-auto"
                asChild
              >
                <a
                  href={clinicInfo.landlineHref}
                  aria-label={`Prendre RDV par appel avec ${clinicInfo.clinicName}`}
                  onClick={() =>
                    trackButtonClick({
                      buttonId: "hero-cta-phone",
                      buttonText: "Prendre RDV par appel",
                      buttonLocation: "hero",
                      actionType: "phone_call",
                      destination: clinicInfo.landlineHref,
                    })
                  }
                >
                  <Phone className="h-4 w-4" />
                  Prendre RDV par appel
                </a>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="grid w-full max-w-[34rem] gap-4 sm:grid-cols-[1.35fr_0.8fr]">
              <div className="relative">
                <div className="absolute inset-0 scale-105 rotate-3 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5" />
                <img
                  src={heroPortrait}
                  alt="Patiente dans la clinique dentaire à Rabat"
                  className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-card"
                  width={1080}
                  height={1350}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />

                <div className="absolute -bottom-4 -left-2 rounded-2xl border border-border bg-card p-4 shadow-card">
                  <div className="flex items-center gap-2">
                    <div className="flex text-[#0596de]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#0596de] text-[#0596de]" />
                      ))}
                    </div>
                    <span className="font-body text-lg font-bold text-foreground">4.9</span>
                  </div>
                  <p className="mt-0.5 font-body text-xs text-muted-foreground">+1 200 patients satisfaits</p>
                </div>
              </div>

              <div className="grid gap-4">
                <img
                  src={heroClinicA}
                  alt="Salle de soin moderne à Rabat"
                  className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card"
                  width={1200}
                  height={900}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
                <img
                  src={heroClinicB}
                  alt="Intérieur du cabinet dentaire à Hay Riad"
                  className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card"
                  width={1200}
                  height={900}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
