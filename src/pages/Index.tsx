
import Header from "@/components/Header";
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
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="events">
        <Events />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="resources">
        <Resources />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
