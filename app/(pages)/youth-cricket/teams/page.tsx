import Hero from '@/components/Hero';
import TeamCard from '@/components/TeamCard';
import { getTeamsByProgram } from '@/lib/cms';

export const metadata = {
  title: 'Youth Teams | Hill Country Cricket Association',
  description: 'Browse all HCCA youth cricket teams across U10, U13, and U15 age groups.',
};

export const revalidate = 3600; // Revalidate every hour

export default async function YouthTeamsPage() {
  const teams = await getTeamsByProgram('Youth');

  return (
    <>
      <Hero
        title="Youth Cricket Teams"
        subtitle="Browse our youth teams across all age groups"
        ctaText="Register Now"
        ctaLink="/contact-registration"
      />

      <section className="section-container bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Filter by Age Group */}
          <div className="mb-8">
            <h3 className="text-center mb-4">Filter by Age Group</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="badge-filter">All Teams</div>
              <div className="badge-filter">U10</div>
              <div className="badge-filter">U13</div>
              <div className="badge-filter">U15</div>
            </div>
            <p className="text-center text-sm text-gray-600 mt-4">
              Currently showing all youth teams. Filtering functionality can be added via JavaScript for enhanced UX.
            </p>
          </div>

          {/* Teams Grid */}
          {teams.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teams.map((team) => (
                <TeamCard key={team.id} team={team} />
              ))}
            </div>
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
              <p className="text-sm text-gray-500">
                This is a dynamic page that fetches team data from Contentful. Add team entries to the CMS to populate this page.
              </p>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .badge-filter {
          padding: 0.5rem 1.5rem;
          border: 2px solid #003f5c;
          color: #003f5c;
          border-radius: 9999px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .badge-filter:hover {
          background-color: #003f5c;
          color: white;
        }
      `}</style>
    </>
  );
}
