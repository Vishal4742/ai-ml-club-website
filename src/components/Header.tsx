
import { useState } from "react";
import { Menu, X, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Projects", href: "#projects" },
    { name: "Gallery", href: "#gallery" },
    { name: "Resources", href: "#resources" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 overflow-hidden">
      {/* Liquid Glass Background */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md border-b border-white/10">
        {/* Animated Glass Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-green-400/30 to-teal-400/30 rounded-full blur-xl animate-liquid-blob-1"></div>
          <div className="absolute -top-5 right-20 w-32 h-32 bg-gradient-to-br from-teal-400/25 to-blue-400/25 rounded-full blur-lg animate-liquid-blob-2"></div>
          <div className="absolute top-5 left-1/3 w-24 h-24 bg-gradient-to-br from-green-300/20 to-emerald-400/20 rounded-full blur-md animate-liquid-blob-3"></div>
          <div className="absolute -bottom-5 right-1/4 w-36 h-36 bg-gradient-to-br from-cyan-400/15 to-teal-300/15 rounded-full blur-lg animate-liquid-blob-4"></div>
        </div>
        
        {/* Glass Layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex items-center justify-center mr-3 shadow-lg">
              <Brain size={20} className="text-black" />
            </div>
            <span className="text-xl font-bold text-white drop-shadow-sm">AI & ML Club</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-200 hover:text-green-400 transition-all duration-300 font-medium drop-shadow-sm hover:drop-shadow-md"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Join Button */}
          <Button className="hidden md:block bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-white/20">
            Join Us
          </Button>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white drop-shadow-sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black/30 backdrop-blur-lg border-t border-white/10 border-b border-white/10">
            <nav className="flex flex-col space-y-4 p-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-200 hover:text-green-400 transition-all duration-300 font-medium drop-shadow-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="mt-4 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 shadow-lg backdrop-blur-sm border border-white/20">
                Join Us
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
