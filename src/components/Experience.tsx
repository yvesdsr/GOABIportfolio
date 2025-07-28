import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      titre: "Administrateur de groupe",
      entreprise: "SOCAPBLO COOP CA",
      periode: "2024 - Present",
      lieu: "Abidjan, Côte d'Ivoire",
      description: [
        "Responsable de la coordination, du suivi et de l'organisation des activités du groupe de producteurs au sein de la société coopérative",
        "Gestion des membres, traçabilité des productions, support administratif et technique",
        "Digitalisation des processus internes via des outils informatiques et digitaux"
      ]
    },
    {
      titre: "Enseignant",
      entreprise: "École supérieure des technologies avancées et de management (ESTAM)",
      periode: "2022 - 2023",
      lieu: "Abidjan, Côte d'Ivoire",
      description: [
        "Enseignant en architecture des ordinateurs et informatique appliquée",
        "Formation des étudiants aux technologies avancées et de management"
      ]
    }
  ];

  const education = [
    {
      diplome: "LICENCE EN INFORMATIQUE",
      etablissement: "UNIVERSITÉ NANGUI ABROGOUA, Abidjan, Cv",
      periode: "2022",
      mention: "Mention Assez-bien"
    },
    {
      diplome: "Baccalauréat scientifique",
      etablissement: "LYCEE CLASSIQUE D'ABIDJAN",
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