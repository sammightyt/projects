import Hero from '@/components/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coaches | Youth Cricket | HCCA',
  description: 'Qualified coaching staff dedicated to youth cricket development.',
};

export default function CoachesPage() {
  return (
    <>
      <Hero
        title="Youth Cricket Coaches"
        subtitle="Qualified professionals dedicated to developing young cricketers"
      />

      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="mb-6">Expert Coaching for Youth Development</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our coaching staff brings together qualified professionals who are passionate about
              developing young cricketers. All coaches undergo background checks and maintain current
              certifications in coaching, first aid, and child safety.
            </p>
          </div>

          <div className="card p-8">
            <h3 className="mb-6">Coaching Roles & Responsibilities</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-cricket-blue mb-3">Head Coaches</h4>
                <p className="text-gray-700 mb-2">
                  Lead program development and oversee age-group coaching teams. Responsible for
                  curriculum implementation, coach mentoring, and maintaining coaching standards.
                </p>
                <p className="text-sm text-gray-600 font-semibold">Required Qualifications:</p>
                <ul className="text-sm text-gray-600 space-y-1 mt-1">
                  <li>• Level 2 or higher coaching certification</li>
                  <li>• Minimum 5 years coaching experience</li>
                  <li>• First aid and CPR certified</li>
                  <li>• Background check clearance</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-cricket-blue mb-3">Age-Group Coaches</h4>
                <p className="text-gray-700 mb-2">
                  Work directly with players in specific age groups, delivering structured training
                  sessions and managing team activities during matches and competitions.
                </p>
                <p className="text-sm text-gray-600 font-semibold">Required Qualifications:</p>
                <ul className="text-sm text-gray-600 space-y-1 mt-1">
                  <li>• Level 1 or higher coaching certification</li>
                  <li>• Age-appropriate coaching training</li>
                  <li>• First aid certified</li>
                  <li>• Background check clearance</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-cricket-blue mb-3">Assistant Coaches</h4>
                <p className="text-gray-700 mb-2">
                  Support lead coaches in training delivery, provide individual attention to players,
                  and assist with session planning and equipment management.
                </p>
                <p className="text-sm text-gray-600 font-semibold">Required Qualifications:</p>
                <ul className="text-sm text-gray-600 space-y-1 mt-1">
                  <li>• Cricket knowledge and playing experience</li>
                  <li>• Introductory coaching certification (or in progress)</li>
                  <li>• Commitment to professional development</li>
                  <li>• Background check clearance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card p-8">
            <h3 className="mb-4">Professional Development</h3>
            <p className="text-gray-700 mb-4">
              We invest in our coaches through ongoing professional development opportunities,
              ensuring they stay current with coaching best practices and cricket developments.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Regular coaching workshops and seminars</li>
              <li>• Access to coaching education resources</li>
              <li>• Mentoring from experienced coaches</li>
              <li>• Certification advancement support</li>
              <li>• Conference and training attendance</li>
            </ul>
          </div>

          <div className="card p-8">
            <h3 className="mb-4">Coaching Philosophy</h3>
            <p className="text-gray-700 mb-4">
              Our coaches share a common philosophy centered on:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-cricket-green bg-opacity-10 p-4 rounded">
                <h4 className="font-semibold text-cricket-blue mb-2">Player Development</h4>
                <p className="text-sm text-gray-700">
                  Focus on long-term skill development over short-term results
                </p>
              </div>
              <div className="bg-cricket-green bg-opacity-10 p-4 rounded">
                <h4 className="font-semibold text-cricket-blue mb-2">Positive Environment</h4>
                <p className="text-sm text-gray-700">
                  Create supportive, encouraging atmospheres for learning
                </p>
              </div>
              <div className="bg-cricket-green bg-opacity-10 p-4 rounded">
                <h4 className="font-semibold text-cricket-blue mb-2">Individual Attention</h4>
                <p className="text-sm text-gray-700">
                  Recognize and address each player's unique needs
                </p>
              </div>
              <div className="bg-cricket-green bg-opacity-10 p-4 rounded">
                <h4 className="font-semibold text-cricket-blue mb-2">Values & Respect</h4>
                <p className="text-sm text-gray-700">
                  Instill cricket's values of fairness, respect, and sportsmanship
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
