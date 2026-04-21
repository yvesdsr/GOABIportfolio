import { Github, Linkedin, Mail, Lock, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-section-dark border-t border-subtle py-16 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-2xl mb-4">
              Yves Désiré <span className="text-orange">GOABI</span>
            </h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed max-w-sm">
              Brand & Graphic Designer · IA Product Creator. Conception d'identités visuelles et d'univers de marque mémorables.
            </p>
            <div className="flex gap-2">
              {[
                { icon: Github, href: "https://github.com/yvesdsr" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/yves-desire-goabi-357ba5353/" },
                { icon: Mail, href: "mailto:snowdenyves@gmail.com" },
                { icon: BookOpen, href: "https://www.wattpad.com/user/Yvesdesiregoa" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-subtle flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-all"
                >
                  <s.icon size={14} />
                </a>
              ))}
              <a
                href="https://www.behance.net/yvesdesiregoabi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-subtle flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-all"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.922 1.32 2.631 2.861 2.631 1.253 0 2.021-.542 2.358-1.602h2.537zm-7.623-4h5.161c-.078-1.305-.732-2.158-2.462-2.158-1.548 0-2.431.883-2.699 2.158zM4.985 3h6.387c2.583 0 4.263 1.166 4.263 3.74 0 1.488-.724 2.653-2.11 3.197v.064c1.712.36 2.686 1.762 2.686 3.578 0 2.883-2.176 4.421-4.978 4.421H4.985V3zm3.397 5.767h2.387c1.146 0 1.878-.505 1.878-1.565 0-1.14-.732-1.502-1.902-1.502H8.382v3.067zm0 6.533h2.632c1.341 0 2.166-.582 2.166-1.85 0-1.216-.883-1.77-2.142-1.77H8.382v3.62z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "À propos", id: "about" },
                { label: "Services", id: "services" },
                { label: "Projets", id: "projects" },
                { label: "Process", id: "process" },
                { label: "Parcours", id: "parcours" },
                { label: "Contact", id: "contact" },
              ].map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Expertise</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Brand & Graphic Design</li>
              <li>Direction Artistique</li>
              <li>UI/UX Design</li>
              <li>Communication Digitale</li>
              <li>IA Product Creation</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-subtle mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            &copy; 2026 Yves Désiré GOABI. Conçu avec soin à Abidjan.
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/admin/login")}
            className="text-muted-foreground/50 hover:text-foreground hover:bg-foreground/5 text-xs"
          >
            <Lock size={12} className="mr-1" />
            Admin
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
