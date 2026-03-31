import { motion } from "framer-motion";

const certifications = [
  { nom: "Google - Gestion de Projet", image: "/lovable-uploads/22b08926-ef5d-4e42-ba4c-b78cedf8f1f6.png" },
  { nom: "Google - Intelligence Artificielle", image: "/lovable-uploads/547c9dfb-edd7-49a1-a1bb-42114c5954cd.png" },
  { nom: "Google - Prompting Essentials", image: "/lovable-uploads/433a5c0c-0e9d-4f2c-a2ed-a2ba2000aa18.png" },
  { nom: "Rainforest Alliance", image: "/lovable-uploads/4428c0fa-9981-4fe9-a974-a63ee116f4f8.png" },
  { nom: "Google - Marketing Digital", image: "/certifications/google-marketing-digital.png" },
];

const Certifications = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-orange font-semibold text-sm tracking-wider uppercase">— Certifications</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Mes <span className="text-gradient-orange">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.nom}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="rounded-2xl overflow-hidden border border-border hover:border-orange hover:shadow-lg transition-all duration-500 hover-lift">
                <img
                  src={cert.image}
                  alt={cert.nom}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-3 text-center">{cert.nom}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
