import { Check, Phone, MessageCircle, Star, Flame, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/lib/analytics";
import { clinicInfo } from "@/lib/clinic-info";
import heroPortrait from "@/assets/cabinet-dentaire-hay-riad-rabat.optimized.jpg";
import heroClinicA from "@/assets/IMG_9182.optimized.jpg";
import heroClinicB from "@/assets/IMG_9348.optimized.jpg";

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
              {clinicInfo.clinicName} a Rabat Hay Riad
            </span>

            <h1 className="font-heading text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Le sourire que vous <span className="text-gradient-primary">meritez</span>
            </h1>

            <p className="max-w-lg text-lg text-muted-foreground">
              {clinicInfo.doctorName} vous accueille a {clinicInfo.clinicName} a Rabat Hay
              Riad pour vos soins en implantologie, facettes, blanchiment dentaire et
              traitements dentaires avec un accompagnement personnalise.
            </p>

            <ul className="space-y-3">
              {[
                "Laureat de la faculte de medecine dentaire de Rabat - Universite Mohamed V",
                "Diplome Universitaire d'implantologie - Universite Internationale de Rabat",
                "10 ans d'experience et un suivi personnalise",
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
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <span>
                <strong className="text-foreground">4.9/5</strong> - base sur 237 avis Google
              </span>
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              <Button
                id="hero-cta-booking"
                size="lg"
                className="w-full px-8 text-base font-bold shadow-cta sm:w-auto"
                onClick={() => {
                  trackButtonClick({
                    buttonId: "hero-cta-booking",
                    buttonText: "Prendre RDV",
                    buttonLocation: "hero",
                    actionType: "scroll_to_booking",
                    destination: "#booking",
                  });
                  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
                }}
                aria-label={`Prendre RDV a ${clinicInfo.clinicName}`}
              >
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                Prendre RDV
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

              <Button
                id="hero-cta-whatsapp"
                size="lg"
                className="w-full gap-2 bg-whatsapp font-semibold text-whatsapp-foreground hover:bg-whatsapp/90 sm:w-auto"
                asChild
              >
                <a
                  href={clinicInfo.whatsappRdvHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Prendre RDV sur WhatsApp avec ${clinicInfo.clinicName}`}
                  onClick={() =>
                    trackButtonClick({
                      buttonId: "hero-cta-whatsapp",
                      buttonText: "Prendre RDV sur WhatsApp",
                      buttonLocation: "hero",
                      actionType: "whatsapp",
                      destination: clinicInfo.whatsappHref,
                    })
                  }
                >
                  <MessageCircle className="h-4 w-4" />
                  Prendre RDV sur WhatsApp
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
                  alt="Patiente dans la clinique dentaire a Rabat"
                  className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-card"
                  width={1080}
                  height={1350}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />

                <div className="absolute -bottom-4 -left-2 rounded-2xl border border-border bg-card p-4 shadow-card">
                  <div className="flex items-center gap-2">
                    <div className="flex text-gold">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <span className="font-heading font-bold text-foreground">4.9</span>
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">+1 200 patients satisfaits</p>
                </div>
              </div>

              <div className="grid gap-4">
                <img
                  src={heroClinicA}
                  alt="Salle de soin moderne a Rabat"
                  className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card"
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={heroClinicB}
                  alt="Interieur du cabinet dentaire a Hay Riad"
                  className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card"
                  width={1200}
                  height={900}
                  loading="lazy"
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
