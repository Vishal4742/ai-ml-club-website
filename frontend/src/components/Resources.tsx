
import { BookOpen, Github, ExternalLink, Download, Video, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const learningResources = [
    {
      title: "Machine Learning Fundamentals",
      description: "Comprehensive guide covering linear regression, classification, and clustering",
      type: "PDF Guide",
      icon: BookOpen,
      color: "text-green-400",
      bgColor: "bg-green-500/20"
    },
    {
      title: "Deep Learning with TensorFlow",
      description: "Step-by-step tutorials for building neural networks",
      type: "Video Series",
      icon: Video,
      color: "text-blue-400",
      bgColor: "bg-blue-500/20"
    },
    {
      title: "Python for Data Science",
      description: "Complete Python programming guide for ML and data analysis",
      type: "Interactive Course",
      icon: Code,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20"
    }
  ];

  const repositories = [
    {
      title: "ML-Algorithms-Collection",
      description: "Implementation of popular machine learning algorithms from scratch",
      language: "Python",
      stars: "42",
      forks: "15"
    },
    {
      title: "AI-Projects-Showcase",
      description: "Collection of AI projects developed by club members",
      language: "Multiple",
      stars: "38",
      forks: "12"
    },
    {
      title: "Data-Science-Utils",
      description: "Utility functions and tools for data preprocessing and analysis",
      language: "Python",
      stars: "25",
      forks: "8"
    }
  ];

  const recommendedCourses = [
    {
      title: "CS229: Machine Learning",
      provider: "Stanford University",
      duration: "11 weeks",
      level: "Intermediate",
      url: "#"
    },
    {
      title: "Deep Learning Specialization",
      provider: "DeepLearning.AI",
      duration: "4 months",
      level: "Beginner to Advanced",
      url: "#"
    },
    {
      title: "Applied Data Science with Python",
      provider: "University of Michigan",
      duration: "5 months",
      level: "Intermediate",
      url: "#"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            Learning Resources
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access curated learning materials, code repositories, and recommended courses 
            to accelerate your AI and ML journey.
          </p>
        </div>

        {/* Learning Materials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <BookOpen className="text-green-400 mr-3" size={32} />
            Learning Materials
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningResources.map((resource, index) => (
              <div key={index} className="group">
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 ${resource.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <resource.icon className={resource.color} size={32} />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-2">{resource.title}</h4>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-teal-400 font-semibold">{resource.type}</span>
                    <Button size="sm" className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-black">
                      <Download className="mr-2" size={16} />
                      Access
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Repositories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Github className="text-teal-400 mr-3" size={32} />
            GitHub Repositories
          </h3>
          
          <div className="grid gap-6">
            {repositories.map((repo, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-400/50 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-white mb-2 flex items-center">
                      <Github className="text-teal-400 mr-3" size={24} />
                      {repo.title}
                    </h4>
                    <p className="text-gray-300 mb-4">{repo.description}</p>
                    
                    <div className="flex items-center gap-6 text-sm text-gray-400">
                      <span>Language: {repo.language}</span>
                      <span>⭐ {repo.stars}</span>
                      <span>🍴 {repo.forks}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <Button variant="outline" className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black">
                      <ExternalLink className="mr-2" size={16} />
                      View Repository
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Courses */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Video className="text-blue-400 mr-3" size={32} />
            Recommended Courses
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommendedCourses.map((course, index) => (
              <div key={index} className="group">
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <h4 className="text-xl font-bold text-white mb-2">{course.title}</h4>
                  <p className="text-blue-400 font-semibold mb-3">{course.provider}</p>
                  
                  <div className="space-y-2 text-sm text-gray-300 mb-4">
                    <div>Duration: {course.duration}</div>
                    <div>Level: {course.level}</div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                    <ExternalLink className="mr-2" size={16} />
                    Enroll Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Knowledge Base */}
        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Club Knowledge Base</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Access our comprehensive collection of notes, project documentation, 
            and research papers compiled by club members.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-black font-semibold">
              <BookOpen className="mr-2" size={16} />
              Browse Knowledge Base
            </Button>
            <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
              <Github className="mr-2" size={16} />
              Contribute Resources
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
