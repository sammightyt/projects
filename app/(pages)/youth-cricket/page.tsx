import Hero from '@/components/Hero';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Youth Cricket Programs | Hill Country Cricket Association',
  description: 'Comprehensive youth cricket development programs for ages U10, U13, and U15 with professional coaching and quality facilities.',
};

export default function YouthCricketPage() {
  return (
    <>
      <Hero
        title="Youth Cricket Programs"
        subtitle="Developing the next generation of cricketers through structured programs and expert coaching"
        ctaText="View Teams"
        ctaLink="/youth-cricket/teams"
        secondaryCtaText="Register Now"
        secondaryCtaLink="/contact-registration"
      />

      {/* Overview Section */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-8">Building Cricket Excellence from the Ground Up</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Our youth cricket programs are designed to introduce young players to the sport and develop
            their skills through age-appropriate training and competition. We focus on building fundamental
            techniques, cricket knowledge, teamwork, and sportsmanship.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            With structured curriculums, professional coaching, and quality facilities, we provide
            a supportive environment where young cricketers can thrive and develop a lifelong love for the game.
          </p>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="section-container bg-gray-50">
        <h2 className="text-center mb-12">Our Age Groups</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* U10 */}
          <Link href="/youth-cricket/U10">
            <div className="card hover:scale-105 transition-transform duration-200">
              <div className="h-48 bg-gradient-to-br from-cricket-green to-cricket-green-dark flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl font-bold mb-2">U10</div>
                  <div className="text-xl">Under 10</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-cricket-blue mb-4">Foundation Level</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-1 text-cricket-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Introduction to cricket basics
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-1 text-cricket-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Fun, game-based learning
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-1 text-cricket-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Focus on fundamental skills
                  </li>
                </ul>
                <div className="mt-6 text-cricket-gold font-semibold">
                  Learn More →
                </div>
              </div>
            </div>
          </Link>

          {/* U13 */}
          <Link href="/youth-cricket/U13">
            <div className="card hover:scale-105 transition-transform duration-200">
              <div className="h-48 bg-gradient-to-br from-cricket-blue to-cricket-blue-dark flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl font-bold mb-2">U13</div>
                  <div className="text-xl">Under 13</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-cricket-blue mb-4">Development Level</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-1 text-cricket-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Skill refinement and tactics
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-1 text-cricket-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Introduction to competitive play
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-1 text-cricket-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Team strategy development
                  </li>
                </ul>
                <div className="mt-6 text-cricket-gold font-semibold">
                  Learn More →
                </div>
              </div>
            </div>
          </Link>

          {/* U15 */}
          <Link href="/youth-cricket/U15">
            <div className="card hover:scale-105 transition-transform duration-200">
              <div className="h-48 bg-gradient-to-br from-cricket-gold to-cricket-gold-dark flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl font-bold mb-2">U15</div>
                  <div className="text-xl">Under 15</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-cricket-blue mb-4">Advanced Level</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-1 text-cricket-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Advanced technique training
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-1 text-cricket-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Competitive match experience
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-1 text-cricket-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Pathway to adult cricket
                  </li>
                </ul>
                <div className="mt-6 text-cricket-gold font-semibold">
                  Learn More →
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-container bg-white">
        <h2 className="text-center mb-12">Explore Our Youth Program</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Link href="/youth-cricket/facilities" className="card hover:scale-105 transition-transform duration-200">
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-cricket-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-cricket-blue mb-2">Facilities</h3>
              <p className="text-sm text-gray-600">Quality grounds and training areas</p>
            </div>
          </Link>

          <Link href="/youth-cricket/infrastructure" className="card hover:scale-105 transition-transform duration-200">
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-cricket-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-cricket-blue mb-2">Infrastructure</h3>
              <p className="text-sm text-gray-600">Equipment and safety standards</p>
            </div>
          </Link>

          <Link href="/youth-cricket/curriculums" className="card hover:scale-105 transition-transform duration-200">
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-cricket-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-cricket-blue mb-2">Curriculums</h3>
              <p className="text-sm text-gray-600">Age-appropriate training programs</p>
            </div>
          </Link>

          <Link href="/youth-cricket/coaches" className="card hover:scale-105 transition-transform duration-200">
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-cricket-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-cricket-blue mb-2">Coaches</h3>
              <p className="text-sm text-gray-600">Qualified coaching staff</p>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-cricket-green text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-6">Ready to Start Your Cricket Journey?</h2>
          <p className="text-xl text-gray-100 mb-8 leading-relaxed">
            Join our youth cricket programs and develop your skills in a supportive, professional environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-registration" className="btn-primary text-lg">
              Register Now
            </Link>
            <Link href="/youth-cricket/teams" className="btn-outline text-lg border-white text-white hover:bg-white hover:text-cricket-green">
              View Youth Teams
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
