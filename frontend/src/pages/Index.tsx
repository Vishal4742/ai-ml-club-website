import { useEffect, lazy, Suspense } from "react";
import ScrollProgress from "@/components/ScrollProgress";
import ThreeDotsMenu from "@/components/ThreeDotsMenu";
import LoadingSpinner from "@/components/LoadingSpinner";

// Lazy load components for better performance
const Hero = lazy(() => import("@/components/Hero"));
const About = lazy(() => import("@/components/About"));
const Events = lazy(() => import("@/components/Events"));
const Projects = lazy(() => import("@/components/Projects"));
const Team = lazy(() => import("@/components/Team"));
const Gallery = lazy(() => import("@/components/Gallery"));
const Resources = lazy(() => import("@/components/Resources"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    };

    // Intersection Observer for performance optimization
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <ThreeDotsMenu />
      <ScrollProgress />
      
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <section id="home" className="scroll-mt-20">
            <Hero />
          </section>
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <section id="about" className="scroll-mt-20">
            <About />
          </section>
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <section id="events" className="scroll-mt-20">
            <Events />
          </section>
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <section id="projects" className="scroll-mt-20">
            <Projects />
          </section>
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <section id="team" className="scroll-mt-20">
            <Team />
          </section>
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <section id="gallery" className="scroll-mt-20">
            <Gallery />
          </section>
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <section id="resources" className="scroll-mt-20">
            <Resources />
          </section>
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <section id="contact" className="scroll-mt-20">
            <Contact />
          </section>
        </Suspense>
      </main>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
