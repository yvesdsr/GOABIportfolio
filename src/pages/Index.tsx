import Header from "@/components/Header";
import Results from "@/components/Results";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Process from "@/components/Process";
import ClientResults from "@/components/ClientResults";
import Tools from "@/components/Tools";
import Experience from "@/components/Experience";
import GoaLearn from "@/components/GoaLearn";
import Maquettes from "@/components/Maquettes";
import ProfessionalActivities from "@/components/ProfessionalActivities";
import Certifications from "@/components/Certifications";
import Interests from "@/components/Interests";
import WhyMe from "@/components/WhyMe";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Results />
      <Projects />
      <Services />
      <Process />
      <ClientResults />
      <Tools />
      <Experience />
      <GoaLearn />
      <Maquettes />
      <ProfessionalActivities />
      <Certifications />
      <WhyMe />
      <Interests />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
