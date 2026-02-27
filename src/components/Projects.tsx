import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Leaf, Building, GraduationCap, Heart, Users, Globe, FileText, Palette, Film } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  // Projet AEJF séparé avec ses éléments individuels
  const aejfProject = {
    title: "ONG AEJF - Campagne 360°",
    description: "Campagne de communication complète pour l'Alliance pour l'Éducation des Jeunes Filles",
    elements: [
      {
        title: "Site Internet",
        icon: <Globe className="text-primary" size={24} />,
        image: "/projects/aejf-site.jpeg",
        link: "https://girls-future-forward.vercel.app",
        description: "Site web professionnel présentant l'ONG et ses actions"
      },
      {
        title: "Stratégie de Communication",
        icon: <FileText className="text-primary" size={24} />,
        image: "/projects/aejf-strategie-new.jpeg",
        link: "https://www.behance.net/gallery/242088385/STRATEGIE-DE-COMMUNICATION-ONG-AEJF",
        description: "Plan stratégique de communication digitale"
      },
      {
        title: "Charte Graphique",
        icon: <Palette className="text-primary" size={24} />,
        image: "/projects/aejf-charte-new.jpeg",
        link: "https://www.canva.com/design/DAG7fVWFZeo/13kJN_c4sDBOyttIZJq8kg/view?utm_content=DAG7fVWFZeo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hecdf1ccd13",
        description: "Identité visuelle complète de l'ONG"
      },
      {
        title: "Court Métrage de Sensibilisation",
        icon: <Film className="text-primary" size={24} />,
        image: "/projects/aejf-film.png",
        link: "https://drive.google.com/file/d/1FK6a40O_MaSQ65BvQRIrtVk1W9f3Z8kR/view",
        description: "Film 'Au-delà des Barrières'"
      },
      {
        title: "Logo",
        icon: <Palette className="text-primary" size={24} />,
        image: "/projects/aejf-logo-new.jpeg",
        link: null,
        description: "Logo officiel de l'Alliance pour l'Éducation des Jeunes Filles"
      },
      {
        title: "Visuel Principal",
        icon: <Users className="text-primary" size={24} />,
        image: "/projects/aejf-visuel.png",
        link: null,
        description: "Visuel de communication principal de la campagne"
      }
    ]
  };

  const projects = [
    {
      title: "NexRaiz - Identité Visuelle",
      description: "Création de l'identité visuelle complète pour NexRaiz : logo, versions monochromes et charte graphique de l'entreprise.",
      icon: <Building className="text-professional" />,
      technologies: ["Identité Visuelle", "Logo", "Charte Graphique", "Versions Monochromes"],
      canva: "https://www.canva.com/design/DAHBqFIq5fE/Qc6geyBTqJ9b0qP7RAwLTw/view?utm_content=DAHBqFIq5fE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf4c33664be",
      live: "https://drive.google.com/drive/folders/16b3pdPWnXNO4EMIV1Yi_dQTyjprwhsKz?usp=drive_link",
      image: "/projects/nexraiz-logo.png",
      category: "Communication"
    },
    {
      title: "AKWABA Beer",
      description: "Conception d'une identité visuelle et d'une campagne publicitaire complète pour une nouvelle marque de bière ivoirienne AKWABA : logo, packaging, mockups, affiches et design publicitaire.",
      icon: <Building className="text-professional" />,
      technologies: ["Identité Visuelle", "Logo", "Packaging", "Mockups", "Affiche", "Design Publicitaire"],
      behance: "https://www.behance.net/gallery/244041351/AKWABA-BEER",
      image: "/projects/akwaba-beer.png",
      category: "Communication"
    },
    {
      title: "GCAC-Coop",
      description: "Site internet professionnel de vente de cacao et de ses dérivés. Permet de passer des commandes et de devenir membre de la coopérative agricole.",
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
      behance: "https://www.behance.net/gallery/241745727/CHARTE-GRAPHIQUE-DIGIKIDS",
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
      id: "iisan-project",
      title: "Présentation IISAN - L'IA",
      description: "Présentation à l'Institut IISAN sur l'évolution de l'Intelligence Artificielle : de l'IA symbolique à l'IA générative. PowerPoint et vidéo de présentation.",
      icon: <GraduationCap className="text-primary" />,
      technologies: ["PowerPoint", "Présentation", "Vidéo", "IA"],
      canva: "https://www.canva.com/design/DAG6PqZ7kQY/c3ZanhObt6AYSVdwrpKkyw/view?utm_content=DAG6PqZ7kQY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h38ae497240",
      videoLink: "#iisan-video",
      category: "Formation"
    },
    {
      id: "octobre-rose-project",
      title: "Octobre Rose - Sensibilisation",
      description: "Projet de sensibilisation au cancer du sein pour Octobre Rose : création d'affiche et montage vidéo pour la campagne de prévention.",
      icon: <Heart className="text-pink-500" />,
      technologies: ["Affiche", "Montage Vidéo", "Sensibilisation", "Communication"],
      videoLink: "#octobre-rose-video",
      category: "Sensibilisation"
    },
    {
      title: "KalouGroup - Brochures",
      description: "Réalisation de brochures professionnelles pour KalouGroup, entreprise spécialisée dans les solutions de secourisme et défibrillateurs.",
      icon: <Building className="text-professional" />,
      technologies: ["Brochure", "Design Print", "Mise en page", "Communication"],
      category: "Communication"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">Mes Projets</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Une sélection de mes réalisations en développement web, 
            de la gestion coopérative aux plateformes e-commerce
          </p>
        </motion.div>

        {/* Section AEJF - Campagne 360° */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="shadow-elegant border-border/50 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
              <div className="flex items-center gap-3 mb-2">
                <Users className="text-primary" size={28} />
                <Badge variant="default" className="bg-primary">Projet Phare</Badge>
                <Badge variant="outline">ONG</Badge>
              </div>
              <CardTitle className="text-2xl">{aejfProject.title}</CardTitle>
              <p className="text-muted-foreground">{aejfProject.description}</p>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aejfProject.elements.map((element, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="border border-border rounded-lg p-4 hover:border-primary hover:shadow-glow transition-all duration-300 h-full flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        {element.icon}
                        <h4 className="font-semibold text-lg">{element.title}</h4>
                      </div>
                      
                      {element.image && (
                        <div className="relative overflow-hidden rounded-lg mb-3 aspect-video">
                          <img 
                            src={element.image} 
                            alt={element.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      
                      <p className="text-sm text-muted-foreground mb-4 flex-grow">
                        {element.description}
                      </p>
                      
                      {element.link && (
                        <Button 
                          size="sm" 
                          className="w-full"
                          onClick={() => window.open(element.link, '_blank')}
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Voir
                        </Button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Autres projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card id={project.id} className="shadow-card hover:shadow-glow transition-all duration-300 group h-full">
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

                  <div className="flex flex-wrap gap-2">
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
                        {project.live.includes('drive.google.com') ? 'Logo' : 'Demo'}
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
                    {project.behance && (
                      <Button 
                        size="sm" 
                        className="flex-1"
                        onClick={() => window.open(project.behance, '_blank')}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Voir sur Behance
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
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => window.open('https://github.com/yvesdsr', '_blank')}
          >
            <Github className="mr-2" />
            Voir tous mes projets sur GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;