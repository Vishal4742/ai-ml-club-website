
import { Github, ExternalLink, Award, Users, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const ongoingProjects = [
    {
      title: "Facial Recognition Attendance System",
      description: "AI-powered attendance system using computer vision for automated student tracking",
      tech: ["Python", "OpenCV", "TensorFlow", "Flask"],
      progress: 75,
      team: "4 members",
      status: "In Development"
    },
    {
      title: "Smart Task Manager with ML",
      description: "Intelligent task prioritization using machine learning algorithms",
      tech: ["React", "Node.js", "Python", "scikit-learn"],
      progress: 60,
      team: "5 members",
      status: "In Development"
    },
    {
      title: "Campus Chatbot",
      description: "NLP-powered chatbot for campus information and student queries",
      tech: ["Python", "NLTK", "Transformers", "FastAPI"],
      progress: 40,
      team: "3 members",
      status: "Research Phase"
    }
  ];

  const completedProjects = [
    {
      title: "Stock Price Predictor",
      description: "LSTM-based model for predicting stock market trends",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
      tech: ["Python", "TensorFlow", "Pandas", "Matplotlib"],
      achievement: "95% accuracy on test data",
      github: "#",
      demo: "#"
    },
    {
      title: "Image Classification App",
      description: "Mobile app for real-time object detection and classification",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
      tech: ["Flutter", "TensorFlow Lite", "Dart"],
      achievement: "1000+ downloads",
      github: "#",
      demo: "#"
    },
    {
      title: "Sentiment Analysis Tool",
      description: "Web application for analyzing social media sentiment",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      tech: ["React", "Python", "VADER", "D3.js"],
      achievement: "Featured in college magazine",
      github: "#",
      demo: "#"
    }
  ];

  const achievements = [
    {
      title: "TechFest 2023 Winner",
      description: "First place in AI/ML category",
      icon: Award,
      color: "text-yellow-400"
    },
    {
      title: "Smart India Hackathon",
      description: "Top 10 finalist nationwide",
      icon: Code,
      color: "text-green-400"
    },
    {
      title: "Research Publication",
      description: "Paper accepted in IEEE conference",
      icon: Zap,
      color: "text-blue-400"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            Projects & Achievements
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our innovative projects that push the boundaries of AI and ML, 
            solving real-world problems and creating impact.
          </p>
        </div>

        {/* Ongoing Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Code className="text-green-400 mr-3" size={32} />
            Ongoing Projects
          </h3>
          
          <div className="grid gap-6">
            {ongoingProjects.map((project, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-400/50 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                          project.status === 'In Development' ? 'bg-green-500/20 text-green-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Users className="mr-2" size={16} />
                        {project.team}
                      </div>
                      <div>Progress: {project.progress}%</div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Zap className="text-teal-400 mr-3" size={32} />
            Completed Projects
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project, index) => (
              <div key={index} className="group">
                <div className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                    <p className="text-gray-300 mb-3">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="text-sm text-teal-400 font-semibold mb-4">
                      🏆 {project.achievement}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
                        <Github className="mr-2" size={16} />
                        Code
                      </Button>
                      <Button size="sm" className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-black">
                        <ExternalLink className="mr-2" size={16} />
                        Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Award className="text-yellow-400 mr-3" size={32} />
            Major Achievements
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <achievement.icon className={`mx-auto mb-4 ${achievement.color}`} size={48} />
                <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
