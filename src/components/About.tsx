import { Users, Target, Calendar, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const teamMembers = [
    {
      name: "Arjun Sharma",
      role: "President",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Leading our club's vision and strategic initiatives"
    },
    {
      name: "Priya Patel",
      role: "Vice President",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=400&h=400&fit=crop&crop=face",
      description: "Coordinating events and member engagement"
    },
    {
      name: "Rohit Kumar",
      role: "Tech Lead",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Overseeing technical projects and development"
    },
    {
      name: "Sneha Gupta",
      role: "Event Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Managing workshops and competitions"
    }
  ];

  const president = teamMembers[0];
  const otherMembers = teamMembers.slice(1);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            About Our Club
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a passionate community of students dedicated to advancing artificial intelligence 
            and machine learning knowledge through hands-on projects and collaborative learning.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
            <Target className="text-green-400 mb-4" size={48} />
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To create an inclusive environment where students can explore, learn, and innovate in the fields of 
              AI and ML while building practical solutions to real-world problems and fostering a culture of 
              continuous learning and collaboration.
            </p>
          </div>
          
          <div className="p-8 rounded-2xl bg-gradient-to-br from-teal-500/10 to-transparent border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300">
            <Lightbulb className="text-teal-400 mb-4" size={48} />
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To be the leading student organization that bridges the gap between academic learning and industry 
              applications, producing skilled professionals who can drive innovation in AI and ML technologies 
              and contribute meaningfully to society.
            </p>
          </div>
        </div>

        {/* Club Stats */}
        <div className="mb-16 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="flex items-center justify-center mb-6">
            <Calendar className="text-green-400 mr-3" size={32} />
            <h3 className="text-2xl font-bold text-white">Founded in 2020</h3>
          </div>
          <p className="text-center text-gray-300 max-w-2xl mx-auto">
            What started as a small group of AI enthusiasts has grown into a thriving community that has 
            organized 25+ workshops, participated in 15+ hackathons, and completed numerous innovative projects.
          </p>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
            <Users className="text-teal-400 mr-3" size={36} />
            Meet Our Core Team
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our dedicated leadership team works tirelessly to create opportunities for learning, 
            networking, and professional growth.
          </p>
        </div>

        {/* President Section */}
        <div className="flex justify-center mb-16">
          <div className="group">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/20 to-teal-500/20 border-2 border-green-400/50 hover:border-green-400 transition-all duration-300 hover:transform hover:scale-105 max-w-sm">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-green-400 group-hover:border-teal-400 transition-all duration-300">
                <img 
                  src={president.image} 
                  alt={president.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">{president.name}</h4>
              <p className="text-green-400 font-semibold mb-3 text-lg">{president.role}</p>
              <p className="text-gray-300">{president.description}</p>
            </div>
          </div>
        </div>

        {/* Other Team Members - Horizontal Scrolling */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-horizontal space-x-6">
            {/* Duplicate members for seamless loop */}
            {[...otherMembers, ...otherMembers].map((member, index) => (
              <div
                key={index}
                className="flex-shrink-0 group"
              >
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-110 w-64">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-green-400/50 group-hover:border-green-400 transition-all duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                  <p className="text-green-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-black font-semibold px-8 py-3 rounded-full">
            Join Our Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
