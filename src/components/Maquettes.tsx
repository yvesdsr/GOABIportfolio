import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Layout } from "lucide-react";

const Maquettes = () => {
  return (
    <section className="py-24 bg-section-orange">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-orange font-semibold text-sm tracking-wider uppercase">— UI/UX Design</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Maquettes <span className="text-gradient-orange">UI/UX</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Mes créations de maquettes et prototypes d'interfaces utilisateur
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-background rounded-3xl p-12 border-2 border-dashed border-orange/30 flex flex-col items-center justify-center min-h-[300px]">
            <Layout className="text-orange mb-4" size={48} />
            <h3 className="text-xl font-bold mb-2">Section en construction</h3>
            <p className="text-muted-foreground text-center max-w-md">
              Mes maquettes UI/UX arrivent bientôt. En attendant, découvrez mes prototypes dans la section projets.
            </p>
            <Badge className="mt-4 bg-orange/10 text-orange border-none">Coming Soon</Badge>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Maquettes;
