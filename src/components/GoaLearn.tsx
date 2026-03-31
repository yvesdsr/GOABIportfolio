import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye, Heart, UserPlus } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";

interface Content {
  id: string;
  title: string;
  description: string | null;
  content_type: string;
  file_url: string;
  thumbnail_url: string | null;
}

const staticVideos = [
  {
    id: "li-kah-video",
    title: "Vidéo LI-KAH",
    file_url: "/videos/li-kah-project.mp4",
  },
  {
    id: "iisan-video",
    title: "Présentation IISAN - L'IA",
    file_url: "/videos/iisan-ia-presentation.mp4",
  },
  {
    id: "octobre-rose-video",
    title: "Octobre Rose",
    file_url: "/videos/octobre-rose.mp4",
  }
];

const staticAffiches = [
  {
    id: "li-kah-affiche",
    title: "Affiche LI-KAH",
    file_url: "/lovable-uploads/li-kah-affiche.jpeg",
    link: "https://www.canva.com/design/DAG7OpacWdE/QhF9oggwgvHXUlf6dMryaw/view"
  },
  {
    id: "octobre-rose-affiche",
    title: "Affiche Octobre Rose",
    file_url: "/projects/octobre-rose-affiche.jpeg",
    link: null
  }
];

const GoaLearn = () => {
  const [flyers, setFlyers] = useState<Content[]>([]);
  const [videos, setVideos] = useState<Content[]>([]);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    const { data: flyersData } = await supabase
      .from('portfolio_content')
      .select('*')
      .in('content_type', ['flyer', 'affiche'])
      .eq('published', true)
      .order('created_at', { ascending: false });

    const { data: videosData } = await supabase
      .from('portfolio_content')
      .select('*')
      .eq('content_type', 'video')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (flyersData) setFlyers(flyersData);
    if (videosData) setVideos(videosData);
  };

  return (
    <section className="py-24 bg-section-purple">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">— RED STUDIO</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Création de <span className="text-gradient-purple">Contenu</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Formation tech, création visuelle et production vidéo
          </p>

          {/* TikTok Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {[
              { icon: Eye, value: "250K+", label: "vues" },
              { icon: UserPlus, value: "1000+", label: "abonnés" },
              { icon: Heart, value: "6K+", label: "likes" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2 bg-background/80 px-5 py-3 rounded-full shadow-sm">
                <stat.icon className="text-primary" size={18} />
                <span className="font-bold">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button
              variant="outline"
              className="rounded-full gap-2"
              onClick={() => window.open('https://vm.tiktok.com/ZMD1KARTV/', '_blank')}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              Suivre sur TikTok
              <ExternalLink size={14} />
            </Button>
          </motion.div>
        </motion.div>

        {/* Visual grid - Affiches */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {staticAffiches.map((affiche, index) => (
            <motion.div
              key={affiche.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => affiche.link && window.open(affiche.link, '_blank')}
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src={affiche.file_url}
                  alt={affiche.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </motion.div>
          ))}
          {flyers.map((flyer, index) => (
            <motion.div
              key={flyer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (staticAffiches.length + index) * 0.1 }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src={flyer.thumbnail_url || flyer.file_url}
                  alt={flyer.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Videos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {staticVideos.map((video, index) => (
            <motion.div
              key={video.id}
              id={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="aspect-video rounded-2xl overflow-hidden bg-foreground/5">
                <video src={video.file_url} className="w-full h-full object-cover" controls />
              </div>
              <p className="text-sm font-medium mt-3">{video.title}</p>
            </motion.div>
          ))}
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (staticVideos.length + index) * 0.1 }}
            >
              <div className="aspect-video rounded-2xl overflow-hidden bg-foreground/5">
                {video.thumbnail_url ? (
                  <img src={video.thumbnail_url} alt={video.title} className="w-full h-full object-cover" />
                ) : (
                  <video src={video.file_url} className="w-full h-full object-cover" controls />
                )}
              </div>
              <p className="text-sm font-medium mt-3">{video.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoaLearn;
