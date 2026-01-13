import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Image, Video, Users, BookOpen, Eye, Heart, UserPlus, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Content {
  id: string;
  title: string;
  description: string | null;
  content_type: string;
  file_url: string;
  thumbnail_url: string | null;
}

// Vidéos statiques des projets
const staticVideos = [
  {
    id: "li-kah-video",
    title: "Vidéo du projet LI-KAH",
    description: "Montage vidéo pour la campagne publicitaire LI-KAH",
    file_url: "/videos/li-kah-project.mp4",
    thumbnail_url: null,
    projectLink: "#li-kah-project",
    projectName: "LI-KAH"
  },
  {
    id: "iisan-video",
    title: "Présentation IISAN - L'IA",
    description: "Présentation sur l'évolution de l'IA : de l'IA symbolique à l'IA générative",
    file_url: "/videos/iisan-ia-presentation.mp4",
    thumbnail_url: null,
    projectLink: "#iisan-project",
    projectName: "IISAN"
  },
  {
    id: "octobre-rose-video",
    title: "Octobre Rose - Sensibilisation",
    description: "Montage vidéo de sensibilisation au cancer du sein pour Octobre Rose",
    file_url: "/videos/octobre-rose.mp4",
    thumbnail_url: null,
    projectLink: "#octobre-rose-project",
    projectName: "Octobre Rose"
  }
];

// Affiches statiques
const staticAffiches = [
  {
    id: "li-kah-affiche",
    title: "Affiche LI-KAH",
    file_url: "/lovable-uploads/li-kah-affiche.jpeg",
    link: "https://www.canva.com/design/DAG7OpacWdE/QhF9oggwgvHXUlf6dMryaw/view?utm_content=DAG7OpacWdE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h444987595d"
  },
  {
    id: "octobre-rose-affiche",
    title: "Affiche Octobre Rose",
    file_url: "/projects/octobre-rose-affiche.jpeg",
    link: null
  }
];

const GoaLearn = () => {
  const [flyers, setFlyers] = useState<Content[]>([]);
  const [videos, setVideos] = useState<Content[]>([]);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    const { data: flyersData } = await supabase
      .from('portfolio_content')
      .select('*')
      .in('content_type', ['flyer', 'affiche'])
      .eq('published', true)
      .order('created_at', { ascending: false });

    const { data: videosData } = await supabase
      .from('portfolio_content')
      .select('*')
      .eq('content_type', 'video')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (flyersData) setFlyers(flyersData);
    if (videosData) setVideos(videosData);
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">GOA-Learn</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
            Structure de formation des métiers de la tech que j'ai fondée. 
            Spécialisé dans la création de contenu visuel et vidéo pour accompagner 
            les apprenants dans leur parcours technologique.
          </p>
          
          {/* Stats TikTok */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
              <Eye className="text-primary" size={20} />
              <span className="font-semibold">250K+</span>
              <span className="text-muted-foreground text-sm">vues</span>
            </div>
            <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
              <UserPlus className="text-primary" size={20} />
              <span className="font-semibold">1000+</span>
              <span className="text-muted-foreground text-sm">abonnés</span>
            </div>
            <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
              <Heart className="text-primary" size={20} />
              <span className="font-semibold">6K+</span>
              <span className="text-muted-foreground text-sm">likes</span>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            onClick={() => window.open('https://vm.tiktok.com/ZMD1KARTV/', '_blank')}
            className="gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            Suivre sur TikTok
            <ExternalLink size={16} />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Section Création Affiches et Flyers */}
          <Card className="shadow-elegant border-border/50 hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Image className="text-primary" />
                Création Affiches et Flyers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Affiches statiques */}
                  {staticAffiches.map((affiche) => (
                    affiche.link ? (
                      <a 
                        key={affiche.id} 
                        href={affiche.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group block"
                      >
                        <div className="aspect-[3/4] bg-secondary/50 rounded-lg overflow-hidden">
                          <img 
                            src={affiche.file_url} 
                            alt={affiche.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <p className="text-sm text-primary mt-2 hover:underline font-medium">{affiche.title}</p>
                      </a>
                    ) : (
                      <div key={affiche.id} className="relative group block">
                        <div className="aspect-[3/4] bg-secondary/50 rounded-lg overflow-hidden">
                          <img 
                            src={affiche.file_url} 
                            alt={affiche.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <p className="text-sm text-primary mt-2 font-medium">{affiche.title}</p>
                      </div>
                    )
                  ))}
                  
                  {/* Affiches dynamiques de la DB */}
                  {flyers.map((flyer) => (
                    <div key={flyer.id} className="relative group">
                      <div className="aspect-[3/4] bg-secondary/50 rounded-lg overflow-hidden">
                        <img 
                          src={flyer.thumbnail_url || flyer.file_url} 
                          alt={flyer.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{flyer.title}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="mt-4">
                    Designs et créations graphiques
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section Montages Vidéos */}
          <Card className="shadow-elegant border-border/50 hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="text-primary" />
                Montages Vidéos & Contenus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Vidéos statiques + vidéos de la base de données */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Vidéos statiques */}
                  {staticVideos.map((video) => (
                    <div key={video.id} id={video.id} className="relative group">
                      <div className="aspect-video bg-secondary/50 rounded-lg overflow-hidden">
                        <video 
                          src={video.file_url}
                          className="w-full h-full object-cover"
                          controls
                        />
                      </div>
                      <p className="text-sm mt-2">
                        {video.title}
                      </p>
                    </div>
                  ))}
                  
                  {/* Vidéos dynamiques de la DB */}
                  {videos.map((video) => (
                    <div key={video.id} className="relative group">
                      <div className="aspect-video bg-secondary/50 rounded-lg overflow-hidden">
                        {video.thumbnail_url ? (
                          <img 
                            src={video.thumbnail_url} 
                            alt={video.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <video 
                            src={video.file_url}
                            className="w-full h-full object-cover"
                            controls
                          />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{video.title}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="mt-4">
                    Productions vidéo et montages
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section À propos de GOA-Learn */}
        <Card className="shadow-elegant border-border/50 mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="text-primary" />
              À propos de GOA-Learn
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <BookOpen className="mx-auto mb-4 text-primary" size={40} />
                <h4 className="font-semibold mb-2">Formation Tech</h4>
                <p className="text-sm text-muted-foreground">
                  Formations spécialisées dans les métiers du développement web, 
                  de l'IA et du design graphique
                </p>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <Users className="mx-auto mb-4 text-primary" size={40} />
                <h4 className="font-semibold mb-2">Accompagnement</h4>
                <p className="text-sm text-muted-foreground">
                  Suivi personnalisé et mentorat pour accompagner chaque apprenant 
                  dans sa progression
                </p>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <Video className="mx-auto mb-4 text-primary" size={40} />
                <h4 className="font-semibold mb-2">Contenu Digital</h4>
                <p className="text-sm text-muted-foreground">
                  Production de contenus pédagogiques, tutoriels vidéo et 
                  supports visuels de qualité
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GoaLearn;
