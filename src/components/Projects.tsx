import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Film, Image, Layout, Globe, Palette, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Category = "all" | "uiux" | "branding" | "communication" | "webdev";

const filters: { label: string; value: Category }[] = [
  { label: "Tous", value: "all" },
  { label: "UI/UX Design", value: "uiux" },
  { label: "Branding & Graphisme", value: "branding" },
  { label: "Communication Digitale", value: "communication" },
  { label: "Développement Web", value: "webdev" },
];

const featuredProjects = [
  {
    title: "ONG AEJF – Campagne 360°",
    category: "branding" as Category,
    context: "L'ONG AEJF avait besoin d'une stratégie de communication complète pour sensibiliser sur l'éducation des jeunes filles.",
    objective: "Créer une identité visuelle forte et une campagne multicanal (site, app, film, print).",
    solution: "Conception d'une identité visuelle complète, maquettes UI/UX, court-métrage de sensibilisation et supports print.",
    role: "Brand Designer, UI/UX Designer, Monteur Vidéo, Développeur Web",
    tools: ["Figma", "Photoshop", "Premiere Pro", "React", "Canva"],
    image: "/projects/aejf-strategie-new.jpeg",
    tags: ["Site Web", "Charte Graphique", "Court Métrage", "Maquettes"],
    links: [
      { label: "Site Internet", url: "https://girls-future-forward.vercel.app", icon: Globe },
      { label: "Stratégie", url: "https://www.behance.net/gallery/242088385/STRATEGIE-DE-COMMUNICATION-ONG-AEJF", icon: ExternalLink },
      { label: "Maquette Site", url: "https://www.figma.com/proto/Z6oNX9VvIQaeij2dn5D0EV/ONG-AEJF?node-id=52-150&t=oo6y63hgqLNb0Kpg-1&starting-point-node-id=52%3A150", icon: Layout },
      { label: "Maquette App", url: "https://www.figma.com/proto/Z6oNX9VvIQaeij2dn5D0EV/ONG-AEJF?node-id=0-1&t=IYgk6STsqoGNXijF-1", icon: Layout },
      { label: "Film", url: "https://drive.google.com/file/d/1ha93DB-s3Jn6oMoC-OT3yvYS8hCjj1ez/view?usp=drive_link", icon: Film },
      { label: "Charte Graphique", url: "https://www.canva.com/design/DAG7fVWFZeo/13kJN_c4sDBOyttIZJq8kg/view?utm_content=DAG7fVWFZeo&utm_campaign=designshare&utm_medium=link&utm_source=viewer", icon: Palette },
      { label: "Logo", url: "https://drive.google.com/file/d/1_rW2OYjJVltT1uY2V7aw_r98pNUrIJyx/view?usp=drive_link", icon: Image },
      { label: "Visuel Film", url: "https://www.canva.com/design/DAG9RQsPGm4/v7NHcQ0dfJIBjzuw3BV4wQ/view?utm_content=DAG9RQsPGm4&utm_campaign=designshare&utm_medium=link&utm_source=viewer", icon: Image },
      { label: "Visuel Communication", url: "https://www.canva.com/design/DAG8JnJoG90/E03oPL4htE1Vybye9wtW2g/view?utm_content=DAG8JnJoG90&utm_campaign=designshare&utm_medium=link&utm_source=viewer", icon: Image },
    ],
    featured: true,
  },
  {
    title: "AKWABA Beer",
    category: "branding" as Category,
    context: "Création d'une marque de bière africaine premium avec une identité visuelle forte.",
    objective: "Développer une identité de marque complète : logo, packaging, site web et application mobile.",
    solution: "Branding complet avec packaging, mockups réalistes, maquette d'application et site vitrine.",
    role: "Brand Designer, UI/UX Designer, Développeur Web",
    tools: ["Figma", "Photoshop", "Illustrator", "React"],
    image: "/projects/akwaba-beer.png",
    tags: ["Logo", "Packaging", "Mockups", "Maquette App", "Site Web"],
    links: [
      { label: "Behance", url: "https://www.behance.net/gallery/244041351/AKWABA-BEER", icon: ExternalLink },
      { label: "Maquette App", url: "https://www.figma.com/proto/Z6oNX9VvIQaeij2dn5D0EV/ONG-AEJF?node-id=443-6102&t=EYk5ThLayhBFyuLL-1", icon: Layout },
      { label: "Site Internet", url: "https://akwaba-brand-experience.vercel.app/", icon: Globe },
    ],
    featured: true,
  },
  {
    title: "NexRaiz – Identité Visuelle",
    category: "branding" as Category,
    context: "NexRaiz, une startup tech, avait besoin d'une identité visuelle moderne et percutante.",
    objective: "Créer un branding complet reflétant l'innovation et la technologie.",
    solution: "Logo, charte graphique, déclinaisons et supports de communication.",
    role: "Brand Designer",
    tools: ["Photoshop", "Illustrator", "Canva"],
    image: "/projects/nexraiz-logo.png",
    tags: ["Logo", "Charte Graphique", "Branding"],
    links: [
      { label: "Voir", url: "https://www.canva.com/design/DAHBqFIq5fE/Qc6geyBTqJ9b0qP7RAwLTw/view?utm_content=DAHBqFIq5fE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf4c33664be" },
    ],
    featured: true,
  },
];

