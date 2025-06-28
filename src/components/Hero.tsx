
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Brain, Cpu } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Floating Icons */}
      <div className="absolute top-20 left-20 text-green-400 animate-float">
        <Brain size={32} />
      </div>
      <div className="absolute top-40 right-32 text-teal-400 animate-bounce delay-500">
        <Cpu size={28} />
      </div>
      <div className="absolute bottom-40 left-32 text-green-400 animate-pulse">
        <Sparkles size={24} />
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Club Logo Placeholder */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex items-center justify-center shadow-lg shadow-green-500/25">
            <Brain size={48} className="text-black" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-green-400 to-teal-400 bg-clip-text text-transparent">
          AI & ML Club
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          Oriental College of Technology, Bhopal
        </p>
        
        <div className="text-2xl md:text-3xl font-semibold mb-8 text-green-400">
          "Innovate. Implement. Inspire."
        </div>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Join us in exploring the frontiers of Artificial Intelligence and Machine Learning. 
          Build groundbreaking projects, participate in hackathons, and shape the future of technology.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
            Join Our Club
            <ArrowRight className="ml-2" size={20} />
          </Button>
          
          <Button variant="outline" size="lg" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-3 rounded-full transition-all duration-300">
            View Projects
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-400/50 transition-all duration-300">
            <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
            <div className="text-gray-300">Active Members</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-400/50 transition-all duration-300">
            <div className="text-3xl font-bold text-teal-400 mb-2">15+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-400/50 transition-all duration-300">
            <div className="text-3xl font-bold text-green-400 mb-2">8+</div>
            <div className="text-gray-300">Hackathons Won</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
