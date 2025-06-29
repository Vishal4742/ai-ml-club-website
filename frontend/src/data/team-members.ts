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
  email?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Vishal Kumar",
    role: "President",
    image: "/assets/images/team/vishal-kumar.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "President of the AI & ML Club, leading the founding team and setting the vision for innovation. Passionate about creating opportunities for students to explore and excel in artificial intelligence and machine learning.",
    skills: ["Leadership", "AI Strategy", "Team Building", "Strategic Planning"],
    achievements: ["Leading club formation", "Establishing club vision and mission", "Coordinating with faculty advisors"]
  },
  {
    id: 2,
    name: "Umesh Patel",
    role: "Vice President",
    image: "/assets/images/team/umesh-patel.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Vice President, supporting club operations and member engagement. Dedicated to fostering a collaborative environment where every member can thrive and contribute to our AI & ML community.",
    skills: ["Management", "Event Coordination", "Member Engagement", "Communication"],
    achievements: ["Supporting club formation", "Planning member onboarding process", "Coordinating team activities"]
  },
  {
    id: 3,
    name: "Prakhar Sahu",
    role: "General Manager",
    image: "/assets/images/team/prakhar-sahu.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bio: "General Manager, ensuring smooth functioning of all club activities. Focused on operational excellence and creating efficient processes for club management and event execution.",
    skills: ["Organization", "Logistics", "Process Management", "Team Coordination"],
    achievements: ["Planning club launch", "Establishing operational procedures", "Streamlining event planning"]
  },
  {
    id: 4,
    name: "Gaurav Jain",
    role: "Event Manager & Special Performance",
    image: "/assets/images/team/gaurav-jain.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    bio: "Event Manager, planning and organizing club events and special performances. Creative professional dedicated to delivering memorable experiences that will inspire and engage our community.",
    skills: ["Event Planning", "Coordination", "Performance Management", "Creative Direction"],
    achievements: ["Planning inaugural events", "Designing inauguration ceremony", "Coordinating special performances"]
  },
  {
    id: 5,
    name: "Archi Sharma",
    role: "Event Manager & Special Performance",
    image: "/assets/images/team/archi-sharma.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=400&h=400&fit=crop&crop=face",
    bio: "Event Manager, co-organizing events and performances. Passionate about creating inclusive and engaging experiences that will bring our AI & ML community together.",
    skills: ["Teamwork", "Creativity", "Event Coordination", "Community Building"],
    achievements: ["Planning inaugural ceremony", "Coordinating event logistics", "Enhancing member experience"]
  },
  {
    id: 6,
    name: "Parul Ajit",
    role: "Event Manager & Special Performance",
    image: "/assets/images/team/parul-ajit.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Event Manager, supporting event logistics and special activities. Detail-oriented professional ensuring every event will run smoothly and exceed expectations.",
    skills: ["Logistics", "Support", "Attention to Detail", "Problem Solving"],
    achievements: ["Supporting event planning", "Managing technical requirements", "Ensuring smooth operations"]
  },
  {
    id: 7,
    name: "Arnav Singh",
    role: "Graphic Designer & Event Speaker",
    image: "/assets/images/team/arnav-singh.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    bio: "Graphic Designer and Event Speaker, creating visuals and preparing presentations for events. Creative professional combining design expertise with public speaking skills to communicate complex AI concepts effectively.",
    skills: ["Design", "Public Speaking", "Visual Communication", "Content Creation"],
    achievements: ["Designing club branding", "Creating visual identity", "Preparing engaging presentations"]
  },
  {
    id: 8,
    name: "Ayush Kumar",
    role: "Tech Lead",
    image: "/assets/images/team/ayush-kumar.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    bio: "Tech Lead, overseeing technical projects and club technology. Experienced developer passionate about leveraging technology to enhance club operations and member experience.",
    skills: ["Programming", "AI/ML", "Technical Leadership", "System Architecture"],
    achievements: ["Developing club website", "Implementing technical infrastructure", "Leading development initiatives"]
  },
  {
    id: 9,
    name: "Arpit Pandey",
    role: "Public Relation",
    image: "/assets/images/team/arpit-pandey.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Public Relation, managing club communications and outreach. Strategic communicator building relationships with stakeholders and promoting our club's mission and vision.",
    skills: ["Communication", "Networking", "Media Relations", "Brand Management"],
    achievements: ["Building club's public profile", "Establishing media partnerships", "Enhancing external communications"]
  },
  {
    id: 10,
    name: "Prince Kumar",
    role: "Discipline Head",
    image: "/assets/images/team/prince-kumar.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bio: "Discipline Head, ensuring order and discipline in club activities. Dedicated to maintaining high standards and creating a respectful environment for all members.",
    skills: ["Discipline", "Leadership", "Conflict Resolution", "Policy Enforcement"],
    achievements: ["Establishing club guidelines", "Setting behavioral standards", "Ensuring member compliance"]
  },
  {
    id: 11,
    name: "Khushi Kumari",
    role: "Photographer",
    image: "/assets/images/team/khushi-kumari.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    bio: "Photographer, preparing to capture moments at club events. Creative professional ready to document our journey and preserve memories of our club's growth and achievements.",
    skills: ["Photography", "Creativity", "Visual Storytelling", "Event Coverage"],
    achievements: ["Preparing event documentation", "Setting up photo galleries", "Planning member photography"]
  },
  {
    id: 12,
    name: "Pratish Mondal",
    role: "Video Editor / Videographer",
    image: "/assets/images/team/pratish-mondal.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    bio: "Video Editor and Videographer, preparing to produce and edit club videos. Multimedia professional ready to create compelling content that showcases our club's activities and achievements.",
    skills: ["Video Editing", "Videography", "Content Production", "Storytelling"],
    achievements: ["Planning club promo video", "Preparing event highlights", "Developing multimedia content"]
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