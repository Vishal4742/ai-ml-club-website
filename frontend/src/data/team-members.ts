export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  fallbackImage?: string; // Fallback to Unsplash if local image fails
  bio: string;
  skills: string[];
  achievements: string[];
  github?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  email?: string;
  responsibilities?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 0,
    name: "Prof. Shamaila Khan",
    role: "Faculty Coordinator",
    image: "/assets/images/team/shamaila-khan.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=400&h=400&fit=crop&crop=face",
    bio: "",
    skills: ["Academic Leadership", "Mentorship", "Curriculum Development", "Research Guidance"],
    achievements: ["Providing faculty oversight", "Academic mentorship", "Institutional coordination", "Research collaboration"],
    email: "shamaila.khan@octbhopal.ac.in",
    linkedin: "https://linkedin.com/in/shamaila-khan"
  },
  {
    id: 1,
    name: "Vishal Kumar",
    role: "President",
    image: "/assets/images/team/vishal-kumar.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "",
    skills: ["Leadership", "AI Strategy", "Team Building", "Strategic Planning"],
    achievements: ["Leading club formation", "Establishing club vision and mission", "Coordinating with faculty advisors"],
    responsibilities: "Overall club leader. Responsible for strategic decisions, event approvals, and club growth. Main representative during college events and with external organizations.",
    github: "https://github.com/vishalkumar",
    linkedin: "https://linkedin.com/in/vishalkumar",
    twitter: "https://twitter.com/vishalkumar",
    instagram: "https://instagram.com/vishalkumar",
    email: "vishal.kumar@octbhopal.ac.in"
  },
  {
    id: 2,
    name: "Umesh Patel",
    role: "Vice President",
    image: "/assets/images/team/umesh-patel.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "",
    skills: ["Management", "Event Coordination", "Member Engagement", "Communication"],
    achievements: ["Supporting club formation", "Planning member onboarding process", "Coordinating team activities"],
    responsibilities: "Supports President in all decisions. Acts as second-in-command. Takes charge in President's absence and helps coordinate between all departments.",
    github: "https://github.com/umeshpatel",
    linkedin: "https://linkedin.com/in/umeshpatel",
    email: "umesh.patel@octbhopal.ac.in"
  },
  {
    id: 3,
    name: "Arpit Pandey",
    role: "Tech Lead",
    image: "/assets/images/team/arpit-pandey.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "",
    skills: ["Programming", "AI/ML", "Technical Leadership", "System Architecture"],
    achievements: ["Developing club website", "Implementing technical infrastructure", "Leading development initiatives"],
    responsibilities: "Manages all technical activities, workshops, coding events, and AI/ML projects. Responsible for tech event execution, technical guidance, and club's coding culture.",
    github: "https://github.com/arpitpandey",
    linkedin: "https://linkedin.com/in/arpitpandey",
    email: "arpit.pandey@octbhopal.ac.in"
  },
  {
    id: 4,
    name: "Ayush Kumar",
    role: "Tech Lead",
    image: "/assets/images/team/ayush-kumar.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    bio: "",
    skills: ["Programming", "AI/ML", "Technical Leadership", "System Architecture"],
    achievements: ["Developing club website", "Implementing technical infrastructure", "Leading development initiatives"],
    responsibilities: "Manages all technical activities, workshops, coding events, and AI/ML projects. Responsible for tech event execution, technical guidance, and club's coding culture.",
    github: "https://github.com/ayushkumar",
    linkedin: "https://linkedin.com/in/ayushkumar",
    email: "ayush.kumar@octbhopal.ac.in"
  },
  {
    id: 5,
    name: "Khushku Verma",
    role: "Tech Lead",
    image: "/assets/images/team/khushku-verma.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=400&h=400&fit=crop&crop=face",
    bio: "",
    skills: ["Programming", "AI/ML", "Technical Leadership", "System Architecture"],
    achievements: ["Developing club website", "Implementing technical infrastructure", "Leading development initiatives"],
    responsibilities: "Manages all technical activities, workshops, coding events, and AI/ML projects. Responsible for tech event execution, technical guidance, and club's coding culture.",
    github: "https://github.com/khushkuverma",
    linkedin: "https://linkedin.com/in/khushkuverma",
    email: "khushku.verma@octbhopal.ac.in"
  },
  {
    id: 6,
    name: "Gaurav Jain",
    role: "Event Head",
    image: "/assets/images/team/gaurav-jain.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    bio: "",
    skills: ["Event Planning", "Coordination", "Performance Management", "Creative Direction"],
    achievements: ["Planning inaugural events", "Designing inauguration ceremony", "Coordinating special performances"],
    responsibilities: "Plans and executes all club events (seminars, workshops, hackathons, etc.). Manages logistics, scheduling, and ensures smooth flow of activities during any event.",
    linkedin: "https://linkedin.com/in/gauravjain",
    email: "gaurav.jain@octbhopal.ac.in"
  },
  {
    id: 7,
    name: "Archi Sharma",
    role: "Event Head",
    image: "/assets/images/team/archi-sharma.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=400&h=400&fit=crop&crop=face",
    bio: "",
    skills: ["Teamwork", "Creativity", "Event Coordination", "Community Building"],
    achievements: ["Planning inaugural ceremony", "Coordinating event logistics", "Enhancing member experience"],
    responsibilities: "Plans and executes all club events (seminars, workshops, hackathons, etc.). Manages logistics, scheduling, and ensures smooth flow of activities during any event.",
    linkedin: "https://linkedin.com/in/archisharma",
    email: "archi.sharma@octbhopal.ac.in"
  },
  {
    id: 8,
    name: "Parul Ajit",
    role: "Event Head",
    image: "/assets/images/team/parul-ajit.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "",
    skills: ["Logistics", "Support", "Attention to Detail", "Problem Solving"],
    achievements: ["Supporting event planning", "Managing technical requirements", "Ensuring smooth operations"],
    responsibilities: "Plans and executes all club events (seminars, workshops, hackathons, etc.). Manages logistics, scheduling, and ensures smooth flow of activities during any event.",
    linkedin: "https://linkedin.com/in/parulajit",
    email: "parul.ajit@octbhopal.ac.in"
  },
  {
    id: 9,
    name: "Arnav Singh",
    role: "Communication Lead",
    image: "/assets/images/team/arnav-singh.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    bio: "",
    skills: ["Design", "Public Speaking", "Visual Communication", "Content Creation"],
    achievements: ["Designing club branding", "Creating visual identity", "Preparing engaging presentations"],
    responsibilities: "Handles design tasks and prepares presentations for events. Responsible for creating visuals and delivering engaging presentations for club activities.",
    linkedin: "https://linkedin.com/in/arnavsingh",
    instagram: "https://instagram.com/arnavsingh",
    email: "arnav.singh@octbhopal.ac.in"
  },
  {
    id: 10,
    name: "Prakhar Sahu",
    role: "Media Relations",
    image: "/assets/images/team/prakhar-sahu.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bio: "",
    skills: ["Organization", "Logistics", "Process Management", "Team Coordination"],
    achievements: ["Planning club launch", "Establishing operational procedures", "Streamlining event planning"],
    responsibilities: "Manages all club operations, logistics, and event execution. Responsible for ensuring smooth functioning of club activities and event planning.",
    linkedin: "https://linkedin.com/in/prakharsahu",
    email: "prakhar.sahu@octbhopal.ac.in"
  },
  {
    id: 11,
    name: "Prince Kumar",
    role: "Discipline Head",
    image: "/assets/images/team/prince-kumar.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bio: "",
    skills: ["Discipline", "Leadership", "Conflict Resolution", "Policy Enforcement"],
    achievements: ["Establishing club guidelines", "Setting behavioral standards", "Ensuring member compliance"],
    responsibilities: "Maintains discipline and decorum during all club meetings and events. Ensures rules are followed by team and attendees.",
    linkedin: "https://linkedin.com/in/princekumar",
    email: "prince.kumar@octbhopal.ac.in"
  },
  {
    id: 12,
    name: "Khushi Kumari",
    role: "Photographer",
    image: "/assets/images/team/khushi-kumari.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    bio: "",
    skills: ["Photography", "Creativity", "Visual Storytelling", "Event Coverage"],
    achievements: ["Preparing event documentation", "Setting up photo galleries", "Planning member photography"],
    responsibilities: "Captures photos during all club events, workshops, and activities. Responsible for maintaining a media archive for future promotions.",
    linkedin: "https://linkedin.com/in/khushikumari",
    email: "khushi.kumari@octbhopal.ac.in"
  },
  {
    id: 13,
    name: "Pratish Mondal",
    role: "Video Editor",
    image: "/assets/images/team/pratish-mondal.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    bio: "",
    skills: ["Video Editing", "Videography", "Content Production", "Storytelling"],
    achievements: ["Planning club promo video", "Preparing event highlights", "Developing multimedia content"],
    responsibilities: "Records and edits videos for events, after-movies, social media content, and promotional materials for the club.",
    linkedin: "https://linkedin.com/in/pratishmondal",
    email: "pratish.mondal@octbhopal.ac.in"
  }
];

