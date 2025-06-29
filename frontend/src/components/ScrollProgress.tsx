import { useState, useEffect } from "react";

interface Section {
  id: string;
  name: string;
  offset: number;
}

const ScrollProgress = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections: Section[] = [
    { id: "home", name: "Home", offset: 0 },
    { id: "about", name: "About", offset: 0 },
    { id: "events", name: "Events", offset: 0 },
    { id: "projects", name: "Projects", offset: 0 },
    { id: "team", name: "Team", offset: 0 },
    { id: "gallery", name: "Gallery", offset: 0 },
    { id: "resources", name: "Resources", offset: 0 },
    { id: "contact", name: "Contact", offset: 0 },
  ];

  useEffect(() => {
    // Calculate section offsets
    const calculateOffsets = () => {
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          section.offset = element.offsetTop;
        }
      });
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll progress percentage
      const progress = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Determine current section
      let current = "home";
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollY >= sections[i].offset - windowHeight / 2) {
          current = sections[i].id;
          break;
        }
      }
      setCurrentSection(current);
    };

    // Initial calculations
    calculateOffsets();
    handleScroll();

    // Event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', calculateOffsets);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateOffsets);
    };
  }, []);

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      {/* Progress Bar */}
      <div className="absolute right-6 top-0 bottom-0 w-1 bg-white/20 rounded-full">
        <div 
          className="w-full gradient-bg rounded-full transition-all duration-300"
          style={{ height: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Section Dots */}
      <div className="flex flex-col space-y-4">
        {sections.map((section, index) => (
          <div key={section.id} className="relative">
            <button
              onClick={() => handleSectionClick(section.id)}
              className={`w-3 h-3 rounded-full transition-all duration-300 group relative ${
                currentSection === section.id 
                  ? 'bg-white scale-125 shadow-lg shadow-white/50' 
                  : 'bg-white/20 hover:bg-white/60'
              }`}
              title={section.name}
            >
              {/* Section Label */}
              <span className="absolute right-6 top-1/2 transform -translate-y-1/2 text-xs text-white/60 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap bg-black/50 px-2 py-1 rounded">
                {section.name}
              </span>
              
              {/* Section Number */}
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient rounded-full text-[8px] text-white font-bold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {index + 1}
              </span>
            </button>
          </div>
        ))}
      </div>

      {/* Scroll Progress Text */}
      <div className="absolute -bottom-12 right-0 text-xs text-white/40 font-mono">
        {Math.round(scrollProgress)}%
      </div>
    </div>
  );
};

export default ScrollProgress; 