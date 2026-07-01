import React, { useState } from 'react';

interface Skill {
  name: string;
  endorsements: number;
  category: string;
}

interface SkillsSectionProps {
  skills: Skill[];
}

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Leadership:  { bg: '#e8f0eb', text: '#1a3325', border: '#b8d4be' },
  Education:   { bg: '#eaf4ef', text: '#1f4d38', border: '#b0d8c0' },
  Agriculture: { bg: '#f0f7ec', text: '#2d5a1a', border: '#bcd9a8' },
  Technology:  { bg: '#edf0f5', text: '#1a2e4a', border: '#b8c8dc' },
  Marketing:   { bg: '#f5f0ea', text: '#4a3010', border: '#d4c0a0' },
  Science:     { bg: '#eaf3f0', text: '#1a3d38', border: '#a8d4cc' },
};

const defaultColor = { bg: '#f0f4f1', text: '#1a3325', border: '#c8dcc8' };

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const categories = [...new Set(skills.map(s => s.category))];
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const displayed = activeCategory
    ? skills.filter(s => s.category === activeCategory)
    : skills;

  return (
    <div>
      {/* Category filter pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveCategory(null)}
          className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-150"
          style={
            activeCategory === null
              ? { backgroundColor: '#1a3325', color: 'white' }
              : { backgroundColor: '#f0f4f1', color: '#5a7060', border: '1px solid #dde8de' }
          }
        >
          All
        </button>
        {categories.map(cat => {
          const c = categoryColors[cat] ?? defaultColor;
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(isActive ? null : cat)}
              className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-150"
              style={
                isActive
                  ? { backgroundColor: '#1a3325', color: 'white' }
                  : { backgroundColor: c.bg, color: c.text, border: `1px solid ${c.border}` }
              }
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Skills tag cloud */}
      <div className="flex flex-wrap gap-2">
        {displayed.map((skill, i) => {
          const c = categoryColors[skill.category] ?? defaultColor;
          return (
            <span
              key={i}
              className="px-3 py-1.5 rounded-full text-xs font-medium"
              style={{
                backgroundColor: c.bg,
                color: c.text,
                border: `1px solid ${c.border}`,
              }}
            >
              {skill.name}
            </span>
          );
        })}
      </div>

      {/* Count */}
      <p className="mt-5 text-xs" style={{ color: '#5a7060' }}>
        {displayed.length} skill{displayed.length !== 1 ? 's' : ''}
        {activeCategory ? ` in ${activeCategory}` : ' across all categories'}
      </p>
    </div>
  );
};

export default SkillsSection;
