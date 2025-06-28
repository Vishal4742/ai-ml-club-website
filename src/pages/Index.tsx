
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Events />
      <Projects />
      <Gallery />
      <Resources />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
