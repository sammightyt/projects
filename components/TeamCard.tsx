import Link from 'next/link';
import { Team } from '@/lib/types';

interface TeamCardProps {
  team: Team;
}

export default function TeamCard({ team }: TeamCardProps) {
  const getLeagueBadgeColor = () => {
    if (team.leagueTier === 'APCL Elite') {
      return 'bg-purple-600';
    } else if (team.leagueTier === 'APCL Plate') {
      return 'bg-blue-600';
    }
    return 'bg-cricket-green';
  };

  return (
    <Link href={`/teams/${team.id}`}>
      <div className="card h-full hover:scale-105 transition-transform duration-200">
        {team.teamImage && (
          <div className="h-48 overflow-hidden bg-gray-200">
            <img
              src={team.teamImage}
              alt={team.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-cricket-blue-dark">{team.name}</h3>
            {team.leagueTier && (
              <span className={`text-xs px-3 py-1 rounded-full text-white ${getLeagueBadgeColor()}`}>
                {team.leagueTier}
              </span>
            )}
          </div>
          
          <div className="space-y-2 mb-4">
            {team.ageGroup && (
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Age Group:</span> {team.ageGroup}
              </p>
            )}
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Level:</span> {team.level}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">League:</span> {team.league}
            </p>
          </div>

          <p className="text-gray-700 text-sm line-clamp-3 mb-4">
            {team.description}
          </p>

          <div className="text-cricket-gold font-semibold text-sm hover:text-cricket-gold-dark transition-colors">
            View Team Details →
          </div>
        </div>
      </div>
    </Link>
  );
}
