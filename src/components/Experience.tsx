import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      titre: "Graphic & Brand Designer",
      entreprise: "NexRaiz",
      periode: "Février 2026 - Présent",
      lieu: "Abidjan, Côte d'Ivoire",
      description: [
        "Création de l'identité visuelle complète de l'entreprise",
        "Conception du logo et de ses versions monochromes",
        "Élaboration de la charte graphique et des supports de communication"
      ]
    },
    {
      titre: "Graphic Designer Freelance - Réalisation de Brochures",
      entreprise: "KalouGroup",
      periode: "2026",
      lieu: "Abidjan, Côte d'Ivoire",
      description: [
        "Conception et réalisation de brochures professionnelles pour l'entreprise",
        "Mise en page et design graphique des supports de communication print"
      ]
    },
    {
      titre: "CEO & Fondateur",
      entreprise: "RED STUDIO",
      periode: "2024 - Présent",
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
      titre: "Chargé de communication et administrateur de groupe",
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
    }
  ];

  const education = [
    {
      diplome: "IA Product Creator",
      etablissement: "Simplon CI",
      periode: "Octobre 2025 - En cours",
      mention: ""
    },
    {
      diplome: "Licence en informatique",
      etablissement: "Université Nangui Abrogoua",
      periode: "2019 - 2022",
      mention: "Mention Assez-bien"
    },
    {
      diplome: "Diplôme de Licence",
      etablissement: "Université Nangui Abrogoua",
      periode: "2022",
      mention: "Informatique"
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
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Expérience & Formation</h2>
          <p className="text-lg text-muted-foreground">
            Mon parcours professionnel et académique
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Expérience */}
          <div>
            <motion.h3 
              className="text-2xl font-semibold mb-6 flex items-center gap-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Building className="text-primary" />
              Expérience Professionnelle
            </motion.h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="shadow-elegant border-border/50 hover:shadow-glow transition-all duration-300">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg leading-tight">{exp.titre}</CardTitle>
                      <div className="space-y-1.5 mt-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Building size={16} className="flex-shrink-0" />
                          <span>{exp.entreprise}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CalendarDays size={16} className="flex-shrink-0" />
                          <span>{exp.periode}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin size={16} className="flex-shrink-0" />
                          <span>{exp.lieu}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-1.5 mb-4">
                        {exp.description.map((desc, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm font-bold text-primary border-t border-border/50 pt-3">
                        📂 Voir section projet pour toutes réalisations liées à ce poste
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Formation */}
          <div className="lg:self-start">
            <motion.h3 
              className="text-2xl font-semibold mb-6 flex items-center gap-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Building className="text-primary" />
              Formation
            </motion.h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="shadow-elegant border-border/50 hover:shadow-glow transition-all duration-300">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{edu.diplome}</CardTitle>
                      <div className="space-y-1.5 mt-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Building size={16} className="flex-shrink-0" />
                          <span>{edu.etablissement}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CalendarDays size={16} className="flex-shrink-0" />
                          <span>{edu.periode}</span>
                        </div>
                      </div>
                    </CardHeader>
                    {edu.mention && (
                      <CardContent className="pt-0">
                        <Badge variant="secondary">{edu.mention}</Badge>
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
