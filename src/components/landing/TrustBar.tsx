import { motion } from "framer-motion";
import { Users, Award, MapPin, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "1 200+", label: "Patients traités" },
  { icon: Award, value: "15+", label: "Ans d'expérience" },
  { icon: MapPin, value: "Rabat", label: "Centre-ville" },
  { icon: Clock, value: "6j/7", label: "Disponibilité" },
];

const TrustBar = () => {
  return (
    <section className="bg-trust text-trust-foreground py-8">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <stat.icon className="w-6 h-6 text-primary-foreground/70" />
              <span className="font-heading text-2xl md:text-3xl font-extrabold">{stat.value}</span>
              <span className="text-sm text-primary-foreground/60">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
