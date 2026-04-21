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
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-foreground/[0.03] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-orange/[0.05] blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— Disponible pour opportunités</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl mt-6 leading-[0.95]">
            Travaillons<br />
            <span className="italic font-light">ensemble.</span>
          </h2>
          <p className="text-muted-foreground mt-8 text-lg max-w-xl mx-auto">
            Discutons de votre projet et de la façon dont je peux donner vie à vos idées.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-5">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={item.title}
                  href={item.icon === Mail ? `mailto:${item.value}` : item.icon === Phone ? `tel:${item.value.replace(/\s/g, "")}` : "#"}
                  className="flex items-center gap-5 p-5 rounded-2xl border border-subtle hover:border-foreground/30 hover:bg-card transition-all duration-500 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl border border-subtle bg-foreground/[0.03] flex items-center justify-center flex-shrink-0 group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                    <item.icon size={18} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{item.title}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                  <ArrowRight size={16} className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form action="https://formsubmit.co/snowdenyves@gmail.com" method="POST" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input name="name" placeholder="Votre nom" required className="rounded-xl h-12 bg-card border-subtle" />
                <Input name="email" type="email" placeholder="Email" required className="rounded-xl h-12 bg-card border-subtle" />
              </div>
              <Textarea name="message" placeholder="Décrivez votre projet..." rows={6} required className="rounded-xl bg-card border-subtle" />
              <input type="hidden" name="_subject" value="Nouveau message depuis le portfolio" />
              <Button type="submit" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 h-12 gap-2 w-full md:w-auto">
                <Send size={16} />
                Envoyer le message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
