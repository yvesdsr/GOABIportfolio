import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Accueil", id: "hero" },
  { label: "À propos", id: "about" },
  { label: "Services", id: "services" },
  { label: "Projets", id: "projects" },
  { label: "Process", id: "process" },
  { label: "Outils", id: "tools" },
  { label: "Parcours", id: "parcours" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-glass border-b border-subtle" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => go("hero")} className="font-display text-lg tracking-tight">
          Yves<span className="text-orange">.</span>
        </button>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => go("contact")}
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-foreground/20 text-sm hover:bg-foreground hover:text-background transition-all duration-300"
        >
          Travaillons ensemble
        </button>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-background border-t border-subtle overflow-hidden"
          >
            <ul className="container mx-auto px-6 py-6 space-y-4">
              {links.map((l) => (
                <li key={l.id}>
                  <button onClick={() => go(l.id)} className="text-base text-foreground/80 hover:text-foreground">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
