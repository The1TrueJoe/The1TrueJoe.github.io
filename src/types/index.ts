export interface IMetaHead {
  title: string;
  description: string;
  ogImageUrl: string;
}

export interface IHeroProps {
  name: string;
  about: string;
}

export interface IExperience {
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  tags?: string[];
  image?: string;
}
export interface IExperiences {
  title: string;
  details: IExperience[];
}

export interface ISkills {
  software: string[];
  tooling: string[];
  embedded: string[];
  memberships: string[];
}

export interface IProject {
  title: string;
  isFeatured: boolean;
  thumbnail?: string;
  githubUrl?: string;
  liveUrl?: string;
  description?: string;
  stack?: string[];
  category?: string;
  year?: string;
  status?: "shipped" | "wip" | "archived";
}
export interface IProjects {
  projects: IProject[];
}

export interface IProjectDetails {
  projectDetail: IProject;
  index?: number;
}