// Helper function to get team member by ID
export const getTeamMemberById = (id: number): TeamMember | undefined => {
  return teamMembers.find(member => member.id === id);
};

// Helper function to get team member by name
export const getTeamMemberByName = (name: string): TeamMember | undefined => {
  return teamMembers.find(member => member.name.toLowerCase() === name.toLowerCase());
};

// Helper function to get team members by role
export const getTeamMembersByRole = (role: string): TeamMember[] => {
  return teamMembers.filter(member => member.role.toLowerCase().includes(role.toLowerCase()));
};

// Helper function to get leadership team (President, Vice President, General Manager)
export const getLeadershipTeam = (): TeamMember[] => {
  return teamMembers.filter(member => 
    member.role === "President" || 
    member.role === "Vice President" || 
    member.role === "General Manager"
  );
};

// Helper function to get faculty team
export const getFacultyTeam = (): TeamMember[] => {
  return teamMembers.filter(member => 
    member.role === "Faculty Coordinator"
  );
};

// Helper function to get event management team
export const getEventManagementTeam = (): TeamMember[] => {
  return teamMembers.filter(member => 
    member.role.includes("Event Manager") || 
    member.role.includes("Event Speaker")
  );
};

// Helper function to get technical team
export const getTechnicalTeam = (): TeamMember[] => {
  return teamMembers.filter(member => 
    member.role === "Tech Lead" || 
    member.role.includes("Designer") ||
    member.role.includes("Editor") ||
    member.role.includes("Photographer")
  );
};

// Helper function to get image with fallback
export const getMemberImage = (member: TeamMember): string => {
  // Try local image first, fallback to Unsplash
  return member.image || member.fallbackImage || "/assets/images/team/default-profile.jpg";
}; 