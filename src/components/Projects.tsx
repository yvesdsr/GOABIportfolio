import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Leaf, Building, GraduationCap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "GCAC-Coop",
      description: "Plateforme de gestion coopérative pour le séchage de cacao destinée aux coopératives agricoles. Système complet de traçabilité et de gestion des productions.",
      icon: <Leaf className="text-success" />,
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/yvesdsr/GCAC-Coop",
      live: "https://gcac-coop.vercel.app/",
      category: "Agriculture"
    },
    {
      title: "Sidii Ingénieurs Web",
      description: "Site web professionnel pour une agence d'ingénierie web. Présentation des services, portfolio et contact.",
      icon: <Building className="text-professional" />,
      technologies: ["React", "CSS3", "JavaScript"],
      github: "https://github.com/yvesdsr/sidii-ingenieurs-web",
      live: "https://sidii-ingenieurs-webb.vercel.app/",
      category: "Corporate"
    },
    {
      title: "DIGIKIDS",
      description: "Conception d'une charte graphique et d'une stratégie de communication pour une structure digitale de formation des enfants de 4 à 14 ans au numérique.",
      icon: <GraduationCap className="text-primary" />,
      technologies: ["Charte Graphique", "Stratégie Communication", "Branding"],
      category: "Communication"
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
                  {project.github && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  )}
                  {project.live && (
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                  )}
                  {!project.github && !project.live && (
                    <Badge variant="secondary" className="w-full justify-center py-2">
                      Projet Stratégique
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => window.open('https://github.com/yvesdsr', '_blank')}
          >
            <Github className="mr-2" />
            Voir tous mes projets sur GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;