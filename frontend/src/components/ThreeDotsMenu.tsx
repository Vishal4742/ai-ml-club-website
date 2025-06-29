import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  MoreVertical, 
  X, 
  Home, 
  User, 
  Calendar, 
  FolderOpen, 
  Users, 
  Image, 
  BookOpen, 
  Mail,
  ExternalLink,
  Sparkles
} from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  href: string;
}

const ThreeDotsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: MenuItem[] = [
    { id: "home", name: "Home", icon: Home, href: "#home" },
    { id: "about", name: "About", icon: User, href: "#about" },
    { id: "events", name: "Events", icon: Calendar, href: "#events" },
    { id: "projects", name: "Projects", icon: FolderOpen, href: "#projects" },
    { id: "team", name: "Team", icon: Users, href: "#team" },
    { id: "gallery", name: "Gallery", icon: Image, href: "#gallery" },
    { id: "resources", name: "Resources", icon: BookOpen, href: "#resources" },
    { id: "contact", name: "Contact", icon: Mail, href: "#contact" },
  ];

  const handleMenuClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  const handleJoinUs = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      {/* Three Dots Button */}
      <div className={`fixed top-6 right-6 z-50 transition-all duration-500 ${
        isScrolled ? 'scale-90' : 'scale-100'
      }`}>
        <Button
          variant="ghost"
          size="icon"
          className={`w-12 h-12 rounded-full glass backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300 ${
            isOpen ? 'rotate-90' : 'rotate-0'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MoreVertical className="w-6 h-6 text-white" />
          )}
        </Button>
      </div>

      {/* Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-6 right-6 w-80 glass backdrop-blur-xl border border-white/20 rounded-2xl p-6 animate-scale-in">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div 
                className="flex items-center space-x-3 group cursor-pointer"
                onClick={handleLogoClick}
              >
                <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white group-hover:text-gradient transition-colors duration-300">
                    AI & ML Club
                  </span>
                  <span className="text-xs text-white/60">OCT Bhopal</span>
                </div>
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-white/60 hover:text-white hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Navigation Items */}
            <nav className="space-y-2 mb-6">
              {menuItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.href)}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">{item.name}</span>
                </button>
              ))}
            </nav>

            {/* Divider */}
            <div className="border-t border-white/20 mb-6" />

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                className="w-full btn-modern"
                onClick={handleJoinUs}
              >
                Join Us
              </Button>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-white/20">
              <p className="text-xs text-white/40 text-center">
                © 2024 AI & ML Club OCT Bhopal
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ThreeDotsMenu; 