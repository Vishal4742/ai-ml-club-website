
import { Camera, Users, Award } from "lucide-react";

const Gallery = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      title: "Workshop Session",
      description: "Students engaged in hands-on ML training"
    },
    {
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      title: "Tech Exhibition",
      description: "Showcasing AI projects at college fest"
    },
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      title: "Coding Competition",
      description: "Intense hackathon moments"
    },
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      title: "Guest Lecture",
      description: "Industry expert sharing insights"
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      title: "Lab Session",
      description: "Working on neural network implementations"
    },
    {
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      title: "Project Demo",
      description: "Presenting final year projects"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            Club Gallery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Capturing moments of learning, innovation, and collaboration. 
            See our club in action through workshops, competitions, and events.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <Camera className="text-green-400 mx-auto mb-4" size={48} />
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-300">Photos Captured</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <Users className="text-teal-400 mx-auto mb-4" size={48} />
            <div className="text-3xl font-bold text-white mb-2">25+</div>
            <div className="text-gray-300">Events Organized</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <Award className="text-yellow-400 mx-auto mb-4" size={48} />
            <div className="text-3xl font-bold text-white mb-2">15+</div>
            <div className="text-gray-300">Awards Won</div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
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

        {/* View More Section */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">Want to see more? Follow us on social media for regular updates!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              Follow on Instagram
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black rounded-full transition-all duration-300"
            >
              View on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
