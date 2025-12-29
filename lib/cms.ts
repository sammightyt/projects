import { createClient } from 'contentful';
import { Team, League, Program, Coach, Facility, Page, ProgramType, LeagueTier } from './types';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

// Teams
export async function getAllTeams(): Promise<Team[]> {
  try {
    const entries = await client.getEntries({
      content_type: 'team',
    });

    return entries.items.map((item: any) => ({
      id: item.sys.id,
      name: item.fields.name,
      league: item.fields.league,
      leagueTier: item.fields.leagueTier,
      level: item.fields.level,
      ageGroup: item.fields.ageGroup,
      description: item.fields.description,
      playersList: item.fields.playersList || [],
      teamImage: item.fields.teamImage?.fields?.file?.url,
      schedule: item.fields.schedule,
      programType: item.fields.programType,
    }));
  } catch (error) {
    console.error('Error fetching teams:', error);
    return [];
  }
}

export async function getTeamById(id: string): Promise<Team | null> {
  try {
    const entry = await client.getEntry(id);
    const item: any = entry;

    return {
      id: item.sys.id,
      name: item.fields.name,
      league: item.fields.league,
      leagueTier: item.fields.leagueTier,
      level: item.fields.level,
      ageGroup: item.fields.ageGroup,
      description: item.fields.description,
      playersList: item.fields.playersList || [],
      teamImage: item.fields.teamImage?.fields?.file?.url,
      schedule: item.fields.schedule,
      programType: item.fields.programType,
    };
  } catch (error) {
    console.error('Error fetching team:', error);
    return null;
  }
}

export async function getTeamsByProgram(programType: ProgramType): Promise<Team[]> {
  try {
    const entries = await client.getEntries({
      content_type: 'team',
      'fields.programType': programType,
    });

    return entries.items.map((item: any) => ({
      id: item.sys.id,
      name: item.fields.name,
      league: item.fields.league,
      leagueTier: item.fields.leagueTier,
      level: item.fields.level,
      ageGroup: item.fields.ageGroup,
      description: item.fields.description,
      playersList: item.fields.playersList || [],
      teamImage: item.fields.teamImage?.fields?.file?.url,
      schedule: item.fields.schedule,
      programType: item.fields.programType,
    }));
  } catch (error) {
    console.error('Error fetching teams by program:', error);
    return [];
  }
}

export async function getTeamsByLeague(leagueTier: LeagueTier): Promise<Team[]> {
  try {
    const entries = await client.getEntries({
      content_type: 'team',
      'fields.leagueTier': leagueTier,
    });

    return entries.items.map((item: any) => ({
      id: item.sys.id,
      name: item.fields.name,
      league: item.fields.league,
      leagueTier: item.fields.leagueTier,
      level: item.fields.level,
      ageGroup: item.fields.ageGroup,
      description: item.fields.description,
      playersList: item.fields.playersList || [],
      teamImage: item.fields.teamImage?.fields?.file?.url,
      schedule: item.fields.schedule,
      programType: item.fields.programType,
    }));
  } catch (error) {
    console.error('Error fetching teams by league:', error);
    return [];
  }
}

// Leagues
export async function getAllLeagues(): Promise<League[]> {
  try {
    const entries = await client.getEntries({
      content_type: 'league',
    });

    return entries.items.map((item: any) => ({
      id: item.sys.id,
      name: item.fields.name,
      tier: item.fields.tier,
      description: item.fields.description,
      overview: item.fields.overview,
      rules: item.fields.rules,
      format: item.fields.format,
      parentProgram: item.fields.parentProgram,
    }));
  } catch (error) {
    console.error('Error fetching leagues:', error);
    return [];
  }
}

// Programs
export async function getAllPrograms(): Promise<Program[]> {
  try {
    const entries = await client.getEntries({
      content_type: 'program',
    });

    return entries.items.map((item: any) => ({
      id: item.sys.id,
      title: item.fields.title,
      type: item.fields.type,
      description: item.fields.description,
      image: item.fields.image?.fields?.file?.url,
      content: item.fields.content,
    }));
  } catch (error) {
    console.error('Error fetching programs:', error);
    return [];
  }
}

// Coaches
export async function getCoachesByProgram(programType: ProgramType): Promise<Coach[]> {
  try {
    const entries = await client.getEntries({
      content_type: 'coach',
      'fields.programType': programType,
    });

    return entries.items.map((item: any) => ({
      id: item.sys.id,
      role: item.fields.role,
      qualifications: item.fields.qualifications,
      bio: item.fields.bio,
      programType: item.fields.programType,
    }));
  } catch (error) {
    console.error('Error fetching coaches:', error);
    return [];
  }
}

// Facilities
export async function getAllFacilities(): Promise<Facility[]> {
  try {
    const entries = await client.getEntries({
      content_type: 'facility',
    });

    return entries.items.map((item: any) => ({
      id: item.sys.id,
      name: item.fields.name,
      type: item.fields.type,
      location: item.fields.location,
      description: item.fields.description,
    }));
  } catch (error) {
    console.error('Error fetching facilities:', error);
    return [];
  }
}

// Pages
export async function getPageBySlug(slug: string): Promise<Page | null> {
  try {
    const entries = await client.getEntries({
      content_type: 'page',
      'fields.slug': slug,
      limit: 1,
    });

    if (entries.items.length === 0) return null;

    const item: any = entries.items[0];
    return {
      id: item.sys.id,
      title: item.fields.title,
      slug: item.fields.slug,
      content: item.fields.content,
      heroImage: item.fields.heroImage?.fields?.file?.url,
      metadata: item.fields.metadata,
    };
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
}
