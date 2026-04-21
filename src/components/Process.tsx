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
    <section id="process" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— Mon Process</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-tight">
            Comment je <span className="italic font-light">travaille.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border/50 border border-subtle rounded-3xl overflow-hidden">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-background p-10 group hover:bg-card transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-display text-5xl text-muted-foreground/20 group-hover:text-orange/40 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <step.icon size={20} className="text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
