import { motion } from "framer-motion";

const certifications = [
  { nom: "Google — Gestion de Projet", image: "/lovable-uploads/22b08926-ef5d-4e42-ba4c-b78cedf8f1f6.png" },
  { nom: "Google — Intelligence Artificielle", image: "/lovable-uploads/547c9dfb-edd7-49a1-a1bb-42114c5954cd.png" },
  { nom: "Google — Prompting Essentials", image: "/lovable-uploads/433a5c0c-0e9d-4f2c-a2ed-a2ba2000aa18.png" },
  { nom: "Rainforest Alliance", image: "/lovable-uploads/4428c0fa-9981-4fe9-a974-a63ee116f4f8.png" },
  { nom: "Google — Marketing Digital", image: "/certifications/google-marketing-digital.png" },
];

const Certifications = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— Certifications</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-tight">
            Mes <span className="italic font-light">certifications.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.nom}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group"
            >
              <div className="rounded-2xl overflow-hidden border border-subtle bg-card hover:border-foreground/30 transition-all duration-500 hover-lift">
                <img
                  src={cert.image}
                  alt={cert.nom}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
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
