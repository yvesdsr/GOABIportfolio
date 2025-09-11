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
        "Structure de formation des métiers de la tech disponible sur nos différents réseaux sociaux",
        "Création et animation de formations en développement web et technologies",
        "Développement de contenu pédagogique et accompagnement des apprenants"
      ]
    },
    {
      titre: "Administrateur de groupe",
      entreprise: "SOCAPBLO COOP CA",
      periode: "2023 - 2025",
      lieu: "Abidjan, Côte d'Ivoire",
      description: [
        "Supervision de +600 producteurs et mise en conformité avec les normes internationales",
        "Formation et sensibilisation des membres du SGI et des producteurs aux droits sociaux et aux exigences environnementales",
        "Conception d'un site web professionnel et animation des réseaux sociaux",
        "Élaboration de supports de communication (affiches, newsletters, contenus digitaux)",
        "Coordination des équipes et mise en place d'actions correctives pour améliorer la durabilité de la production"
      ]
    },
    {
      titre: "Chargé de communication",
      entreprise: "IVORY TECH ENGINEERING",
      periode: "2025",
      lieu: "Mission ponctuelle",
      description: [
        "Gestion de la communication interne et externe autour d'un projet innovant de transformation du cacao",
        "Création de contenus digitaux et animation des réseaux sociaux → augmentation de l'engagement en ligne",
        "Développement et gestion d'un site Internet professionnel, améliorant la crédibilité de l'entreprise"
      ]
    },
    {
      titre: "Enseignant",
      entreprise: "ESTAM",
      periode: "2022 - 2023",
      lieu: "Abidjan, Côte d'Ivoire",
      description: [
        "Enseignement de l'architecture des ordinateurs et des bases de l'informatique appliquée",
        "Formation d'étudiants aux outils numériques collaboratifs et au développement web"
      ]
    }
  ];

  const education = [
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
          <h2 className="text-4xl font-bold mb-4">Expérience & Formation</h2>
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
                <Card key={index} className="shadow-card">
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
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
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
                <Card key={index} className="shadow-card">
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
                      {edu.mention && (
                        <Badge variant="secondary">{edu.mention}</Badge>
                      )}
                    </div>
                  </CardHeader>
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