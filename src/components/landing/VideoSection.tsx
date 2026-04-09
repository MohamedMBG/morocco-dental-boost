import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState, useRef } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
            Découvrez notre clinique
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Visite virtuelle de nos installations modernes et de notre équipe dédiée à votre sourire.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-card border border-border bg-trust aspect-video group">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster=""
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              controls={isPlaying}
              playsInline
              preload="metadata"
            >
              {/* Replace with your actual video URL */}
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>

            {/* Play overlay */}
            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex flex-col items-center justify-center bg-trust/60 cursor-pointer transition-colors hover:bg-trust/50"
                aria-label="Lire la vidéo"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center shadow-cta animate-pulse-glow">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" />
                </div>
                <span className="mt-4 text-sm font-heading font-semibold text-primary-foreground/90">
                  Regarder la vidéo
                </span>
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
