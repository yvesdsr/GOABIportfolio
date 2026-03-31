import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { number: "20+", label: "Projets Réalisés" },
    { number: "10+", label: "Clients Satisfaits" },
    { number: "3+", label: "Ans d'Expérience" },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left - Photo */}
          <motion.div
            className="flex-shrink-0 relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-orange/20" />
              <img
                src="/images/profile-hero.png"
                alt="Yves Desire GOABI"
                className="w-full h-full object-contain relative z-10"
              />
              {["UI/UX Design", "Web Dev", "Branding", "Vidéo"].map((skill, i) => (
                <motion.div
                  key={skill}
                  className={`absolute z-20 bg-background shadow-card rounded-full px-4 py-2 text-sm font-medium border border-border ${
                    i === 0 ? 'top-4 -left-4' :
                    i === 1 ? 'top-4 -right-4' :
                    i === 2 ? 'bottom-16 -left-8' :
                    'bottom-16 -right-8'
                  }`}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-orange font-semibold text-sm tracking-wider uppercase">— À propos</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-2">
              Qui est <span className="text-gradient-orange">Yves Désiré ?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl">
              Créateur digital passionné, je conçois des identités visuelles, des sites web modernes et du contenu vidéo engageant. Certifié Google en IA et Marketing Digital.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <p className="text-3xl font-bold text-gradient-orange">{stat.number}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <Button
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 gap-2"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/cv-yves-desire.pdf';
                link.download = 'CV_Yves_Desire_GOABI.pdf';
                link.click();
              }}
            >
              <Download size={18} />
              Télécharger mon CV
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
