import { useEffect, lazy, Suspense, memo } from "react";
import ScrollProgress from "@/components/ScrollProgress";
import ThreeDotsMenu from "@/components/ThreeDotsMenu";
import LoadingSpinner from "@/components/LoadingSpinner";

// Lazy load components for better performance
const Header = lazy(() => import("@/components/Header"));
const Hero = lazy(() => import("@/components/Hero"));
const About = lazy(() => import("@/components/About"));
const Events = lazy(() => import("@/components/Events"));
const Projects = lazy(() => import("@/components/Projects"));
const Team = lazy(() => import("@/components/Team"));
const Gallery = lazy(() => import("@/components/Gallery"));
const Resources = lazy(() => import("@/components/Resources"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = memo(() => {
  useEffect(() => {
    // Simple smooth scrolling for anchor links - EXCLUDE important sections
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        
        // Define sections that should NOT be accessible via scroll
        const restrictedSections = ['#home', '#about', '#contact'];
        
        if (href && !restrictedSections.includes(href)) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        } else if (href && restrictedSections.includes(href)) {
          // Show message to use ThreeDotsMenu for restricted sections
          const sectionName = href.substring(1).charAt(0).toUpperCase() + href.substring(1).slice(1);
          alert(`🔒 ${sectionName} section is only accessible through the Three Dots Menu (top-right corner)!`);
        }
      }
    };

    // Simple direct URL access prevention
    const handleHashChange = () => {
      const restrictedSections = ['#home', '#about', '#contact'];
      const currentHash = window.location.hash;
      
      if (restrictedSections.includes(currentHash)) {
        // Remove the hash from URL
        window.history.replaceState(null, '', window.location.pathname);
        // Show message
        const sectionName = currentHash.substring(1).charAt(0).toUpperCase() + currentHash.substring(1).slice(1);
        alert(`🔒 ${sectionName} section is only accessible through the Three Dots Menu (top-right corner)!`);
      }
    };

    // Check on page load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Simple intersection observer for animations
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
      window.removeEventListener('hashchange', handleHashChange);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
      </Suspense>
      <ThreeDotsMenu />
      <ScrollProgress />
      
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <section id="home">
            <Hero />
          </section>
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <section id="about">
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
          <section id="contact">
            <Contact />
          </section>
        </Suspense>
      </main>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </div>
  );
});

Index.displayName = 'Index';

export default Index;
