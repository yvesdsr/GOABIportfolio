import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Layout, Palette, FileText, Image as ImageIcon, Star, ArrowUpRight, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Category = "all" | "branding" | "uiux" | "social" | "print" | "editorial" | "packaging" | "presentations" | "video" | "autres";

const filters: { label: string; value: Category }[] = [
  { label: "Tous", value: "all" },
  { label: "Branding", value: "branding" },
  { label: "UI/UX", value: "uiux" },
  { label: "Réseaux sociaux", value: "social" },
  { label: "Print", value: "print" },
  { label: "Éditorial", value: "editorial" },
  { label: "Packaging", value: "packaging" },
  { label: "Présentations", value: "presentations" },
  { label: "Vidéo", value: "video" },
  { label: "Autres créations", value: "autres" },
];

type Project = {
  title: string;
  category: Category;
  context?: string;
  objective?: string;
  solution?: string;
  role?: string;
  tools?: string[];
  image: string | null;
  tags?: string[];
  links: { label: string; url: string; icon?: any }[];
  featured?: boolean;
};

const featured: Project[] = [
  {
    title: "ONG AEJF — Campagne 360°",
    category: "branding",
    context: "L'ONG AEJF avait besoin d'une stratégie de communication complète pour sensibiliser sur l'éducation des jeunes filles.",
    objective: "Créer une identité visuelle forte et une campagne multicanal (site, app, film, print).",
    solution: "Identité visuelle complète, maquettes UI/UX, court-métrage de sensibilisation et supports print.",
    role: "Brand Designer, Direction artistique, UI/UX",
    tools: ["Figma", "Photoshop", "Premiere Pro", "Canva"],
    image: "/projects/aejf-strategie-new.jpeg",
    tags: ["Charte graphique", "Site web", "App", "Film"],
    links: [
      { label: "Charte graphique", url: "https://www.canva.com/design/DAG7fVWFZeo/13kJN_c4sDBOyttIZJq8kg/view", icon: Palette },
      { label: "Site web", url: "https://girls-future-forward.vercel.app", icon: ExternalLink },
      { label: "Maquette site", url: "https://www.figma.com/proto/Z6oNX9VvIQaeij2dn5D0EV/ONG-AEJF?node-id=52-150", icon: Layout },
      { label: "Maquette app", url: "https://www.figma.com/proto/Z6oNX9VvIQaeij2dn5D0EV/ONG-AEJF?node-id=0-1", icon: Layout },
      { label: "Logo", url: "https://drive.google.com/file/d/1_rW2OYjJVltT1uY2V7aw_r98pNUrIJyx/view", icon: ImageIcon },
      { label: "Visuel film", url: "https://www.canva.com/design/DAG9RQsPGm4/v7NHcQ0dfJIBjzuw3BV4wQ/view", icon: ImageIcon },
      { label: "Stratégie", url: "https://www.behance.net/gallery/242088385/STRATEGIE-DE-COMMUNICATION-ONG-AEJF", icon: ExternalLink },
    ],
    featured: true,
  },
  {
    title: "AKWABA Beer",
    category: "branding",
    context: "Création d'une marque de bière africaine premium avec une identité visuelle forte.",
    objective: "Développer un branding complet : logo, packaging, site web et application mobile.",
    solution: "Identité, packaging, mockups réalistes, maquette d'application et site vitrine.",
    role: "Brand Designer, UI/UX",
    tools: ["Figma", "Photoshop", "Illustrator"],
    image: "/projects/akwaba-beer.png",
    tags: ["Logo", "Packaging", "App", "Site web"],
    links: [
      { label: "Behance", url: "https://www.behance.net/gallery/244041351/AKWABA-BEER", icon: ExternalLink },
      { label: "Maquette App", url: "https://www.figma.com/proto/Z6oNX9VvIQaeij2dn5D0EV/ONG-AEJF?node-id=443-6102", icon: Layout },
      { label: "Site Web", url: "https://akwaba-brand-experience.vercel.app/", icon: ExternalLink },
    ],
    featured: true,
  },
  {
    title: "NexRaiz — Identité Visuelle",
    category: "branding",
    context: "NexRaiz, startup tech, avait besoin d'une identité visuelle moderne et percutante.",
    objective: "Créer un branding complet reflétant l'innovation et la technologie.",
    solution: "Logo, charte graphique, plaquettes, catalogue et déclinaisons.",
    role: "Brand Designer, Direction artistique",
    tools: ["Photoshop", "Illustrator", "Canva"],
    image: "/projects/nexraiz-logo.png",
    tags: ["Logo", "Charte graphique", "Plaquettes", "Catalogue"],
    links: [
      { label: "Présentation", url: "https://www.canva.com/design/DAHBqFIq5fE/Qc6geyBTqJ9b0qP7RAwLTw/view", icon: ExternalLink },
      { label: "Charte graphique", url: "https://drive.google.com/file/d/1nVGilNA9SKTlWUuJ1kD15bA8yYj-0o5f/view", icon: Palette },
      { label: "Catalogue", url: "https://drive.google.com/file/d/1lN3i5p7fT0b0kv-3NfBdIVlq-qRvMDtS/view", icon: BookOpen },
      { label: "Plaquette institutionnelle", url: "https://drive.google.com/file/d/1M4RVApHAdYG4A3HGIPwv4QBdsUgfIP8-/view", icon: FileText },
      { label: "Plaquette commerciale", url: "https://drive.google.com/file/d/19_igx3SDYN8aEmkJbSc56L0JzBu_QW9t/view", icon: FileText },
    ],
    featured: true,
  },
];

