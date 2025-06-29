import { Users, Target, Calendar, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { teamMembers, getLeadershipTeam } from "@/data/team-members";

const About = () => {
  const leadershipTeam = getLeadershipTeam();
  const president = leadershipTeam.find(member => member.role === "President");
  const otherMembers = teamMembers.filter(member => member.role !== "President");

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            About Our Club
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a newly inaugurated community of passionate students dedicated to advancing artificial intelligence 
            and machine learning knowledge through hands-on projects and collaborative learning at OCT Bhopal.
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
              continuous learning and collaboration from our very first day.
            </p>
          </div>
          
          <div className="p-8 rounded-2xl bg-gradient-to-br from-teal-500/10 to-transparent border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300">
            <Lightbulb className="text-teal-400 mb-4" size={48} />
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To be the leading student organization that bridges the gap between academic learning and industry 
              applications, producing skilled professionals who can drive innovation in AI and ML technologies 
              and contribute meaningfully to society, starting fresh in 2024.
            </p>
          </div>
        </div>

        {/* Club Stats */}
        <div className="mb-16 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="flex items-center justify-center mb-6">
            <Calendar className="text-green-400 mr-3" size={32} />
            <h3 className="text-2xl font-bold text-white">🎉 Newly Inaugurated in 2024</h3>
          </div>
          <p className="text-center text-gray-300 max-w-2xl mx-auto">
            We are excited to announce the official inauguration of our AI & ML Club at OCT Bhopal! 
            This is the beginning of an exciting journey where we'll organize workshops, participate in hackathons, 
            and build innovative projects together. Be part of our founding story!
          </p>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
            <Users className="text-teal-400 mr-3" size={36} />
            Meet Our Founding Team
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our official founding team includes President {president?.name || "Vishal Kumar"}, Vice President Umesh Patel, General Manager Prakhar Sahu, and a dedicated group of managers, designers, tech leads, and creative professionals. Together, we are committed to building a vibrant AI & ML community at OCT Bhopal from day one.
          </p>
        </div>

        {/* President Section */}
        <div className="flex justify-center mb-16">
          <div className="group">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/20 to-teal-500/20 border-2 border-green-400/50 hover:border-green-400 transition-all duration-300 hover:transform hover:scale-105 max-w-sm">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-green-400 group-hover:border-teal-400 transition-all duration-300">
                <img 
                  src={president?.image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"} 
                  alt={president?.name || "Vishal Kumar"}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">{president?.name || "Vishal Kumar"}</h4>
              <p className="text-green-400 font-semibold mb-3 text-lg">{president?.role || "President"}</p>
              <p className="text-gray-300">{president?.bio || "President of the AI & ML Club, leading the team and setting the vision for innovation."}</p>
            </div>
          </div>
        </div>

        {/* Other Team Members - Horizontal Scrolling */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-horizontal space-x-6">
            {/* Official team members (excluding president) */}
            {otherMembers.map((member, index) => (
              <div
                key={member.id}
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
                  <p className="text-gray-300 text-sm">Founding team member of the AI & ML Club.</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-black font-semibold px-8 py-3 rounded-full">
            Join Our Founding Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
