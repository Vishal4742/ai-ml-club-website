import { useEffect, lazy, Suspense, memo } from "react";
import ScrollProgress from "@/components/ScrollProgress";
import ThreeDotsMenu from "@/components/ThreeDotsMenu";
import LoadingSpinner from "@/components/LoadingSpinner";

// Lazy load components for better performance
const Header = lazy(() => import("@/components/Header"));
const Events = lazy(() => import("@/components/Events"));
const Footer = lazy(() => import("@/components/Footer"));

// Mock events data for layout
const events = [
  {
    id: 1,
    title: "AI Workshop 2024",
    date: "2024-03-15",
    description: "A hands-on workshop on AI fundamentals and applications."
  },
  {
    id: 2,
    title: "Machine Learning Bootcamp",
    date: "2023-11-10",
    description: "Intensive bootcamp covering ML algorithms and real-world projects."
  },
  {
    id: 3,
    title: "Inaugural Club Meetup",
    date: "2023-09-01",
    description: "First official meeting of the AI & ML Club at OCT Bhopal."
  }
];

const EventsPage = memo(() => {
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
      
      <main className="max-w-5xl mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.length === 0 ? (
            <p className="text-gray-400 col-span-full">No events yet.</p>
          ) : (
            events.map(event => (
              <div key={event.id} className="relative flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 shadow-md h-full text-left group transition-transform hover:scale-[1.025]">
                <span className="absolute top-4 right-4 bg-green-600/80 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {new Date(event.date).toLocaleDateString()}
                </span>
                <h2 className="text-2xl font-bold text-green-400 mb-3 text-center">{event.title}</h2>
                <p className="text-gray-200 mb-4 flex-1">{event.description}</p>
              </div>
            ))
          )}
        </div>
      </main>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </div>
  );
});

EventsPage.displayName = 'EventsPage';

export default EventsPage; 