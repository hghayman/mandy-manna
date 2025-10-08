import React from 'react';

interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

interface EducationGridProps {
  educations: EducationItem[];
}

const badgeVariants: Record<
  string,
  { container: string; accent: string }
> = {
  'bg-blue-600': {
    container:
      'bg-blue-500/10 text-blue-700 border border-blue-300 dark:bg-blue-500/15 dark:text-blue-200 dark:border-blue-400/40',
    accent: 'text-blue-700 dark:text-blue-200',
  },
  'bg-green-600': {
    container:
      'bg-green-500/10 text-green-700 border border-green-300 dark:bg-green-500/15 dark:text-green-200 dark:border-green-400/40',
    accent: 'text-green-700 dark:text-green-200',
  },
  'bg-yellow-600': {
    container:
      'bg-yellow-500/10 text-yellow-700 border border-yellow-300 dark:bg-yellow-500/15 dark:text-yellow-200 dark:border-yellow-500/40',
    accent: 'text-yellow-700 dark:text-yellow-200',
  },
  'bg-purple-600': {
    container:
      'bg-purple-500/10 text-purple-700 border border-purple-300 dark:bg-purple-500/15 dark:text-purple-200 dark:border-purple-400/40',
    accent: 'text-purple-700 dark:text-purple-200',
  },
};

const defaultBadge = {
  container:
    'bg-slate-500/10 text-slate-700 border border-slate-300 dark:bg-slate-500/15 dark:text-slate-200 dark:border-slate-400/40',
  accent: 'text-slate-700 dark:text-slate-200',
};

const EducationGrid: React.FC<EducationGridProps> = ({ educations }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {educations.map((edu, index) => (
        <div
          key={index}
          className={`${edu.bgColor} rounded-xl p-6 border ${edu.borderColor} hover:shadow-lg transition-shadow duration-300`}
        >
          <div className="flex items-center mb-4">
            {(() => {
              const { container, accent } = badgeVariants[edu.color] ?? defaultBadge;
              return (
                <>
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-md backdrop-blur ${container}`}
                  >
                    <span className="text-xl leading-none">{edu.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className={`${accent} font-medium`}>{edu.field}</p>
                  </div>
                </>
              );
            })()}
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">{edu.institution}</p>
        </div>
      ))}
    </div>
  );
};

export default EducationGrid;