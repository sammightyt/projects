import Hero from '@/components/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Facilities | Youth Cricket | HCCA',
  description: 'World-class cricket facilities for youth development including grounds, nets, and training locations.',
};

export default function FacilitiesPage() {
  return (
    <>
      <Hero
        title="Youth Cricket Facilities"
        subtitle="Quality grounds and training facilities for developing young cricketers"
      />

      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            Our youth cricket programs benefit from access to well-maintained facilities designed
            to support player development at all levels. We prioritize safety, quality, and accessibility
            in all our training and match locations.
          </p>

          <div className="space-y-12">
            {/* Primary Grounds */}
            <div className="card p-8">
              <h3 className="mb-4">Primary Training Grounds</h3>
              <p className="text-gray-700 mb-4">
                Our main training facility features full-size cricket pitches with quality turf wickets,
                professional outfield maintenance, and comprehensive boundary markings. The grounds are
                designed to meet international cricket standards while providing a safe environment for youth development.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-cricket-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Professional-grade turf wickets</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-cricket-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Multiple practice pitches</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-cricket-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Covered pavilion and seating areas</span>
                </li>
              </ul>
            </div>

            {/* Practice Nets */}
            <div className="card p-8">
              <h3 className="mb-4">Practice Net Facilities</h3>
              <p className="text-gray-700 mb-4">
                Dedicated net practice areas allow players to focus on technique development in a controlled
                environment. Our nets feature quality surfaces and proper safety equipment.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-cricket-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Six covered practice nets</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-cricket-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">All-weather surfaces</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-cricket-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Bowling machine compatibility</span>
                </li>
              </ul>
            </div>

            {/* Indoor Training */}
            <div className="card p-8">
              <h3 className="mb-4">Indoor Training Center</h3>
              <p className="text-gray-700 mb-4">
                Weather-independent training facilities allow year-round skill development with climate-controlled
                environments and specialized equipment.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-cricket-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Climate-controlled environment</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-cricket-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Video analysis equipment</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-cricket-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Fitness and conditioning area</span>
                </li>
              </ul>
            </div>

            {/* Amenities */}
            <div className="card p-8">
              <h3 className="mb-4">Player Amenities</h3>
              <p className="text-gray-700 mb-4">
                Supporting facilities ensure player comfort and safety during training and matches.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-lg font-semibold text-cricket-blue mb-2">Changing Rooms</h4>
                  <p className="text-gray-600 text-sm">Secure, clean facilities with individual lockers</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cricket-blue mb-2">First Aid Station</h4>
                  <p className="text-gray-600 text-sm">Qualified staff and medical equipment on-site</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cricket-blue mb-2">Spectator Areas</h4>
                  <p className="text-gray-600 text-sm">Comfortable seating for family and supporters</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cricket-blue mb-2">Parking</h4>
                  <p className="text-gray-600 text-sm">Ample parking space with easy access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
