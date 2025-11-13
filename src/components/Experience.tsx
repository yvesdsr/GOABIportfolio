import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      titre: "CEO & Fondateur",
      entreprise: "GOA-Learn",
      periode: "2024 - Present",
      lieu: "Abidjan, Côte d'Ivoire",
      description: [
        "IA Digital Creator - Structure de formation des métiers de la tech",
        "Création et animation de formations en développement web et technologies IA",
        "Production de contenu pédagogique vidéo et design graphique",
        "Développement de stratégies de communication digitale pour l'apprentissage tech"
      ]
    },
    {
      titre: "Community Manager Assistant",
      entreprise: "Power Agency",
      periode: "Septembre - Novembre 2025",
      lieu: "Abidjan, Côte d'Ivoire",
      description: [
        "Gestion et animation des réseaux sociaux",
        "Création de contenu visuel et rédactionnel",
        "Suivi des performances et analytics",
        "Support dans l'élaboration de stratégies de communication digitale"
      ]
    },
    {
      titre: "Administrateur de groupe",
      entreprise: "SOCAPBLO COOP CA",
      periode: "2023 - 2025",
      lieu: "Abidjan, Côte d'Ivoire",
      description: [
        "Supervision de +600 producteurs et mise en conformité avec les normes internationales",
        "Formation et sensibilisation des membres du SGI et des producteurs",
        "Conception d'un site web professionnel et animation des réseaux sociaux",
        "Élaboration de supports de communication : affiches, newsletters, contenus digitaux",
        "Coordination des équipes et mise en place d'actions correctives"
      ]
    },
    {
      titre: "Chargé de communication",
      entreprise: "IVORY TECH ENGINEERING",
      periode: "2025",
      lieu: "Mission ponctuelle",
      description: [
        "Gestion de la communication interne et externe d'un projet de transformation du cacao",
        "Création de contenus digitaux et animation des réseaux sociaux",
        "Développement et gestion d'un site Internet professionnel",
        "Amélioration de la crédibilité et de l'engagement en ligne"
      ]
    },
    {
      titre: "Enseignant",
      entreprise: "ESTAM",
      periode: "2022 - 2023",
      lieu: "Abidjan, Côte d'Ivoire",
      description: [
        "Enseignement de l'architecture des ordinateurs",
        "Formation aux bases de l'informatique appliquée",
        "Initiation aux outils numériques collaboratifs et au développement web"
      ]
    }
  ];

  const education = [
    {
      diplome: "IA Product Creator",
      etablissement: "Simplon CI",
      periode: "Octobre 2024 - En cours",
      mention: ""
    },
    {
      diplome: "Licence en informatique",
      etablissement: "Université Nangui Abrogoua",
      periode: "2019 - 2022",
      mention: "Mention Assez-bien"
    },
    {
      diplome: "Baccalauréat scientifique",
      etablissement: "Lycée Classique d'Abidjan",
      periode: "2018",
      mention: ""
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Expérience & Formation</h2>
          <p className="text-lg text-muted-foreground">
            Mon parcours professionnel et académique
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Expérience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Building className="text-primary" />
              Expérience Professionnelle
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="shadow-elegant border-border/50 hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{exp.titre}</CardTitle>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Building size={16} />
                        <span>{exp.entreprise}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarDays size={16} />
                        <span>{exp.periode}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin size={16} />
                        <span>{exp.lieu}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Formation */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Building className="text-primary" />
              Formation
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="shadow-elegant border-border/50 hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.diplome}</CardTitle>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Building size={16} />
                        <span>{edu.etablissement}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarDays size={16} />
                        <span>{edu.periode}</span>
                      </div>
                    </div>
                  </CardHeader>
                  {edu.mention && (
                    <CardContent>
                      <Badge variant="secondary">{edu.mention}</Badge>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
