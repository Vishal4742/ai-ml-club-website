
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  company?: string;
  image?: string;
}

const TestimonialCard = ({ content, author, role, company, image }: TestimonialCardProps) => {
  const initials = author.split(' ').map(n => n[0]).join('');

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-green-500/50 transition-all duration-300">
      <Quote className="text-green-400 mb-4" size={24} />
      <p className="text-gray-300 mb-6 italic">"{content}"</p>
      
      <div className="flex items-center">
        <Avatar className="w-12 h-12 mr-4">
          <AvatarImage src={image} alt={author} />
          <AvatarFallback className="bg-gradient-to-br from-green-400 to-teal-400 text-black font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>
        
        <div>
          <h4 className="text-white font-semibold">{author}</h4>
          <p className="text-gray-400 text-sm">
            {role}{company && ` at ${company}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
