export type InternshipProject = {
  id: string;
  title: string;
  duration: string;
  team: string;
  overview: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  techStack: string[];
  images?: Array<{ src: string; alt: string; caption?: string }>;
};

export type InternshipExperience = {
  company: string;
  position: string;
  duration: string;
  totalDuration: string;
  department: string;
  description: string;
  projects: InternshipProject[];
};
