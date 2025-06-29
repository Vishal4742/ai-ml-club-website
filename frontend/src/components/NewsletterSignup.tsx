
import { useState } from "react";
import { Mail, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail("");
  };

  if (isSubscribed) {
    return (
      <div className="bg-gray-900/50 border border-green-500/50 rounded-lg p-6 text-center">
        <Check className="w-12 h-12 text-green-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">You're subscribed!</h3>
        <p className="text-gray-400">Thanks for joining our newsletter. You'll receive updates about our latest events and projects.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <Mail className="text-green-400 mr-3" size={24} />
        <h3 className="text-xl font-semibold text-white">Stay Updated</h3>
      </div>
      
      <p className="text-gray-400 mb-4">
        Get the latest news about our events, projects, and opportunities directly in your inbox.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
        />
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600"
          disabled={isLoading}
        >
          {isLoading ? "Subscribing..." : "Subscribe to Newsletter"}
        </Button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
