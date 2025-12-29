import Hero from '@/components/Hero';
import TeamCard from '@/components/TeamCard';
import { getAllTeams } from '@/lib/cms';

export const metadata = {
  title: 'All Teams | Hill Country Cricket Association',
  description: 'Browse all HCCA cricket teams across youth and adult programs, including APCL Plate and APCL Elite leagues.',
};

export const revalidate = 3600;

export default async function AllTeamsPage() {
  const teams = await getAllTeams();

  const youthTeams = teams.filter(team => team.programType === 'Youth');
  const plateTeams = teams.filter(team => team.leagueTier === 'APCL Plate');
  const eliteTeams = teams.filter(team => team.leagueTier === 'APCL Elite');

  return (
    <>
      <Hero
        title="All HCCA Teams"
        subtitle="Browse teams across all programs and leagues"
        ctaText="Register Your Team"
        ctaLink="/contact-registration"
      />

      <section className="section-container bg-white">
        <div className="max-w-6xl mx-auto">
          {teams.length > 0 ? (
            <>
              {/* Summary Stats */}
              <div className="grid md:grid-cols-4 gap-4 mb-12">
                <div className="card p-6 text-center">
                  <div className="text-4xl font-bold text-cricket-blue mb-2">{teams.length}</div>
                  <div className="text-gray-600">Total Teams</div>
                </div>
                <div className="card p-6 text-center">
                  <div className="text-4xl font-bold text-cricket-green mb-2">{youthTeams.length}</div>
                  <div className="text-gray-600">Youth Teams</div>
                </div>
                <div className="card p-6 text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{plateTeams.length}</div>
                  <div className="text-gray-600">APCL Plate</div>
                </div>
                <div className="card p-6 text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">{eliteTeams.length}</div>
                  <div className="text-gray-600">APCL Elite</div>
                </div>
              </div>

              {/* Youth Teams Section */}
              {youthTeams.length > 0 && (
                <div className="mb-16">
                  <h2 className="mb-8">Youth Cricket Teams</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {youthTeams.map((team) => (
                      <TeamCard key={team.id} team={team} />
                    ))}
                  </div>
                </div>
              )}

              {/* APCL Plate Teams Section */}
              {plateTeams.length > 0 && (
                <div className="mb-16">
                  <h2 className="mb-8 flex items-center">
                    <span className="mr-3">APCL Plate Teams</span>
                    <span className="text-sm px-3 py-1 bg-blue-600 text-white rounded-full">
                      Intermediate
                    </span>
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {plateTeams.map((team) => (
                      <TeamCard key={team.id} team={team} />
                    ))}
                  </div>
                </div>
              )}

              {/* APCL Elite Teams Section */}
              {eliteTeams.length > 0 && (
                <div className="mb-16">
                  <h2 className="mb-8 flex items-center">
                    <span className="mr-3">APCL Elite Teams</span>
                    <span className="text-sm px-3 py-1 bg-purple-600 text-white rounded-full">
                      Premier
                    </span>
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {eliteTeams.map((team) => (
                      <TeamCard key={team.id} team={team} />
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">No Teams Yet</h3>
              <p className="text-gray-600 mb-6">
                Teams will appear here once they are added to the Contentful CMS.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                This is a dynamic page that fetches team data from Contentful. Teams can be added across
                all programs and leagues, with no maximum limit - the system scales automatically.
              </p>
              <div className="bg-cricket-blue bg-opacity-10 p-6 rounded-lg max-w-2xl mx-auto text-left">
                <h4 className="font-semibold text-cricket-blue mb-3">To add teams:</h4>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li>1. Set up your Contentful space with the Team content model</li>
                  <li>2. Add your Contentful credentials to .env.local</li>
                  <li>3. Create team entries in Contentful with appropriate fields</li>
                  <li>4. Teams will automatically appear on this page</li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
