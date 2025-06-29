import { useState, useEffect, useCallback } from "react";
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
  ChevronRight,
  Star,
  Zap,
  Settings,
  Info,
  Heart,
  Globe,
  Shield,
  TrendingUp,
  Code,
  Palette,
  Camera,
  Newspaper,
  HelpCircle,
  Gift,
  Instagram,
  Youtube
} from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  href: string;
  category: 'main' | 'secondary' | 'utility';
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

  // Optimize scroll handler
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // All sections organized by category
  const menuItems: MenuItem[] = [
    // Main sections (important ones)
    { id: "home", name: "Home", icon: Home, href: "#home", category: 'main' },
    { id: "about", name: "About", icon: User, href: "#about", category: 'main' },
    { id: "contact", name: "Contact", icon: Mail, href: "#contact", category: 'main' },
    
    // Secondary sections
    { id: "events", name: "Events", icon: Calendar, href: "#events", category: 'secondary' },
    { id: "projects", name: "Projects", icon: FolderOpen, href: "#projects", category: 'secondary' },
    { id: "team", name: "Team", icon: Users, href: "#team", category: 'secondary' },
    { id: "gallery", name: "Gallery", icon: Image, href: "#gallery", category: 'secondary' },
    { id: "resources", name: "Resources", icon: BookOpen, href: "#resources", category: 'secondary' },
    
    // Utility sections
    { id: "stats", name: "Statistics", icon: TrendingUp, href: "#stats", category: 'utility' },
    { id: "newsletter", name: "Newsletter", icon: Newspaper, href: "#newsletter", category: 'utility' },
    { id: "faq", name: "FAQ", icon: HelpCircle, href: "#faq", category: 'utility' },
    { id: "support", name: "Support", icon: Heart, href: "#support", category: 'utility' },
    { id: "privacy", name: "Privacy Policy", icon: Shield, href: "#privacy", category: 'utility' },
    { id: "terms", name: "Terms of Service", icon: FileText, href: "#terms", category: 'utility' },
  ];

  const quickLinks: QuickLink[] = [
    { id: "mission", name: "Our Mission", icon: Target, href: "#about", description: "Learn about our goals and vision" },
    { id: "leadership", name: "Leadership Team", icon: Users, href: "#team", description: "Meet our faculty coordinator and president" },
    { id: "upcoming", name: "Upcoming Events", icon: Calendar, href: "#events", description: "See what's happening next" },
    { id: "join", name: "Join Waitlist", icon: ExternalLink, href: "#contact", description: "Be part of our founding story" },
    { id: "projects", name: "Current Projects", icon: FolderOpen, href: "#projects", description: "Explore our innovative work" },
    { id: "gallery", name: "Photo Gallery", icon: Image, href: "#gallery", description: "Visual journey of our club" },
    { id: "resources", name: "Learning Resources", icon: BookOpen, href: "#resources", description: "Educational materials and tools" },
    { id: "stats", name: "Club Statistics", icon: TrendingUp, href: "#stats", description: "View our achievements and metrics" },
    { id: "newsletter", name: "Newsletter Signup", icon: Newspaper, href: "#newsletter", description: "Stay updated with latest news" },
    { id: "support", name: "Get Support", icon: Heart, href: "#support", description: "Get help and assistance" },
  ];

  const resources: Resource[] = [
    { id: "tutorials", name: "AI/ML Tutorials", icon: Video, href: "#resources", type: "Learning" },
    { id: "docs", name: "Documentation", icon: FileText, href: "#resources", type: "Reference" },
    { id: "tools", name: "Development Tools", icon: Download, href: "#resources", type: "Software" },
    { id: "courses", name: "Online Courses", icon: BookOpen, href: "#resources", type: "Education" },
    { id: "competitions", name: "Hackathons", icon: Award, href: "#events", type: "Events" },
    { id: "research", name: "Research Papers", icon: FileText, href: "#resources", type: "Academic" },
    { id: "code", name: "Code Examples", icon: Code, href: "#resources", type: "Development" },
    { id: "design", name: "Design Resources", icon: Palette, href: "#resources", type: "Creative" },
    { id: "photos", name: "Photo Library", icon: Camera, href: "#gallery", type: "Media" },
    { id: "gifts", name: "Free Resources", icon: Gift, href: "#resources", type: "Free" },
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "contact@oct-aiml.edu.in", href: "mailto:contact@oct-aiml.edu.in" },
    { icon: Phone, label: "Phone", value: "+91 XXX XXX XXXX", href: "tel:+91XXXXXXXXXX" },
    { icon: MapPin, label: "Location", value: "OCT Bhopal, Madhya Pradesh", href: "#" },
    { icon: Clock, label: "Office Hours", value: "Mon-Fri 9:00 AM - 5:00 PM", href: "#" },
    { icon: Globe, label: "Website", value: "oct-aiml.edu.in", href: "https://oct-aiml.edu.in" },
    { icon: Settings, label: "Technical Support", value: "support@oct-aiml.edu.in", href: "mailto:support@oct-aiml.edu.in" },
  ];

  const socialLinks = [
    { icon: Github, name: "GitHub", href: "https://github.com/oct-aiml-club", color: "hover:text-gray-400" },
    { icon: Linkedin, name: "LinkedIn", href: "https://linkedin.com/company/oct-aiml-club", color: "hover:text-blue-400" },
    { icon: Twitter, name: "Twitter", href: "https://twitter.com/oct_aiml_club", color: "hover:text-blue-400" },
    { icon: Instagram, name: "Instagram", href: "https://instagram.com/oct_aiml_club", color: "hover:text-pink-400" },
    { icon: Youtube, name: "YouTube", href: "https://youtube.com/@oct-aiml-club", color: "hover:text-red-400" },
  ];

  const handleMenuClick = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      // Clear any existing hash from URL for restricted sections
      const restrictedSections = ['#home', '#about', '#contact'];
      if (restrictedSections.includes(href)) {
        window.history.replaceState(null, '', window.location.pathname);
      }
      
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  }, []);

  const handleJoinUs = useCallback(() => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  }, []);

  const handleLogoClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  }, []);

  const handleExternalLink = useCallback((href: string) => {
    window.open(href, '_blank');
  }, []);

  // Group menu items by category
  const mainSections = menuItems.filter(item => item.category === 'main');
  const secondarySections = menuItems.filter(item => item.category === 'secondary');
  const utilitySections = menuItems.filter(item => item.category === 'utility');

  return (
    <>
      {/* Three Dots Button */}
      <div className={`fixed top-6 right-6 z-50 transition-transform duration-300 ${
        isScrolled ? 'scale-90' : 'scale-100'
      }`}>
        <Button
          variant="ghost"
          size="icon"
          className={`w-12 h-12 rounded-full glass backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-transform duration-200 ${
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
          
          {/* Menu Panel - Removed heavy animation */}
          <div className="absolute top-6 right-6 w-96 glass backdrop-blur-xl border border-white/20 rounded-2xl p-6 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div 
                className="flex items-center space-x-3 group cursor-pointer"
                onClick={handleLogoClick}
              >
                <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white group-hover:text-gradient transition-colors duration-200">
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
                className={`flex-1 px-3 py-2 rounded-md text-xs font-medium transition-colors duration-200 ${
                  activeTab === 'nav' 
                    ? 'bg-white/20 text-white' 
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                Navigation
              </button>
              <button
                onClick={() => setActiveTab('quick')}
                className={`flex-1 px-3 py-2 rounded-md text-xs font-medium transition-colors duration-200 ${
                  activeTab === 'quick' 
                    ? 'bg-white/20 text-white' 
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                Quick Links
              </button>
              <button
                onClick={() => setActiveTab('resources')}
                className={`flex-1 px-3 py-2 rounded-md text-xs font-medium transition-colors duration-200 ${
                  activeTab === 'resources' 
                    ? 'bg-white/20 text-white' 
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                Resources
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`flex-1 px-3 py-2 rounded-md text-xs font-medium transition-colors duration-200 ${
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
                <nav className="space-y-4">
                  {/* Main Sections */}
                  <div>
                    <h4 className="text-xs font-semibold text-white/60 mb-2 px-2">Main Sections</h4>
                    <div className="space-y-1">
                      {mainSections.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleMenuClick(item.href)}
                          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200 group"
                        >
                          <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                          <span className="font-medium">{item.name}</span>
                          <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Secondary Sections */}
                  <div>
                    <h4 className="text-xs font-semibold text-white/60 mb-2 px-2">Content Sections</h4>
                    <div className="space-y-1">
                      {secondarySections.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleMenuClick(item.href)}
                          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200 group"
                        >
                          <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                          <span className="font-medium">{item.name}</span>
                          <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Utility Sections */}
                  <div>
                    <h4 className="text-xs font-semibold text-white/60 mb-2 px-2">Utility Pages</h4>
                    <div className="space-y-1">
                      {utilitySections.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleMenuClick(item.href)}
                          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200 group"
                        >
                          <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                          <span className="font-medium">{item.name}</span>
                          <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </button>
                      ))}
                    </div>
                  </div>
                </nav>
              )}

              {/* Quick Links Tab */}
              {activeTab === 'quick' && (
                <div className="space-y-3">
                  {quickLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleMenuClick(link.href)}
                      className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-200 group"
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <link.icon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-200" />
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
                  {resources.map((resource) => (
                    <button
                      key={resource.id}
                      onClick={() => handleMenuClick(resource.href)}
                      className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-200 group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <resource.icon className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform duration-200" />
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
                        className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-200 group cursor-pointer"
                        onClick={() => info.href !== '#' && handleExternalLink(info.href)}
                      >
                        <info.icon className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform duration-200" />
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
                      {socialLinks.map((social) => (
                        <button
                          key={social.name}
                          onClick={() => handleExternalLink(social.href)}
                          className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 ${social.color} transition-transform duration-200 hover:scale-110`}
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