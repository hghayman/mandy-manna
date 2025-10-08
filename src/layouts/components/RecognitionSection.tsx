import React from 'react';

interface Award {
  title: string;
  organization: string;
  year: string;
  description: string;
  icon: string;
  featured?: boolean;
}

interface Grant {
  amount: string;
  title: string;
  description: string;
  icon: string;
}

interface RecognitionSectionProps {
  awards: Award[];
  grants: Grant[];
}

const RecognitionSection: React.FC<RecognitionSectionProps> = ({ awards, grants }) => {
  return (
    <div className="space-y-12">
      {/* Featured Award */}
      {awards.filter(award => award.featured).map((award, index) => (
        <div key={index} className="bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-50 dark:from-yellow-900/10 dark:via-yellow-800/20 dark:to-yellow-900/10 rounded-2xl p-8 border-2 border-yellow-200 dark:border-yellow-700/30">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg bg-white/85 border border-yellow-300 text-yellow-700 dark:bg-yellow-500/15 dark:border-yellow-500/40 dark:text-yellow-100 backdrop-blur">
              <span className="text-2xl leading-none">{award.icon}</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{award.title}</h3>
            <p className="text-yellow-700 dark:text-yellow-400 font-medium mb-2">{award.organization} • {award.year}</p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">{award.description}</p>
          </div>
        </div>
      ))}

      {/* Grants Grid */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Major Grants & Funding</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {grants.map((grant, index) => (
            <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md bg-white/85 border border-green-300 text-green-700 dark:bg-green-500/15 dark:border-green-500/40 dark:text-green-100 backdrop-blur">
                <span className="text-xl leading-none">{grant.icon}</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{grant.amount}</h4>
              <p className="text-green-600 dark:text-green-400 font-medium mb-2">{grant.title}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{grant.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Other Awards */}
      {awards.filter(award => !award.featured).length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Professional Recognition</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {awards.filter(award => !award.featured).map((award, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-lg bg-white/85 border border-blue-300 text-blue-700 dark:bg-blue-500/15 dark:border-blue-500/40 dark:text-blue-100 backdrop-blur">
                    <span className="text-lg leading-none">{award.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{award.title}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{award.organization} • {award.year}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{award.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecognitionSection;