import { MapPin, Navigation, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/lib/analytics";
import { clinicInfo } from "@/lib/clinic-info";

const GoogleMapSection = () => {
  return (
    <section className="bg-background py-16 md:py-24" id="location">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-extrabold text-foreground md:text-4xl">
            {clinicInfo.clinicName} a Rabat
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Situe a l'angle Av. Al Araar et Av. Ben Barka a Hay Riad,{" "}
            {clinicInfo.clinicName} est facile d'acces pour une consultation
            dentaire, un controle ou une urgence.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-5">
          <div className="h-[350px] overflow-hidden rounded-2xl border border-border shadow-card md:col-span-3 md:h-[420px]">
            <iframe
              src={clinicInfo.mapsEmbedHref}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Localisation ${clinicInfo.clinicName} Rabat`}
            />
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-card md:col-span-2">
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">Adresse</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Angle Av. Al Araar et Av. Ben Barka
                    <br />
                    Residence Dounia A, Appt 12, 3eme etage
                    <br />
                    Hay Riad, Rabat 10100
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">Horaires</h3>
                  <div className="mt-0.5 space-y-0.5 text-sm text-muted-foreground">
                    <p>{clinicInfo.hoursDetailed}</p>
                    <p className="font-medium text-destructive">Dimanche : Ferme</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">Contact</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    <a
                      href={clinicInfo.landlineHref}
                      className="transition-colors hover:text-primary"
                      onClick={() =>
                        trackButtonClick({
                          buttonId: "location-phone-link",
                          buttonText: clinicInfo.landlineDisplay,
                          buttonLocation: "location",
                          actionType: "phone_call",
                          destination: clinicInfo.landlineHref,
                        })
                      }
                    >
                      {clinicInfo.landlineDisplay}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <Button className="w-full gap-2 font-bold" asChild>
                <a
                  href={clinicInfo.mapsDirectionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackButtonClick({
                      buttonId: "location-maps-cta",
                      buttonText: "Itineraire Google Maps",
                      buttonLocation: "location",
                      actionType: "maps_direction",
                      destination: clinicInfo.mapsDirectionsHref,
                    })
                  }
                >
                  <Navigation className="h-4 w-4" />
                  Itineraire Google Maps
                </a>
              </Button>
              <Button
                variant="outline"
                className="w-full border-primary/30 font-semibold text-primary hover:bg-primary/5"
                onClick={() => {
                  trackButtonClick({
                    buttonId: "location-booking-cta",
                    buttonText: "Prendre RDV",
                    buttonLocation: "location",
                    actionType: "scroll_to_booking",
                    destination: "#booking",
                  });
                  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Prendre RDV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMapSection;
