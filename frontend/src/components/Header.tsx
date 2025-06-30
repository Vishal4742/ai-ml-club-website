import { useState, useEffect, useCallback, memo } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  // Optimized scroll handling
  const handleScroll = useCallback((scrollY: number) => {
    setIsScrolled(scrollY > 20);
  }, []);

  useOptimizedScroll(handleScroll, 16);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "Gallery", href: "/gallery" },
    { name: "Archive", href: "/archive" },
  ];

  const handleJoinUs = useCallback(() => {
    // Scroll to contact section on home page
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // If not on home page, navigate to home and then scroll to contact
      navigate('/');
      setTimeout(() => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
    setIsOpen(false); // Close mobile menu if open
  }, [navigate]);

  const handleLogoClick = useCallback(() => {
    // Navigate to home page
    navigate('/');
  }, [navigate]);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'header-liquid-glass' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Club Name */}
          <div className="flex items-center space-x-3 cursor-pointer no-hover" onClick={handleLogoClick}>
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/assets/images/oct-logo.png"
                alt="Oriental College of Technology Logo"
                className="w-12 h-12 object-contain bg-white rounded-full p-1 shadow-md"
                style={{ background: 'white' }}
              />
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight">
                  AI & ML Club
                </span>
                <span className="text-xs text-white/60 font-medium tracking-wide uppercase">OCT Bhopal</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className="relative text-white/80 font-semibold tracking-wide group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 rounded-lg transition-colors duration-300"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4'
        } overflow-hidden`}>
          <div className="liquid-glass border-t border-white/20 py-6">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-white/80 font-semibold tracking-wide py-2 px-4 rounded-lg"
                  onClick={closeMenu}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
