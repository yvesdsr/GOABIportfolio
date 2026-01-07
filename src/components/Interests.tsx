import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Dumbbell, Music, BookOpen, PenTool, ExternalLink } from "lucide-react";

const Interests = () => {
  const interests = [
    { name: "Sport", icon: Dumbbell },
    { name: "Musique", icon: Music },
    { name: "Lecture", icon: BookOpen },
    { name: "Écriture", icon: PenTool }
  ];

  const wattpadBooks = [
    {
      title: "Les Opposés S'attirent",
      description: "Une histoire captivante sur les différences qui nous rapprochent.",
      status: "En cours",
      stats: { lectures: 496, votes: 21, chapitres: 4 },
      link: "https://www.wattpad.com/story/232361663"
    },
    {
      title: "Aimer?",
      description: "C'est quoi l'amour ?",
      status: "Terminée",
      stats: { lectures: 7, votes: 0, chapitres: 1 },
      link: "https://www.wattpad.com/story/393118324"
    },
    {
      title: "Lettre à Dieu, au Monde, à Moi-même",
      description: "Une réflexion profonde et personnelle.",
      status: "Terminée",
      stats: { lectures: 21, votes: 0, chapitres: 1 },
      link: "https://www.wattpad.com/story/393107011"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Centres d'intérêt */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight flex items-center justify-center gap-3">
            <Heart className="text-primary" />
            Centres d'intérêt
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ce qui me passionne en dehors du travail
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {interests.map((interest, index) => (
            <Card key={index} className="shadow-elegant border-border/50 hover:shadow-glow transition-all duration-300 text-center">
              <CardContent className="pt-6 pb-6">
                <interest.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                <p className="font-medium">{interest.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section Écriture */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 tracking-tight flex items-center justify-center gap-3">
            <PenTool className="text-primary" />
            Mes Œuvres Littéraires
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez mes histoires publiées sur Wattpad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {wattpadBooks.map((book, index) => (
            <Card key={index} className="shadow-elegant border-border/50 hover:shadow-glow transition-all duration-300 group overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <Badge 
                    variant={book.status === "En cours" ? "default" : "secondary"}
                    className={book.status === "En cours" ? "bg-primary" : ""}
                  >
                    {book.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {book.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{book.description}</p>
                
                <div className="flex justify-between text-sm text-muted-foreground mb-4 bg-muted/50 p-3 rounded-lg">
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
                    <p className="text-xs">Chapitres</p>
                  </div>
                </div>

                <Button 
                  className="w-full"
                  onClick={() => window.open(book.link, '_blank')}
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Lire sur Wattpad
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('https://www.wattpad.com/user/Yvesdesiregoa', '_blank')}
          >
            <svg className="mr-2" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
            Voir mon profil Wattpad
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Interests;
