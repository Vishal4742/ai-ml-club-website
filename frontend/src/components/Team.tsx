import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Users,
  Star,
  Award,
  Zap,
  User,
  Briefcase,
  CalendarCheck,
  Palette,
  Code2,
  Megaphone,
  ShieldCheck,
  Camera,
  Video,
} from "lucide-react";
import { teamMembers, TeamMember, getMemberImage } from "@/data/team-members";
import { getSkillColor } from "@/data/team-config";

// Map roles to Lucide icons
const roleIcons: Record<string, JSX.Element> = {
  "Faculty Coordinator": <Users size={16} className="inline-block mr-1 align-text-bottom" />,
  "President": <User size={16} className="inline-block mr-1 align-text-bottom" />,
  "Vice President": <User size={16} className="inline-block mr-1 align-text-bottom" />,
  "General Manager": <Briefcase size={16} className="inline-block mr-1 align-text-bottom" />,
  "Event Manager & Special Performance": <CalendarCheck size={16} className="inline-block mr-1 align-text-bottom" />,
  "Graphic Designer & Event Speaker": <Palette size={16} className="inline-block mr-1 align-text-bottom" />,
  "Tech Lead": <Code2 size={16} className="inline-block mr-1 align-text-bottom" />,
  "Public Relation": <Megaphone size={16} className="inline-block mr-1 align-text-bottom" />,
  "Discipline Head": <ShieldCheck size={16} className="inline-block mr-1 align-text-bottom" />,
  "Photographer": <Camera size={16} className="inline-block mr-1 align-text-bottom" />,
  "Video Editor / Videographer": <Video size={16} className="inline-block mr-1 align-text-bottom" />,
  // fallback
  "Club President": <User size={16} className="inline-block mr-1 align-text-bottom" />,
  "Technical Lead": <Code2 size={16} className="inline-block mr-1 align-text-bottom" />,
  "Events & Outreach Coordinator": <CalendarCheck size={16} className="inline-block mr-1 align-text-bottom" />,
  "Research & Development Lead": <Award size={16} className="inline-block mr-1 align-text-bottom" />,
  "Content & Communications Lead": <Megaphone size={16} className="inline-block mr-1 align-text-bottom" />,
  "Finance & Sponsorship Lead": <Briefcase size={16} className="inline-block mr-1 align-text-bottom" />,
  "Faculty Advisor": <Users size={16} className="inline-block mr-1 align-text-bottom" />,
};

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  const handleContact = (type: string, url?: string) => {
    if (url) {
      window.open(url, '_blank');
    } else if (type === 'email' && selectedMember?.email) {
      window.open(`mailto:${selectedMember.email}`, '_blank');
    }
  };

  return (
    <section className="relative py-12 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-600/15 to-purple-600/15 rounded-full blur-2xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/10 text-sm font-medium text-white/90 mb-6">
            <Users className="w-4 h-4 mr-2 text-purple-400" />
            Meet Our Founding Team
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">The Minds Behind</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Innovation</span>
          </h2>
          
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Our diverse founding team is preparing to drive the future of AI & ML at OCT Bhopal. 
            From leadership to specialized roles, we're united by our commitment to excellence and innovation.
          </p>
        </div>

        {/* Enhanced Faculty Coordinator Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm border border-indigo-400/20 text-sm font-medium text-white/90 mb-4">
              <Users className="w-4 h-4 mr-2 text-indigo-400" />
              Faculty Leadership
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Academic Guidance & Support</h3>
            <p className="text-base text-white/70 max-w-xl mx-auto">
              Providing strategic direction and academic oversight to ensure excellence in all club activities
            </p>
          </div>
          
          <div className="flex justify-center">
            {teamMembers.filter(member => member.role === "Faculty Coordinator").map((member, index) => (
              <Card 
                key={member.id}
                className="card-modern cursor-pointer group hover-lift max-w-md bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-indigo-400/20"
                onClick={() => handleMemberClick(member)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <img
                        src={getMemberImage(member)}
                        alt={member.name}
                        className="relative w-24 h-24 rounded-full mx-auto object-cover border-4 border-indigo-400/40 group-hover:border-indigo-400 transition-all duration-300 shadow-2xl"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (member.fallbackImage) {
                            target.src = member.fallbackImage;
                          }
                        }}
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {member.name}
                    </h3>
                    
                    <p className="text-indigo-300 font-semibold mb-4 flex items-center justify-center text-base">
                      {roleIcons[member.role] || <Users size={16} className="inline-block mr-2 align-text-bottom" />} {member.role}
                    </p>
                    
                    <p className="text-white/80 text-sm mb-6 leading-relaxed">
                      {member.bio}
                    </p>
                    
                    <div className="flex justify-center space-x-3">
                      {member.github && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-white/60 hover:text-white hover:bg-white/10 rounded-full p-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleContact('github', member.github);
                          }}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                      {member.linkedin && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-white/60 hover:text-white hover:bg-white/10 rounded-full p-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleContact('linkedin', member.linkedin);
                          }}
                        >
                          <Linkedin className="w-4 h-4" />
                        </Button>
                      )}
                      {member.twitter && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-white/60 hover:text-white hover:bg-white/10 rounded-full p-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleContact('twitter', member.twitter);
                          }}
                        >
                          <Twitter className="w-4 h-4" />
                        </Button>
                      )}
                      {member.email && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-white/60 hover:text-white hover:bg-white/10 rounded-full p-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleContact('email');
                          }}
                        >
                          <Mail className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Student Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-400/20 text-sm font-medium text-white/90 mb-6">
              <Users className="w-5 h-5 mr-3 text-blue-400" />
              Student Leadership Team
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Core Team Members</h3>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Dynamic student leaders driving innovation and excellence in AI & ML
            </p>
          </div>

          {/* Enhanced Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.filter(member => member.role !== "Faculty Coordinator").map((member, index) => (
              <Card 
                key={member.id}
                className="card-modern cursor-pointer group hover-lift bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition-all duration-300"
                onClick={() => handleMemberClick(member)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                      <img
                        src={getMemberImage(member)}
                        alt={member.name}
                        className="relative w-28 h-28 rounded-full mx-auto object-cover border-4 border-white/20 group-hover:border-blue-400/50 transition-all duration-300 shadow-xl"
                        onError={(e) => {
                          // Fallback to Unsplash image if local image fails
                          const target = e.target as HTMLImageElement;
                          if (member.fallbackImage) {
                            target.src = member.fallbackImage;
                          }
                        }}
                      />
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                        <Star className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {member.name}
                    </h3>
                    
                    <p className="text-blue-300 font-medium mb-4 flex items-center justify-center text-base">
                      {roleIcons[member.role] || <User size={18} className="inline-block mr-2 align-text-bottom" />} {member.role}
                    </p>
                    
                    <p className="text-white/70 text-sm mb-6 line-clamp-3 leading-relaxed">
                      {member.bio}
                    </p>
                    
                    <div className="flex justify-center space-x-3">
                      {member.github && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-white/60 hover:text-white hover:bg-white/10 rounded-full p-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleContact('github', member.github);
                          }}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                      {member.linkedin && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-white/60 hover:text-white hover:bg-white/10 rounded-full p-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleContact('linkedin', member.linkedin);
                          }}
                        >
                          <Linkedin className="w-4 h-4" />
                        </Button>
                      )}
                      {member.twitter && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-white/60 hover:text-white hover:bg-white/10 rounded-full p-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleContact('twitter', member.twitter);
                          }}
                        >
                          <Twitter className="w-4 h-4" />
                        </Button>
                      )}
                      {member.email && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-white/60 hover:text-white hover:bg-white/10 rounded-full p-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleContact('email');
                          }}
                        >
                          <Mail className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">13</div>
            <div className="text-sm text-white/70 font-medium">Core Team Members</div>
          </div>
          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">3</div>
            <div className="text-sm text-white/70 font-medium">Leadership Positions</div>
          </div>
          <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-indigo-400/20 rounded-2xl p-8 hover:border-indigo-400/40 transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-3">5+</div>
            <div className="text-sm text-white/70 font-medium">Planned Events</div>
          </div>
          <div className="bg-gradient-to-br from-pink-900/30 to-rose-900/30 backdrop-blur-sm border border-pink-400/20 rounded-2xl p-8 hover:border-pink-400/40 transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-3">2025</div>
            <div className="text-sm text-white/70 font-medium">Launch Year</div>
          </div>
        </div>
      </div>

      {/* Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={handleCloseModal}></div>
          <div className="relative glass max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-8">
            <div className="flex items-start space-x-6">
              <img
                src={getMemberImage(selectedMember)}
                alt={selectedMember.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white/20"
                onError={(e) => {
                  // Fallback to Unsplash image if local image fails
                  const target = e.target as HTMLImageElement;
                  if (selectedMember.fallbackImage) {
                    target.src = selectedMember.fallbackImage;
                  }
                }}
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedMember.name}</h3>
                <p className="text-blue-400 font-medium mb-4 flex items-center">
                  {roleIcons[selectedMember.role] || <User size={16} className="inline-block mr-1 align-text-bottom" />} {selectedMember.role}
                </p>
                <p className="text-white/80 mb-6">{selectedMember.bio}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                      Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.skills.map((skill, index) => (
                        <span key={index} className={`px-3 py-1 rounded-full text-sm ${getSkillColor(skill)}`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-purple-400" />
                      Achievements
                    </h4>
                    <ul className="space-y-1">
                      {selectedMember.achievements.map((achievement, index) => (
                        <li key={index} className="text-white/70 text-sm flex items-center">
                          <span className="w-2 h-2 bg-gradient rounded-full mr-3"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex space-x-3 mt-6">
                  {selectedMember.github && (
                    <Button
                      onClick={() => handleContact('github', selectedMember.github)}
                      className="btn-modern"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  )}
                  {selectedMember.linkedin && (
                    <Button
                      onClick={() => handleContact('linkedin', selectedMember.linkedin)}
                      className="btn-modern"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                  )}
                  {selectedMember.email && (
                    <Button
                      onClick={() => handleContact('email')}
                      className="btn-modern"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                  )}
                </div>
              </div>
            </div>
            
            <Button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
              variant="ghost"
              size="sm"
            >
              ✕
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team; 