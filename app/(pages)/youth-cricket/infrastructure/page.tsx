import Hero from '@/components/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Infrastructure | Youth Cricket | HCCA',
  description: 'Equipment standards, safety protocols, and organizational infrastructure supporting youth cricket.',
};

export default function InfrastructurePage() {
  return (
    <>
      <Hero
        title="Youth Cricket Infrastructure"
        subtitle="Equipment standards and organizational support for safe, quality cricket"
      />

      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="mb-6">Building a Foundation for Excellence</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our infrastructure supports safe, professional youth cricket development through quality
              equipment, safety protocols, and organizational systems designed to scale with growth.
            </p>
          </div>

          <div className="card p-8">
            <h3 className="mb-4">Equipment Standards</h3>
            <p className="text-gray-700 mb-4">
              All equipment meets or exceeds international cricket safety standards and is regularly
              inspected and maintained.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Certified protective gear for all age groups</li>
              <li>• Quality cricket bats sized appropriately by age</li>
              <li>• Professional-grade balls for training and matches</li>
              <li>• Wicket-keeping equipment and fielding accessories</li>
            </ul>
          </div>

          <div className="card p-8">
            <h3 className="mb-4">Safety Protocols</h3>
            <p className="text-gray-700 mb-4">
              Player safety is our top priority with comprehensive protocols and trained personnel.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Mandatory protective equipment policies</li>
              <li>• First aid trained staff at all sessions</li>
              <li>• Weather and heat safety guidelines</li>
              <li>• Background-checked coaches and volunteers</li>
              <li>• Emergency response procedures</li>
            </ul>
          </div>

          <div className="card p-8">
            <h3 className="mb-4">Organizational Structure</h3>
            <p className="text-gray-700 mb-4">
              Professional organizational systems ensure smooth operations and quality experiences.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Structured age-group divisions</li>
              <li>• Qualified coaching assignments</li>
              <li>• Regular equipment maintenance schedules</li>
              <li>• Facility booking and management systems</li>
              <li>• Communication platforms for families</li>
            </ul>
          </div>

          <div className="card p-8">
            <h3 className="mb-4">Scalability for Growth</h3>
            <p className="text-gray-700">
              Our infrastructure is designed to expand as our program grows, with systems and processes
              that can accommodate increasing numbers of players, teams, and facilities without
              compromising quality or safety.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
