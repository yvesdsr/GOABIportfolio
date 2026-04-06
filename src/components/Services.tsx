import { motion } from "framer-motion";
import { Layout, Palette, Megaphone, Globe } from "lucide-react";

const categories = [
  {
    icon: Layout,
    title: "UI/UX Design",
    items: ["Maquettes & prototypes", "Interfaces utilisateur", "Expériences digitales", "Design d'applications mobiles"],
  },
  {
    icon: Palette,
    title: "Branding & Identité Visuelle",
    items: ["Logos & chartes graphiques", "Packaging & mockups", "Flyers, affiches & brochures", "Direction artistique"],
  },
  {
    icon: Megaphone,
    title: "Communication Digitale",
    items: ["Stratégie de contenu", "Community management", "Création de contenu vidéo", "Campagnes publicitaires"],
  },
  {
    icon: Globe,
    title: "Développement Web",
    items: ["Sites vitrines & portfolios", "Applications web React", "Sites WordPress", "Intégration & responsive"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-section-purple relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">— Mes Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Ce que je peux faire <span className="text-gradient-purple">pour vous</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-background rounded-2xl p-8 border border-border hover:border-primary hover:shadow-lg transition-all duration-500 hover-lift h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <cat.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
