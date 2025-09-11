import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Video, Users, BookOpen } from "lucide-react";

const GoaLearn = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">GOA-Learn</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Structure de formation des métiers de la tech que j'ai fondée. 
            Disponible sur nos différents réseaux sociaux pour accompagner 
            les apprenants dans leur parcours technologique.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Section Vidéos de Formation */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="text-primary" />
                Vidéos de Formation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((index) => (
                    <div key={index} className="relative">
                      <div className="aspect-video bg-secondary/50 border-2 border-dashed border-secondary rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <Play className="mx-auto mb-2 text-primary" size={32} />
                          <p className="text-sm text-muted-foreground">
                            Vidéo de formation #{index}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="mt-4">
                    Espace pour ajouter vos vidéos de formation
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section Montages Vidéos */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="text-primary" />
                Montages Vidéos & Contenus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((index) => (
                    <div key={index} className="relative">
                      <div className="aspect-video bg-secondary/50 border-2 border-dashed border-secondary rounded-lg flex items-center justify-center">
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
                <div className="text-center">
                  <Badge variant="outline" className="mt-4">
                    Espace pour vos montages vidéos
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section À propos de GOA-Learn */}
        <Card className="shadow-card mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="text-primary" />
              À propos de GOA-Learn
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Formation Tech</h3>
                <p className="text-sm text-muted-foreground">
                  Formations spécialisées dans les métiers de la technologie
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Accompagnement</h3>
                <p className="text-sm text-muted-foreground">
                  Suivi personnalisé des apprenants dans leur parcours
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Contenu Digital</h3>
                <p className="text-sm text-muted-foreground">
                  Présent sur tous les réseaux sociaux avec du contenu de qualité
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