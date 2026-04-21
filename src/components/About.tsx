import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <img
                src="/images/profile-hero.png"
                alt="Yves Desire GOABI"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display italic text-2xl text-foreground/90">"Le design n'est pas ce que ça fait — c'est ce que ça fait ressentir."</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— À propos</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4 mb-8 leading-tight">
              Un profil hybride,<br />
              <span className="italic font-light">une vision créative</span>
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-base">
              <p>
                Je suis <span className="text-foreground font-medium">Yves Desire GOABI</span>, brand & graphic designer basé à Abidjan. J'aide entrepreneurs, marques et institutions à construire une présence visuelle puissante et cohérente.
              </p>
              <p>
                Mon approche réunit <span className="text-foreground">design, branding, communication digitale, stratégie de contenu</span> et création de produits IA — pour livrer des univers de marque qui ne se contentent pas d'être beaux, mais qui vendent, attirent et durent.
              </p>
              <p>
                Chaque projet est une histoire à raconter avec rigueur, sensibilité et impact.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-10">
              {["Branding", "Direction artistique", "UI/UX", "Communication", "IA Product"].map((s) => (
                <span key={s} className="px-4 py-1.5 rounded-full border border-subtle text-xs uppercase tracking-wider text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>

            <Button
              className="mt-10 bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 gap-2 h-12"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/cv-yves-desire.pdf";
                link.download = "CV_Yves_Desire_GOABI.pdf";
                link.click();
              }}
            >
              <Download size={16} />
              Télécharger mon CV
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
