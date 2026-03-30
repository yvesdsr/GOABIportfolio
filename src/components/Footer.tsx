import { Github, Linkedin, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-foreground text-background py-16 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Yves Desire <span className="text-orange">GOABI</span></h3>
            <p className="text-background/70 mb-6 leading-relaxed">
              Creative Designer, Fondateur de RED STUDIO. Passionné par le design, la tech et l'innovation.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: "https://github.com/yvesdsr" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/yves-desire-goabi-357ba5353" },
                { icon: Mail, href: "mailto:snowdenyves@gmail.com" },
              ].map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-orange hover:border-orange transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-3 text-background/70">
              <li><a href="#about" className="hover:text-orange transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-orange transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-orange transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Expertise</h4>
            <ul className="space-y-3 text-background/70">
              <li>Brand & Graphic Design</li>
              <li>UI/UX Design</li>
              <li>Développement Web</li>
              <li>Montage Vidéo</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            &copy; 2026 Yves Desire GOABI. All rights reserved.
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/admin/login')}
            className="text-background/40 hover:text-background hover:bg-background/10"
          >
            <Lock size={14} className="mr-1" />
            Admin
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
