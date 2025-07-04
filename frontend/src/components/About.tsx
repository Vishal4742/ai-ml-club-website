import { Users, Target, Calendar, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { teamMembers, getLeadershipTeam, getFacultyTeam } from "@/data/team-members";

const About = () => {
  const leadershipTeam = getLeadershipTeam();
  const facultyTeam = getFacultyTeam();
  const president = leadershipTeam.find(member => member.role === "President");
  const facultyCoordinator = facultyTeam.find(member => member.role === "Faculty Coordinator");
  const otherMembers = teamMembers.filter(member => member.role !== "President" && member.role !== "Faculty Coordinator");

  return (
    <section id="about" className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent tracking-tight">
            About Our Club
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            We are preparing to launch a community of passionate students dedicated to advancing artificial intelligence 
            and machine learning knowledge through hands-on projects and collaborative learning at OCT Bhopal.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
            <Target className="text-green-400 mb-3" size={32} />
            <h3 className="text-xl font-black text-white mb-3 tracking-tight">Our Mission</h3>
            <p className="text-gray-300 text-sm leading-relaxed font-normal">
              To create an inclusive environment where students can explore, learn, and innovate in the fields of 
              AI and ML while building practical solutions to real-world problems and fostering a culture of 
              continuous learning and collaboration from our very first day.
            </p>
          </div>
          
          <div className="p-6 rounded-xl bg-gradient-to-br from-teal-500/10 to-transparent border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300">
            <Lightbulb className="text-teal-400 mb-3" size={32} />
            <h3 className="text-xl font-black text-white mb-3 tracking-tight">Our Vision</h3>
            <p className="text-gray-300 text-sm leading-relaxed font-normal">
              To be the leading student organization that bridges the gap between academic learning and industry 
              applications, producing skilled professionals who can drive innovation in AI and ML technologies 
              and contribute meaningfully to society, starting fresh in 2025.
            </p>
          </div>
        </div>

        {/* Club Stats */}
        <div className="mb-8 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="text-green-400 mr-2" size={24} />
            <h3 className="text-xl font-black text-white tracking-tight">🚀 Inauguration Coming Soon</h3>
          </div>
          <p className="text-center text-gray-300 max-w-xl mx-auto text-sm leading-relaxed font-normal">
            We are excited to announce the upcoming inauguration of our AI & ML Club at OCT Bhopal! 
            This will be the beginning of an exciting journey where we'll organize workshops, participate in hackathons, 
            and build innovative projects together. Be part of our founding story from day one!
          </p>
        </div>

        {/* Team Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-black text-white mb-3 flex items-center justify-center tracking-tight">
            <Users className="text-teal-400 mr-2" size={28} />
            Meet Our Leadership Team
          </h3>
          <p className="text-gray-300 max-w-xl mx-auto text-sm leading-relaxed font-normal">
            Our official founding team includes Faculty Coordinator {facultyCoordinator?.name || "Prof. Shamaila Khan"}, President {president?.name || "Vishal Kumar"}, Vice President Umesh Patel, and a dedicated group of managers, designers, tech leads, and creative professionals. Together, we are committed to building a vibrant AI & ML community at OCT Bhopal from day one.
          </p>
        </div>

        {/* Leadership Section - Faculty Coordinator & President */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Faculty Coordinator */}
          <div className="group">
            <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border-2 border-indigo-400/50 hover:border-indigo-400 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-4 border-indigo-400 group-hover:border-purple-400 transition-all duration-300">
                <img 
                  src={facultyCoordinator?.image || "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=400&h=400&fit=crop&crop=face"} 
                  alt={facultyCoordinator?.name || "Prof. Shamaila Khan"}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-black text-white mb-2 tracking-tight">{facultyCoordinator?.name || "Prof. Shamaila Khan"}</h4>
              <p className="text-indigo-400 font-bold mb-2 text-base tracking-wide">{facultyCoordinator?.role || "Faculty Coordinator"}</p>
              <p className="text-gray-300 text-sm leading-relaxed font-normal">{facultyCoordinator?.bio || "Faculty Coordinator of the AI & ML Club, providing academic guidance and institutional support."}</p>
            </div>
          </div>

          {/* President */}
          <div className="group">
            <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/20 to-teal-500/20 border-2 border-green-400/50 hover:border-green-400 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-4 border-green-400 group-hover:border-teal-400 transition-all duration-300">
                <img 
                  src={president?.image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"} 
                  alt={president?.name || "Vishal Kumar"}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-black text-white mb-2 tracking-tight">{president?.name || "Vishal Kumar"}</h4>
              <p className="text-green-400 font-bold mb-2 text-base tracking-wide">{president?.role || "President"}</p>
              <p className="text-gray-300 text-sm leading-relaxed font-normal">{president?.bio || "President of the AI & ML Club, leading the team and setting the vision for innovation."}</p>
            </div>
          </div>
        </div>

        {/* Other Team Members - Horizontal Scrolling */}
        <div className="relative overflow-hidden mb-8">
          <div className="flex animate-scroll-horizontal space-x-4">
            {/* Official team members (excluding president) */}
            {otherMembers.map((member, index) => (
              <div
                key={member.id}
                className="flex-shrink-0 group"
              >
                <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-110 w-48">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden border-2 border-green-400/50 group-hover:border-green-400 transition-all duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-black text-white mb-1 tracking-tight">{member.name}</h4>
                  <p className="text-green-400 font-bold mb-2 text-sm tracking-wide">{member.role}</p>
                  <p className="text-gray-300 text-xs leading-relaxed font-normal">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
