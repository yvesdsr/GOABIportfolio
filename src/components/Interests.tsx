import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const wattpadBooks = [
  { title: "Les Opposés S'attirent", stats: { lectures: 496, votes: 21, chapitres: 4 }, status: "En cours", link: "https://www.wattpad.com/story/232361663" },
  { title: "Aimer ?", stats: { lectures: 7, votes: 0, chapitres: 1 }, status: "Terminée", link: "https://www.wattpad.com/story/393118324" },
  { title: "Lettre à Dieu, au Monde, à Moi-même", stats: { lectures: 21, votes: 0, chapitres: 1 }, status: "Terminée", link: "https://www.wattpad.com/story/393107011" },
];

const Interests = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— Écriture</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-tight">
            Mes œuvres <span className="italic font-light">littéraires.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {wattpadBooks.map((book, i) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group cursor-pointer"
              onClick={() => window.open(book.link, "_blank")}
            >
              <div className="bg-card border border-subtle rounded-2xl p-6 hover:border-foreground/30 hover-lift h-full card-shine">
                <div className="flex justify-between items-center mb-6">
                  <span className={`text-[10px] uppercase tracking-widest px-3 py-1 rounded-full ${book.status === "En cours" ? "bg-orange/10 text-orange" : "bg-foreground/5 text-muted-foreground"}`}>
                    {book.status}
                  </span>
                  <ExternalLink size={14} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl mb-6 group-hover:text-orange transition-colors">{book.title}</h3>
                <div className="grid grid-cols-3 text-center border-t border-subtle pt-4">
                  <div>
                    <p className="font-display text-lg">{book.stats.lectures}</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Lectures</p>
                  </div>
                  <div className="border-x border-subtle">
                    <p className="font-display text-lg">{book.stats.votes}</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Votes</p>
                  </div>
                  <div>
                    <p className="font-display text-lg">{book.stats.chapitres}</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Chap.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            className="rounded-full gap-2 border-subtle hover:bg-foreground hover:text-background"
            onClick={() => window.open("https://www.wattpad.com/user/Yvesdesiregoa", "_blank")}
          >
            <BookOpen size={16} />
            Voir mon profil Wattpad
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Interests;
