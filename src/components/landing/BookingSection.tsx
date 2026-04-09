import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const BookingSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }
    const message = `Bonjour, je suis ${name.trim()}. Je souhaite prendre rendez-vous${time ? ` (${time})` : ""}. Mon numéro : ${phone.trim()}`;
    window.open(
      `https://wa.me/212600000000?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    toast.success("Redirection vers WhatsApp...");
  };

  return (
    <section className="py-16 md:py-24 bg-background" id="booking">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent mb-4">
                <Clock className="w-4 h-4" />
                Places limitées — Consultation gratuite cette semaine
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
                Prenez rendez-vous maintenant
              </h2>
              <p className="text-muted-foreground mt-2">
                Réponse en moins de 30 minutes via WhatsApp
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Votre nom complet *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 text-base bg-secondary/50 border-border"
                required
                maxLength={100}
              />
              <Input
                placeholder="Numéro de téléphone *"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-12 text-base bg-secondary/50 border-border"
                required
                maxLength={20}
              />
              <Select value={time} onValueChange={setTime}>
                <SelectTrigger className="h-12 text-base bg-secondary/50 border-border">
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
                type="submit"
                size="lg"
                className="w-full h-14 text-base font-heading font-bold shadow-cta gap-2"
              >
                <Send className="w-5 h-5" />
                Confirmer le rendez-vous
              </Button>

              <div className="text-center">
                <span className="text-xs text-muted-foreground">ou directement via</span>
              </div>

              <Button
                type="button"
                size="lg"
                className="w-full h-14 text-base bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-heading font-bold gap-2"
                asChild
              >
                <a href="https://wa.me/212600000000?text=Bonjour, je souhaite prendre rendez-vous" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Réserver via WhatsApp
                </a>
              </Button>
            </form>

            <div className="flex items-center justify-center gap-4 mt-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5" /> Données sécurisées</span>
              <span>•</span>
              <span>Sans engagement</span>
              <span>•</span>
              <span>Réponse rapide</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
