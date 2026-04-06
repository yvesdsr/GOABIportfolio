import { motion } from "framer-motion";
import { Search, Target, PenTool, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, title: "Analyse", description: "Compréhension du contexte, du marché et de vos besoins spécifiques." },
  { icon: Target, title: "Stratégie", description: "Définition des objectifs, du positionnement et du plan d'action créatif." },
  { icon: PenTool, title: "Design & Production", description: "Conception, création des livrables et itérations jusqu'à validation." },
  { icon: TrendingUp, title: "Optimisation", description: "Suivi des performances, ajustements et amélioration continue." },
];

const Process = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-orange font-semibold text-sm tracking-wider uppercase">— Mon Process</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Comment je <span className="text-gradient-orange">travaille</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center group"
            >
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-orange/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-orange group-hover:scale-110 transition-all duration-300">
                  <step.icon size={32} className="text-orange group-hover:text-background transition-colors" />
                </div>
                <span className="absolute -top-2 -right-2 md:right-auto md:-left-2 w-8 h-8 rounded-full bg-foreground text-background text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
