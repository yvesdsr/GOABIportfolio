import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Users, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const competences = [
    // Informatique & Développement web
    "HTML", "CSS", "JavaScript", "Python",
    "Bases de frameworks : Github, IA",
    "Maîtrise des logiciels : Canva, Copilot",
    "Excel, Word, Outlook, Copywriting",
    "Meta Ads", "Google Ads", "TikTok Ads", "LinkedIn Ads", "Google Analytics", "Looker Studio",
    "Maintenance et conception de sites web",
    "Gestion et administration de bases de données",
    
    // Gestion de projet
    "Planification stratégique, budgétisation et contrôle des coûts",
    "Coordination d'équipes pluridisciplinaires", 
    "Suivi, évaluation et amélioration continue",
    
    // Communication & Marketing digital
    "Stratégie de contenu et branding",
    "Animation des réseaux sociaux et gestion d'e-réputation",
    "Outils de design et multimédia : Canva, Photoshop (base), montage vidéo simple",
    
    // Outils & Analyse
    "Trello, Asana, Notion, Google Workspace, Microsoft 365",
    "Excel avancé, Google Data Studio, Power BI (débutant)",
    
    // Soft compétences
    "Leadership & esprit d'équipe",
    "Communication (Français & Anglais)",
    "Organisation rigoureuse & polyvalence",
    
    // Design graphique et montage vidéo
    "Design graphique",
    "Montage vidéo", 
    "Canva",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Adobe Premiere Pro"
  ];

  const certifications = [
    {
      nom: "Google - Project Management",
      image: "/lovable-uploads/22b08926-ef5d-4e42-ba4c-b78cedf8f1f6.png"
    },
    {
      nom: "Google - Intelligence artificielle", 
      image: "/lovable-uploads/547c9dfb-edd7-49a1-a1bb-42114c5954cd.png"
    },
    {
      nom: "Google - Prompting Essentials",
      image: "/lovable-uploads/433a5c0c-0e9d-4f2c-a2ed-a2ba2000aa18.png"
    },
    {
      nom: "Rainforest Alliance - Human Rights, Agriculture & Environment",
      image: "/lovable-uploads/4428c0fa-9981-4fe9-a974-a63ee116f4f8.png"
    }
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
            J'ai dirigé des projets dans le secteur agricole et technologique, conçu des stratégies 
            marketing et accompagné des organisations dans leur transformation digitale. 
            Polyvalent, orienté résultats et doté d'un bon sens de l'organisation, je sais allier 
            rigueur technique et créativité pour atteindre les objectifs fixés.
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
              <div className="space-y-4">
                {certifications.map((certification, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <span className="text-sm font-medium">{certification.nom}</span>
                        {certification.image ? (
                          <div className="mt-3">
                            <img 
                              src={certification.image} 
                              alt={`Certificat ${certification.nom}`}
                              className="w-full max-w-md h-auto rounded-lg shadow-sm border"
                            />
                          </div>
                        ) : (
                          <div className="mt-2 p-3 bg-secondary/30 border-2 border-dashed border-secondary rounded-lg text-center text-xs text-muted-foreground">
                            Espace pour ajouter l'image de certification
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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