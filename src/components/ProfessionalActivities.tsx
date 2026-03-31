import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

const ProfessionalActivities = () => {
  const carteJeunesVideos = ["/videos/carte-jeunes-1.mp4", "/videos/carte-jeunes-2.mp4", "/videos/carte-jeunes-3.mp4"];
  const pnsarVideos = ["/videos/pnsar-1.mp4", "/videos/pnsar-2.mp4", "/videos/pnsar-3.mp4", "/videos/pnsar-4.mp4"];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">— Événements</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Activités <span className="text-gradient-purple">Professionnelles</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {/* Carte Jeunes */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-muted rounded-3xl p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-orange flex items-center justify-center">
                <Award className="text-orange-foreground" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Carte Jeunes - Lancement</h3>
                <p className="text-sm text-muted-foreground">Sofitel Hôtel Ivoire, Abidjan</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden mb-6">
              <img src="/activities/carte-jeunes-1.jpeg" alt="Carte Jeunes" className="w-full h-auto max-h-[400px] object-cover" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {carteJeunesVideos.map((video, i) => (
                <div key={i} className="rounded-xl overflow-hidden">
                  <video controls className="w-full aspect-video object-cover" preload="metadata">
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
              ))}
            </div>
          </motion.div>

          {/* PNSAR */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-muted rounded-3xl p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <GraduationCap className="text-primary-foreground" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Programme PNSAR</h3>
                <p className="text-sm text-muted-foreground">Insertion professionnelle des jeunes</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {pnsarVideos.map((video, i) => (
                <div key={i} className="rounded-xl overflow-hidden">
                  <video controls className="w-full aspect-video object-cover" preload="metadata">
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalActivities;
