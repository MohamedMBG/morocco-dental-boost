import { useState } from "react";
import { Send, Shield, Flame, Zap, User, Phone, Stethoscope, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { trackFormSubmit } from "@/lib/analytics";
import { clinicInfo } from "@/lib/clinic-info";

const Field = ({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) => (
  <div className="space-y-1.5">
    <label className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
      <Icon className="h-3.5 w-3.5 flex-shrink-0 text-primary" aria-hidden="true" />
      {label}
    </label>
    {children}
  </div>
);

const BookingSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredDay, setPreferredDay] = useState("");
  const [service, setService] = useState("");
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !preferredDay.trim()) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/book-appointment.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          preferredDay: preferredDay.trim(),
          service: service.trim(),
          website: website.trim(),
        }),
      });

      const data = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(data?.message || "Impossible d'envoyer votre demande pour le moment.");
      }

      trackFormSubmit({
        formName: "booking_email_form",
        buttonId: "booking-submit",
        serviceName: service || undefined,
      });

      setName("");
      setPhone("");
      setPreferredDay("");
      setService("");
      setWebsite("");
      toast.success("Votre demande a bien été envoyée. Nous vous recontacterons rapidement.");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Une erreur est survenue. Merci de réessayer.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="bg-background py-12 md:py-24"
      id="booking"
      aria-label={`Formulaire de prise de RDV ${clinicInfo.clinicName}`}
    >
      <div className="container px-4 sm:px-6">
        <div className="mx-auto max-w-lg">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-card sm:p-8 md:rounded-3xl md:p-10">
            <div className="mb-6 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600 sm:text-sm">
                <Flame className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                Places limitées cette semaine
              </div>

              <h2 className="font-heading text-2xl font-extrabold leading-tight text-foreground sm:text-3xl md:text-4xl">
                Prendre
                <br className="sm:hidden" /> RDV
              </h2>

              <p className="mt-2 flex flex-wrap items-center justify-center gap-1.5 text-sm text-muted-foreground sm:text-base">
                <Zap className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                Réponse garantie en moins de <strong className="text-foreground">30 minutes</strong> par notre équipe
              </p>
            </div>

            <div className="mb-6 border-t border-border" />

            <form onSubmit={handleSubmit} className="space-y-4" aria-label="Formulaire de RDV">
              <div className="hidden" aria-hidden="true">
                <label htmlFor="booking-website">Website</label>
                <input
                  id="booking-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <Field label="Votre nom complet *" icon={User}>
                <Input
                  id="booking-name"
                  placeholder="Ex : Fatima Zahra El Idrissi"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 border-border bg-secondary/50 text-base"
                  required
                  maxLength={100}
                  autoComplete="name"
                  aria-label="Nom complet"
                />
              </Field>

              <Field label="Téléphone / WhatsApp *" icon={Phone}>
                <Input
                  id="booking-phone"
                  placeholder="Ex : 06 12 34 56 78"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-12 border-border bg-secondary/50 text-base"
                  required
                  maxLength={20}
                  autoComplete="tel"
                  aria-label="Numéro de téléphone"
                />
              </Field>

              <Field label="Soin souhaité (optionnel)" icon={Stethoscope}>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger
                    id="booking-service"
                    className="h-12 border-border bg-secondary/50 text-base"
                    aria-label="Soin souhaité"
                  >
                    <SelectValue placeholder="Choisir un soin..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Implantologie">Implantologie</SelectItem>
                    <SelectItem value="Facettes">Facettes</SelectItem>
                    <SelectItem value="Blanchiment dentaire">Blanchiment dentaire</SelectItem>
                    <SelectItem value="Parodontologie">Parodontologie</SelectItem>
                    <SelectItem value="Orthodontie">Orthodontie</SelectItem>
                    <SelectItem value="Chirurgie orale">Chirurgie orale</SelectItem>
                    <SelectItem value="Prothèses dentaires">Prothèses dentaires</SelectItem>
                    <SelectItem value="Endodontie (dévitalisation)">Endodontie (dévitalisation)</SelectItem>
                    <SelectItem value="Détartrage">Détartrage</SelectItem>
                    <SelectItem value="Urgences dentaires">Urgences dentaires</SelectItem>
                    <SelectItem value="Autre / Je ne sais pas">Autre / Je ne sais pas encore</SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              <Field label="Jour préféré *" icon={Clock}>
                <Select value={preferredDay} onValueChange={setPreferredDay}>
                  <SelectTrigger
                    id="booking-day"
                    className="h-12 border-border bg-secondary/50 text-base"
                    aria-label="Jour préféré"
                  >
                    <SelectValue placeholder="Choisir un jour..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Lundi">Lundi</SelectItem>
                    <SelectItem value="Mardi">Mardi</SelectItem>
                    <SelectItem value="Mercredi">Mercredi</SelectItem>
                    <SelectItem value="Jeudi">Jeudi</SelectItem>
                    <SelectItem value="Vendredi">Vendredi</SelectItem>
                    <SelectItem value="Samedi">Samedi</SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              <Button
                id="booking-submit"
                type="submit"
                size="lg"
                className="btn-rdv-blue mt-2 h-14 w-full gap-2 text-base font-bold shadow-cta"
                aria-label="Envoyer ma demande de RDV"
                disabled={isSubmitting}
              >
                <Send className="h-4 w-4 flex-shrink-0" />
                {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
              </Button>
            </form>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Shield className="h-3.5 w-3.5" aria-hidden="true" />
                Données sécurisées
              </span>
              <span aria-hidden="true">·</span>
              <span>Sans engagement</span>
              <span aria-hidden="true">·</span>
              <span>Réponse en 30 min</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
