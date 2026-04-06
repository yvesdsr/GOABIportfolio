import { motion, useInView } from "framer-motion";
import { Eye, Heart, Users, Radio } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const CountUp = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count.toLocaleString('fr-FR')}{suffix}</span>;
};

const kpis = [
  { icon: Eye, value: 117000, suffix: "", label: "Vues générées", color: "text-orange" },
  { icon: Users, value: 47000, suffix: "", label: "Abonnés développés", color: "text-primary" },
  { icon: Heart, value: 4000, suffix: "", label: "Interactions", color: "text-orange" },
  { icon: Radio, value: 25000, suffix: "", label: "Vues en live", color: "text-primary" },
];

const Results = () => {
  return (
    <section className="py-20 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-orange/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-orange font-semibold text-sm tracking-wider uppercase">— Résultats & Performances</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Des résultats <span className="text-gradient-orange">concrets</span>
          </h2>
          <p className="text-background/60 mt-4 max-w-lg mx-auto">
            Résultats obtenus sur des projets réels de communication digitale.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {kpis.map((kpi, index) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-background/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-background/20 transition-all duration-300 group-hover:scale-110">
                <kpi.icon size={28} className={kpi.color} />
              </div>
              <p className="text-3xl md:text-4xl font-bold mb-1">
                +<CountUp end={kpi.value} />
              </p>
              <p className="text-sm text-background/60">{kpi.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
