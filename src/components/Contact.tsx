import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">Contactez-moi</h2>
          <p className="text-lg text-muted-foreground">
            Discutons de vos projets et de la façon dont je peux vous aider
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informations de contact */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Restons en contact</h3>
              <p className="text-muted-foreground mb-8">
                Que vous ayez un projet en tête, une question ou simplement envie de discuter 
                de technologie, n'hésitez pas à me contacter. Je serai ravi d'échanger avec vous.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", value: "snowdenyves@gmail.com" },
                { icon: Phone, title: "Téléphone", value: "+225 07 13 62 18 98" },
                { icon: MapPin, title: "Localisation", value: "Cocody, Deux-plateaux, Abidjan CV" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Envoyez-moi un message</CardTitle>
              </CardHeader>
              <CardContent>
                <form action="https://formsubmit.co/snowdenyves@gmail.com" method="POST" className="space-y-6">
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <div>
                      <label htmlFor="name" className="text-sm font-medium mb-2 block">
                        Nom
                      </label>
                      <Input id="name" name="name" placeholder="Votre nom" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium mb-2 block">
                        Email
                      </label>
                      <Input id="email" name="email" type="email" placeholder="votre@email.com" required />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                      Sujet
                    </label>
                    <Input id="subject" name="subject" placeholder="Sujet de votre message" required />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Décrivez votre projet ou votre demande..."
                      rows={6}
                      required
                    />
                    <input type="hidden" name="_next" value={window.location.href} />
                    <input type="hidden" name="_subject" value="Nouveau message depuis le portfolio" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <Button type="submit" className="w-full" size="lg">
                      <Send className="mr-2" size={20} />
                      Envoyer le message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;