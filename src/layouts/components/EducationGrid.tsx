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

const EducationGrid: React.FC<EducationGridProps> = ({ educations }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {educations.map((edu, index) => (
        <div 
          key={index}
          className={`${edu.bgColor} rounded-xl p-6 border ${edu.borderColor} hover:shadow-lg transition-shadow duration-300`}
        >
          <div className="flex items-center mb-4">
            <div className={`w-12 h-12 ${edu.color} rounded-lg flex items-center justify-center mr-4 shadow-md`}>
              <span className="text-white text-xl">{edu.icon}</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
              <p className={`${edu.color.replace('bg-', 'text-')} font-medium`}>{edu.field}</p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">{edu.institution}</p>
        </div>
      ))}
    </div>
  );
};

export default EducationGrid;