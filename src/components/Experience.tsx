import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      titre: "Graphic & Brand Designer",
      entreprise: "NexRaiz",
      periode: "Février 2026 - Présent",
    },
    {
      titre: "CEO & Fondateur",
      entreprise: "RED STUDIO",
      periode: "2024 - Présent",
    },
    {
      titre: "Community Manager Assistant",
      entreprise: "Power Agency",
      periode: "Sept - Nov 2025",
    },
    {
      titre: "Chargé de communication",
      entreprise: "SOCAPBLO COOP CA",
      periode: "2023 - 2025",
    }
  ];

  const education = [
    {
      diplome: "IA Product Creator",
      etablissement: "Simplon CI",
      periode: "Octobre 2025 - En cours",
    },
    {
      diplome: "Licence en Informatique",
      etablissement: "Université Nangui Abrogoua",
      periode: "2019 - 2022",
    },
    {
      diplome: "Baccalauréat Scientifique",
      etablissement: "Lycée Classique d'Abidjan",
      periode: "2018",
    }
  ];

  return (
    <section className="py-24 bg-section-orange relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-orange font-semibold text-sm tracking-wider uppercase">— Education & Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            My <span className="text-gradient-orange">Academic and</span>
            <br /><span className="text-gradient-purple">Professional</span> Journey
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-orange flex items-center justify-center">
                <GraduationCap className="text-orange-foreground" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-0 border-l-2 border-border ml-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative pl-8 pb-8 group"
                >
                  <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-border group-hover:bg-orange transition-colors duration-300" />
                  <p className="text-sm text-muted-foreground mb-1">{edu.periode}</p>
                  <h4 className="text-lg font-bold">{edu.etablissement}</h4>
                  <p className="text-muted-foreground">{edu.diplome}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-orange flex items-center justify-center">
                <Briefcase className="text-orange-foreground" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>

            <div className="space-y-0 border-l-2 border-border ml-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative pl-8 pb-8 group"
                >
                  <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-border group-hover:bg-orange transition-colors duration-300" />
                  <p className="text-sm text-muted-foreground mb-1">{exp.periode}</p>
                  <h4 className="text-lg font-bold">{exp.entreprise}</h4>
                  <p className="text-muted-foreground">{exp.titre}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
