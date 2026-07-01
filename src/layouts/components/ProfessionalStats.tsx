import React from 'react';

interface Stat {
  value: string;
  label: string;
  icon: string;
  color?: string;
}

interface ProfessionalStatsProps {
  stats: Stat[];
}

const StatIcon: React.FC<{ type: string }> = ({ type }) => {
  const common = {
    className: 'w-6 h-6',
    fill: 'none',
    viewBox: '0 0 24 24',
    stroke: '#2d5a3d',
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  switch (type) {
    case '👥': // students / people
      return (
        <svg {...common}>
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case '🏫': // schools
      return (
        <svg {...common}>
          <path d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-5a3 3 0 016 0v5M9 9h.01M15 9h.01" />
        </svg>
      );
    case '💰': // funding
      return (
        <svg {...common}>
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case '🎓': // teachers / education
      return (
        <svg {...common}>
          <path d="M22 10L12 5 2 10l10 5 10-5z" />
          <path d="M6 12.5V17c0 1.657 2.686 3 6 3s6-1.343 6-3v-4.5" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
  }
};

const ProfessionalStats: React.FC<ProfessionalStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3"
            style={{ backgroundColor: '#e8f0eb', border: '1px solid #c8dcc8' }}
          >
            <StatIcon type={stat.icon} />
          </div>
          <div className="text-3xl font-serif font-semibold mb-1" style={{ color: '#1a3325' }}>
            {stat.value}
          </div>
          <div className="text-sm font-medium" style={{ color: '#4f6357' }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalStats;
