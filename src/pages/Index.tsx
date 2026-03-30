import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Tools from "@/components/Tools";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Maquettes from "@/components/Maquettes";
import GoaLearn from "@/components/GoaLearn";
import ProfessionalActivities from "@/components/ProfessionalActivities";
import Certifications from "@/components/Certifications";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <About />
      <Services />
      <Tools />
      <Experience />
      <Projects />
      <Maquettes />
      <GoaLearn />
      <ProfessionalActivities />
      <Certifications />
      <Interests />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
