import Hero from '@/components/Hero';
import TeamCard from '@/components/TeamCard';
import { getTeamsByLeague } from '@/lib/cms';

export const metadata = {
  title: 'APCL Elite Teams | HCCA',
  description: 'Browse all APCL Elite league teams in the Hill Country Cricket Association.',
};

export const revalidate = 3600;

export default async function APCLEliteTeamsPage() {
  const teams = await getTeamsByLeague('APCL Elite');

  return (
    <>
      <Hero
        title="APCL Elite Teams"
        subtitle="Premier competitive teams in the APCL Elite league"
        ctaText="Register Your Team"
        ctaLink="/contact-registration"
      />

      <section className="section-container bg-white">
        <div className="max-w-6xl mx-auto">
          {teams.length > 0 ? (
            <>
              <div className="text-center mb-8">
                <p className="text-lg text-gray-700">
                  <strong>{teams.length}</strong> {teams.length === 1 ? 'team' : 'teams'} competing in APCL Elite
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teams.map((team) => (
                  <TeamCard key={team.id} team={team} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">No APCL Elite Teams Yet</h3>
              <p className="text-gray-600 mb-6">
                Teams will appear here once they are added to the Contentful CMS with the "APCL Elite" league tier.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                This is a dynamic page that fetches team data from Contentful. The league can grow to accommodate
                unlimited teams as the association expands.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
