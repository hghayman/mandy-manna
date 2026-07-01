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

const IconForType: React.FC<{ type: string }> = ({ type }) => {
  const cls = "w-4 h-4";
  const color = "#4a7c59";

  switch (type) {
    case "🏆":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 15c-3.314 0-6-2.686-6-6V4h12v5c0 3.314-2.686 6-6 6z" />
          <path d="M6 4H4a2 2 0 00-2 2v1a4 4 0 004 4h0M18 4h2a2 2 0 012 2v1a4 4 0 01-4 4h0M12 15v4M8 19h8" />
        </svg>
      );
    case "💰":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
          <path d="M12 6v2M12 16v2M8.5 9.5A3.5 1.5 0 0112 8a3.5 1.5 0 013.5 1.5 3 1.5 0 01-3.5 1.5 3 1.5 0 01-3.5 1.5A3.5 1.5 0 0112 14a3.5 1.5 0 013.5 1.5" />
        </svg>
      );
    case "🎓":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10L12 5 2 10l10 5 10-5z" />
          <path d="M6 12.5V17c0 1.657 2.686 3 6 3s6-1.343 6-3v-4.5M22 10v5" />
        </svg>
      );
    case "🌾":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21l9-9M12.5 8.5A4.5 4.5 0 0117 4a4.5 4.5 0 01-4.5 4.5z" />
          <path d="M8.5 12.5A4.5 4.5 0 0113 8a4.5 4.5 0 01-4.5 4.5zM7.5 16.5A4.5 4.5 0 0112 12a4.5 4.5 0 01-4.5 4.5z" />
        </svg>
      );
    case "👩‍🏫":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      );
    case "🌱":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22V12M12 12C12 7 17 3 22 3c0 5-4 9-10 9zM12 12c0-5-5-9-10-9 0 5 4 9 10 9z" />
        </svg>
      );
    default:
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
  }
};

const AchievementsCard: React.FC<AchievementsCardProps> = ({ achievements }) => {
  return (
    <section className="py-16 sm:py-20" style={{ backgroundColor: '#fafaf8' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-8 sm:mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#4a7c59' }}>
            Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold" style={{ color: '#1a2e1e' }}>
            Key Achievements
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base" style={{ color: '#5a7060' }}>
            Transforming urban education through agricultural innovation, workforce development, and community engagement
          </p>
          <p className="mt-3 flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wide sm:hidden" style={{ color: '#5a7060' }}>
            Swipe to explore
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </p>
        </div>

        {/* Mobile: horizontal snap-scroll (contained — never overflows the page).
            sm and up: regular grid. */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:pb-0 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-4 sm:p-5 transition-all duration-300 shrink-0 w-[70vw] max-w-[260px] snap-start sm:w-auto sm:max-w-none"
              style={{ border: '1px solid #dde8de' }}
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: '#e8f0eb' }}
                >
                  <IconForType type={achievement.icon} />
                </div>
                <span
                  className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full"
                  style={{ color: '#4a7c59', backgroundColor: '#e8f0eb' }}
                >
                  {achievement.category}
                </span>
              </div>

              {achievement.value && (
                <div className="text-2xl font-serif font-semibold mb-0.5" style={{ color: '#1a3325' }}>
                  {achievement.value}
                </div>
              )}

              <h3
                className="text-sm font-semibold mb-1 leading-snug"
                style={{ color: '#1a2e1e' }}
              >
                {achievement.title}
              </h3>

              <p className="text-sm leading-relaxed" style={{ color: '#4f6357' }}>
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <a
            href="/about"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-lg transition-colors duration-200 text-sm"
            style={{ backgroundColor: '#1a3325' }}
          >
            View Full Portfolio
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AchievementsCard;
