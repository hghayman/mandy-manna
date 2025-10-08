import React from 'react';

interface Stat {
  value: string;
  label: string;
  icon: string;
  color: string;
}

interface ProfessionalStatsProps {
  stats: Stat[];
}

const circleStyles: Record<string, string> = {
  'bg-blue-500':
    'bg-blue-500/10 text-blue-700 border border-blue-300 dark:bg-blue-500/15 dark:text-blue-200 dark:border-blue-400/40',
  'bg-green-500':
    'bg-green-500/10 text-green-700 border border-green-300 dark:bg-green-500/15 dark:text-green-200 dark:border-green-400/40',
  'bg-yellow-500':
    'bg-yellow-500/10 text-yellow-700 border border-yellow-300 dark:bg-yellow-500/15 dark:text-yellow-200 dark:border-yellow-500/40',
  'bg-purple-500':
    'bg-purple-500/10 text-purple-700 border border-purple-300 dark:bg-purple-500/15 dark:text-purple-200 dark:border-purple-400/40',
};

const fallbackCircleStyle =
  'bg-slate-500/10 text-slate-700 border border-slate-300 dark:bg-slate-500/15 dark:text-slate-200 dark:border-slate-400/40';

const ProfessionalStats: React.FC<ProfessionalStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="text-center group">
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300 backdrop-blur ${circleStyles[stat.color] ?? fallbackCircleStyle
              }`}
          >
            <span className="text-2xl leading-none">{stat.icon}</span>
          </div>
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalStats;