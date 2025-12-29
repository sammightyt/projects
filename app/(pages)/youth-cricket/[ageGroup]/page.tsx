import Hero from '@/components/Hero';
import Link from 'next/link';
import { Metadata } from 'next';

type Props = {
  params: { ageGroup: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ageGroup } = params;
  return {
    title: `${ageGroup.toUpperCase()} Cricket Program | HCCA`,
    description: `Youth cricket program for ${ageGroup.toUpperCase()} players with professional coaching and structured development.`,
  };
}

export async function generateStaticParams() {
  return [
    { ageGroup: 'U10' },
    { ageGroup: 'U13' },
    { ageGroup: 'U15' },
  ];
}

export default function AgeGroupPage({ params }: Props) {
  const { ageGroup } = params;
  const ageGroupUpper = ageGroup.toUpperCase();

  const ageGroupData: Record<string, any> = {
    U10: {
      title: 'Under 10 (U10) Program',
      subtitle: 'Foundation level cricket for developing young players',
      level: 'Foundation Level',
      ageRange: '6-10 years',
      focus: [
        'Introduction to cricket fundamentals',
        'Basic batting, bowling, and fielding techniques',
        'Game rules and cricket etiquette',
        'Fun, non-competitive environment',
        'Building confidence and enjoyment',
      ],
      training: 'Two weekly training sessions focusing on skill development through game-based activities. Sessions are 90 minutes with emphasis on participation, fun, and fundamental skill acquisition.',
      matches: 'Participation-focused match play on weekends. Modified rules and equipment ensure age-appropriate competition and maximum playing time for all participants.',
    },
    U13: {
      title: 'Under 13 (U13) Program',
      subtitle: 'Development level program for emerging cricketers',
      level: 'Development Level',
      ageRange: '11-13 years',
      focus: [
        'Technique refinement and skill progression',
        'Tactical awareness and game understanding',
        'Introduction to competitive cricket',
        'Specialized position training',
        'Team strategy and match situations',
      ],
      training: 'Two to three weekly training sessions combining technical skill work with tactical understanding. Sessions are 2 hours and include net practice, fielding drills, and match simulations.',
      matches: 'Regular competitive fixtures against other clubs. Structured match play with increased emphasis on game situations, strategy, and performance while maintaining developmental focus.',
    },
    U15: {
      title: 'Under 15 (U15) Program',
      subtitle: 'Advanced youth program preparing players for adult cricket',
      level: 'Advanced Level',
      ageRange: '14-15 years',
      focus: [
        'Advanced technical skills and match application',
        'Strategic thinking and mental skills',
        'Physical conditioning and cricket fitness',
        'Leadership and team responsibility',
        'Pathway to adult cricket programs',
      ],
      training: 'Three weekly sessions focusing on advanced skill development, match preparation, and physical conditioning. Sessions are 2-2.5 hours with individualized development plans and position-specific training.',
      matches: 'Competitive league and tournament play with increased match exposure. Focus on performance, match management, and transition towards adult cricket standards and competition levels.',
    },
  };

  const data = ageGroupData[ageGroupUpper] || ageGroupData.U10;

  return (
    <>
      <Hero
        title={data.title}
        subtitle={data.subtitle}
        ctaText="Register Now"
        ctaLink="/contact-registration"
        secondaryCtaText="View Teams"
        secondaryCtaLink="/youth-cricket/teams"
      />

      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Overview */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="card p-6 text-center">
              <div className="text-cricket-gold font-bold text-sm mb-2">PROGRAM LEVEL</div>
              <div className="text-2xl font-bold text-cricket-blue">{data.level}</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-cricket-gold font-bold text-sm mb-2">AGE RANGE</div>
              <div className="text-2xl font-bold text-cricket-blue">{data.ageRange}</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-cricket-gold font-bold text-sm mb-2">GROUP</div>
              <div className="text-2xl font-bold text-cricket-blue">{ageGroupUpper}</div>
            </div>
          </div>

          {/* Program Objectives */}
          <div className="card p-8">
            <h3 className="mb-6">Program Objectives</h3>
            <ul className="space-y-3">
              {data.focus.map((item: string, index: number) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1 text-cricket-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Training Structure */}
          <div className="card p-8">
            <h3 className="mb-4">Training Structure</h3>
            <p className="text-gray-700 leading-relaxed">{data.training}</p>
          </div>

          {/* Match Structure */}
          <div className="card p-8">
            <h3 className="mb-4">Match Structure</h3>
            <p className="text-gray-700 leading-relaxed">{data.matches}</p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-cricket-blue to-cricket-blue-dark text-white rounded-lg p-8 text-center">
            <h3 className="text-white mb-4">Ready to Join {ageGroupUpper}?</h3>
            <p className="text-gray-200 mb-6">
              Register now to secure your place in our {ageGroupUpper} program and start your cricket journey with HCCA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-registration" className="btn-primary">
                Register Now
              </Link>
              <Link href="/youth-cricket/teams" className="btn-outline border-white text-white hover:bg-white hover:text-cricket-blue">
                View {ageGroupUpper} Teams
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
