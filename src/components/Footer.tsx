import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Yves Desire GOA BI</h3>
            <p className="text-background/80 mb-4">
              Gestionnaire de projets, informaticien et administrateur passionné par 
              la digitalisation des entreprises agricoles et des PME.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/yvesdsr" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/yves-desire-goabi-357ba5353" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:snowdenyves@gmail.com" className="text-background/80 hover:text-background transition-colors">
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
              <li>Développement Web</li>
              <li>Gestion de Projets</li>
              <li>Agriculture Digitale</li>
              <li>Design Graphique</li>
              <li>Montage Vidéo</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; 2024 Yves Desire GOA BI. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;