const others: Project[] = [
  {
    title: "DIGIKIDS — Charte graphique",
    category: "branding",
    image: "/projects/digikids-logo.jpeg",
    links: [{ label: "Behance", url: "https://www.behance.net/gallery/241745727/CHARTE-GRAPHIQUE-DIGIKIDS" }],
  },
  {
    title: "KalouGroup — Brochures",
    category: "print",
    image: "/projects/kalougroup-brochure-1.png",
    links: [
      { label: "Brochure", url: "https://drive.google.com/file/d/1n89y3vYQJNUtpplkn69rWc1NmCWKATSz/view" },
      { label: "Aperçu", url: "https://www.canva.com/design/DAHCXduoHOg/_jbXS7UM8IRlJSvca9X7Iw/view" },
    ],
  },
  {
    title: "GOA-Design — Logo",
    category: "branding",
    image: "/projects/goa-design-logo.png",
    links: [],
  },
  {
    title: "Du Conscientisme à la Dégaoutique",
    category: "editorial",
    image: null,
    links: [{ label: "Cover livre (PDF)", url: "/projects/du-consciencisme-cover.pdf" }],
  },
  {
    title: "RAMA TABITHA NAILS",
    category: "social",
    image: "/projects/rama-tabitha-nails.png",
    links: [],
  },
  {
    title: "Perfect Food — Affiche",
    category: "print",
    image: "/projects/challenge-perfect-food.png",
    links: [],
  },
  {
    title: "LI-KAH",
    category: "branding",
    image: null,
    links: [{ label: "Voir", url: "https://www.canva.com/design/DAG7OpacWdE/QhF9oggwgvHXUlf6dMryaw/view" }],
  },
  {
    title: "Babi Beer",
    category: "social",
    image: "/projects/babi-beer.png",
    links: [{ label: "Voir", url: "https://www.canva.com/design/DAG7gspkwfQ/-irg1kTSQqzAyBMMAhYFlw/view" }],
  },
  {
    title: "ARIVO",
    category: "branding",
    image: null,
    links: [{ label: "Voir", url: "https://www.canva.com/design/DAG7Sf0HFpA/O4MA_5oPOfwI9gHqSYmXoA/watch" }],
  },
];

