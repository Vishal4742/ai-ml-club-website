import { Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Events = () => {
  const upcomingEvents = [
    {
      title: "🎉 Club Inauguration Ceremony",
      date: "TBD - Coming Soon",
      time: "To be announced",
      location: "Main Auditorium, OCT Campus",
      attendees: "Open to all students",
      description: "Join us for the official inauguration of our AI & ML Club! Special guest speakers, networking, and exciting announcements about upcoming activities.",
      type: "Inauguration",
      status: "Planning",
      lumaUrl: "https://lu.ma/ai-ml-club-inauguration" // Replace with actual Luma event URL
    },
    {
      title: "AI Workshop: Neural Networks Fundamentals",
      date: "TBD - After Inauguration",
      time: "To be announced",
      location: "CS Lab, OCT Campus",
      attendees: "Registration opening soon",
      description: "Our first technical workshop! Deep dive into neural network architectures and implementation",
      type: "Workshop",
      status: "Planning",
      lumaUrl: "https://lu.ma/ai-workshop-neural-networks" // Replace with actual Luma event URL
    },
    {
      title: "ML Hackathon 2024 - Inaugural Edition",
      date: "TBD - After Inauguration",
      time: "To be announced",
      location: "Main Auditorium",
      attendees: "Registration opening soon",
      description: "Our first hackathon! 24-hour competition focusing on real-world ML solutions with amazing prizes",
      type: "Competition",
      status: "Planning",
      lumaUrl: "https://lu.ma/ml-hackathon-2024" // Replace with actual Luma event URL
    }
  ];

  const preparationActivities = [
    {
      title: "Club Formation Meeting",
      date: "2024-01-10",
      attendees: "25 founding members",
      description: "Initial meeting to establish club structure and plan inauguration",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop"
    },
    {
      title: "Faculty Advisor Meeting",
      date: "2024-01-08",
      attendees: "Core team + faculty",
      description: "Meeting with faculty advisors to finalize club objectives and guidelines",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop"
    },
    {
      title: "Student Interest Survey",
      date: "2024-01-05",
      attendees: "150+ responses",
      description: "Campus-wide survey to gauge interest in AI & ML activities",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    }
  ];

  const handleLumaRegistration = (lumaUrl: string) => {
    window.open(lumaUrl, '_blank');
  };

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            Events & Activities
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get ready for exciting inaugural events, workshops, and competitions that will 
            accelerate your journey in AI and Machine Learning. All events will be managed through Luma for seamless registration.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Calendar className="text-green-400 mr-3" size={32} />
            Planned Inaugural Events
          </h3>
          
          <div className="grid gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-400/50 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-2">{event.title}</h4>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                          event.type === 'Inauguration' ? 'bg-yellow-500/20 text-yellow-400' :
                          event.type === 'Workshop' ? 'bg-green-500/20 text-green-400' :
                          event.type === 'Competition' ? 'bg-teal-500/20 text-teal-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {event.type}
                        </span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        event.status === 'Planning' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {event.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{event.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center text-gray-400">
                        <Calendar className="mr-2" size={16} />
                        {event.date}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Clock className="mr-2" size={16} />
                        {event.time}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin className="mr-2" size={16} />
                        {event.location}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-400 mt-2">
                      <Users className="mr-2" size={16} />
                      {event.attendees}
                    </div>
                  </div>
                  
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <Button 
                      className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-black font-semibold"
                      onClick={() => handleLumaRegistration(event.lumaUrl)}
                      disabled
                    >
                      Coming Soon
                      <ExternalLink className="ml-2" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Preparation Activities */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Clock className="text-teal-400 mr-3" size={32} />
            Club Formation Journey
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {preparationActivities.map((event, index) => (
              <div key={index} className="group">
                <div className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-2">{event.title}</h4>
                    <p className="text-gray-300 mb-3">{event.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
