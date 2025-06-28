
import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
  type: "upcoming" | "past";
  attendees?: number;
  tags?: string[];
}

const EventCard = ({ title, date, time, location, description, image, type, attendees, tags }: EventCardProps) => {
  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-green-500/50 transition-all duration-300">
      {image && (
        <div className="h-48 bg-gradient-to-r from-green-500/20 to-teal-500/20 flex items-center justify-center">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <Badge variant={type === "upcoming" ? "default" : "secondary"}>
            {type === "upcoming" ? "Upcoming" : "Past"}
          </Badge>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-400 text-sm">
            <Calendar size={16} className="mr-2" />
            {date} at {time}
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <MapPin size={16} className="mr-2" />
            {location}
          </div>
          {attendees && (
            <div className="flex items-center text-gray-400 text-sm">
              <Users size={16} className="mr-2" />
              {attendees} attendees
            </div>
          )}
        </div>
        
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        
        {tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="border-gray-700 text-gray-400">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        {type === "upcoming" && (
          <Button className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600">
            Register Now
          </Button>
        )}
      </div>
    </div>
  );
};

export default EventCard;
