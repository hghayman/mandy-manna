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

const ProfessionalStats: React.FC<ProfessionalStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="text-center group">
          <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <span className="text-white text-2xl">{stat.icon}</span>
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