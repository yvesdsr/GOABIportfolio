import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Users, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const competences = [
    // Développement Web
    "HTML/CSS", "JavaScript", "React", "GitHub",
    
    // Design & Création
    "Photoshop", "Illustrator", "Canva", "Figma",
    
    // Vidéo
    "Premiere Pro", "CapCut",
    
    // Marketing Digital
    "Community Management", "Meta Ads", "Google Ads",
    
    // IA & Outils
    "IA & Prompting", "Notion", "Microsoft 365"
  ];

  const certifications = [
    {
      nom: "Google - Project Management",
      image: "/lovable-uploads/22b08926-ef5d-4e42-ba4c-b78cedf8f1f6.png"
    },
    {
      nom: "Google - Intelligence Artificielle", 
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Profil Professionnel</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Créateur digital passionné : je conçois des sites web modernes, des visuels percutants et du contenu vidéo engageant. 
            J'accompagne les entreprises et organisations dans leur communication digitale, de la stratégie à la réalisation. 
            Mon parcours m'a permis de travailler avec des coopératives agricoles et des entreprises tech, 
            toujours avec le souci du résultat et de la qualité.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <Card className="shadow-elegant border-border/50 hover:shadow-glow transition-all duration-300 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="text-primary" />
                  Compétences
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {competences.map((competence, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                    >
                      <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                        {competence}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="shadow-elegant border-border/50 hover:shadow-glow transition-all duration-300 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="text-primary" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <motion.div 
                      key={index} 
                      className="group"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="relative overflow-hidden rounded-lg border border-border hover:border-primary transition-colors">
                        <img 
                          src={cert.image} 
                          alt={cert.nom}
                          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground mt-2 text-center">{cert.nom}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="shadow-elegant border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="text-primary" />
                Langues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {langues.map((langue, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center justify-between p-4 bg-muted rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="font-medium">{langue.langue}</span>
                    <Badge variant="outline">{langue.niveau}</Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;