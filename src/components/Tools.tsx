import { motion } from "framer-motion";

const tools = [
  { name: "Figma", level: 95, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Photoshop", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
  { name: "Illustrator", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
  { name: "Premiere Pro", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg" },
  { name: "React", level: null, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Canva", level: 95, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
];

const Tools = () => {
  return (
    <section id="tools" className="py-32 bg-section-dark">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— Mes Outils Favoris</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-tight">
            Les outils derrière <span className="italic font-light">mes créations.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group"
            >
              <div className="bg-card border border-subtle rounded-2xl p-6 hover:border-foreground/30 transition-all duration-500 hover-lift card-shine">
                <div className="w-14 h-14 rounded-xl bg-background flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img src={tool.logo} alt={tool.name} className="w-9 h-9" />
                </div>
                <p className="font-medium text-sm mb-2">{tool.name}</p>
                {tool.level !== null ? (
                  <>
                    <div className="h-1 bg-foreground/10 rounded-full overflow-hidden mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tool.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.08 }}
                        className="h-full bg-gradient-to-r from-orange to-orange-light"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">{tool.level}%</p>
                  </>
                ) : (
                  <p className="text-xs text-muted-foreground italic">Écosystème dev</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
