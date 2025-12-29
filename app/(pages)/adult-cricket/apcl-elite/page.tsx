import Hero from '@/components/Hero';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'APCL Elite League | Adult Cricket | HCCA',
  description: 'APCL Elite - Premier competitive cricket league for advanced adult players.',
};

export default function APCLElitePage() {
  return (
    <>
      <Hero
        title="APCL Elite League"
        subtitle="Premier competitive cricket for advanced adult players"
        ctaText="View Teams"
        ctaLink="/adult-cricket/apcl-elite/teams"
        secondaryCtaText="Register Now"
        secondaryCtaLink="/contact-registration"
      />

      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="mb-6">About APCL Elite</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              APCL Elite represents the highest level of competitive cricket in the Hill Country Cricket
              Association. This league features experienced players, high-intensity matches, and championship-level
              competition throughout the season. Elite players demonstrate advanced skills, tactical awareness,
              and commitment to excellence.
            </p>
          </div>

          <div className="card p-8">
            <h3 className="mb-6">League Structure</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-cricket-blue mb-2">Competition Format</h4>
                <p className="text-gray-700">
                  Premier round-robin format with extended fixture list. Top teams compete in knockout
                  playoff rounds, leading to the Elite Championship - the association's highest honor.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cricket-blue mb-2">Match Format</h4>
                <p className="text-gray-700">
                  Full limited-overs matches (50 overs per side) and select multi-day fixtures for
                  championship rounds. All matches played under strict international cricket standards.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cricket-blue mb-2">Season Length</h4>
                <p className="text-gray-700">
                  Extended season from early spring through late fall, with comprehensive regular season
                  followed by playoff series and championship finals.
                </p>
              </div>
            </div>
          </div>

          <div className="card p-8">
            <h3 className="mb-4">Competitive Level</h3>
            <p className="text-gray-700 mb-4">
              APCL Elite is reserved for advanced competitive players:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Experienced cricketers with strong technical skills</li>
              <li>• Players with proven competitive track record</li>
              <li>• High level of tactical and strategic understanding</li>
              <li>• Commitment to training and match preparation</li>
              <li>• Physical fitness appropriate for elite competition</li>
              <li>• Teams with established cohesion and performance standards</li>
            </ul>
          </div>

          <div className="card p-8">
            <h3 className="mb-4">League Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-cricket-blue mb-2">Championship Competition</h4>
                <p className="text-sm text-gray-700">
                  Highest level cricket with professional standards and officiating
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-cricket-blue mb-2">Unlimited Growth</h4>
                <p className="text-sm text-gray-700">
                  Elite league scales with association growth - no team limits
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-cricket-blue mb-2">Performance Excellence</h4>
                <p className="text-sm text-gray-700">
                  Focus on peak performance and competitive excellence
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-cricket-blue mb-2">Prestige & Recognition</h4>
                <p className="text-sm text-gray-700">
                  Elite champions receive top honors and regional recognition
                </p>
              </div>
            </div>
          </div>

          <div className="card p-8">
            <h3 className="mb-4">Player & Team Registration</h3>
            <p className="text-gray-700 mb-4">
              APCL Elite welcomes qualified players and teams:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• Established teams with competitive track record</li>
              <li>• Experienced individual players seeking elite competition</li>
              <li>• Teams promoted from APCL Plate based on performance</li>
              <li>• New teams meeting elite-level entry standards</li>
            </ul>
            <p className="text-gray-700 mb-6">
              <strong>Note:</strong> Elite league entry may require assessment or promotion from
              APCL Plate to ensure appropriate competitive level.
            </p>
            <Link href="/contact-registration" className="btn-primary">
              Register for APCL Elite
            </Link>
          </div>

          <div className="card p-8 bg-gradient-to-br from-purple-50 to-blue-50">
            <h3 className="mb-4">Elite League Standards</h3>
            <p className="text-gray-700 mb-4">
              All Elite teams and players are expected to maintain high standards:
            </p>
            <div className="space-y-2 text-gray-700">
              <p>• Regular training and match preparation</p>
              <p>• Professional conduct on and off the field</p>
              <p>• Respect for opponents, officials, and the game</p>
              <p>• Commitment to full season participation</p>
              <p>• Adherence to all league rules and regulations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container bg-gradient-to-r from-purple-600 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-6">Join Elite Competition</h2>
          <p className="text-xl text-gray-100 mb-8 leading-relaxed">
            Compete at the highest level of Hill Country cricket. APCL Elite offers championship
            competition for advanced players and teams committed to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/adult-cricket/apcl-elite/teams" className="btn-primary text-lg">
              View Elite Teams
            </Link>
            <Link href="/contact-registration" className="btn-outline text-lg border-white text-white hover:bg-white hover:text-purple-600">
              Register Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
