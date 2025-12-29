import Hero from '@/components/Hero';
import Link from 'next/link';
import { getTeamById, getAllTeams } from '@/lib/cms';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Props = {
  params: { teamId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const team = await getTeamById(params.teamId);
  
  if (!team) {
    return {
      title: 'Team Not Found | HCCA',
    };
  }

  return {
    title: `${team.name} | HCCA`,
    description: team.description,
  };
}

export async function generateStaticParams() {
  const teams = await getAllTeams();
  return teams.map((team) => ({
    teamId: team.id,
  }));
}

export const revalidate = 3600;

export default async function TeamDetailPage({ params }: Props) {
  const team = await getTeamById(params.teamId);

  if (!team) {
    notFound();
  }

  const getLeagueBadgeColor = () => {
    if (team.leagueTier === 'APCL Elite') {
      return 'bg-purple-600';
    } else if (team.leagueTier === 'APCL Plate') {
      return 'bg-blue-600';
    }
    return 'bg-cricket-green';
  };

  return (
    <>
      <Hero
        title={team.name}
        subtitle={`${team.programType} Cricket ${team.leagueTier ? `- ${team.leagueTier}` : ''}`}
        ctaText="Register to Join"
        ctaLink="/contact-registration"
      />

      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Team Info Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="card p-6 text-center">
              <div className="text-cricket-gold font-bold text-sm mb-2">PROGRAM</div>
              <div className="text-2xl font-bold text-cricket-blue">{team.programType}</div>
            </div>
            
            {team.leagueTier && (
              <div className="card p-6 text-center">
                <div className="text-cricket-gold font-bold text-sm mb-2">LEAGUE</div>
                <div className="text-2xl font-bold text-cricket-blue">{team.leagueTier}</div>
              </div>
            )}
            
            {team.ageGroup && (
              <div className="card p-6 text-center">
                <div className="text-cricket-gold font-bold text-sm mb-2">AGE GROUP</div>
                <div className="text-2xl font-bold text-cricket-blue">{team.ageGroup}</div>
              </div>
            )}
            
            <div className="card p-6 text-center">
              <div className="text-cricket-gold font-bold text-sm mb-2">LEVEL</div>
              <div className="text-2xl font-bold text-cricket-blue">{team.level}</div>
            </div>
          </div>

          {/* Team Image */}
          {team.teamImage && (
            <div className="card overflow-hidden">
              <img
                src={team.teamImage}
                alt={team.name}
                className="w-full h-96 object-cover"
              />
            </div>
          )}

          {/* Team Description */}
          <div className="card p-8">
            <h2 className="mb-6">About {team.name}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{team.description}</p>
          </div>

          {/* League Information */}
          <div className="card p-8">
            <h3 className="mb-4">League Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-cricket-gold mb-1">League</p>
                <p className="text-lg text-gray-700">{team.league}</p>
              </div>
              {team.leagueTier && (
                <div>
                  <p className="text-sm font-semibold text-cricket-gold mb-1">Tier</p>
                  <p className="text-lg text-gray-700 flex items-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-white text-sm mr-2 ${getLeagueBadgeColor()}`}>
                      {team.leagueTier}
                    </span>
                  </p>
                </div>
              )}
              <div>
                <p className="text-sm font-semibold text-cricket-gold mb-1">Competitive Level</p>
                <p className="text-lg text-gray-700">{team.level}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-cricket-gold mb-1">Program Type</p>
                <p className="text-lg text-gray-700">{team.programType} Cricket</p>
              </div>
            </div>
          </div>

          {/* Player List */}
          {team.playersList && team.playersList.length > 0 && (
            <div className="card p-8">
              <h3 className="mb-6">Team Roster</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {team.playersList.map((player, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-3 flex items-center"
                  >
                    <div className="w-10 h-10 bg-cricket-gold rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{player}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-6">
                <strong>Note:</strong> Player information shown is for roster purposes only.
                No personal details are displayed.
              </p>
            </div>
          )}

          {/* Schedule (Placeholder) */}
          {team.schedule && (
            <div className="card p-8">
              <h3 className="mb-4">Schedule</h3>
              <p className="text-gray-700 whitespace-pre-wrap">{team.schedule}</p>
            </div>
          )}

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-cricket-blue to-cricket-blue-dark text-white rounded-lg p-8 text-center">
            <h3 className="text-white mb-4">Interested in Joining {team.name}?</h3>
            <p className="text-gray-200 mb-6">
              Contact us to learn more about joining this team or register for our programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-registration" className="btn-primary">
                Register Now
              </Link>
              <Link
                href={team.programType === 'Youth' ? '/youth-cricket/teams' : '/teams'}
                className="btn-outline border-white text-white hover:bg-white hover:text-cricket-blue"
              >
                View More Teams
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
