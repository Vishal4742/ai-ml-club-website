
import { Mail, Phone, MapPin, Instagram, Linkedin, Github, Users, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "aimlclub@oct.edu.in",
      link: "mailto:aimlclub@oct.edu.in"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 98765 43210",
      link: "tel:+919876543210"
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
      link: "#"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "OCT AI/ML Club",
      color: "text-blue-400 hover:bg-blue-400",
      link: "#"
    },
    {
      icon: Github,
      name: "GitHub",
      handle: "oct-aiml-club",
      color: "text-gray-400 hover:bg-gray-400",
      link: "#"
    }
  ];

  const teamContacts = [
    {
      name: "Arjun Sharma",
      role: "President",
      email: "president@oct-aiml.edu.in",
      phone: "+91 98765 43211"
    },
    {
      name: "Priya Patel",
      role: "Vice President",
      email: "vp@oct-aiml.edu.in",
      phone: "+91 98765 43212"
    },
    {
      name: "Rohit Kumar",
      role: "Tech Lead",
      email: "tech@oct-aiml.edu.in",
      phone: "+91 98765 43213"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to be part of something amazing? Connect with us and start your journey 
            in AI and Machine Learning today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            {/* Contact Information */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageSquare className="text-green-400 mr-3" size={28} />
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-400/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                      <info.icon className="text-green-400" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{info.title}</h4>
                      <a href={info.link} className="text-gray-300 hover:text-green-400 transition-colors">
                        {info.details}
                      </a>
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
                  <a 
                    key={index}
                    href={social.link}
                    className="flex items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gray-400/50 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-all duration-300 ${social.color.replace('text-', 'bg-').replace('hover:bg-', 'group-hover:bg-')}/20`}>
                      <social.icon className={`${social.color.split(' ')[0]} group-hover:text-white transition-colors`} size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{social.name}</h4>
                      <p className="text-gray-300">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Team Contacts */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Users className="text-teal-400 mr-3" size={28} />
                Leadership Team
              </h3>
              <div className="space-y-4">
                {teamContacts.map((member, index) => (
                  <div key={index} className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <h4 className="text-white font-semibold">{member.name}</h4>
                    <p className="text-teal-400 text-sm mb-2">{member.role}</p>
                    <div className="text-sm text-gray-300">
                      <p>{member.email}</p>
                      <p>{member.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Join Form */}
          <div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Ready to Join?</h3>
              
              <div className="space-y-6">
                <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <h4 className="text-xl font-bold text-white mb-3">Membership Benefits</h4>
                  <ul className="text-gray-300 space-y-2 text-left">
                    <li>• Access to exclusive workshops and seminars</li>
                    <li>• Hands-on project experience</li>
                    <li>• Networking with industry professionals</li>
                    <li>• Certificate upon completion</li>
                    <li>• Priority access to hackathons</li>
                    <li>• Mentorship opportunities</li>
                  </ul>
                </div>

                <div className="text-center">
                  <Button className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-black font-semibold py-3 text-lg">
                    Fill Membership Form
                  </Button>
                  <p className="text-sm text-gray-400 mt-2">
                    Opens Google Form for registration
                  </p>
                </div>

                <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <h4 className="text-white font-semibold mb-2">Quick Questions?</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    Drop us a message on WhatsApp
                  </p>
                  <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
                    WhatsApp Us
                  </Button>
                </div>

                {/* Map Placeholder */}
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <div className="h-48 bg-gray-800 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <MapPin size={48} className="mx-auto mb-2" />
                      <p>Interactive Map</p>
                      <p className="text-sm">Oriental College of Technology</p>
                      <p className="text-sm">Bhopal, Madhya Pradesh</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
