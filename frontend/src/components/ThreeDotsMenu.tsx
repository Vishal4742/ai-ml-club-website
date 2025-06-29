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
  Sparkles,
  Target,
  Lightbulb,
  Award,
  Phone,
  MapPin,
  Clock,
  Download,
  Video,
  FileText,
  Github,
  Linkedin,
  Twitter,
  ChevronRight
} from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  href: string;
}

interface QuickLink {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  href: string;
  description: string;
}

interface Resource {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  href: string;
  type: string;
}

const ThreeDotsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<'nav' | 'quick' | 'resources' | 'contact'>('nav');

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

  const quickLinks: QuickLink[] = [
    { id: "mission", name: "Our Mission", icon: Target, href: "#about", description: "Learn about our goals and vision" },
    { id: "leadership", name: "Leadership Team", icon: Users, href: "#team", description: "Meet our faculty coordinator and president" },
    { id: "upcoming", name: "Upcoming Events", icon: Calendar, href: "#events", description: "See what's happening next" },
    { id: "join", name: "Join Waitlist", icon: ExternalLink, href: "#contact", description: "Be part of our founding story" },
    { id: "projects", name: "Current Projects", icon: FolderOpen, href: "#projects", description: "Explore our innovative work" },
    { id: "gallery", name: "Photo Gallery", icon: Image, href: "#gallery", description: "Visual journey of our club" },
  ];

  const resources: Resource[] = [
    { id: "tutorials", name: "AI/ML Tutorials", icon: Video, href: "#resources", type: "Learning" },
    { id: "docs", name: "Documentation", icon: FileText, href: "#resources", type: "Reference" },
    { id: "tools", name: "Development Tools", icon: Download, href: "#resources", type: "Software" },
    { id: "courses", name: "Online Courses", icon: BookOpen, href: "#resources", type: "Education" },
    { id: "competitions", name: "Hackathons", icon: Award, href: "#events", type: "Events" },
    { id: "research", name: "Research Papers", icon: FileText, href: "#resources", type: "Academic" },
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "contact@oct-aiml.edu.in", href: "mailto:contact@oct-aiml.edu.in" },
    { icon: Phone, label: "Phone", value: "+91 XXX XXX XXXX", href: "tel:+91XXXXXXXXXX" },
    { icon: MapPin, label: "Location", value: "OCT Bhopal, Madhya Pradesh", href: "#" },
    { icon: Clock, label: "Office Hours", value: "Mon-Fri 9:00 AM - 5:00 PM", href: "#" },
  ];

  const socialLinks = [
    { icon: Github, name: "GitHub", href: "https://github.com/oct-aiml-club", color: "hover:text-gray-400" },
    { icon: Linkedin, name: "LinkedIn", href: "https://linkedin.com/company/oct-aiml-club", color: "hover:text-blue-400" },
    { icon: Twitter, name: "Twitter", href: "https://twitter.com/oct_aiml_club", color: "hover:text-blue-400" },
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

  const handleExternalLink = (href: string) => {
    window.open(href, '_blank');
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
          <div className="absolute top-6 right-6 w-96 glass backdrop-blur-xl border border-white/20 rounded-2xl p-6 animate-scale-in max-h-[90vh] overflow-y-auto">
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

            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-6 bg-white/5 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('nav')}
                className={`flex-1 px-3 py-2 rounded-md text-xs font-medium transition-all duration-300 ${
                  activeTab === 'nav' 
                    ? 'bg-white/20 text-white' 
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                Navigation
              </button>
              <button
                onClick={() => setActiveTab('quick')}
                className={`flex-1 px-3 py-2 rounded-md text-xs font-medium transition-all duration-300 ${
                  activeTab === 'quick' 
                    ? 'bg-white/20 text-white' 
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                Quick Links
              </button>
              <button
                onClick={() => setActiveTab('resources')}
                className={`flex-1 px-3 py-2 rounded-md text-xs font-medium transition-all duration-300 ${
                  activeTab === 'resources' 
                    ? 'bg-white/20 text-white' 
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                Resources
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`flex-1 px-3 py-2 rounded-md text-xs font-medium transition-all duration-300 ${
                  activeTab === 'contact' 
                    ? 'bg-white/20 text-white' 
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                Contact
              </button>
            </div>

            {/* Tab Content */}
            <div className="space-y-4">
              {/* Navigation Tab */}
              {activeTab === 'nav' && (
                <nav className="space-y-2">
                  {menuItems.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => handleMenuClick(item.href)}
                      className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 group"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-medium">{item.name}</span>
                      <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  ))}
                </nav>
              )}

              {/* Quick Links Tab */}
              {activeTab === 'quick' && (
                <div className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <button
                      key={link.id}
                      onClick={() => handleMenuClick(link.href)}
                      className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <link.icon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-medium text-white">{link.name}</span>
                      </div>
                      <p className="text-sm text-white/60 ml-8">{link.description}</p>
                    </button>
                  ))}
                </div>
              )}

              {/* Resources Tab */}
              {activeTab === 'resources' && (
                <div className="space-y-3">
                  {resources.map((resource, index) => (
                    <button
                      key={resource.id}
                      onClick={() => handleMenuClick(resource.href)}
                      className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <resource.icon className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                          <span className="font-medium text-white">{resource.name}</span>
                        </div>
                        <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/60">{resource.type}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Contact Tab */}
              {activeTab === 'contact' && (
                <div className="space-y-4">
                  {/* Contact Info */}
                  <div className="space-y-3">
                    {contactInfo.map((info, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                        onClick={() => info.href !== '#' && handleExternalLink(info.href)}
                      >
                        <info.icon className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-white">{info.label}</p>
                          <p className="text-xs text-white/60">{info.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm font-medium text-white mb-3">Follow Us</p>
                    <div className="flex space-x-3">
                      {socialLinks.map((social, index) => (
                        <button
                          key={social.name}
                          onClick={() => handleExternalLink(social.href)}
                          className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 ${social.color} transition-all duration-300 hover:scale-110`}
                        >
                          <social.icon className="w-5 h-5" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-white/20">
              <Button 
                className="w-full btn-modern"
                onClick={handleJoinUs}
              >
                Join Us
              </Button>
            </div>

            {/* Footer */}
            <div className="mt-4 text-center text-xs text-gray-400">
              © 2025 AI & ML Club OCT Bhopal
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ThreeDotsMenu; 