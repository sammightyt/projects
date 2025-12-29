import Hero from '@/components/Hero';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adult Cricket Programs | Hill Country Cricket Association',
  description: 'Competitive adult cricket featuring APCL Plate and APCL Elite leagues for all skill levels.',
};

export default function AdultCricketPage() {
  return (
    <>
      <Hero
        title="Adult Cricket Programs"
        subtitle="Competitive cricket for adults through APCL Plate and APCL Elite leagues"
        ctaText="View APCL Plate"
        ctaLink="/adult-cricket/apcl-plate"
        secondaryCtaText="View APCL Elite"
        secondaryCtaLink="/adult-cricket/apcl-elite"
      />

      {/* Overview Section */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8">Competitive Cricket at Every Level</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Hill Country Cricket Association offers competitive adult cricket through two distinct leagues:
            APCL Plate and APCL Elite. Whether you're looking to develop your game or compete at the
            highest level, we have a league that matches your ambitions.
          </p>
        </div>
      </section>

      {/* Leagues Section */}
      <section className="section-container bg-gray-50">
        <h2 className="text-center mb-12">Our Adult Leagues</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* APCL Plate */}
          <Link href="/adult-cricket/apcl-plate">
            <div className="card hover:scale-105 transition-transform duration-200 h-full">
              <div className="h-64 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <div className="text-5xl font-bold mb-4">APCL PLATE</div>
                  <div className="text-xl">Intermediate Competitive League</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-cricket-blue mb-4">Developing Competitive Skills</h3>
                <p className="text-gray-700 mb-6">
                  APCL Plate is designed for players looking to compete in a structured league environment
                  while continuing to develop their skills. Perfect for those transitioning from youth cricket
                  or returning to competitive play.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Intermediate competitive level
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Structured league format
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Pathway to elite competition
                  </li>
                </ul>
                <div className="text-blue-600 font-semibold text-lg">
                  Explore APCL Plate →
                </div>
              </div>
            </div>
          </Link>

          {/* APCL Elite */}
          <Link href="/adult-cricket/apcl-elite">
            <div className="card hover:scale-105 transition-transform duration-200 h-full">
              <div className="h-64 bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <div className="text-5xl font-bold mb-4">APCL ELITE</div>
                  <div className="text-xl">Premier Competitive League</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-cricket-blue mb-4">Elite Level Competition</h3>
                <p className="text-gray-700 mb-6">
                  APCL Elite represents the highest level of competitive cricket in our association.
                  This league features experienced players, high-intensity matches, and championship-level
                  competition throughout the season.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Premier competitive level
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    High-intensity match play
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Championship competition
                  </li>
                </ul>
                <div className="text-purple-600 font-semibold text-lg">
                  Explore APCL Elite →
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Season Information */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Season Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6">
              <div className="w-16 h-16 bg-cricket-gold rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-cricket-blue mb-3">Match Schedule</h3>
              <p className="text-gray-700">
                Regular fixtures throughout the season with both weekend and midweek match options.
                Schedules are released at the beginning of each season and updated regularly.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-16 h-16 bg-cricket-gold rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-cricket-blue mb-3">Team Registration</h3>
              <p className="text-gray-700">
                Teams can register for either APCL Plate or APCL Elite leagues. Individual players
                can also register and be placed with a team based on skill level and availability.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-16 h-16 bg-cricket-gold rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-cricket-blue mb-3">Awards & Recognition</h3>
              <p className="text-gray-700">
                Individual and team awards recognize outstanding performances throughout the season,
                culminating in championship trophies for league winners.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-16 h-16 bg-cricket-gold rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-cricket-blue mb-3">Player Development</h3>
              <p className="text-gray-700">
                Both leagues emphasize continuous improvement with access to coaching resources,
                training facilities, and development pathways between Plate and Elite levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-gradient-to-r from-cricket-blue to-cricket-blue-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-6">Ready to Compete?</h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Join HCCA's adult cricket leagues and be part of competitive cricket in the Hill Country.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-registration" className="btn-primary text-lg">
              Register Now
            </Link>
            <Link href="/teams" className="btn-outline text-lg border-white text-white hover:bg-white hover:text-cricket-blue-dark">
              View All Teams
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
