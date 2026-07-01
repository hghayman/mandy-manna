import React from 'react';

interface TimelineItem {
  id: number;
  title: string;
  subtitle: string;
  organization: string;
  period: string;
  status: string;
  description: string[];
  icon?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const statusStyles: Record<string, { bg: string; color: string; label: string }> = {
  current: { bg: '#e8f0eb', color: '#2d5a3d', label: 'Current' },
  ongoing: { bg: '#e0f0ee', color: '#1f5c57', label: 'Ongoing' },
  completed: { bg: '#f0f4f1', color: '#5a7060', label: 'Completed' },
};

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Vertical line — sits behind the nodes */}
      <div
        className="absolute top-3 bottom-3 left-[15px] md:left-[19px] w-px"
        style={{ backgroundColor: '#cdddd0' }}
      />

      <div className="space-y-6">
        {items.map((item) => {
          const s = statusStyles[item.status] ?? statusStyles.completed;
          return (
            <div key={item.id} className="relative pl-12 md:pl-16">
              {/* Node */}
              <div className="absolute left-0 md:left-1 top-1.5 z-10">
                <span
                  className="flex w-8 h-8 items-center justify-center rounded-full"
                  style={{ backgroundColor: '#ffffff', border: '2px solid #c8dcc8' }}
                >
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.status === 'completed' ? '#a8c0ad' : '#2d5a3d' }}
                  />
                </span>
              </div>

              {/* Card */}
              <div
                className="rounded-xl p-6 transition-all duration-300 hover:shadow-md"
                style={{ backgroundColor: '#ffffff', border: '1px solid #dde8de' }}
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3">
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wide"
                    style={{ backgroundColor: s.bg, color: s.color }}
                  >
                    {s.label}
                  </span>
                  <span className="text-xs font-medium" style={{ color: '#5a7060' }}>
                    {item.period}
                  </span>
                </div>

                <h3
                  className="text-lg font-serif font-semibold mb-1 leading-snug"
                  style={{ color: '#1a2e1e' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm font-semibold mb-1" style={{ color: '#4a7c59' }}>
                  {item.subtitle}
                </p>
                <p className="text-sm mb-4" style={{ color: '#4f6357' }}>
                  {item.organization}
                </p>

                <ul className="space-y-2">
                  {item.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span
                        className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-1"
                        style={{ backgroundColor: '#e8f0eb' }}
                      >
                        <svg
                          className="w-2.5 h-2.5"
                          style={{ color: '#4a7c59' }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-base leading-relaxed" style={{ color: '#3a5040' }}>
                        {desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
