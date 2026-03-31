import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Film, Image, Layout, Globe, Palette } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const featuredProjects = [
    {
      title: "ONG AEJF - Campagne 360°",
      category: "Branding • UX/UI • Film",
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
      category: "Branding • UX/UI • Packaging",
      image: "/projects/akwaba-beer.png",
      tags: ["Logo", "Packaging", "Mockups", "Maquette App", "Site Web"],
      links: [
        { label: "Behance", url: "https://www.behance.net/gallery/244041351/AKWABA-BEER", icon: ExternalLink },
        { label: "Maquette App", url: "https://www.figma.com/proto/Z6oNX9VvIQaeij2dn5D0EV/ONG-AEJF?node-id=443-6102&t=EYk5ThLayhBFyuLL-1", icon: Layout },
        { label: "Site Internet", url: "https://akwaba-brand-experience.vercel.app/", icon: Globe },
      ],
      featured: true,
    },
  ];

  const projects = [
    {
      title: "NexRaiz - Identité Visuelle",
      category: "Branding",
      image: "/projects/nexraiz-logo.png",
      links: [
        { label: "Voir", url: "https://www.canva.com/design/DAHBqFIq5fE/Qc6geyBTqJ9b0qP7RAwLTw/view?utm_content=DAHBqFIq5fE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf4c33664be" },
      ],
    },
    {
      title: "DIGIKIDS",
      category: "Branding • Communication",
      image: "/projects/digikids-logo.jpeg",
      links: [
        { label: "Behance", url: "https://www.behance.net/gallery/241745727/CHARTE-GRAPHIQUE-DIGIKIDS" },
      ],
    },
    {
      title: "KalouGroup - Brochures",
      category: "Print Design",
      image: "/projects/kalougroup-brochure-1.png",
      links: [
        { label: "Voir les brochures", url: "https://www.canva.com/design/DAHCXduoHOg/_jbXS7UM8IRlJSvca9X7Iw/view?utm_content=DAHCXduoHOg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hfcf3071e25" },
      ],
      extraImages: ["/projects/kalougroup-brochure-2.png"],
    },
    {
      title: "LI-KAH",
      category: "Branding • Vidéo",
      image: null,
      links: [
        { label: "Voir", url: "https://www.canva.com/design/DAG7OpacWdE/QhF9oggwgvHXUlf6dMryaw/view?utm_content=DAG7OpacWdE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h444987595d" },
      ],
    },
    {
      title: "Babi Beer",
      category: "Pub • Design",
      image: "/projects/babi-beer.png",
      links: [
        { label: "Voir", url: "https://www.canva.com/design/DAG7gspkwfQ/-irg1kTSQqzAyBMMAhYFlw/view?utm_content=DAG7gspkwfQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc1aa31fc8f" },
      ],
    },
    {
      title: "ARIVO",
      category: "Branding",
      image: null,
      links: [
        { label: "Voir", url: "https://www.canva.com/design/DAG7Sf0HFpA/O4MA_5oPOfwI9gHqSYmXoA/watch?utm_content=DAG7Sf0HFpA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h27d02155c9" },
      ],
    },
    {
      title: "GCAC-Coop",
      category: "Développement Web",
      image: null,
      github: "https://github.com/yvesdsr/GCAC-Coop",
      links: [
        { label: "Démo", url: "https://gcac-coop.vercel.app/" },
      ],
    },
    {
      title: "Sidii Ingénieurs Web",
      category: "Développement Web",
      image: null,
      github: "https://github.com/yvesdsr/sidii-ingenieurs-web",
      links: [
        { label: "Démo", url: "https://sidii-ingenieurs-webb.vercel.app/" },
      ],
    },
    {
      title: "TradingPro",
      category: "Développement Web",
      image: null,
      links: [
        { label: "Démo", url: "https://trading-pro-blue.vercel.app" },
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-orange font-semibold text-sm tracking-wider uppercase">— Mon Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Mes Derniers <span className="text-gradient-orange">Projets</span>
          </h2>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
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
                      />
                    </div>
                  )}
                  <div className={`${project.image ? 'lg:w-1/2' : 'w-full'} p-8 lg:p-12 flex flex-col justify-center`}>
                    <Badge className="w-fit bg-orange/10 text-orange border-none mb-4 text-xs uppercase tracking-wider">
                      Projet Phare
                    </Badge>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.category}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.links.map(link => (
                        <Button
                          key={link.label}
                          size="sm"
                          variant="outline"
                          className="rounded-full gap-1.5 text-xs hover:bg-orange hover:text-orange-foreground hover:border-orange transition-all"
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
        </div>

        {/* Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
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
                    />
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-xs text-orange font-medium uppercase tracking-wider mb-2">{project.category}</p>
                  <h3 className="text-lg font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.github && (
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
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            variant="outline"
            className="rounded-full gap-2"
            onClick={() => window.open('https://github.com/yvesdsr', '_blank')}
          >
            <Github size={20} />
            Voir tous mes projets sur GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
