import React from 'react';

interface TimelineItem {
  id: number;
  title: string;
  subtitle: string;
  organization: string;
  period: string;
  status: string;
  description: string[];
  icon: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current':
        return 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400';
      case 'ongoing':
        return 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400';
      case 'completed':
        return 'bg-gray-100 dark:bg-gray-900/20 text-gray-800 dark:text-gray-400';
      default:
        return 'bg-gray-100 dark:bg-gray-900/20 text-gray-800 dark:text-gray-400';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'current':
        return 'Current';
      case 'ongoing':
        return 'Ongoing';
      case 'completed':
        return 'Completed';
      default:
        return 'Completed';
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Timeline Line */}
      <div className="absolute left-4 md:left-8 h-full w-0.5 bg-gradient-to-b from-blue-600 to-cyan-400"></div>

      {/* Timeline Items */}
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={item.id} className="relative flex items-start">
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-4 w-8 h-8 rounded-full flex items-center justify-center z-10 shadow-lg bg-white/85 border border-blue-300 text-blue-700 dark:bg-blue-500/15 dark:border-blue-400/40 dark:text-blue-100 backdrop-blur">
              <span className="text-lg leading-none">{item.icon}</span>
            </div>

            {/* Content - Always on the right */}
            <div className="ml-12 md:ml-16 flex-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(item.status)}`}>
                    {getStatusLabel(item.status)}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">{item.period}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{item.subtitle}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{item.organization}</p>

                <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                  {item.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1 flex-shrink-0">•</span>
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;