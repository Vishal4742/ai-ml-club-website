import { Github, ExternalLink, Award, Users, Code, Zap, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const plannedProjects = [
    {
      title: "Facial Recognition Attendance System",
      description: "AI-powered attendance system using computer vision for automated student tracking",
      tech: ["Python", "OpenCV", "TensorFlow", "Flask"],
      progress: 0,
      team: "4 members",
      status: "Planning Phase"
    },
    {
      title: "Smart Task Manager with ML",
      description: "Intelligent task prioritization using machine learning algorithms",
      tech: ["React", "Node.js", "Python", "scikit-learn"],
      progress: 0,
      team: "5 members",
      status: "Planning Phase"
    },
    {
      title: "Campus Chatbot",
      description: "NLP-powered chatbot for campus information and student queries",
      tech: ["Python", "NLTK", "Transformers", "FastAPI"],
      progress: 0,
      team: "3 members",
      status: "Research Phase"
    }
  ];

  const projectIdeas = [
    {
      title: "Stock Price Predictor",
      description: "LSTM-based model for predicting stock market trends",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
      tech: ["Python", "TensorFlow", "Pandas", "Matplotlib"],
      status: "Idea Phase",
      difficulty: "Intermediate"
    },
    {
      title: "Image Classification App",
      description: "Mobile app for real-time object detection and classification",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
      tech: ["Flutter", "TensorFlow Lite", "Dart"],
      status: "Idea Phase",
      difficulty: "Advanced"
    },
    {
      title: "Sentiment Analysis Tool",
      description: "Web application for analyzing social media sentiment",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      tech: ["React", "Python", "VADER", "D3.js"],
      status: "Idea Phase",
      difficulty: "Beginner"
    }
  ];

  const preparationActivities = [
    {
      title: "Team Formation",
      description: "Core team established with 12 dedicated members",
      icon: Users,
      color: "text-green-400"
    },
    {
      title: "Project Planning",
      description: "Initial project ideas and roadmap developed",
      icon: Lightbulb,
      color: "text-yellow-400"
    },
    {
      title: "Resource Collection",
      description: "Learning materials and tools identified",
      icon: Code,
      color: "text-blue-400"
    }
  ];

  return (
    <section id="projects" className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            Projects & Planning
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our planned projects and innovative ideas that will push the boundaries of AI and ML, 
            solving real-world problems and creating impact once we launch.
          </p>
        </div>

        {/* Planned Projects */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Code className="text-green-400 mr-2" size={24} />
            Planned Projects
          </h3>
          
          <div className="grid gap-4">
            {plannedProjects.map((project, index) => (
              <div key={index} className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-400/50 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                          project.status === 'Planning Phase' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-3 text-sm">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-teal-500/20 text-teal-400 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                      <div className="flex items-center">
                        <Users className="mr-1" size={12} />
                        {project.team}
                      </div>
                      <div>Progress: {project.progress}%</div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-1.5">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-teal-500 h-1.5 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Ideas */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Lightbulb className="text-teal-400 mr-2" size={24} />
            Project Ideas
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectIdeas.map((project, index) => (
              <div key={index} className="group">
                <div className="rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="h-32 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
                    <p className="text-gray-300 mb-2 text-sm">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-1.5 py-0.5 bg-green-500/20 text-green-400 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="text-teal-400 font-semibold">{project.status}</span>
                      <span className="text-gray-400">Difficulty: {project.difficulty}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black text-xs px-2 py-1" disabled>
                        <Lightbulb className="mr-1" size={12} />
                        Learn More
                      </Button>
                      <Button size="sm" className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-black text-xs px-2 py-1" disabled>
                        Coming Soon
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Preparation Activities */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Zap className="text-blue-400 mr-3" size={32} />
            Preparation Activities
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {preparationActivities.map((activity, index) => (
              <div key={index} className="text-center">
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-400/50 transition-all duration-300">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center`}>
                    <activity.icon className={activity.color} size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{activity.title}</h4>
                  <p className="text-gray-300">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Build the Future?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join our founding team and be part of creating innovative AI and ML solutions 
            that will make a real impact in our community and beyond.
          </p>
          <Button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-black font-semibold px-8 py-3 rounded-full">
            Join Our Founding Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
