import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, Shield, Flame, Zap, User, Phone, Stethoscope, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

/* Labelled field wrapper for clear mobile readability */
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
      <Icon className="w-3.5 h-3.5 text-primary flex-shrink-0" aria-hidden="true" />
      {label}
    </label>
    {children}
  </div>
);

const BookingSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }
    const servicePart = service ? ` pour ${service}` : "";
    const timePart = time ? ` (créneau : ${time})` : "";
    const message = `Bonjour, je suis ${name.trim()}. Je souhaite une consultation gratuite${servicePart}${timePart}. Mon numéro : ${phone.trim()}`;
    window.open(
      `https://wa.me/212600000000?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    toast.success("Redirection vers WhatsApp — réponse en moins de 30 min !");
  };

  return (
    <section
      className="py-12 md:py-24 bg-background"
      id="booking"
      aria-label="Formulaire de prise de rendez-vous DentaCare Rabat"
    >
      <div className="container px-4 sm:px-6">
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl md:rounded-3xl p-5 sm:p-8 md:p-10 shadow-card border border-border"
          >
            {/* ── Header ── */}
            <div className="text-center mb-6">
              {/* Urgency badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3 py-1.5 text-xs sm:text-sm font-semibold text-red-600 mb-4">
                <Flame className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                Places limitées — Consultation gratuite cette semaine
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                Réservez votre<br className="sm:hidden" /> consultation gratuite
              </h2>

              <p className="text-sm sm:text-base text-muted-foreground mt-2 flex items-center justify-center gap-1.5 flex-wrap">
                <Zap className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                Réponse garantie en moins de{" "}
                <strong className="text-foreground">30 minutes</strong> via WhatsApp
              </p>


            </div>

            {/* ── Divider ── */}
            <div className="border-t border-border mb-6" />

            {/* ── Form ── */}
            <form onSubmit={handleSubmit} className="space-y-4" aria-label="Formulaire de rendez-vous">

              <Field label="Votre nom complet *" icon={User}>
                <Input
                  id="booking-name"
                  placeholder="Ex : Fatima Zahra El Idrissi"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 text-base bg-secondary/50 border-border"
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
                  className="h-12 text-base bg-secondary/50 border-border"
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
                    className="h-12 text-base bg-secondary/50 border-border"
                    aria-label="Soin souhaité"
                  >
                    <SelectValue placeholder="Choisir un soin…" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Blanchiment dentaire">Blanchiment dentaire</SelectItem>
                    <SelectItem value="Implants dentaires">Implants dentaires</SelectItem>
                    <SelectItem value="Hollywood Smile">Hollywood Smile</SelectItem>
                    <SelectItem value="Orthodontie Invisalign">Orthodontie Invisalign</SelectItem>
                    <SelectItem value="Facettes dentaires">Facettes dentaires</SelectItem>
                    <SelectItem value="Urgence dentaire">Urgence dentaire</SelectItem>
                    <SelectItem value="Soins généraux">Soins généraux / Détartrage</SelectItem>
                    <SelectItem value="Autre / Je ne sais pas">Autre / Je ne sais pas encore</SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              <Field label="Créneau préféré (optionnel)" icon={Clock}>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger
                    id="booking-time"
                    className="h-12 text-base bg-secondary/50 border-border"
                    aria-label="Créneau préféré"
                  >
                    <SelectValue placeholder="Choisir un créneau…" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Matin (8h-12h)">Matin — 8h à 12h</SelectItem>
                    <SelectItem value="Après-midi (14h-18h)">Après-midi — 14h à 18h</SelectItem>
                    <SelectItem value="Soir (18h-20h)">Soir — 18h à 20h</SelectItem>
                    <SelectItem value="Samedi">Samedi</SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              {/* ── Submit button ── */}
              <Button
                id="booking-submit"
                type="submit"
                size="lg"
                className="w-full h-14 text-base font-heading font-bold shadow-cta gap-2 mt-2"
                aria-label="Confirmer le rendez-vous via WhatsApp"
              >
                <Send className="w-4 h-4 flex-shrink-0" />
                Confirmer ma consultation
              </Button>

              {/* ── Divider ── */}
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex-1 border-t border-border" />
                <span>ou réservez directement</span>
                <span className="flex-1 border-t border-border" />
              </div>

              {/* ── WhatsApp direct button ── */}
              <Button
                id="booking-whatsapp-direct"
                type="button"
                size="lg"
                className="w-full h-14 text-base bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-heading font-bold gap-2"
                asChild
              >
                <a
                  href="https://wa.me/212600000000?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20une%20consultation%20gratuite"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Réserver via WhatsApp maintenant"
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  Réserver via WhatsApp
                </a>
              </Button>
            </form>

            {/* ── Trust bar ── */}
            <div className="flex items-center justify-center gap-3 mt-6 text-xs text-muted-foreground flex-wrap">
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5" aria-hidden="true" />
                Données sécurisées
              </span>
              <span aria-hidden>·</span>
              <span>Sans engagement</span>
              <span aria-hidden>·</span>
              <span>Réponse en 30 min</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
