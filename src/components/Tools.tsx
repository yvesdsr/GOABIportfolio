import { motion } from "framer-motion";

const tools = [
  { name: "Figma", level: 95, icon: "🎨" },
  { name: "Photoshop", level: 90, icon: "📸" },
  { name: "Illustrator", level: 85, icon: "✏️" },
  { name: "Premiere Pro", level: 80, icon: "🎬" },
  { name: "React", level: 85, icon: "⚛️" },
  { name: "Canva", level: 95, icon: "🖌️" },
];

const Tools = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-orange font-semibold text-sm tracking-wider uppercase">— My Favorite Tools</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            <span className="text-gradient-orange">Exploring the Tools</span>
            <br />Behind My Designs
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4 group-hover:bg-orange/10 transition-all duration-300 group-hover:scale-110">
                  <span className="text-4xl">{tool.icon}</span>
                </div>
                <motion.p
                  className="text-2xl font-bold text-foreground mb-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {tool.level}%
                </motion.p>
                <p className="text-sm text-muted-foreground">{tool.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
