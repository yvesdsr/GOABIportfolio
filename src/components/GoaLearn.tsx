import { Button } from "@/components/ui/button";
import { ExternalLink, Eye, Heart, UserPlus } from "lucide-react";
import { motion } from "framer-motion";

const staticVideos = [
  { id: "li-kah-video", title: "Vidéo LI-KAH", file_url: "/videos/li-kah-project.mp4" },
  { id: "iisan-video", title: "Présentation IISAN — L'IA", file_url: "/videos/iisan-ia-presentation.mp4" },
  { id: "octobre-rose-video", title: "Octobre Rose", file_url: "/videos/octobre-rose.mp4" },
];

const GoaLearn = () => {
  return (
    <section className="py-32 bg-section-dark">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— RED STUDIO</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-tight">
            Création de contenu, <br />
            <span className="italic font-light">formation tech</span> & production vidéo.
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-4 max-w-3xl mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Eye, value: "250K+", label: "vues" },
            { icon: UserPlus, value: "1000+", label: "abonnés" },
            { icon: Heart, value: "6K+", label: "likes" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card border border-subtle rounded-2xl p-5 text-center hover-lift">
              <stat.icon className="text-muted-foreground mx-auto mb-2" size={18} />
              <p className="font-display text-2xl text-gradient-light">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="flex flex-wrap gap-3 mb-12">
          <Button
            variant="outline"
            className="rounded-full gap-2 border-subtle hover:bg-foreground hover:text-background"
            onClick={() => window.open("https://vm.tiktok.com/ZMD1KARTV/", "_blank")}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
            Suivre sur TikTok
            <ExternalLink size={12} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {staticVideos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="aspect-video rounded-2xl overflow-hidden bg-muted border border-subtle">
                <video src={video.file_url} className="w-full h-full object-cover" controls />
              </div>
              <p className="text-sm text-muted-foreground mt-3">{video.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoaLearn;