const placeholders: Project[] = [
  { title: "Cartes de visite", category: "print", image: null, links: [] },
  { title: "Rapport annuel", category: "editorial", image: null, links: [] },
  { title: "Pitch deck", category: "presentations", image: null, links: [] },
  { title: "Packaging produit", category: "packaging", image: null, links: [] },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filteredFeatured = activeFilter === "all" ? featured : featured.filter((p) => p.category === activeFilter);
  const allOthers = [...others, ...placeholders];
  const filteredOthers = activeFilter === "all" ? allOthers : allOthers.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— Mes Projets</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-tight">
            Une sélection de <span className="italic font-light">créations</span>
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">
            Pensées pour l'image, l'impact et la performance.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap gap-2 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-300 border ${
                activeFilter === f.value
                  ? "bg-foreground text-background border-foreground"
                  : "border-subtle text-muted-foreground hover:border-foreground/40 hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Featured */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter + "-f"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-12 mb-20"
          >
            {filteredFeatured.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card border border-subtle rounded-3xl overflow-hidden hover-lift">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {project.image && (
                      <div className="aspect-[4/3] lg:aspect-auto overflow-hidden bg-muted relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className={`${project.image ? "" : "lg:col-span-2"} p-8 lg:p-12 flex flex-col justify-center`}>
                      <Badge className="w-fit bg-orange/10 text-orange border-none text-[10px] uppercase tracking-widest mb-4">
                        <Star size={10} className="mr-1" /> Projet phare
                      </Badge>
                      <h3 className="font-display text-3xl lg:text-4xl mb-5">{project.title}</h3>

                      <div className="space-y-3 mb-6 text-sm">
                        {project.context && <p className="text-muted-foreground"><span className="text-foreground/80 uppercase text-[10px] tracking-widest mr-2">Contexte</span>{project.context}</p>}
                        {project.objective && <p className="text-muted-foreground"><span className="text-foreground/80 uppercase text-[10px] tracking-widest mr-2">Objectif</span>{project.objective}</p>}
                        {project.solution && <p className="text-muted-foreground"><span className="text-foreground/80 uppercase text-[10px] tracking-widest mr-2">Solution</span>{project.solution}</p>}
                        {project.role && <p className="text-muted-foreground"><span className="text-foreground/80 uppercase text-[10px] tracking-widest mr-2">Rôle</span>{project.role}</p>}
                      </div>

                      {project.tools && (
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {project.tools.map((t) => (
                            <span key={t} className="text-[10px] uppercase tracking-wider text-muted-foreground border border-subtle rounded-full px-3 py-1">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {project.links.map((link) => (
                          <Button
                            key={link.label}
                            size="sm"
                            variant="outline"
                            className="rounded-full gap-1.5 text-xs border-subtle hover:bg-foreground hover:text-background hover:border-foreground transition-all"
                            onClick={() => window.open(link.url, "_blank")}
                          >
                            {link.icon && <link.icon size={12} />}
                            {link.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter + "-g"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filteredOthers.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group"
              >
                <div className="bg-card border border-subtle rounded-2xl overflow-hidden hover-lift h-full flex flex-col card-shine">
                  <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground/40">
                        <ImageIcon size={32} />
                      </div>
                    )}
                    <div className="absolute top-3 right-3">
                      <span className="text-[9px] uppercase tracking-wider bg-background/80 backdrop-blur px-2 py-1 rounded-full border border-subtle">
                        {filters.find((f) => f.value === project.category)?.label}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-display text-lg mb-3 group-hover:text-orange transition-colors">{project.title}</h3>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.links.length === 0 && (
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground/50">À venir</span>
                      )}
                      {project.links.map((link) => (
                        <button
                          key={link.label}
                          className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
                          onClick={() => window.open(link.url, "_blank")}
                        >
                          {link.label}
                          <ArrowUpRight size={12} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
