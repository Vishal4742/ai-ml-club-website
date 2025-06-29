import { useState, useEffect, useCallback, memo } from "react";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  ChevronDown,
  Sparkles
} from "lucide-react";
import { useOptimizedScroll } from "@/hooks/use-performance";

const Header = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Optimized scroll handling
  const handleScroll = useCallback((scrollY: number) => {
    setIsScrolled(scrollY > 20);
  }, []);

  useOptimizedScroll(handleScroll, 16);

  const navItems = [
    { name: "Events", href: "#events" },
    { name: "Projects", href: "#projects" },
    { name: "Team", href: "#team" },
    { name: "Gallery", href: "#gallery" },
    { name: "Resources", href: "#resources" },
  ];

  const handleJoinUs = useCallback(() => {
    // Show a message to use ThreeDotsMenu for Contact section
    alert("Please use the Three Dots Menu (top-right) to access the Contact section and join our waitlist!");
    setIsOpen(false); // Close mobile menu if open
  }, []);

  const handleLogoClick = useCallback(() => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass backdrop-blur-xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 group cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white group-hover:text-gradient transition-colors duration-300">
                AI & ML Club
              </span>
              <span className="text-xs text-white/60">OCT Bhopal</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-white/80 hover:text-white transition-colors duration-300 font-medium group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-bg group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              className="btn-modern"
              onClick={handleJoinUs}
            >
              Join Us
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4'
        } overflow-hidden`}>
          <div className="glass backdrop-blur-xl border-t border-white/20 py-6">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-white/10"
                  onClick={closeMenu}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-3 border-t border-white/20">
                <Button 
                  className="w-full btn-modern"
                  onClick={handleJoinUs}
                >
                  Join Us
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
