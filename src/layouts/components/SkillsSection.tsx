import React from 'react';

interface Skill {
  name: string;
  endorsements: number;
  category: string;
}

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const categories = [...new Set(skills.map(skill => skill.category))];

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Leadership': 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 border-blue-200 dark:border-blue-700',
      'Education': 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 border-green-200 dark:border-green-700',
      'Agriculture': 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400 border-yellow-200 dark:border-yellow-700',
      'Technology': 'bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-400 border-purple-200 dark:border-purple-700',
      'Marketing': 'bg-pink-100 dark:bg-pink-900/20 text-pink-800 dark:text-pink-400 border-pink-200 dark:border-pink-700',
      'Science': 'bg-indigo-100 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-400 border-indigo-200 dark:border-indigo-700'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 dark:bg-gray-900/20 text-gray-800 dark:text-gray-400 border-gray-200 dark:border-gray-700';
  };

  return (
    <div className="space-y-6">
      {categories.map((category, index) => (
        <div key={index}>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {getSkillsByCategory(category).map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)} hover:shadow-sm transition-shadow duration-200`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;