const otherProjects = [
  {
    title: "DIGIKIDS",
    category: "branding" as Category,
    image: "/projects/digikids-logo.jpeg",
    links: [{ label: "Behance", url: "https://www.behance.net/gallery/241745727/CHARTE-GRAPHIQUE-DIGIKIDS" }],
  },
  {
    title: "KalouGroup – Brochures",
    category: "branding" as Category,
    image: "/projects/kalougroup-brochure-1.png",
    links: [{ label: "Voir", url: "https://www.canva.com/design/DAHCXduoHOg/_jbXS7UM8IRlJSvca9X7Iw/view?utm_content=DAHCXduoHOg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hfcf3071e25" }],
  },
  {
    title: "LI-KAH",
    category: "branding" as Category,
    image: null,
    links: [{ label: "Voir", url: "https://www.canva.com/design/DAG7OpacWdE/QhF9oggwgvHXUlf6dMryaw/view" }],
  },
  {
    title: "Babi Beer",
    category: "communication" as Category,
    image: "/projects/babi-beer.png",
    links: [{ label: "Voir", url: "https://www.canva.com/design/DAG7gspkwfQ/-irg1kTSQqzAyBMMAhYFlw/view" }],
  },
  {
    title: "ARIVO",
    category: "branding" as Category,
    image: null,
    links: [{ label: "Voir", url: "https://www.canva.com/design/DAG7Sf0HFpA/O4MA_5oPOfwI9gHqSYmXoA/watch" }],
  },
  {
    title: "GCAC-Coop",
    category: "webdev" as Category,
    image: null,
    github: "https://github.com/yvesdsr/GCAC-Coop",
    links: [{ label: "Démo", url: "https://gcac-coop.vercel.app/" }],
  },
  {
    title: "Sidii Ingénieurs Web",
    category: "webdev" as Category,
    image: null,
    github: "https://github.com/yvesdsr/sidii-ingenieurs-web",
    links: [{ label: "Démo", url: "https://sidii-ingenieurs-webb.vercel.app/" }],
  },
  {
    title: "TradingPro",
    category: "webdev" as Category,
    image: null,
    links: [{ label: "Démo", url: "https://trading-pro-blue.vercel.app" }],
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filteredOther = activeFilter === "all"
    ? otherProjects
    : otherProjects.filter(p => p.category === activeFilter);

  const filteredFeatured = activeFilter === "all"
    ? featuredProjects
    : featuredProjects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-orange font-semibold text-sm tracking-wider uppercase">— Mon Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Mes Derniers <span className="text-gradient-orange">Projets</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === f.value
                  ? "bg-foreground text-background shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-foreground/10"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Featured Projects - Case Studies */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter + "-featured"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-16 mb-16"
          >
            {filteredFeatured.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group"
              >
                <div className="bg-muted rounded-3xl overflow-hidden hover-lift">
                  <div className="flex flex-col lg:flex-row">
                    {project.image && (
                      <div className="lg:w-1/2 aspect-video lg:aspect-auto overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className={`${project.image ? 'lg:w-1/2' : 'w-full'} p-8 lg:p-10 flex flex-col justify-center`}>
                      <div className="flex items-center gap-2 mb-4">
                        <Badge className="bg-orange/10 text-orange border-none text-xs uppercase tracking-wider">
                          <Star size={10} className="mr-1" /> Projet Phare
                        </Badge>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-3">{project.title}</h3>

                      {/* Case study details */}
                      <div className="space-y-2 mb-4 text-sm">
                        <p><span className="font-semibold text-foreground">Contexte :</span> <span className="text-muted-foreground">{project.context}</span></p>
                        <p><span className="font-semibold text-foreground">Objectif :</span> <span className="text-muted-foreground">{project.objective}</span></p>
                        <p><span className="font-semibold text-foreground">Solution :</span> <span className="text-muted-foreground">{project.solution}</span></p>
                        <p><span className="font-semibold text-foreground">Mon rôle :</span> <span className="text-muted-foreground">{project.role}</span></p>
                      </div>

                      {/* Tools */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tools.map(tool => (
                          <span key={tool} className="text-[10px] bg-foreground/5 text-muted-foreground rounded-full px-2.5 py-1">{tool}</span>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap gap-2">
                        {project.links.map(link => (
                          <Button
                            key={link.label}
                            size="sm"
                            variant="outline"
                            className="rounded-full gap-1.5 text-xs hover:bg-orange hover:text-background hover:border-orange transition-all"
                            onClick={() => window.open(link.url, '_blank')}
                          >
                            {link.icon && <link.icon size={12} />}
                            {link.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Grid Projects */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter + "-grid"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredOther.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group"
              >
                <div className="bg-muted rounded-2xl overflow-hidden hover-lift h-full flex flex-col">
                  {project.image && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {'github' in project && project.github && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="rounded-full gap-2 text-xs"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github size={14} />
                          Code
                        </Button>
                      )}
                      {project.links.map(link => (
                        <Button
                          key={link.label}
                          size="sm"
                          variant="ghost"
                          className="rounded-full gap-2 text-xs hover:text-orange"
                          onClick={() => window.open(link.url, '_blank')}
                        >
                          <ExternalLink size={14} />
                          {link.label}
                        </Button>
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
