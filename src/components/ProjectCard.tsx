
import { ExternalLink, Github, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  status: "ongoing" | "completed" | "planned";
  githubUrl?: string;
  liveUrl?: string;
  team?: string[];
  stars?: number;
}

const ProjectCard = ({ title, description, image, technologies, status, githubUrl, liveUrl, team, stars }: ProjectCardProps) => {
  const statusColors = {
    ongoing: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50",
    completed: "bg-green-500/20 text-green-400 border-green-500/50",
    planned: "bg-blue-500/20 text-blue-400 border-blue-500/50"
  };

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-green-500/50 transition-all duration-300">
      {image && (
        <div className="h-48 bg-gradient-to-r from-green-500/10 to-teal-500/10 flex items-center justify-center">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <Badge className={statusColors[status]}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
        
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-gray-800 text-gray-300">
              {tech}
            </Badge>
          ))}
        </div>
        
        {team && team.length > 0 && (
          <div className="flex items-center text-gray-400 text-sm mb-4">
            <Users size={16} className="mr-2" />
            Team: {team.join(", ")}
          </div>
        )}
        
        <div className="flex items-center space-x-3">
          {githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-2" />
                Code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {stars && (
            <div className="flex items-center text-gray-400 text-sm ml-auto">
              <Star size={16} className="mr-1" />
              {stars}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
