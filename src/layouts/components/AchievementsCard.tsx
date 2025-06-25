import React from 'react';

interface Achievement {
  icon: string;
  title: string;
  description: string;
  value?: string;
  category: string;
}

interface AchievementsCardProps {
  achievements: Achievement[];
}

const AchievementsCard: React.FC<AchievementsCardProps> = ({ achievements }) => {
  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Key Achievements & Impact
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Transforming education through innovation and leadership
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 p-4 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-bl-3xl"></div>
              
              {/* Icon */}
              <div className="relative z-10 mb-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl md:text-2xl">{achievement.icon}</span>
                </div>
              </div>
              
              {/* Category badge */}
              <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300 mb-2 md:mb-3">
                {achievement.category}
              </div>
              
              {/* Value (if present) */}
              {achievement.value && (
                <div className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1 md:mb-2">
                  {achievement.value}
                </div>
              )}
              
              {/* Title */}
              <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-1 md:mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                {achievement.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm leading-relaxed">
                {achievement.description}
              </p>
              
              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="/about"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors duration-200"
          >
            View Full Portfolio
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AchievementsCard;