import React, { useState } from 'react';

interface Award {
  title: string;
  organization: string;
  year: string;
  description: string;
  icon: string;
  featured?: boolean;
  link?: string;
  images?: string[];
}

interface GrantDetail {
  name: string;
  description: string;
}

interface Grant {
  amount: string;
  title: string;
  description: string;
  icon: string;
  details?: GrantDetail[];
  note?: string;
}

interface RecognitionSectionProps {
  awards: Award[];
  grants: Grant[];
}

const RecognitionSection: React.FC<RecognitionSectionProps> = ({ awards, grants }) => {
  const [expandedGrant, setExpandedGrant] = useState<number | null>(null);

  const primaryGrant = grants[0];
  const otherGrants = grants.slice(1);

  return (
    <div className="space-y-12">

      {/* Featured Award */}
      {awards.filter(award => award.featured).map((award, index) => (
        <div
          key={index}
          className="rounded-2xl p-8"
          style={{ background: 'linear-gradient(135deg, #fdf8ec 0%, #fef9ee 50%, #fdf8ec 100%)', border: '2px solid rgba(201,162,39,0.25)' }}
        >
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm"
              style={{ backgroundColor: 'rgba(201,162,39,0.12)', border: '1px solid rgba(201,162,39,0.3)' }}
            >
              <svg className="w-8 h-8" style={{ color: '#b8962e' }} viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-semibold mb-2" style={{ color: '#1a2e1e' }}>{award.title}</h3>
            <p className="font-medium mb-3 text-sm" style={{ color: '#8a6918' }}>{award.organization} · {award.year}</p>
            <p className="leading-relaxed max-w-2xl mx-auto" style={{ color: '#5a5040' }}>{award.description}</p>

            {award.images && award.images.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-6">
                {award.images.map((src, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-lg shadow-sm"
                    style={{ border: '1px solid rgba(201,162,39,0.25)', aspectRatio: '3 / 4' }}
                  >
                    <img
                      src={src}
                      alt={`${award.title} — event photo ${i + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {award.link && (
              <a
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold"
                style={{ color: '#8a6918' }}
              >
                Read the feature
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>
      ))}

      {/* Major Grants */}
      <div>
        <h3 className="text-xl font-serif font-semibold mb-6 text-center" style={{ color: '#1a2e1e' }}>
          Major Grants &amp; Funding
        </h3>

        {primaryGrant && (
          <div className="mb-4">
            <button
              onClick={() => setExpandedGrant(expandedGrant === 0 ? null : 0)}
              className="w-full text-left p-6 bg-white rounded-xl transition-all duration-200"
              style={{
                border: '1.5px solid',
                borderColor: expandedGrant === 0 ? '#4a7c59' : '#dde8de',
                boxShadow: expandedGrant === 0 ? '0 4px 16px -4px rgba(74,124,89,0.15)' : 'none',
              }}
              aria-expanded={expandedGrant === 0}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#e8f0eb', border: '1px solid #c8dcc8' }}
                  >
                    <svg className="w-6 h-6" style={{ color: '#4a7c59' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-serif font-semibold" style={{ color: '#1a2e1e' }}>{primaryGrant.amount}</div>
                    <div className="font-semibold text-sm" style={{ color: '#2d5a3d' }}>{primaryGrant.title}</div>
                    <div className="text-sm mt-1" style={{ color: '#4f6357' }}>{primaryGrant.description}</div>
                  </div>
                </div>
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200"
                  style={{
                    backgroundColor: '#e8f0eb',
                    transform: expandedGrant === 0 ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  <svg className="w-4 h-4" style={{ color: '#4a7c59' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </button>

            {expandedGrant === 0 && primaryGrant.details && primaryGrant.details.length > 0 && (
              <div className="mt-2 rounded-xl overflow-hidden" style={{ backgroundColor: '#f6f9f6', border: '1px solid #dde8de' }}>
                <div className="divide-y" style={{ borderColor: '#e8f0eb' }}>
                  {primaryGrant.details.map((detail, i) => (
                    <div key={i} className="px-6 py-4 flex items-start gap-3">
                      <div
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: '#d4e8d8' }}
                      >
                        <svg className="w-3 h-3" style={{ color: '#4a7c59' }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold text-sm" style={{ color: '#1a2e1e' }}>{detail.name}</span>
                        <p className="text-sm mt-0.5" style={{ color: '#4f6357' }}>{detail.description}</p>
                      </div>
                    </div>
                  ))}
                  {primaryGrant.note && (
                    <div className="px-6 py-3" style={{ backgroundColor: 'rgba(232,240,235,0.5)' }}>
                      <p className="text-xs italic" style={{ color: '#4a7c59' }}>{primaryGrant.note}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Supporting grants */}
        <div className="grid md:grid-cols-2 gap-5">
          {otherGrants.map((grant, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl transition-all duration-300"
              style={{ border: '1px solid #dde8de' }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#f0f4f1', border: '1px solid #dde8de' }}
              >
                <svg className="w-6 h-6" style={{ color: '#4a7c59' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {grant.icon === "🏗️" ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  )}
                </svg>
              </div>
              <h4 className="text-lg font-serif font-semibold mb-1" style={{ color: '#1a2e1e' }}>{grant.amount}</h4>
              <p className="font-semibold text-sm mb-2" style={{ color: '#2d5a3d' }}>{grant.title}</p>
              <p className="text-base leading-relaxed" style={{ color: '#4f6357' }}>{grant.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Other Awards */}
      {awards.filter(award => !award.featured).length > 0 && (
        <div>
          <h3 className="text-xl font-serif font-semibold mb-6 text-center" style={{ color: '#1a2e1e' }}>
            Professional Recognition
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            {awards.filter(award => !award.featured).map((award, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6"
                style={{ border: '1px solid #dde8de' }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-lg"
                    style={{ backgroundColor: '#e8f0eb', border: '1px solid #c8dcc8' }}
                  >
                    <svg className="w-5 h-5" style={{ color: '#4a7c59' }} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold mb-1" style={{ color: '#1a2e1e' }}>{award.title}</h4>
                    <p className="font-medium text-sm mb-2" style={{ color: '#2d5a3d' }}>{award.organization} · {award.year}</p>
                    <p className="text-base leading-relaxed" style={{ color: '#4f6357' }}>{award.description}</p>
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
