import { motion } from "framer-motion";
import { Palette, Monitor, Film, Megaphone, Layout, PenTool, Globe, Smartphone, FileText, BookOpen, Image, Video } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Création de Sites Internet",
    description: "Sites web modernes, responsive et performants avec les dernières technologies.",
  },
  {
    icon: Monitor,
    title: "Sites WordPress & Portfolios",
    description: "Création de sites WordPress professionnels et portfolios personnalisés.",
  },
  {
    icon: FileText,
    title: "Design de Brochures & Cartes de Visite",
    description: "Brochures, cartes de visite, dépliants et supports print professionnels.",
  },
  {
    icon: Palette,
    title: "Identité Visuelle & Logos",
    description: "Logos, chartes graphiques, identités visuelles complètes et branding.",
  },
  {
    icon: Video,
    title: "Création de Vidéos avec IA",
    description: "Production de contenus vidéo innovants assistés par intelligence artificielle.",
  },
  {
    icon: Film,
    title: "Formation & Montage Vidéo",
    description: "Montages professionnels, motion design et formation en production vidéo.",
  },
  {
    icon: Image,
    title: "Flyers & Affiches",
    description: "Création de flyers, affiches publicitaires et supports visuels percutants.",
  },
  {
    icon: Megaphone,
    title: "Création de Pages & Community Management",
    description: "Création de pages professionnelles et gestion de communautés sur les réseaux sociaux.",
  },
  {
    icon: BookOpen,
    title: "Catalogue & Plaquette Numérique",
    description: "Conception de catalogues produits et plaquettes commerciales numériques.",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Maquettes, prototypes, interfaces utilisateur intuitives et expériences digitales.",
  },
  {
    icon: PenTool,
    title: "Direction Artistique",
    description: "Campagnes 360°, direction créative, storytelling visuel et branding complet.",
  },
  {
    icon: Smartphone,
    title: "Communication Digitale",
    description: "Stratégies de communication, campagnes publicitaires et contenus digitaux.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-section-purple relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="text-orange font-semibold text-sm tracking-wider uppercase">— Mes Services</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              <span className="text-gradient-orange">Services</span> que je propose
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
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <div className="bg-background rounded-2xl p-8 border border-border hover:border-orange hover:shadow-lg transition-all duration-500 hover-lift h-full">
                <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-6 group-hover:bg-orange group-hover:text-orange-foreground transition-all duration-300">
                  <service.icon size={28} className="text-orange group-hover:text-orange-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
