import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import GoaLearn from "@/components/GoaLearn";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <About />
      <Experience />
      <GoaLearn />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;