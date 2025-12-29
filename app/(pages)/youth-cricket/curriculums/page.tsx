import Hero from '@/components/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Curriculums | Youth Cricket | HCCA',
  description: 'Age-appropriate cricket training frameworks and development progression models.',
};

export default function CurriculumsPage() {
  return (
    <>
      <Hero
        title="Youth Cricket Curriculums"
        subtitle="Structured, age-appropriate training programs for skill development"
      />

      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="mb-6">Development Through Structured Learning</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our curriculums are designed to progressively develop cricket skills, knowledge, and
              understanding through age-appropriate training frameworks that emphasize both technical
              excellence and love for the game.
            </p>
          </div>

          <div className="card p-8">
            <h3 className="mb-6">U10 Curriculum - Foundation Level</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-cricket-blue mb-2">Skills Focus</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Basic batting stance and grip</li>
                  <li>• Fundamental bowling action</li>
                  <li>• Catching and throwing techniques</li>
                  <li>• Introduction to cricket rules</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cricket-blue mb-2">Training Approach</h4>
                <p className="text-gray-700">
                  Game-based learning with emphasis on fun, participation, and building confidence.
                  Short, varied activities maintain engagement while developing fundamental motor skills.
                </p>
              </div>
            </div>
          </div>

          <div className="card p-8">
            <h3 className="mb-6">U13 Curriculum - Development Level</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-cricket-blue mb-2">Skills Focus</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Refined batting techniques and shot selection</li>
                  <li>• Bowling accuracy and variation</li>
                  <li>• Fielding positions and responsibilities</li>
                  <li>• Tactical awareness and game strategy</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cricket-blue mb-2">Training Approach</h4>
                <p className="text-gray-700">
                  Structured skill development with increased focus on technique refinement, tactical
                  understanding, and match-simulated practice scenarios. Introduction to competitive play.
                </p>
              </div>
            </div>
          </div>

          <div className="card p-8">
            <h3 className="mb-6">U15 Curriculum - Advanced Level</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-cricket-blue mb-2">Skills Focus</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Advanced batting techniques and match situations</li>
                  <li>• Specialized bowling skills and tactics</li>
                  <li>• Advanced fielding and wicket-keeping</li>
                  <li>• Match management and mental skills</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cricket-blue mb-2">Training Approach</h4>
                <p className="text-gray-700">
                  Performance-focused training with emphasis on match preparation, competitive mindset,
                  and transition towards adult cricket. Individualized skill development plans.
                </p>
              </div>
            </div>
          </div>

          <div className="card p-8">
            <h3 className="mb-4">Development Progression Model</h3>
            <p className="text-gray-700 mb-4">
              Players progress through our curriculum based on age, skill development, and readiness.
              Regular assessments ensure appropriate placement and personalized development plans.
            </p>
            <div className="bg-cricket-gold bg-opacity-10 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-cricket-blue mb-3">Key Principles</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Age-appropriate skill development</li>
                <li>• Progressive challenge and complexity</li>
                <li>• Balance between technical, tactical, and physical development</li>
                <li>• Emphasis on enjoyment and long-term participation</li>
                <li>• Clear pathways to adult cricket programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
