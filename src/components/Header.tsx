import { Button } from "@/components/ui/button";
import { Github, Linkedin, ExternalLink, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="min-h-screen relative overflow-hidden bg-background flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 rounded-full bg-orange/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left - Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-block border-2 border-foreground/20 rounded-full px-5 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-sm font-medium">Hello There! 👋</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              I'm <span className="text-gradient-orange">Yves Desire,</span>
              <br />
              Creative Designer
              <br />
              Based in <span className="text-gradient-purple">Abidjan.</span>
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Brand Designer • UI/UX Designer • Développeur Web • Monteur Vidéo
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 gap-2 group"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Portfolio
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-2"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Hire Me
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-4 mt-8 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[
                { icon: Github, href: 'https://github.com/yvesdsr', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/yves-desire-goabi-357ba5353', label: 'LinkedIn' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 group"
                >
                  <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
              <a
                href="https://www.behance.net/yvesdesiregoabi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 group"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                  <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.922 1.32 2.631 2.861 2.631 1.253 0 2.021-.542 2.358-1.602h2.537zm-7.623-4h5.161c-.078-1.305-.732-2.158-2.462-2.158-1.548 0-2.431.883-2.699 2.158zM4.985 3h6.387c2.583 0 4.263 1.166 4.263 3.74 0 1.488-.724 2.653-2.11 3.197v.064c1.712.36 2.686 1.762 2.686 3.578 0 2.883-2.176 4.421-4.978 4.421H4.985V3zm3.397 5.767h2.387c1.146 0 1.878-.505 1.878-1.565 0-1.14-.732-1.502-1.902-1.502H8.382v3.067zm0 6.533h2.632c1.341 0 2.166-.582 2.166-1.85 0-1.216-.883-1.77-2.142-1.77H8.382v3.62z"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Photo with badges */}
          <motion.div
            className="flex-shrink-0 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
              <img
                src="/images/profile-skills.png"
                alt="Yves Desire GOABI - Creative Designer"
                className="w-full h-full object-contain relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-muted-foreground" size={24} />
      </motion.div>
    </header>
  );
};

export default Header;
