import { lazy, Suspense, memo } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { archiveItems } from "@/data/archive";

const Header = lazy(() => import("@/components/Header"));
const Footer = lazy(() => import("@/components/Footer"));

const Archive = memo(() => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
      </Suspense>
      <main className="max-w-5xl mx-auto py-16 px-4 text-center pt-20">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Archive</h1>
        <p className="text-lg text-gray-300 mb-8">
          Explore our archive of past events, activities, and club milestones.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {archiveItems.length === 0 ? (
            <p className="text-gray-400 col-span-full">No archived events yet.</p>
          ) : (
            archiveItems.map(item => (
              <div key={item.id} className="relative flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 shadow-md h-full text-left group transition-transform hover:scale-[1.025]">
                <span className="absolute top-4 right-4 bg-green-600/80 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {new Date(item.date).toLocaleDateString()}
                </span>
                <h2 className="text-2xl font-bold text-green-400 mb-3 text-center">{item.title}</h2>
                <p className="text-gray-200 mb-4 flex-1">{item.description}</p>
                {item.link && (
                  <div className="mt-auto text-center">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-block text-teal-400 hover:underline text-sm font-medium bg-white/10 px-4 py-2 rounded-full transition-colors">View More</a>
                  </div>
                )}
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

Archive.displayName = 'Archive';

export default Archive; 