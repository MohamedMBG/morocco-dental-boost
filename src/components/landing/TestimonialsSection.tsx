import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Fatima Z.",
    text: "Un service exceptionnel ! Le Dr. Benali m'a redonné confiance en mon sourire. Résultat naturel et indolore.",
    rating: 5,
    service: "Hollywood Smile",
  },
  {
    name: "Youssef M.",
    text: "Clinique très moderne, personnel accueillant. Mon implant a été posé sans aucune douleur. Je recommande à 100%.",
    rating: 5,
    service: "Implant dentaire",
  },
  {
    name: "Salma B.",
    text: "Rendez-vous rapide via WhatsApp, zéro attente. Le blanchiment est incroyable, mes dents n'ont jamais été aussi blanches !",
    rating: 5,
    service: "Blanchiment",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
            Ce que disent nos patients
          </h2>
          <p className="text-muted-foreground mt-3">Note moyenne : ★ 4.9/5 sur +200 avis</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-heading font-bold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.service}</p>
                </div>
                <span className="text-xs bg-primary/10 text-primary font-medium px-2 py-1 rounded-full">Vérifié</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
