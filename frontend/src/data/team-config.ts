// Team statistics
export const teamStats = {
  totalMembers: 12,
  leadershipPositions: 3,
  eventManagementPositions: 3,
  technicalPositions: 4,
  supportPositions: 2,
  foundingYear: 2024,
  upcomingEvents: 15,
  foundingMembers: 50
};

// Team categories for filtering
export const teamCategories = {
  leadership: ["President", "Vice President", "General Manager"],
  eventManagement: ["Event Manager", "Event Speaker"],
  technical: ["Tech Lead", "Designer", "Editor", "Photographer", "Videographer"],
  support: ["Public Relation", "Discipline Head"]
};

// Default profile image for missing images
export const defaultProfileImage = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face";

// Team member card configuration
export const teamCardConfig = {
  imageSize: {
    small: "w-20 h-20",
    medium: "w-24 h-24", 
    large: "w-32 h-32"
  },
  animationDelay: 100, // milliseconds between each card animation
  hoverEffects: {
    scale: 1.05,
    lift: 8, // pixels to lift on hover
    glow: "0 20px 40px rgba(0, 0, 0, 0.3)"
  }
};

// Modal configuration
export const modalConfig = {
  maxWidth: "max-w-2xl",
  maxHeight: "max-h-[90vh]",
  backdropBlur: "backdrop-blur-sm",
  animation: "animate-scale-in"
};

// Social media configuration
export const socialMediaConfig = {
  platforms: {
    github: {
      icon: "github",
      color: "text-gray-400 hover:text-gray-300",
      baseUrl: "https://github.com/"
    },
    linkedin: {
      icon: "linkedin", 
      color: "text-blue-400 hover:text-blue-300",
      baseUrl: "https://linkedin.com/in/"
    },
    twitter: {
      icon: "twitter",
      color: "text-blue-400 hover:text-blue-300", 
      baseUrl: "https://twitter.com/"
    },
    email: {
      icon: "mail",
      color: "text-green-400 hover:text-green-300",
      baseUrl: "mailto:"
    }
  }
};

// Skills color mapping
export const skillColors = {
  default: "bg-white/10 text-white/80",
  technical: "bg-blue-500/20 text-blue-400",
  creative: "bg-purple-500/20 text-purple-400", 
  leadership: "bg-green-500/20 text-green-400",
  communication: "bg-orange-500/20 text-orange-400",
  management: "bg-pink-500/20 text-pink-400"
};

// Helper function to get skill color
export const getSkillColor = (skill: string): string => {
  const skillLower = skill.toLowerCase();
  
  if (skillLower.includes('programming') || skillLower.includes('ai') || skillLower.includes('ml') || skillLower.includes('tech')) {
    return skillColors.technical;
  }
  if (skillLower.includes('design') || skillLower.includes('creative') || skillLower.includes('art')) {
    return skillColors.creative;
  }
  if (skillLower.includes('leadership') || skillLower.includes('management') || skillLower.includes('team')) {
    return skillColors.leadership;
  }
  if (skillLower.includes('communication') || skillLower.includes('speaking') || skillLower.includes('public')) {
    return skillColors.communication;
  }
  if (skillLower.includes('coordination') || skillLower.includes('planning') || skillLower.includes('logistics')) {
    return skillColors.management;
  }
  
  return skillColors.default;
}; 