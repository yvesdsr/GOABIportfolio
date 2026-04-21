import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Tools from "@/components/Tools";
import Experience from "@/components/Experience";
import GoaLearn from "@/components/GoaLearn";
import ProfessionalActivities from "@/components/ProfessionalActivities";
import Certifications from "@/components/Certifications";
import WhyMe from "@/components/WhyMe";
import Interests from "@/components/Interests";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Header />
      <About />
      <Services />
      <Projects />
      <Process />
      <Tools />
      <Experience />
      <Certifications />
      <WhyMe />
      <GoaLearn />
      <ProfessionalActivities />
      <Interests />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
