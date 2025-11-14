import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-hero shadow-glow">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/3ea6a347-b5b5-4a34-8d09-68bbc799d73a.png" 
              alt="Yves Desire GOA BI" 
              className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-card"
            />
          </div>
          <div className="text-center lg:text-left text-white flex-1">
            <h1 className="text-5xl font-bold mb-4 tracking-tight">YVES DESIRE GOABI</h1>
            <p className="text-xl mb-6 opacity-90 font-medium">
              IA DIGITAL PRODUCTOR | DÉVELOPPEUR WEB | GRAPHISTE | MONTEUR VIDÉO | MARKETING & COMMUNICATION | CERTIFIÉ GOOGLE (IA & PROJECT MANAGEMENT)
            </p>
            <p className="text-lg mb-8 opacity-80 max-w-2xl leading-relaxed">
              CEO de "GOA-Learn" - IA Digital Creator. Spécialisé dans la création de sites web, design graphique, 
              montage vidéo, community management, stratégies de communication et chartes graphiques. 
              Informaticien de formation avec une licence en informatique, certifié Google en gestion de projet et intelligence artificielle.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+225 07 13 62 18 98</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>snowden.yves@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Cocody, Deux-plateaux, Abidjan CV</span>
              </div>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={() => window.open('https://github.com/yvesdsr', '_blank')}
              >
                <Github className="mr-2" size={20} />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={() => window.open('https://www.linkedin.com/in/yves-desire-goabi-357ba5353', '_blank')}
              >
                <Linkedin className="mr-2" size={20} />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;