import Link from 'next/link';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Hero
        title="Welcome to Hill Country Cricket Association"
        subtitle="Building cricket excellence through comprehensive development programs for all ages"
        ctaText="Explore Youth Cricket"
        ctaLink="/youth-cricket"
        secondaryCtaText="Explore Adult Cricket"
        secondaryCtaLink="/adult-cricket"
      />

      {/* Mission Section */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            The Hill Country Cricket Association is dedicated to fostering a love for cricket
            and developing players of all skill levels. Through structured programs, 
            professional coaching, and competitive opportunities, we create pathways
            for growth from youth development to elite adult competition.
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="section-container bg-gray-50">
        <h2 className="text-center mb-12">Our Programs</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Youth Cricket */}
          <div className="card">
            <div className="h-64 bg-gradient-to-br from-cricket-green to-cricket-green-dark flex items-center justify-center">
              <div className="text-white text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
                </svg>
                <h3 className="text-3xl font-bold text-white">Youth Cricket</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                Comprehensive development programs for young cricketers from U10 to U15,
                featuring age-appropriate training, dedicated coaching, and competitive opportunities.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-cricket-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Age-specific programs (U10, U13, U15)
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-cricket-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Professional coaching & curriculum
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-cricket-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Quality facilities & equipment
                </li>
              </ul>
              <Link href="/youth-cricket" className="btn-primary w-full text-center block">
                Learn More
              </Link>
            </div>
          </div>

          {/* Adult Cricket */}
          <div className="card">
            <div className="h-64 bg-gradient-to-br from-cricket-blue to-cricket-blue-dark flex items-center justify-center">
              <div className="text-white text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6l5.25 3.15.75-1.23-4-2.42z"/>
                </svg>
                <h3 className="text-3xl font-bold text-white">Adult Cricket</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                Competitive adult cricket featuring two distinct leagues - APCL Plate and APCL Elite -
                offering opportunities for players of all skill levels.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-cricket-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  APCL Plate League
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-cricket-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  APCL Elite League
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-cricket-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Competitive seasonal play
                </li>
              </ul>
              <Link href="/adult-cricket" className="btn-primary w-full text-center block">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-container bg-white">
        <h2 className="text-center mb-12">Why Choose HCCA?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-cricket-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Professional Development</h3>
            <p className="text-gray-600">
              Structured programs designed to develop skills and cricket knowledge at every level
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-cricket-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Facilities</h3>
            <p className="text-gray-600">
              Access to well-maintained grounds, training facilities, and professional equipment
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-cricket-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Coaching</h3>
            <p className="text-gray-600">
              Qualified coaches dedicated to player development and cricket excellence
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-cricket-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Competitive Leagues</h3>
            <p className="text-gray-600">
              Multiple leagues and competitions for youth and adults at all skill levels
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-gradient-to-r from-cricket-blue to-cricket-blue-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-6">Ready to Join Us?</h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Whether you're looking to develop young talent or compete at the adult level,
            HCCA has a program for you. Register today and become part of our cricket community.
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
