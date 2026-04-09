import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, Clock, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

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
      className="py-16 md:py-24 bg-background"
      id="booking"
      aria-label="Formulaire de prise de rendez-vous DentaCare Rabat"
    >
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-4 py-1.5 text-sm font-semibold text-red-600 mb-4">
                <Clock className="w-4 h-4" />
                🔥 Places limitées — Consultation gratuite jusqu'à fin de semaine
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
                Réservez votre consultation gratuite
              </h2>
              <p className="text-muted-foreground mt-2">
                ⚡ Réponse garantie en moins de <strong>30 minutes</strong> via WhatsApp
              </p>

              {/* Mini social proof */}
              <div className="flex items-center justify-center gap-4 mt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-primary" />
                  <strong className="text-foreground">+1 200</strong> patients traités
                </span>
                <span aria-hidden>•</span>
                <span>⭐ 4.9/5 sur Google</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" aria-label="Formulaire de rendez-vous">
              <Input
                id="booking-name"
                placeholder="Votre nom complet *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 text-base bg-secondary/50 border-border"
                required
                maxLength={100}
                aria-label="Nom complet"
              />
              <Input
                id="booking-phone"
                placeholder="Numéro de téléphone (WhatsApp) *"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-12 text-base bg-secondary/50 border-border"
                required
                maxLength={20}
                aria-label="Numéro de téléphone"
              />
              <Select value={service} onValueChange={setService}>
                <SelectTrigger
                  id="booking-service"
                  className="h-12 text-base bg-secondary/50 border-border"
                  aria-label="Soin souhaité"
                >
                  <SelectValue placeholder="Soin souhaité (optionnel)" />
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
              <Select value={time} onValueChange={setTime}>
                <SelectTrigger
                  id="booking-time"
                  className="h-12 text-base bg-secondary/50 border-border"
                  aria-label="Créneau préféré"
                >
                  <SelectValue placeholder="Créneau préféré (optionnel)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Matin (8h-12h)">Matin (8h-12h)</SelectItem>
                  <SelectItem value="Après-midi (14h-18h)">Après-midi (14h-18h)</SelectItem>
                  <SelectItem value="Soir (18h-20h)">Soir (18h-20h)</SelectItem>
                  <SelectItem value="Samedi">Samedi</SelectItem>
                </SelectContent>
              </Select>

              <Button
                id="booking-submit"
                type="submit"
                size="lg"
                className="w-full h-14 text-base font-heading font-bold shadow-cta gap-2"
                aria-label="Confirmer le rendez-vous via WhatsApp"
              >
                <Send className="w-5 h-5" />
                Confirmer ma consultation gratuite →
              </Button>

              <div className="text-center">
                <span className="text-xs text-muted-foreground">ou réservez directement</span>
              </div>

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
                  <MessageCircle className="w-5 h-5" />
                  Réserver via WhatsApp maintenant
                </a>
              </Button>
            </form>

            <div className="flex items-center justify-center gap-4 mt-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5" aria-hidden="true" /> Données sécurisées
              </span>
              <span aria-hidden>•</span>
              <span>Sans engagement</span>
              <span aria-hidden>•</span>
              <span>Réponse en 30 min</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;


