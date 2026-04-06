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
    <section className="py-24 bg-section-purple">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">— Pourquoi moi ?</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Un profil <span className="text-gradient-purple">unique</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((r, index) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-background rounded-2xl p-8 border border-border hover:border-primary hover:shadow-lg transition-all duration-500 hover-lift flex gap-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-300">
                  <r.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{r.title}</h3>
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
