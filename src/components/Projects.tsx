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
      title: "DIGIKIDS",
      description: "Conception d'une charte graphique et d'une stratégie de communication pour une structure digitale de formation des enfants de 4 à 14 ans au numérique.",
      icon: <GraduationCap className="text-primary" />,
      technologies: ["Charte Graphique", "Stratégie Communication", "Branding"],
      canva: "https://www.canva.com/design/DAG6FNS3Wio/h0X9YOiF9f5vkv3YFkKwEA/view?utm_content=DAG6FNS3Wio&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hab4e50ff15",
      category: "Communication"
    },
    {
      id: "li-kah-project",
      title: "LI-KAH",
      description: "Campagne publicitaire complète pour une entreprise de miel naturel pur : charte graphique, stratégie de communication, logo, affiche et montage vidéo.",
      icon: <Leaf className="text-success" />,
      technologies: ["Charte Graphique", "Logo", "Affiche", "Montage Vidéo", "Stratégie Communication"],
      canva: "https://www.canva.com/design/DAG7OpacWdE/QhF9oggwgvHXUlf6dMryaw/view?utm_content=DAG7OpacWdE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h444987595d",
      videoLink: "#li-kah-video",
      category: "Communication"
    },
    {
      title: "ARIVO",
      description: "Création d'une mini charte graphique (logo + identité visuelle) pour ARIVO, une plateforme de mobilité qui simplifie la location de voitures dans un environnement entièrement digital.",
      icon: <Building className="text-professional" />,
      technologies: ["Logo", "Identité Visuelle", "Charte Graphique"],
      canva: "https://www.canva.com/design/DAG7Sf0HFpA/O4MA_5oPOfwI9gHqSYmXoA/watch?utm_content=DAG7Sf0HFpA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h27d02155c9",
      category: "Communication"
    },
    {
      title: "Babi Beer",
      description: "Conception d'une campagne publicitaire complète pour la marque de bière ivoirienne Babi Beer : logo, affiche pour réseaux sociaux, mockups et design publicitaire.",
      icon: <Building className="text-professional" />,
      technologies: ["Logo", "Affiche", "Mockups", "Design Publicitaire", "Réseaux Sociaux"],
      canva: "https://www.canva.com/design/DAG7gspkwfQ/-irg1kTSQqzAyBMMAhYFlw/view?utm_content=DAG7gspkwfQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc1aa31fc8f",
      image: "/projects/babi-beer.png",
      category: "Communication"
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
      title: "TradingPro",
      description: "Site de formation au trading avec annonces économiques et tendances du marché en temps réel.",
      icon: <Building className="text-professional" />,
      technologies: ["HTML", "CSS", "JavaScript"],
      live: "https://trading-pro-blue.vercel.app",
      category: "Finance"
    },
    {
      title: "Présentation IISAN - L'IA",
      description: "Présentation à l'Institut IISAN sur l'évolution de l'Intelligence Artificielle : de l'IA symbolique à l'IA générative. PowerPoint et vidéo de présentation.",
      icon: <GraduationCap className="text-primary" />,
      technologies: ["PowerPoint", "Présentation", "Vidéo", "IA"],
      canva: "https://www.canva.com/design/DAG6PqZ7kQY/c3ZanhObt6AYSVdwrpKkyw/view?utm_content=DAG6PqZ7kQY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h38ae497240",
      videoLink: "#iisan-video",
      category: "Formation"
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
            <Card key={index} id={project.id} className="shadow-card hover:shadow-glow transition-all duration-300 group">
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
                  {project.canva && (
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.canva, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Voir le projet
                    </Button>
                  )}
                  {project.videoLink && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1"
                      onClick={() => {
                        const element = document.querySelector(project.videoLink);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Voir vidéo
                    </Button>
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