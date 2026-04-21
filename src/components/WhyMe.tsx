import { motion } from "framer-motion";
import { Sparkles, BarChart3, Layers, Zap } from "lucide-react";

const reasons = [
  { icon: Layers, title: "Profil Hybride", description: "Design + Communication + Développement. Un seul interlocuteur pour tous vos besoins créatifs." },
  { icon: BarChart3, title: "Orienté Résultats", description: "+117K vues, +47K abonnés — je ne fais pas que du beau, je génère de la performance." },
  { icon: Sparkles, title: "Vision Stratégique", description: "Chaque design est pensé pour servir vos objectifs business et pas seulement esthétiques." },
  { icon: Zap, title: "Exécution Rapide", description: "Processus optimisé, outils modernes et livraison dans les délais." },
];

const WhyMe = () => {
  return (
    <section className="py-32 bg-section-dark">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— Pourquoi moi ?</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-tight">
            Un profil <span className="italic font-light">unique.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="bg-card border border-subtle rounded-3xl p-8 hover:border-foreground/30 transition-all duration-500 hover-lift flex gap-5 card-shine">
                <div className="w-12 h-12 rounded-xl border border-subtle bg-foreground/[0.03] flex items-center justify-center flex-shrink-0 group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                  <r.icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
