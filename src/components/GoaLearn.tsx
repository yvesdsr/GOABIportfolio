import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Image, Video, Users, BookOpen } from "lucide-react";
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
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Structure de formation des métiers de la tech que j'ai fondée. 
            Spécialisé dans la création de contenu visuel et vidéo pour accompagner 
            les apprenants dans leur parcours technologique.
          </p>
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
                {flyers.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((index) => (
                      <div key={index} className="relative">
                        <div className="aspect-[3/4] bg-secondary/50 border-2 border-dashed border-border rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <Image className="mx-auto mb-2 text-primary" size={32} />
                            <p className="text-sm text-muted-foreground">
                              Création #{index}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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
                {videos.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((index) => (
                      <div key={index} className="relative">
                        <div className="aspect-video bg-secondary/50 border-2 border-dashed border-border rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <Video className="mx-auto mb-2 text-primary" size={32} />
                            <p className="text-sm text-muted-foreground">
                              Montage vidéo #{index}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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
