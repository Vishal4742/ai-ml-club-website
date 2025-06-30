import { useEffect, lazy, Suspense, memo } from "react";
import ScrollProgress from "@/components/ScrollProgress";
import ThreeDotsMenu from "@/components/ThreeDotsMenu";
import LoadingSpinner from "@/components/LoadingSpinner";

// Lazy load components for better performance
const Header = lazy(() => import("@/components/Header"));
const Gallery = lazy(() => import("@/components/Gallery"));
const Footer = lazy(() => import("@/components/Footer"));

const GalleryPage = memo(() => {
  useEffect(() => {
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

    return () => {
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
          <section id="gallery" className="scroll-mt-20">
            <Gallery />
          </section>
        </Suspense>
      </main>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </div>
  );
});

GalleryPage.displayName = 'GalleryPage';

export default GalleryPage; 