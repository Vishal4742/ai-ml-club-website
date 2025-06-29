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
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 gradient-bg-2 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 gradient-bg-3 rounded-full blur-3xl opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass text-sm font-medium text-white/90 mb-6">
            <Users className="w-4 h-4 mr-2 text-blue-400" />
            Meet Our Founding Team
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">The Minds Behind</span>
            <br />
            <span className="text-gradient">Innovation</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our diverse founding team is preparing to drive the future of AI & ML at OCT Bhopal. 
            From leadership to specialized roles, we're united by our commitment to excellence and innovation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.id}
              className="card-modern cursor-pointer group hover-lift"
              onClick={() => handleMemberClick(member)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="relative mb-6">
                    <img
                      src={getMemberImage(member)}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white/20 group-hover:border-gradient transition-all duration-300"
                      onError={(e) => {
                        // Fallback to Unsplash image if local image fails
                        const target = e.target as HTMLImageElement;
                        if (member.fallbackImage) {
                          target.src = member.fallbackImage;
                        }
                      }}
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 gradient-bg rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  <p className="text-blue-400 font-medium mb-4 flex items-center justify-center">
                    {roleIcons[member.role] || <User size={16} className="inline-block mr-1 align-text-bottom" />} {member.role}
                  </p>
                  
                  <p className="text-white/70 text-sm mb-6 line-clamp-3">
                    {member.bio}
                  </p>
                  
                  <div className="flex justify-center space-x-3">
                    {member.github && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-white/60 hover:text-white hover:bg-white/10"
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
                        className="text-white/60 hover:text-white hover:bg-white/10"
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
                        className="text-white/60 hover:text-white hover:bg-white/10"
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
                        className="text-white/60 hover:text-white hover:bg-white/10"
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

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="glass rounded-xl p-6">
            <div className="text-3xl font-bold text-gradient mb-2">12</div>
            <div className="text-sm text-white/70">Core Team Members</div>
          </div>
          <div className="glass rounded-xl p-6">
            <div className="text-3xl font-bold text-gradient-2 mb-2">3</div>
            <div className="text-sm text-white/70">Leadership Positions</div>
          </div>
          <div className="glass rounded-xl p-6">
            <div className="text-3xl font-bold text-gradient mb-2">5+</div>
            <div className="text-sm text-white/70">Planned Events</div>
          </div>
          <div className="glass rounded-xl p-6">
            <div className="text-3xl font-bold text-gradient-2 mb-2">2025</div>
            <div className="text-sm text-white/70">Launch Year</div>
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