import { BookOpen, Github, ExternalLink, Download, Video, Code, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const plannedResources = [
    {
      title: "Machine Learning Fundamentals",
      description: "Comprehensive guide covering linear regression, classification, and clustering",
      type: "PDF Guide",
      icon: BookOpen,
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      status: "Coming Soon"
    },
    {
      title: "Deep Learning with TensorFlow",
      description: "Step-by-step tutorials for building neural networks",
      type: "Video Series",
      icon: Video,
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      status: "Coming Soon"
    },
    {
      title: "Python for Data Science",
      description: "Complete Python programming guide for ML and data analysis",
      type: "Interactive Course",
      icon: Code,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      status: "Coming Soon"
    }
  ];

  const plannedRepositories = [
    {
      title: "ML-Algorithms-Collection",
      description: "Implementation of popular machine learning algorithms from scratch",
      language: "Python",
      status: "Planning Phase"
    },
    {
      title: "AI-Projects-Showcase",
      description: "Collection of AI projects developed by club members",
      language: "Multiple",
      status: "Planning Phase"
    },
    {
      title: "Data-Science-Utils",
      description: "Utility functions and tools for data preprocessing and analysis",
      language: "Python",
      status: "Planning Phase"
    }
  ];

  const recommendedCourses = [
    {
      title: "CS229: Machine Learning",
      provider: "Stanford University",
      duration: "11 weeks",
      level: "Intermediate",
      url: "https://cs229.stanford.edu/",
      status: "Available"
    },
    {
      title: "Deep Learning Specialization",
      provider: "DeepLearning.AI",
      duration: "4 months",
      level: "Beginner to Advanced",
      url: "https://www.coursera.org/specializations/deep-learning",
      status: "Available"
    },
    {
      title: "Applied Data Science with Python",
      provider: "University of Michigan",
      duration: "5 months",
      level: "Intermediate",
      url: "https://www.coursera.org/specializations/data-science-python",
      status: "Available"
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
            to accelerate your AI and ML journey once our club launches.
          </p>
        </div>

        {/* Planned Learning Materials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <BookOpen className="text-green-400 mr-3" size={32} />
            Planned Learning Materials
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plannedResources.map((resource, index) => (
              <div key={index} className="group">
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 ${resource.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <resource.icon className={resource.color} size={32} />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-2">{resource.title}</h4>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-teal-400 font-semibold">{resource.type}</span>
                    <span className="text-sm text-yellow-400 font-semibold">{resource.status}</span>
                  </div>
                  
                  <Button size="sm" className="w-full mt-4 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-black" disabled>
                    <Clock className="mr-2" size={16} />
                    Coming Soon
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Planned GitHub Repositories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Github className="text-teal-400 mr-3" size={32} />
            Planned GitHub Repositories
          </h3>
          
          <div className="grid gap-6">
            {plannedRepositories.map((repo, index) => (
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
                      <span className="text-yellow-400 font-semibold">{repo.status}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <Button variant="outline" className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black" disabled>
                      <Clock className="mr-2" size={16} />
                      Coming Soon
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
            Recommended Courses (Available Now)
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
                  
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white" onClick={() => window.open(course.url, '_blank')}>
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
            Once launched, our comprehensive collection of notes, project documentation, 
            and research papers will be compiled by club members and made available to all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-black font-semibold" disabled>
              <Clock className="mr-2" size={16} />
              Coming Soon
            </Button>
            <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
              <ExternalLink className="mr-2" size={16} />
              External Resources
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
