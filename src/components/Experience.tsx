import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    { titre: "Graphic & Brand Designer", entreprise: "NexRaiz", periode: "Février 2026 — Présent" },
    { titre: "CEO & Fondateur", entreprise: "RED STUDIO", periode: "2024 — Présent" },
    { titre: "Community Manager Assistant", entreprise: "Power Agency", periode: "Sept — Nov 2025" },
    { titre: "Chargé de communication", entreprise: "SOCAPBLO COOP CA", periode: "2023 — 2025" },
  ];

  const education = [
    { diplome: "IA Product Creator", etablissement: "Simplon CI", periode: "Octobre 2025 — En cours" },
    { diplome: "Licence en Informatique", etablissement: "Université Nangui Abrogoua", periode: "2019 — 2022" },
    { diplome: "Baccalauréat Scientifique", etablissement: "Lycée Classique d'Abidjan", periode: "2018" },
  ];

  return (
    <section id="parcours" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— Mon Parcours</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-tight">
            Académique <span className="italic font-light">et</span> Professionnel
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-subtle rounded-3xl p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-full border border-subtle flex items-center justify-center">
                <GraduationCap size={18} />
              </div>
              <h3 className="font-display text-2xl">Formation</h3>
            </div>

            <div className="space-y-0 border-l border-subtle ml-3">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-8 pb-8 last:pb-0 group"
                >
                  <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-muted-foreground/40 group-hover:bg-orange transition-colors" />
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{edu.periode}</p>
                  <h4 className="font-display text-lg">{edu.etablissement}</h4>
                  <p className="text-sm text-muted-foreground">{edu.diplome}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-subtle rounded-3xl p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-full border border-subtle flex items-center justify-center">
                <Briefcase size={18} />
              </div>
              <h3 className="font-display text-2xl">Expérience Professionnelle</h3>
            </div>

            <div className="space-y-0 border-l border-subtle ml-3">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-8 pb-8 last:pb-0 group"
                >
                  <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-muted-foreground/40 group-hover:bg-orange transition-colors" />
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{exp.periode}</p>
                  <h4 className="font-display text-lg">{exp.entreprise}</h4>
                  <p className="text-sm text-muted-foreground">{exp.titre}</p>
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
