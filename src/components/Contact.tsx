import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contactez-moi</h2>
          <p className="text-lg text-muted-foreground">
            Discutons de vos projets et de la façon dont je peux vous aider
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Restons en contact</h3>
              <p className="text-muted-foreground mb-8">
                Que vous ayez un projet en tête, une question ou simplement envie de discuter 
                de technologie, n'hésitez pas à me contacter. Je serai ravi d'échanger avec vous.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">snowdenyves@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Téléphone</h4>
                  <p className="text-muted-foreground">+225 07 13 62 18 98</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Localisation</h4>
                  <p className="text-muted-foreground">Cocody, Deux-plateaux, Abidjan CV</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Envoyez-moi un message</CardTitle>
            </CardHeader>
            <CardContent>
              <form action="https://formsubmit.co/snowdenyves@gmail.com" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                </div>
                
                <div>
                  <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                    Sujet
                  </label>
                  <Input id="subject" name="subject" placeholder="Sujet de votre message" required />
                </div>

                <div>
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
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="mr-2" size={20} />
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;