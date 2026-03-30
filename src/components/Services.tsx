import { motion } from "framer-motion";
import { Palette, Monitor, Film, Megaphone, Layout, PenTool } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand & Graphic Design",
    description: "Logos, chartes graphiques, identités visuelles complètes et supports de communication.",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Maquettes, prototypes, interfaces utilisateur intuitives et expériences digitales.",
  },
  {
    icon: Monitor,
    title: "Développement Web",
    description: "Sites web modernes, responsive et performants avec React et les dernières technologies.",
  },
  {
    icon: Film,
    title: "Montage Vidéo",
    description: "Montages professionnels, motion design, contenus vidéo pour réseaux sociaux.",
  },
  {
    icon: Megaphone,
    title: "Communication Digitale",
    description: "Stratégies de communication, community management, campagnes publicitaires.",
  },
  {
    icon: PenTool,
    title: "Direction Artistique",
    description: "Campagnes 360°, direction créative, storytelling visuel et branding complet.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-section-purple relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="text-orange font-semibold text-sm tracking-wider uppercase">— Services</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              <span className="text-gradient-orange">Services</span> I Provide
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-background rounded-2xl p-8 border border-border hover:border-orange hover:shadow-lg transition-all duration-500 hover-lift h-full">
                <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-6 group-hover:bg-orange group-hover:text-orange-foreground transition-all duration-300">
                  <service.icon size={28} className="text-orange group-hover:text-orange-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <div className="mt-6 flex items-center gap-2 text-orange font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more <span>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
