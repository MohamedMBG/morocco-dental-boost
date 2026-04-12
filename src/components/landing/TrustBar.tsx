import { Users, Award, MapPin, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "1 200+", label: "Patients traites" },
  { icon: Award, value: "15+", label: "Ans d'experience" },
  { icon: MapPin, value: "Rabat", label: "Centre-ville" },
  { icon: Clock, value: "6j/7", label: "Disponibilite" },
];

const TrustBar = () => {
  return (
    <section className="bg-trust py-8 text-trust-foreground">
      <div className="container">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 text-center motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2"
              style={{ animationDelay: `${i * 120}ms`, animationFillMode: "both" }}
            >
              <stat.icon className="h-6 w-6 text-primary-foreground/70" />
              <span className="font-heading text-2xl font-extrabold md:text-3xl">{stat.value}</span>
              <span className="text-sm text-primary-foreground/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
