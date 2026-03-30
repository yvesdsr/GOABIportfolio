import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const wattpadBooks = [
  {
    title: "Les Opposés S'attirent",
    stats: { lectures: 496, votes: 21, chapitres: 4 },
    status: "En cours",
    link: "https://www.wattpad.com/story/232361663"
  },
  {
    title: "Aimer?",
    stats: { lectures: 7, votes: 0, chapitres: 1 },
    status: "Terminée",
    link: "https://www.wattpad.com/story/393118324"
  },
  {
    title: "Lettre à Dieu, au Monde, à Moi-même",
    stats: { lectures: 21, votes: 0, chapitres: 1 },
    status: "Terminée",
    link: "https://www.wattpad.com/story/393107011"
  }
];

const Interests = () => {
  return (
    <section className="py-24 bg-section-purple">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">— Writing</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Mes <span className="text-gradient-purple">Œuvres Littéraires</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {wattpadBooks.map((book, index) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group cursor-pointer"
              onClick={() => window.open(book.link, '_blank')}
            >
              <div className="bg-background rounded-2xl p-6 border border-border hover:border-primary hover-lift h-full">
                <div className="flex justify-between items-center mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${book.status === 'En cours' ? 'bg-orange/10 text-orange' : 'bg-muted text-muted-foreground'}`}>
                    {book.status}
                  </span>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-4 group-hover:text-primary transition-colors">{book.title}</h3>
                <div className="flex justify-between text-sm text-muted-foreground bg-muted rounded-xl p-3">
                  <div className="text-center">
                    <p className="font-bold text-foreground">{book.stats.lectures}</p>
                    <p className="text-xs">Lectures</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-foreground">{book.stats.votes}</p>
                    <p className="text-xs">Votes</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-foreground">{book.stats.chapitres}</p>
                    <p className="text-xs">Chap.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            className="rounded-full gap-2"
            onClick={() => window.open('https://www.wattpad.com/user/Yvesdesiregoa', '_blank')}
          >
            <BookOpen size={18} />
            Voir mon profil Wattpad
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Interests;
