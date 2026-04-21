import { motion } from "framer-motion";
import {
  Layout, Palette, Compass, Crown, Share2, TrendingUp,
  Building2, BookOpen, Brush, Megaphone, Briefcase
} from "lucide-react";

const categories = [
  {
    n: "01", icon: Layout, title: "UI/UX Design",
    items: ["Maquettes & prototypes", "Interfaces utilisateur", "Expériences digitales", "Design d'applications mobiles"],
  },
  {
    n: "02", icon: Palette, title: "Branding & Identité Visuelle",
    items: ["Logos & chartes graphiques", "Packaging & mockups", "Flyers, affiches & brochures", "Direction artistique"],
  },
  {
    n: "03", icon: Compass, title: "Direction artistique",
    items: ["Univers visuel complet", "Moodboard professionnel", "Choix des couleurs (psychologie)", "Choix des typographies", "Direction photo / style visuel", "Concepts créatifs forts"],
  },
  {
    n: "04", icon: Crown, title: "Stratégie de marque",
    items: ["Plateforme de marque (mission, vision, valeurs)", "Positionnement", "Personnalité de marque", "Tone of voice", "Benchmark concurrentiel", "Branding cohérent multi-supports"],
  },
  {
    n: "05", icon: Share2, title: "Contenu réseaux sociaux",
    items: ["Templates Instagram / Facebook / LinkedIn", "Carrousels", "Stories", "Bannières réseaux sociaux", "Miniatures YouTube", "Adaptation multi-format"],
  },
  {
    n: "06", icon: TrendingUp, title: "Design marketing & business",
    items: ["Publicités (ads)", "Pages de vente", "Email marketing (design + structure)", "Packaging produit", "Mockups réalistes", "Présentations commerciales (pitch deck)"],
  },
  {
    n: "07", icon: Building2, title: "Branding appliqué",
    items: ["Signalétique (panneaux, affichage)", "Branding bureaux / boutiques", "Merchandising (t-shirts, goodies)", "Habillage de véhicules", "Stands événementiels"],
  },
  {
    n: "08", icon: BookOpen, title: "Design éditorial avancé",
    items: ["Magazines", "Livres", "Catalogues produits", "Journaux", "Mise en page complexe"],
  },
  {
    n: "09", icon: Brush, title: "Illustration & création graphique",
    items: ["Illustration digitale", "Iconographie personnalisée", "Patterns", "Infographies", "Retouche photo avancée (Photoshop)"],
  },
  {
    n: "10", icon: Megaphone, title: "Communication Digitale",
    items: ["Stratégie de contenu", "Community management", "Création de contenu vidéo", "Campagnes publicitaires"],
  },
  {
    n: "11", icon: Briefcase, title: "Compétences business",
    items: ["Vendre ses services", "Créer des offres claires", "Gérer un client", "Rédiger un brief", "Pricing (ne pas brader)", "Personal branding"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-section-dark relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— Mes Services</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-tight">
            Ce que je peux faire <span className="italic font-light">pour vous.</span>
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">
            Une expertise complète, du concept à l'exécution, pour bâtir des marques qui marquent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/50 border border-subtle rounded-3xl overflow-hidden">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative bg-background p-8 hover:bg-card transition-all duration-500 card-shine"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl border border-subtle bg-foreground/[0.03] flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                  <cat.icon size={20} />
                </div>
                <span className="text-xs text-muted-foreground/60 font-mono">{cat.n}</span>
              </div>

              <h3 className="font-display text-xl mb-4 group-hover:text-orange transition-colors duration-300">
                {cat.title}
              </h3>

              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-orange/60 mt-1.5 w-1 h-1 rounded-full bg-orange/60 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
