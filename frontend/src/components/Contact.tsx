import { Mail, Phone, MapPin, Instagram, Linkedin, Github, Users, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { teamMembers, getLeadershipTeam } from "@/data/team-members";

const Contact = () => {
  const leadershipTeam = getLeadershipTeam();
  const president = leadershipTeam.find(member => member.role === "President");

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "aimlclub@oct.edu.in",
      link: "mailto:aimlclub@oct.edu.in",
      status: "Coming Soon"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "To be announced",
      link: "#",
      status: "Coming Soon"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Oriental College of Technology, Bhopal, MP",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@oct_aiml_club",
      color: "text-pink-400 hover:bg-pink-400",
      link: "#",
      status: "Coming Soon"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "OCT AI/ML Club",
      color: "text-blue-400 hover:bg-blue-400",
      link: "#",
      status: "Coming Soon"
    },
    {
      icon: Github,
      name: "GitHub",
      handle: "oct-aiml-club",
      color: "text-gray-400 hover:bg-gray-400",
      link: "#",
      status: "Coming Soon"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            Get Ready to Join
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be among the first to join our AI and Machine Learning community when we launch. 
            Sign up for our waitlist and stay updated with our progress.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            {/* Contact Information */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageSquare className="text-green-400 mr-3" size={28} />
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-400/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                      <info.icon className="text-green-400" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">{info.title}</h4>
                      <a href={info.link} className="text-gray-300 hover:text-green-400 transition-colors">
                        {info.details}
                      </a>
                      {info.status && (
                        <span className="text-sm text-yellow-400 font-semibold ml-2">{info.status}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gray-400/50 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-all duration-300 ${social.color.replace('text-', 'bg-').replace('hover:bg-', 'group-hover:bg-')}/20`}>
                      <social.icon className={`${social.color.split(' ')[0]} group-hover:text-white transition-colors`} size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">{social.name}</h4>
                      <p className="text-gray-300">{social.handle}</p>
                      <span className="text-sm text-yellow-400 font-semibold">{social.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership Contact */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Users className="text-teal-400 mr-3" size={28} />
                Club President
              </h3>
              <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h4 className="text-white font-semibold">{president?.name || "Vishal Kumar"}</h4>
                <p className="text-teal-400 text-sm mb-2">{president?.role || "President"}</p>
                <div className="text-sm text-gray-300">
                  <p>Email: president@oct-aiml.edu.in</p>
                  <p>Phone: To be announced</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Waitlist Form */}
          <div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Join Our Waitlist</h3>
              
              <div className="space-y-6">
                <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <h4 className="text-xl font-bold text-white mb-3">What to Expect</h4>
                  <ul className="text-gray-300 space-y-2 text-left">
                    <li>• Early access to club activities</li>
                    <li>• Priority registration for events</li>
                    <li>• Exclusive workshops and seminars</li>
                    <li>• Hands-on project experience</li>
                    <li>• Networking opportunities</li>
                    <li>• Founding member benefits</li>
                  </ul>
                </div>

                <div className="text-center">
                  <Button className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-black font-semibold py-3 text-lg" disabled>
                    <Clock className="mr-2" size={20} />
                    Waitlist Coming Soon
                  </Button>
                  <p className="text-sm text-gray-400 mt-2">
                    Registration will open after inauguration
                  </p>
                </div>

                <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    Get notified when we launch
                  </p>
                  <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black" disabled>
                    <Clock className="mr-2" size={16} />
                    Coming Soon
                  </Button>
                </div>

                {/* Map Placeholder */}
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <div className="h-48 bg-gray-800 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <MapPin size={48} className="mx-auto mb-2" />
                      <p>Oriental College of Technology</p>
                      <p className="text-sm">Bhopal, Madhya Pradesh</p>
                      <p className="text-sm">India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Build the Future?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join our founding community and be part of creating innovative AI and ML solutions 
            that will make a real impact in our community and beyond.
          </p>
          <Button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-black font-semibold px-8 py-3 rounded-full">
            Join Our Founding Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
