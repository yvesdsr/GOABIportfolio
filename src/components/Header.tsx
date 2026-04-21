import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowDown, Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header id="hero" className="min-h-screen relative overflow-hidden bg-background flex items-center pt-20">
      {/* Ambient gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-foreground/[0.04] blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-orange/[0.06] blur-3xl"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* grid lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)', backgroundSize: '80px 80px' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-subtle bg-foreground/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs tracking-wide text-muted-foreground">Disponible pour opportunités</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6"
          >
            Yves Desire GOABI
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-[100px] leading-[0.95] mb-8"
          >
            <span className="text-gradient-light">Brand &</span>
            <br />
            <span className="italic font-light">Graphic</span>{" "}
            <span className="text-gradient-light">Designer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            Je conçois des identités visuelles fortes et des univers de marque mémorables pour entrepreneurs, marques et institutions exigeantes.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xs tracking-[0.25em] uppercase text-orange/80 mb-12"
          >
            — IA Product Creator
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-3 justify-center mb-16"
          >
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 gap-2 group h-12"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              Voir mes projets
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-foreground/20 hover:bg-foreground/5 h-12"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Me contacter
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="rounded-full px-6 gap-2 text-muted-foreground hover:text-foreground h-12"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/cv-yves-desire.pdf";
                link.download = "CV_Yves_Desire_GOABI.pdf";
                link.click();
              }}
            >
              <Download size={16} />
              Télécharger mon CV
            </Button>
          </motion.div>

          {/* KPIs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-10 border-t border-subtle"
          >
            {[
              { v: "+100K", l: "vues générées" },
              { v: "+40K", l: "abonnés développés" },
              { v: "20+", l: "projets branding & UI/UX" },
            ].map((k) => (
              <div key={k.l} className="text-center">
                <p className="font-display text-2xl md:text-3xl text-gradient-light mb-1">{k.v}</p>
                <p className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground">{k.l}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-3 mt-12 justify-center"
          >
            {[
              { icon: Github, href: "https://github.com/yvesdsr" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/yves-desire-goabi-357ba5353" },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-subtle flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-all"
              >
                <s.icon size={16} />
              </a>
            ))}
            <a
              href="https://www.behance.net/yvesdesiregoabi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-subtle flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.922 1.32 2.631 2.861 2.631 1.253 0 2.021-.542 2.358-1.602h2.537zm-7.623-4h5.161c-.078-1.305-.732-2.158-2.462-2.158-1.548 0-2.431.883-2.699 2.158zM4.985 3h6.387c2.583 0 4.263 1.166 4.263 3.74 0 1.488-.724 2.653-2.11 3.197v.064c1.712.36 2.686 1.762 2.686 3.578 0 2.883-2.176 4.421-4.978 4.421H4.985V3zm3.397 5.767h2.387c1.146 0 1.878-.505 1.878-1.565 0-1.14-.732-1.502-1.902-1.502H8.382v3.067zm0 6.533h2.632c1.341 0 2.166-.582 2.166-1.85 0-1.216-.883-1.77-2.142-1.77H8.382v3.62z" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-muted-foreground" size={20} />
      </motion.div>
    </header>
  );
};

export default Header;
