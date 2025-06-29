import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Play, 
  Star, 
  Users, 
  Zap, 
  Sparkles,
  ChevronDown,
  ExternalLink
} from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { icon: Zap, text: "Newly Launched", color: "text-yellow-400" },
    { icon: Star, text: "Innovation First", color: "text-purple-400" },
    { icon: Users, text: "Community Driven", color: "text-blue-400" },
    { icon: Sparkles, text: "Future Ready", color: "text-pink-400" }
  ];

  // Functional button handlers
  const handleGetStarted = () => {
    // Scroll to about section
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleWatchDemo = () => {
    // Open demo video in modal or new tab
    const demoUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Replace with actual demo URL
    window.open(demoUrl, '_blank');
  };

  const handleJoinUs = () => {
    // Scroll to contact section for registration
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollDown = () => {
    // Scroll to next section
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full gradient-bg opacity-20"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 gradient-bg-2 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 gradient-bg-3 rounded-full blur-3xl opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 gradient-bg-4 rounded-full blur-2xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className={`space-y-8 animate-fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass text-sm font-medium text-white/90 hover-lift">
            <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
            🎉 Newly Inaugurated AI & ML Club
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="text-white">Build the Future</span>
              <br />
              <span className="text-gradient">With AI & ML</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Welcome to our newly inaugurated AI & ML Club at OCT Bhopal! Join our innovative community 
              where cutting-edge technology meets creative minds. Be part of our journey from day one.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="btn-modern text-lg px-8 py-4 hover-lift"
              onClick={handleGetStarted}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="glass text-lg px-8 py-4 border-white/20 text-white hover:bg-white/10 hover-lift"
              onClick={handleWatchDemo}
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mt-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`card-modern text-center animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className={`w-6 h-6 mx-auto mb-2 ${feature.color}`} />
                <p className="text-sm font-medium text-white/90">{feature.text}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-1">50+</div>
              <div className="text-sm text-white/70">Founding Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-2 mb-1">5+</div>
              <div className="text-sm text-white/70">Upcoming Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-1">2024</div>
              <div className="text-sm text-white/70">Year Founded</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={handleScrollDown}
      >
        <ChevronDown className="w-6 h-6 text-white/60 hover:text-white transition-colors duration-300" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 glass rounded-full animate-float opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 glass rounded-full animate-float opacity-20" style={{ animationDelay: '3s' }}></div>
    </section>
  );
};

export default Hero;
