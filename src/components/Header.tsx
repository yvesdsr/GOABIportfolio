import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-hero shadow-glow">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/profile-photo.png" 
              alt="Yves Desire GOA BI" 
              className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-card"
            />
          </div>
          <div className="text-center lg:text-left text-white flex-1">
            <h1 className="text-5xl font-bold mb-4 tracking-tight">YVES DESIRE GOABI</h1>
            <p className="text-xl mb-6 opacity-90 font-medium">
              IA Digital Creator | Développeur Web | Graphiste | Monteur Vidéo | Community Manager | Certifié Google
            </p>
            <p className="text-lg mb-8 opacity-80 max-w-2xl leading-relaxed">
              Fondateur de GOA-Learn, je conçois des sites web, crée des visuels percutants et produis du contenu vidéo engageant. 
              Passionné par le digital et l'innovation, j'accompagne les entreprises dans leur communication et leur présence en ligne.
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
            <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
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
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={() => window.open('https://www.behance.net/yvessnowden18', '_blank')}
              >
                <svg className="mr-2" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.922 1.32 2.631 2.861 2.631 1.253 0 2.021-.542 2.358-1.602h2.537zm-7.623-4h5.161c-.078-1.305-.732-2.158-2.462-2.158-1.548 0-2.431.883-2.699 2.158zM4.985 3h6.387c2.583 0 4.263 1.166 4.263 3.74 0 1.488-.724 2.653-2.11 3.197v.064c1.712.36 2.686 1.762 2.686 3.578 0 2.883-2.176 4.421-4.978 4.421H4.985V3zm3.397 5.767h2.387c1.146 0 1.878-.505 1.878-1.565 0-1.14-.732-1.502-1.902-1.502H8.382v3.067zm0 6.533h2.632c1.341 0 2.166-.582 2.166-1.85 0-1.216-.883-1.77-2.142-1.77H8.382v3.62z"/>
                </svg>
                Behance
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;