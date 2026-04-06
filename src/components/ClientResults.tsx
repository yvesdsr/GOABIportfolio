import { motion } from "framer-motion";
import { Eye, Users, Heart, Radio, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const clients = [
  {
    name: "Naomie Karelle Agnissan",
    services: ["Stratégie digitale", "Création de contenu TikTok", "Gestion des réseaux sociaux"],
    results: [
      { icon: Eye, value: "+117K", label: "vues" },
      { icon: Eye, value: "+116K", label: "vues en 7 jours" },
      { icon: Users, value: "+800", label: "abonnés" },
      { icon: Heart, value: "+4K", label: "interactions" },
      { icon: Radio, value: "+25K", label: "vues live" },
    ],
    link: null,
    linkLabel: null,
  },
  {
    name: "Kyoto Fashion",
    services: ["Création de contenu", "Gestion de page Facebook", "Stratégie de croissance"],
    results: [
      { icon: Users, value: "+47K", label: "abonnés" },
    ],
    link: null,
    linkLabel: "Voir la page",
  },
];

const ClientResults = () => {
  return (
    <section className="py-24 bg-section-orange">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-orange font-semibold text-sm tracking-wider uppercase">— Résultats Clients</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Ce que j'ai <span className="text-gradient-orange">accompli</span> pour mes clients
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-background rounded-3xl p-8 border border-border hover:border-orange hover:shadow-lg transition-all duration-500 hover-lift"
            >
              <h3 className="text-2xl font-bold mb-4">{client.name}</h3>

              <div className="space-y-2 mb-6">
                {client.services.map(s => (
                  <div key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
                    {s}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {client.results.map((r, i) => (
                  <div key={i} className="bg-muted rounded-xl p-3 text-center group hover:bg-orange/10 transition-colors">
                    <r.icon size={18} className="mx-auto mb-1 text-orange" />
                    <p className="text-lg font-bold">{r.value}</p>
                    <p className="text-xs text-muted-foreground">{r.label}</p>
                  </div>
                ))}
              </div>

              {client.link && (
                <Button
                  variant="outline"
                  className="rounded-full gap-2 text-sm"
                  onClick={() => window.open(client.link!, '_blank')}
                >
                  <ExternalLink size={14} />
                  {client.linkLabel}
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientResults;
