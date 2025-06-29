import { Camera, Users, Award, Clock, Image } from "lucide-react";

const Gallery = () => {
  const preparationImages = [
    {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      title: "Team Formation Meeting",
      description: "Core team coming together to plan the club's future"
    },
    {
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      title: "Planning Session",
      description: "Brainstorming ideas for upcoming events and activities"
    },
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      title: "Resource Collection",
      description: "Gathering learning materials and tools for future workshops"
    },
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      title: "Faculty Meeting",
      description: "Discussing club objectives with faculty advisors"
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      title: "Student Interest Survey",
      description: "Gathering feedback from students about AI & ML interests"
    },
    {
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      title: "Future Vision",
      description: "Envisioning the impact our club will create"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            Club Preparation Gallery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Behind the scenes of our club formation journey. 
            See how we're preparing to create an amazing AI & ML community.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <Image className="text-green-400 mx-auto mb-4" size={48} />
            <div className="text-3xl font-bold text-white mb-2">6</div>
            <div className="text-gray-300">Preparation Photos</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <Users className="text-teal-400 mx-auto mb-4" size={48} />
            <div className="text-3xl font-bold text-white mb-2">12</div>
            <div className="text-gray-300">Core Team Members</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <Clock className="text-yellow-400 mx-auto mb-4" size={48} />
            <div className="text-3xl font-bold text-white mb-2">2025</div>
            <div className="text-gray-300">Launch Year</div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {preparationImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{image.title}</h4>
                  <p className="text-gray-300 text-sm">{image.description}</p>
                </div>
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-400/50 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Future Gallery Section */}
        <div className="text-center mt-12 p-8 rounded-2xl bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Future Gallery</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Once we launch, our gallery will showcase workshops, hackathons, project demos, 
            and all the amazing moments of learning and innovation. Stay tuned for updates!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              <Clock className="mr-2" size={16} />
              Coming Soon
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black rounded-full transition-all duration-300"
            >
              <Clock className="mr-2" size={16} />
              Stay Updated
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
