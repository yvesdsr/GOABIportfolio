import { Github, Linkedin, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-foreground text-background py-12 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Yves Desire GOA BI</h3>
            <p className="text-background/80 mb-4">
              IA Digital Producer, créateur de contenu et expert en transformation digitale. 
              Fondateur de RED STUDIO. Passionné par la tech, le design et l'innovation.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/yvesdsr" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/yves-desire-goabi-357ba5353" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:snowden.yves@gmail.com" className="text-background/80 hover:text-background transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#about" className="hover:text-background transition-colors">À propos</a></li>
              <li><a href="#experience" className="hover:text-background transition-colors">Expérience</a></li>
              <li><a href="#projects" className="hover:text-background transition-colors">Projets</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Domaines d'expertise</h4>
            <ul className="space-y-2 text-background/80">
              <li>IA & Digital Production</li>
              <li>Développement Web</li>
              <li>Design Graphique</li>
              <li>Montage Vidéo</li>
              <li>Community Management</li>
              <li>Stratégie de Communication</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-center md:text-left">
            &copy; 2024 Yves Desire GOA BI. Tous droits réservés.
          </p>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/admin/login')}
            className="text-background/60 hover:text-background hover:bg-background/10"
          >
            <Lock size={16} className="mr-2" />
            Admin
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
