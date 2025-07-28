import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Leaf, PawPrint, Building, TrendingUp, Smartphone, TreePine, ShoppingBag } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "GCAC-Coop",
      description: "Plateforme de gestion coopérative pour le séchage de cacao destinée aux coopératives agricoles. Système complet de traçabilité et de gestion des productions.",
      icon: <Leaf className="text-success" />,
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/yvesdsr/GCAC-Coop",
      live: "#",
      category: "Agriculture"
    },
    {
      title: "Canine Pawfect Palace",
      description: "Application de gestion pour un palace canin avec système de réservation, suivi des animaux et gestion des services.",
      icon: <PawPrint className="text-primary" />,
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/yvesdsr/canine-pawfect-palace",
      live: "#",
      category: "Services"
    },
    {
      title: "Sidii Ingénieurs Web",
      description: "Site web professionnel pour une agence d'ingénierie web. Présentation des services, portfolio et contact.",
      icon: <Building className="text-professional" />,
      technologies: ["React", "CSS3", "JavaScript"],
      github: "https://github.com/yvesdsr/sidii-ingenieurs-web",
      live: "#",
      category: "Corporate"
    },
    {
      title: "TradingPro",
      description: "Plateforme de trading avec analyses de marché, graphiques en temps réel et outils d'aide à la décision.",
      icon: <TrendingUp className="text-success" />,
      technologies: ["React", "Chart.js", "WebSocket"],
      github: "https://github.com/yvesdsr/TradingPro",
      live: "#",
      category: "Finance"
    },
    {
      title: "Jetroc CI Mobile Exchange",
      description: "Application mobile d'échange et de transfert d'argent avec sécurité renforcée et interface intuitive.",
      icon: <Smartphone className="text-primary" />,
      technologies: ["React Native", "Redux", "Firebase"],
      github: "https://github.com/yvesdsr/jetroc-ci-mobile-exchange",
      live: "#",
      category: "Mobile"
    },
    {
      title: "Agri Alliance CI Platform",
      description: "Plateforme collaborative pour les agriculteurs ivoiriens. Mise en relation, partage d'informations et marketplace.",
      icon: <TreePine className="text-success" />,
      technologies: ["React", "Node.js", "PostgreSQL"],
      github: "https://github.com/yvesdsr/agri-alliance-ci-platform",
      live: "#",
      category: "Agriculture"
    },
    {
      title: "ABKR Store",
      description: "E-commerce moderne avec gestion des produits, commandes, paiements sécurisés et tableau de bord administrateur.",
      icon: <ShoppingBag className="text-professional" />,
      technologies: ["React", "Stripe", "Express", "MongoDB"],
      github: "https://github.com/yvesdsr/abkr-store",
      live: "#",
      category: "E-commerce"
    }
  ];

  const categories = ["Tous", "Agriculture", "Services", "Corporate", "Finance", "Mobile", "E-commerce"];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Mes Projets</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Une sélection de mes réalisations en développement web, 
            de la gestion coopérative aux plateformes e-commerce
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  {project.icon}
                  <Badge variant="outline">{project.category}</Badge>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            <Github className="mr-2" />
            Voir tous mes projets sur GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;