import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Layout } from "lucide-react";

const maquettes = [
  {
    title: "ONG AEJF - Maquette Site Web",
    description: "Prototype complet du site web pour l'ONG AEJF",
    type: "Site Web",
    url: "https://www.figma.com/proto/Z6oNX9VvIQaeij2dn5D0EV/ONG-AEJF?node-id=52-150&t=oo6y63hgqLNb0Kpg-1&starting-point-node-id=52%3A150",
  },
  {
    title: "ONG AEJF - Maquette Application",
    description: "Prototype de l'application mobile AEJF",
    type: "Application Mobile",
    url: "https://www.figma.com/proto/Z6oNX9VvIQaeij2dn5D0EV/ONG-AEJF?node-id=0-1&t=IYgk6STsqoGNXijF-1",
  },
  {
    title: "AKWABA Beer - Maquette Application",
    description: "Prototype de l'application mobile AKWABA Beer",
    type: "Application Mobile",
    url: "https://www.figma.com/proto/Z6oNX9VvIQaeij2dn5D0EV/ONG-AEJF?node-id=443-6102&t=EYk5ThLayhBFyuLL-1",
  },
];

const Maquettes = () => {
  return (
    <section id="maquettes" className="py-24 bg-section-orange">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {maquettes.map((maquette, index) => (
            <motion.div
              key={maquette.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group cursor-pointer"
              onClick={() => window.open(maquette.url, '_blank')}
            >
              <div className="bg-background rounded-2xl p-8 border border-border hover:border-orange hover:shadow-lg transition-all duration-500 hover-lift h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-6 group-hover:bg-orange transition-all duration-300">
                  <Layout size={28} className="text-orange group-hover:text-orange-foreground transition-colors" />
                </div>
                <Badge className="w-fit bg-primary/10 text-primary border-none mb-3 text-xs">
                  {maquette.type}
                </Badge>
                <h3 className="text-lg font-bold mb-2 group-hover:text-orange transition-colors">{maquette.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">{maquette.description}</p>
                <div className="flex items-center gap-2 text-orange font-medium text-sm">
                  <ExternalLink size={14} />
                  Voir le prototype
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Maquettes;
