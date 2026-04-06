import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CTA = () => {
  const contactInfo = [
    { icon: Phone, title: "Téléphone", value: "+225 07 13 62 18 98" },
    { icon: Mail, title: "Email", value: "snowdenyves@gmail.com" },
    { icon: MapPin, title: "Localisation", value: "Cocody, Deux-plateaux, Abidjan" },
  ];

  return (
    <section id="cta" className="py-24 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-orange/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Big CTA headline */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Travaillons <span className="text-gradient-orange">ensemble</span>
          </h2>
          <p className="text-background/60 text-lg max-w-xl mx-auto">
            Discutons de votre projet et de la façon dont je peux transformer vos idées en réalité.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Badge label="Designer" />
            <Badge label="Stratège digital" />
            <Badge label="Créateur de contenu" />
            <Badge label="Orienté résultats" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8">Disponible pour opportunités</h3>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <div className="w-12 h-12 rounded-full bg-orange flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-background" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-background/50">{item.title}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form action="https://formsubmit.co/snowdenyves@gmail.com" method="POST" className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block text-background/70">Votre Nom *</label>
                  <Input name="name" placeholder="Ex. Jean Dupont" required className="rounded-xl h-12 bg-background/10 border-background/20 text-background placeholder:text-background/30" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-background/70">Email *</label>
                  <Input name="email" type="email" placeholder="exemple@gmail.com" required className="rounded-xl h-12 bg-background/10 border-background/20 text-background placeholder:text-background/30" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block text-background/70">Votre Message *</label>
                <Textarea name="message" placeholder="Décrivez votre projet..." rows={5} required className="rounded-xl bg-background/10 border-background/20 text-background placeholder:text-background/30" />
                <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />
                <input type="hidden" name="_subject" value="Nouveau message depuis le portfolio" />
              </div>
              <Button type="submit" className="bg-orange text-background hover:bg-orange/90 rounded-full px-10 h-12 gap-2 w-full md:w-auto">
                <Send size={18} />
                Envoyer le message
                <ArrowRight size={16} />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Badge = ({ label }: { label: string }) => (
  <span className="bg-background/10 border border-background/20 text-background/80 rounded-full px-4 py-1.5 text-sm">
    {label}
  </span>
);

export default CTA;
