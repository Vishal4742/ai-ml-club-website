import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MoreVertical, X, Home, User, Calendar, Users, Image, Mail, Github, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

const ThreeDotsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { id: "home", name: "Home", icon: Home, href: "/" },
    { id: "about", name: "About", icon: User, href: "/about" },
    { id: "events", name: "Events", icon: Calendar, href: "/events" },
    { id: "team", name: "Team", icon: Users, href: "/team" },
    { id: "gallery", name: "Gallery", icon: Image, href: "/gallery" },
    { id: "archive", name: "Archive", icon: Calendar, href: "/archive" },
    { id: "contact", name: "Contact", icon: Mail, href: "/#contact" }
  ];

  const socialLinks = [
    { icon: Github, name: "GitHub", href: "https://github.com/oct-aiml-club" },
    { icon: Linkedin, name: "LinkedIn", href: "https://linkedin.com/company/oct-aiml-club" },
    { icon: Twitter, name: "Twitter", href: "https://twitter.com/oct_aiml_club" },
    { icon: Instagram, name: "Instagram", href: "https://instagram.com/oct_aiml_club" },
    { icon: Youtube, name: "YouTube", href: "https://youtube.com/@oct-aiml-club" }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = useCallback((href: string) => {
    if (href.startsWith('/')) navigate(href);
    else if (href.startsWith('/#')) navigate('/');
    setIsOpen(false);
  }, [navigate]);

  const handleExternalLink = useCallback((href: string) => {
    window.open(href, '_blank');
  }, []);

  return (
    <>
      {/* Minimal Three Dots Button - Aligned with header center */}
      <div className={`fixed top-5 right-6 z-50 hidden lg:block`}>
        <Button
          variant="ghost"
          size="icon"
          className={`w-10 h-10 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition-transform duration-200 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open menu"
        >
          {isOpen ? <X className="w-5 h-5 text-white" /> : <MoreVertical className="w-5 h-5 text-white" />}
        </Button>
      </div>
      {/* Minimal Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 hidden lg:block">
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsOpen(false)} />
          <div className="absolute top-20 right-6 w-64 bg-black/95 border border-white/10 rounded-xl p-3 flex flex-col gap-2 shadow-xl">
            {/* Navigation */}
            <nav className="flex flex-col gap-1 mb-2">
              {menuItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.href)}
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/10 text-white text-sm transition-colors"
                >
                  <item.icon className="w-4 h-4 text-green-400" />
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>
            {/* Social Links */}
            <div className="flex gap-2 justify-center border-t border-white/10 pt-2 mt-2">
              {socialLinks.map((social, idx) => (
                <button
                  key={social.name}
                  onClick={() => handleExternalLink(social.href)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/20 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 text-gray-300" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ThreeDotsMenu; 