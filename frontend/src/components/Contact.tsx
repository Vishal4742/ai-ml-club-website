import { Mail, Phone, MapPin, Instagram, Linkedin, Github, Users, MessageSquare } from "lucide-react";
import { getLeadershipTeam } from "@/data/team-members";

const Contact = () => {
  const leadershipTeam = getLeadershipTeam();
  const president = leadershipTeam.find(member => member.role === "President");

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "aimlcluboct@gmail.com",
      link: "mailto:aimlcluboct@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "To be announced",
      link: "#"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "OCT, Bhopal, MP",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@oct_aiml_club",
      link: "#"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "OCT AI/ML Club",
      link: "#"
    },
    {
      icon: Github,
      name: "GitHub",
      handle: "oct-aiml-club",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-10 bg-black">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            Contact Us
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            {contactInfo.map((info, idx) => (
              <a
                key={idx}
                href={info.link}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/3 border border-white/10 hover:bg-white/5 transition-colors text-sm"
              >
                <info.icon className="w-4 h-4 text-green-400" />
                <span className="text-gray-200">{info.details}</span>
              </a>
            ))}
          </div>
          {/* Leadership Contact */}
          <div className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg bg-white/3 border border-white/10 text-center">
            <Users className="w-5 h-5 text-teal-400 mb-1" />
            <span className="text-white font-semibold text-sm">{president?.name || "Vishal Kumar"}</span>
            <span className="text-teal-400 text-xs">{president?.role || "President"}</span>
            <span className="text-xs text-gray-400">aimlcluboct@gmail.com</span>
          </div>
          {/* Social Media */}
          <div className="flex flex-col gap-3 p-3 rounded-lg bg-white/3 border border-white/10">
            <div className="text-center text-xs text-gray-400 mb-1">Follow Us</div>
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                className="flex items-center gap-2 hover:text-green-400 transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="w-4 h-4" />
                <span>{social.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
