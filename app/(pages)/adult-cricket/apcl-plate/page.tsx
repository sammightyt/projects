import Hero from '@/components/Hero';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'APCL Plate League | Adult Cricket | HCCA',
  description: 'APCL Plate - Intermediate competitive cricket league for developing adult players.',
};

export default function APCLPlatePage() {
  return (
    <>
      <Hero
        title="APCL Plate League"
        subtitle="Intermediate competitive cricket for developing adult players"
        ctaText="View Teams"
        ctaLink="/adult-cricket/apcl-plate/teams"
        secondaryCtaText="Register Now"
        secondaryCtaLink="/contact-registration"
      />

      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="mb-6">About APCL Plate</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              The APCL Plate league provides an intermediate competitive environment for adult cricketers
              looking to develop their skills while participating in structured league cricket. This league
              is perfect for players transitioning from youth cricket or returning to competitive play after a break.
            </p>
          </div>

          <div className="card p-8">
            <h3 className="mb-6">League Structure</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-cricket-blue mb-2">Competition Format</h4>
                <p className="text-gray-700">
                  Round-robin league format with all teams playing each other during the regular season.
                  Top teams advance to playoff rounds culminating in the Plate Championship.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cricket-blue mb-2">Match Format</h4>
                <p className="text-gray-700">
                  Limited-overs matches (typically 40-50 overs per side) played on weekends and select
                  midweek evenings. All matches follow standard cricket rules and regulations.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cricket-blue mb-2">Season Length</h4>
                <p className="text-gray-700">
                  Full season runs from spring through fall, with regular season play followed by
                  playoff rounds and championship finals.
                </p>
              </div>
            </div>
          </div>

          <div className="card p-8">
            <h3 className="mb-4">Competitive Level</h3>
            <p className="text-gray-700 mb-4">
              APCL Plate is designed for players at intermediate competitive levels:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Players transitioning from youth programs</li>
              <li>• Adults returning to cricket after a break</li>
              <li>• Developing players building match experience</li>
              <li>• Teams looking to establish themselves before moving to Elite</li>
              <li>• Focus on skill development alongside competition</li>
            </ul>
          </div>

          <div className="card p-8">
            <h3 className="mb-4">League Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-cricket-blue mb-2">Structured Competition</h4>
                <p className="text-sm text-gray-700">
                  Well-organized fixtures with professional umpiring and scoring
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-cricket-blue mb-2">Scalable Growth</h4>
                <p className="text-sm text-gray-700">
                  League accommodates unlimited teams as the association grows
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-cricket-blue mb-2">Development Focus</h4>
                <p className="text-sm text-gray-700">
                  Emphasis on player and team development alongside results
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-cricket-blue mb-2">Pathway to Elite</h4>
                <p className="text-sm text-gray-700">
                  Strong performers can progress to APCL Elite competition
                </p>
              </div>
            </div>
          </div>

          <div className="card p-8">
            <h3 className="mb-4">Player Registration</h3>
            <p className="text-gray-700 mb-4">
              Players can register for APCL Plate in several ways:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• Join an existing team in the league</li>
              <li>• Register as an individual and be matched with a team</li>
              <li>• Form a new team and apply for league entry</li>
            </ul>
            <Link href="/contact-registration" className="btn-primary">
              Register for APCL Plate
            </Link>
          </div>
        </div>
      </section>

      <section className="section-container bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-6">Join APCL Plate</h2>
          <p className="text-xl text-gray-100 mb-8 leading-relaxed">
            Be part of competitive adult cricket at the intermediate level. Whether you're a team or
            individual player, APCL Plate offers the perfect environment for development and competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/adult-cricket/apcl-plate/teams" className="btn-primary text-lg">
              View Plate Teams
            </Link>
            <Link href="/contact-registration" className="btn-outline text-lg border-white text-white hover:bg-white hover:text-blue-600">
              Register Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
