export type ProgramType = 'Youth' | 'Adult';
export type LeagueTier = 'APCL Plate' | 'APCL Elite';
export type AgeGroup = 'U10' | 'U13' | 'U15';

export interface Team {
  id: string;
  name: string;
  league: string;
  leagueTier?: LeagueTier;
  level: string;
  ageGroup?: AgeGroup;
  description: string;
  playersList: string[];
  teamImage?: string;
  schedule?: string;
  programType: ProgramType;
}

export interface League {
  id: string;
  name: string;
  tier: LeagueTier;
  description: string;
  overview: string;
  rules?: string;
  format?: string;
  parentProgram: ProgramType;
}

export interface Program {
  id: string;
  title: string;
  type: ProgramType;
  description: string;
  image?: string;
  content: string;
}

export interface Coach {
  id: string;
  role: string;
  qualifications: string;
  bio: string;
  programType: ProgramType;
}

export interface Facility {
  id: string;
  name: string;
  type: string;
  location: string;
  description: string;
}

export interface Page {
  id: string;
  title: string;
  slug: string;
  content: string;
  heroImage?: string;
  metadata?: {
    title: string;
    description: string;
  };
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
  inquiryType?: string;
  dob?: string;
  program?: ProgramType;
  ageGroup?: AgeGroup;
  league?: LeagueTier;
  agreeToTerms?: boolean;
}
