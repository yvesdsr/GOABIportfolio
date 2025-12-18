import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, MapPin, Users, GraduationCap } from "lucide-react";

const ProfessionalActivities = () => {
  const carteJeunesVideos = [
    "/videos/carte-jeunes-1.mp4",
    "/videos/carte-jeunes-2.mp4",
    "/videos/carte-jeunes-3.mp4",
  ];

  const pnsarVideos = [
    "/videos/pnsar-1.mp4",
    "/videos/pnsar-2.mp4",
    "/videos/pnsar-3.mp4",
    "/videos/pnsar-4.mp4",
  ];

  return (
    <section id="activities" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Activités Professionnelles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Événements et participations marquants dans le domaine professionnel
          </p>
        </div>

        <div className="space-y-8">
          {/* Carte Jeunes */}
          <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="border-b border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl md:text-2xl text-foreground mb-2">
                    Participation au Programme de Lancement de la Carte Jeunes
                  </CardTitle>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      <span>Sofitel Hôtel Ivoire, Abidjan</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="h-4 w-4" />
                      <span>Présence du Ministre de la Jeunesse et autorités</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-6">
                Participation au programme officiel de lancement de la Carte Jeunes au Sofitel Hôtel Ivoire, 
                en présence du Ministre de la Jeunesse et de plusieurs autres autorités gouvernementales. 
                Un événement majeur pour la jeunesse ivoirienne.
              </p>

              {/* Image */}
              <div className="mb-6">
                <div className="rounded-xl overflow-hidden border border-border/50 shadow-md">
                  <img 
                    src="/activities/carte-jeunes-1.jpeg" 
                    alt="Participation au lancement de la Carte Jeunes - Sofitel Hôtel Ivoire"
                    className="w-full h-auto object-cover max-h-[500px]"
                  />
                </div>
              </div>

              {/* Videos */}
              <h4 className="text-lg font-semibold text-foreground mb-4">Moments de l'événement</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {carteJeunesVideos.map((video, index) => (
                  <div key={index} className="rounded-xl overflow-hidden border border-border/50 shadow-md">
                    <video
                      controls
                      className="w-full aspect-video object-cover"
                      preload="metadata"
                    >
                      <source src={video} type="video/mp4" />
                      Votre navigateur ne supporte pas la lecture vidéo.
                    </video>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* PNSAR */}
          <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="border-b border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl md:text-2xl text-foreground mb-2">
                    Participation au Programme National de Stage, d'Apprentissage et de Reconversion Professionnelle (PNSAR)
                  </CardTitle>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Users className="h-4 w-4" />
                      <span>Programme gouvernemental d'insertion professionnelle</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-6">
                Participation au Programme National de Stage, d'Apprentissage et de Reconversion Professionnelle (PNSAR), 
                une initiative gouvernementale visant à favoriser l'insertion professionnelle des jeunes et la reconversion 
                des travailleurs en Côte d'Ivoire.
              </p>

              {/* Videos */}
              <h4 className="text-lg font-semibold text-foreground mb-4">Moments de l'événement</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {pnsarVideos.map((video, index) => (
                  <div key={index} className="rounded-xl overflow-hidden border border-border/50 shadow-md">
                    <video
                      controls
                      className="w-full aspect-video object-cover"
                      preload="metadata"
                    >
                      <source src={video} type="video/mp4" />
                      Votre navigateur ne supporte pas la lecture vidéo.
                    </video>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalActivities;
