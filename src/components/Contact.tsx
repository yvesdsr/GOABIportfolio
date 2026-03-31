import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    { icon: Phone, title: "Téléphone", value: "+225 07 13 62 18 98" },
    { icon: Mail, title: "Email", value: "snowdenyves@gmail.com" },
    { icon: MapPin, title: "Localisation", value: "Cocody, Deux-plateaux, Abidjan" },
  ];

  return (
    <section id="contact" className="py-24 bg-section-orange">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange font-semibold text-sm tracking-wider uppercase">— Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Discutons de votre
              <br /><span className="text-gradient-orange">prochain projet</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md">
              Discutons de vos projets et de la façon dont je peux transformer vos idées en réalité.
            </p>

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
                    <item.icon className="text-orange-foreground" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
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
                  <label className="text-sm font-medium mb-2 block">Votre Nom *</label>
                  <Input name="name" placeholder="Ex. Jean Dupont" required className="rounded-xl h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email *</label>
                  <Input name="email" type="email" placeholder="exemple@gmail.com" required className="rounded-xl h-12" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Téléphone</label>
                <Input name="phone" placeholder="Numéro de téléphone" className="rounded-xl h-12" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Votre Message *</label>
                <Textarea name="message" placeholder="Écrivez ici..." rows={5} required className="rounded-xl" />
                <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />
                <input type="hidden" name="_subject" value="Nouveau message depuis le portfolio" />
              </div>
              <Button type="submit" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-10 h-12 gap-2">
                <Send size={18} />
                Envoyer
                <span>→</span>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
