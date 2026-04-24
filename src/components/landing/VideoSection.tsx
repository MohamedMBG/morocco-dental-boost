import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import clinicTourVideo from "@/assets/0604.mp4";
import clinicTourPoster from "@/assets/IMG_9279.optimized.jpg";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayToggle = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      return;
    }

    void videoRef.current.play().catch(() => {
      setIsPlaying(false);
    });
  };

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-extrabold text-foreground md:text-4xl">
            Découvrez notre clinique
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Une vidéo réelle de la clinique, de l'ambiance et de nos installations à Rabat.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <div className="group relative z-0 aspect-video overflow-hidden rounded-2xl border border-border bg-trust shadow-card">
            <video
              ref={videoRef}
              className={cn("relative z-0 h-full w-full object-cover", !isPlaying && "pointer-events-none")}
              poster={clinicTourPoster}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              controls={isPlaying}
              playsInline
              preload="none"
            >
              <source src={clinicTourVideo} type="video/mp4" />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>

            {!isPlaying && (
              <button
                onClick={handlePlayToggle}
                className="absolute inset-0 z-10 flex cursor-pointer flex-col items-center justify-center bg-trust/50 transition-colors hover:bg-trust/40"
                aria-label="Lire la vidéo de la clinique"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-cta md:h-24 md:w-24">
                  <Play className="ml-1 h-8 w-8 text-primary-foreground md:h-10 md:w-10" />
                </div>
                <span className="mt-4 font-heading text-sm font-semibold text-primary-foreground/90">
                  Regarder la vidéo
                </span>
              </button>
            )}

            {isPlaying && (
              <button
                onClick={handlePlayToggle}
                className="absolute bottom-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-background/90 text-foreground shadow-card transition hover:bg-background"
                aria-label="Mettre la vidéo en pause"
              >
                <Pause className="h-5 w-5" />
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
