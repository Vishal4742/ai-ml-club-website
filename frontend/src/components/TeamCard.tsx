
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";

interface TeamCardProps {
  name: string;
  role: string;
  image?: string;
  bio: string;
  skills: string[];
  social?: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

const TeamCard = ({ name, role, image, bio, skills, social }: TeamCardProps) => {
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-green-500/50 transition-all duration-300">
      <div className="flex flex-col items-center text-center">
        <Avatar className="w-20 h-20 mb-4">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback className="bg-gradient-to-br from-green-400 to-teal-400 text-black font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>
        
        <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
        <p className="text-green-400 font-medium mb-3">{role}</p>
        <p className="text-gray-400 text-sm mb-4">{bio}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="bg-gray-800 text-gray-300">
              {skill}
            </Badge>
          ))}
        </div>
        
        {social && (
          <div className="flex space-x-3">
            {social.github && (
              <a href={social.github} className="text-gray-400 hover:text-green-400 transition-colors">
                <Github size={18} />
              </a>
            )}
            {social.linkedin && (
              <a href={social.linkedin} className="text-gray-400 hover:text-green-400 transition-colors">
                <Linkedin size={18} />
              </a>
            )}
            {social.email && (
              <a href={`mailto:${social.email}`} className="text-gray-400 hover:text-green-400 transition-colors">
                <Mail size={18} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
