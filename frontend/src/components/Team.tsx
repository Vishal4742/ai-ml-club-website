import { Users, Star, Award, Calendar, Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";
import { teamMembers } from "@/data/team-members";

const Team = () => {
  // Group team members by role
  const facultyCoordinator = teamMembers.find(member => member.role === "Faculty Coordinator");
  const leadership = teamMembers.filter(member => 
    member.role === "President" || member.role === "Vice President"
  );
  const techLeads = teamMembers.filter(member => member.role === "Tech Lead");
  const eventHeads = teamMembers.filter(member => member.role === "Event Head");
  const otherMembers = teamMembers.filter(member => 
    !["Faculty Coordinator", "President", "Vice President", "Tech Lead", "Event Head"].includes(member.role)
  );

  const handleSocialClick = (url: string) => {
    if (url.startsWith('mailto:')) {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const SocialIcons = ({ member }: { member: any }) => {
    const socialLinks = [];
    
    if (member.github) {
      socialLinks.push(
        <button
          key="github"
          onClick={() => handleSocialClick(member.github)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800/50 hover:bg-gray-700/70 transition-all duration-300 hover:scale-110"
          aria-label="GitHub"
        >
          <Github className="w-4 h-4 text-gray-300 hover:text-white" />
        </button>
      );
    }
    
    if (member.linkedin) {
      socialLinks.push(
        <button
          key="linkedin"
          onClick={() => handleSocialClick(member.linkedin)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600/50 hover:bg-blue-500/70 transition-all duration-300 hover:scale-110"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-4 h-4 text-gray-300 hover:text-white" />
        </button>
      );
    }
    
    if (member.twitter) {
      socialLinks.push(
        <button
          key="twitter"
          onClick={() => handleSocialClick(member.twitter)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-400/50 hover:bg-blue-300/70 transition-all duration-300 hover:scale-110"
          aria-label="Twitter"
        >
          <Twitter className="w-4 h-4 text-gray-300 hover:text-white" />
        </button>
      );
    }
    
    if (member.instagram) {
      socialLinks.push(
        <button
          key="instagram"
          onClick={() => handleSocialClick(member.instagram)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-pink-600/50 hover:bg-pink-500/70 transition-all duration-300 hover:scale-110"
          aria-label="Instagram"
        >
          <Instagram className="w-4 h-4 text-gray-300 hover:text-white" />
        </button>
      );
    }
    
    if (member.email) {
      socialLinks.push(
        <button
          key="email"
          onClick={() => handleSocialClick(`mailto:${member.email}`)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-green-600/50 hover:bg-green-500/70 transition-all duration-300 hover:scale-110"
          aria-label="Email"
        >
          <Mail className="w-4 h-4 text-gray-300 hover:text-white" />
        </button>
      );
    }

    if (socialLinks.length === 0) return null;

    return (
      <div className="flex gap-2 justify-center mt-4">
        {socialLinks}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full glass text-sm font-medium text-white/90 mb-8">
            <Users className="w-5 h-5 mr-3 text-green-400" />
            Meet Our Founding Team
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent tracking-tight">
            The Minds Behind Innovation
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Our diverse founding team is preparing to drive the future of AI & ML at OCT Bhopal. 
            From leadership to specialized roles, we're united by our commitment to excellence and innovation.
          </p>
        </div>

        {/* Faculty Coordinator - Featured */}
        {facultyCoordinator && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm border border-indigo-400/20 text-sm font-medium text-white/90 mb-6 shadow-lg">
                <Star className="w-5 h-5 mr-3 text-indigo-400" />
                Faculty Leadership
              </div>
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Academic Guidance & Support</h3>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Providing strategic direction and academic oversight to ensure excellence in all club activities
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="card-modern text-center p-10 max-w-lg bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-indigo-400/20 hover:border-indigo-400/40 transition-all duration-300 shadow-2xl hover:shadow-indigo-500/20">
                <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-indigo-400/40 shadow-2xl">
                  <img 
                    src={facultyCoordinator.image} 
                    alt={facultyCoordinator.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (facultyCoordinator.fallbackImage) {
                        target.src = facultyCoordinator.fallbackImage;
                      }
                    }}
                  />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{facultyCoordinator.name}</h3>
                <p className="text-indigo-400 font-bold mb-6 text-lg tracking-wide">{facultyCoordinator.role}</p>
                <p className="text-gray-300 text-base leading-relaxed font-normal">{facultyCoordinator.bio}</p>
                <SocialIcons member={facultyCoordinator} />
              </div>
            </div>
          </div>
        )}

        {/* Leadership Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-600/20 to-teal-600/20 backdrop-blur-sm border border-green-400/20 text-sm font-medium text-white/90 mb-6 shadow-lg">
              <Award className="w-5 h-5 mr-3 text-green-400" />
              Student Leadership
            </div>
            <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Core Leadership Team</h3>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Dynamic student leaders driving innovation and excellence in AI & ML
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {leadership.map((member, index) => (
              <div 
                key={member.id}
                className="card-modern text-center p-10 animate-scale-in bg-gradient-to-br from-green-900/20 to-teal-900/20 backdrop-blur-sm border border-green-400/20 hover:border-green-400/40 transition-all duration-300 shadow-xl hover:shadow-green-500/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-28 h-28 mx-auto mb-8 rounded-full overflow-hidden border-4 border-green-400/40 shadow-2xl">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (member.fallbackImage) {
                        target.src = member.fallbackImage;
                      }
                    }}
                  />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{member.name}</h3>
                <p className="text-green-400 font-bold mb-6 text-base tracking-wide">{member.role}</p>
                <p className="text-gray-300 text-base leading-relaxed font-normal">{member.bio}</p>
                <SocialIcons member={member} />
              </div>
            ))}
          </div>
        </div>

        {/* Tech Leads */}
        {techLeads.length > 0 && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Technical Leadership</h3>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Technical experts leading our AI & ML initiatives and development projects
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {techLeads.map((member, index) => (
                <div 
                  key={member.id}
                  className="card-modern text-center p-8 animate-scale-in bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-3 border-blue-400/40 shadow-xl">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (member.fallbackImage) {
                          target.src = member.fallbackImage;
                        }
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-black text-white mb-3 tracking-tight">{member.name}</h3>
                  <p className="text-blue-400 font-bold mb-4 text-sm tracking-wide">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed font-normal">{member.bio}</p>
                  <SocialIcons member={member} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Event Heads */}
        {eventHeads.length > 0 && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Event Management</h3>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Creative minds planning and executing our events and activities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {eventHeads.map((member, index) => (
                <div 
                  key={member.id}
                  className="card-modern text-center p-8 animate-scale-in bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-3 border-purple-400/40 shadow-xl">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (member.fallbackImage) {
                          target.src = member.fallbackImage;
                        }
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-black text-white mb-3 tracking-tight">{member.name}</h3>
                  <p className="text-purple-400 font-bold mb-4 text-sm tracking-wide">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed font-normal">{member.bio}</p>
                  <SocialIcons member={member} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Team Members */}
        {otherMembers.length > 0 && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Support Team</h3>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Dedicated members supporting various aspects of club operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {otherMembers.map((member, index) => (
                <div 
                  key={member.id}
                  className="card-modern text-center p-8 animate-scale-in hover:border-green-400/40 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-2 border-green-400/50 shadow-xl">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (member.fallbackImage) {
                          target.src = member.fallbackImage;
                        }
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-black text-white mb-3 tracking-tight">{member.name}</h3>
                  <p className="text-green-400 font-bold mb-4 text-sm tracking-wide">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed font-normal">{member.bio}</p>
                  <SocialIcons member={member} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-900/30 to-teal-900/30 backdrop-blur-sm border border-green-400/20 hover:border-green-400/40 transition-all duration-300 shadow-xl hover:shadow-green-500/20">
            <div className="text-4xl font-black text-gradient mb-3 tracking-tight">13</div>
            <div className="text-base text-white/70 font-medium tracking-wide">Core Team Members</div>
          </div>
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 shadow-xl hover:shadow-blue-500/20">
            <div className="text-4xl font-black text-gradient-2 mb-3 tracking-tight">3</div>
            <div className="text-base text-white/70 font-medium tracking-wide">Leadership Positions</div>
          </div>
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 shadow-xl hover:shadow-purple-500/20">
            <div className="text-4xl font-black text-gradient mb-3 tracking-tight">5+</div>
            <div className="text-base text-white/70 font-medium tracking-wide">Planned Events</div>
          </div>
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-indigo-900/30 to-cyan-900/30 backdrop-blur-sm border border-indigo-400/20 hover:border-indigo-400/40 transition-all duration-300 shadow-xl hover:shadow-indigo-500/20">
            <div className="text-4xl font-black text-gradient-2 mb-3 tracking-tight">2025</div>
            <div className="text-base text-white/70 font-medium tracking-wide">Launch Year</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team; 