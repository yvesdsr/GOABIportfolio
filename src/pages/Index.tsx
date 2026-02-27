import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import ProfessionalActivities from "@/components/ProfessionalActivities";
import GoaLearn from "@/components/GoaLearn";
import Maquettes from "@/components/Maquettes";
import Projects from "@/components/Projects";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <About />
      <Experience />
      <ProfessionalActivities />
      <GoaLearn />
      <Maquettes />
      <Projects />
      <Interests />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;