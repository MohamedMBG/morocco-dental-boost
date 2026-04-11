import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Shield, Flame, Zap, User, Phone, Stethoscope, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !preferredDay.trim()) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }

    const servicePart = service ? ` pour ${service}` : "";
    const dayPart = ` (jour prefere : ${preferredDay})`;
    const message = `Bonjour, je suis ${name.trim()}. Je souhaite prendre RDV${servicePart}${dayPart}. Mon numero : ${phone.trim()}`;

    window.open(`https://wa.me/212631581901?text=${encodeURIComponent(message)}`, "_blank");
    toast.success("Redirection vers WhatsApp - reponse en moins de 30 min !");
  };

  return (
    <section
      className="bg-background py-12 md:py-24"
      id="booking"
      aria-label="Formulaire de prise de RDV ORIS DENTAL CENTER"
    >
      <div className="container px-4 sm:px-6">
        <div className="mx-auto max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card p-5 shadow-card sm:p-8 md:rounded-3xl md:p-10"
          >
            <div className="mb-6 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600 sm:text-sm">
                <Flame className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                Places limitees cette semaine
              </div>

              <h2 className="font-heading text-2xl font-extrabold leading-tight text-foreground sm:text-3xl md:text-4xl">
                Prendre
                <br className="sm:hidden" /> RDV
              </h2>

              <p className="mt-2 flex flex-wrap items-center justify-center gap-1.5 text-sm text-muted-foreground sm:text-base">
                <Zap className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                Reponse garantie en moins de <strong className="text-foreground">30 minutes</strong> via WhatsApp
              </p>
            </div>

            <div className="mb-6 border-t border-border" />

            <form onSubmit={handleSubmit} className="space-y-4" aria-label="Formulaire de RDV">
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

              <Field label="Telephone / WhatsApp *" icon={Phone}>
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
                  aria-label="Numero de telephone"
                />
              </Field>

              <Field label="Soin souhaite (optionnel)" icon={Stethoscope}>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger
                    id="booking-service"
                    className="h-12 border-border bg-secondary/50 text-base"
                    aria-label="Soin souhaite"
                  >
                    <SelectValue placeholder="Choisir un soin..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Blanchiment dentaire">Blanchiment dentaire</SelectItem>
                    <SelectItem value="Implants dentaires">Implants dentaires</SelectItem>
                    <SelectItem value="Hollywood Smile">Hollywood Smile</SelectItem>
                    <SelectItem value="Orthodontie Invisalign">Orthodontie Invisalign</SelectItem>
                    <SelectItem value="Facettes dentaires">Facettes dentaires</SelectItem>
                    <SelectItem value="Urgence dentaire">Urgence dentaire</SelectItem>
                    <SelectItem value="Soins generaux">Soins generaux / Detartrage</SelectItem>
                    <SelectItem value="Autre / Je ne sais pas">Autre / Je ne sais pas encore</SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              <Field label="Jour prefere *" icon={Clock}>
                <Select value={preferredDay} onValueChange={setPreferredDay}>
                  <SelectTrigger
                    id="booking-day"
                    className="h-12 border-border bg-secondary/50 text-base"
                    aria-label="Jour prefere"
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
                className="mt-2 h-14 w-full gap-2 text-base font-bold shadow-cta"
                aria-label="Prendre RDV via WhatsApp"
              >
                <Send className="h-4 w-4 flex-shrink-0" />
                Prendre RDV sur WhatsApp
              </Button>

            </form>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Shield className="h-3.5 w-3.5" aria-hidden="true" />
                Donnees securisees
              </span>
              <span aria-hidden="true">·</span>
              <span>Sans engagement</span>
              <span aria-hidden="true">·</span>
              <span>Reponse en 30 min</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
