import { Heart, Code, Brain, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Club Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex items-center justify-center mr-3">
                <Brain size={24} className="text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">AI & ML Club</h3>
                <p className="text-gray-400 text-sm">Oriental College of Technology</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Preparing to empower students to explore, learn, and innovate in the exciting world of 
              Artificial Intelligence and Machine Learning. Launching soon!
            </p>
            <p className="text-green-400 font-semibold">"Innovate. Implement. Inspire."</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-green-400 transition-colors">Events</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-green-400 transition-colors">Projects</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-green-400 transition-colors">Gallery</a></li>
              <li><a href="#resources" className="text-gray-400 hover:text-green-400 transition-colors">Resources</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">
                Oriental College of Technology<br />
                Bhopal, Madhya Pradesh
              </li>
              <li className="text-gray-400">aimlclub@oct.edu.in</li>
              <li className="text-gray-400 flex items-center">
                <Clock className="mr-1" size={14} />
                Phone: Coming Soon
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 AI & ML Club, Oriental College of Technology. All rights reserved.
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              Made with <Heart className="text-red-400 mx-1" size={16} /> and <Code className="text-green-400 mx-1" size={16} /> by OCT AI/ML Club
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
