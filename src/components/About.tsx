import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Users, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const competences = [
    "Gestion de projets",
    "Intelligence Artificielle",
    "HTML, CSS, JavaScript, Python",
    "Organisation et planification",
    "Leadership",
    "Coaching"
  ];

  const certifications = [
    "GOOGLE : PROJECTS MANAGEMENT",
    "GOOGLE : INTELLIGENCE ARTIFICIELLE",
    "Rainforest Alliance : Management, Traçabilité, Prime, Agriculture, Social, Environnement"
  ];

  const langues = [
    { langue: "Français", niveau: "Langue maternelle" },
    { langue: "Anglais", niveau: "Niveau moyen" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Profil Professionnel</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Développeur web et gestionnaire de projets certifié, avec une vision 
            orientée vers la digitalisation des entreprises agricoles et des PME. 
            Mon objectif : créer des solutions technologiques efficaces et 
            accessibles, en conjuguant savoir-faire technique et sens de l'organisation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="text-primary" />
                Compétences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {competences.map((competence, index) => (
                  <Badge key={index} variant="secondary">
                    {competence}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="text-primary" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {certifications.map((certification, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{certification}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="text-primary" />
              Langues
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {langues.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                  <span className="font-medium">{item.langue}</span>
                  <Badge variant="outline">{item.niveau}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;