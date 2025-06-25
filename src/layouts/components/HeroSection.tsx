import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  ctaText?: string;
  ctaUrl?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  imageUrl,
  ctaText,
  ctaUrl
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 lg:-mt-16">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:pt-20 lg:pb-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">

          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 mb-6">
              <span className="mr-2">🌱</span>
              Educational Innovation Leader
            </div>

            {/* Mobile: Title, subtitle and circular image */}
            <div className="lg:hidden flex items-center gap-6 mb-6">
              <div className="flex-shrink-0">
                <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  <span className="block font-serif">{title}</span>
                </h1>
                <p className="mt-2 text-lg font-medium text-blue-600 dark:text-blue-400">
                  {subtitle}
                </p>
              </div>
            </div>

            {/* Desktop: Title only */}
            <h1 className="hidden lg:block text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              <span className="block font-serif">{title}</span>
            </h1>

            <p className="mt-4 text-xl font-medium text-blue-600 dark:text-blue-400 hidden lg:block">
              {subtitle}
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              {ctaText && ctaUrl && (
                <a
                  href={ctaUrl}
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                >
                  {ctaText}
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              )}

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">50K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Student Visits</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">112</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Acre Farm</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">$350K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Grants Secured</div>
              </div>
            </div>
          </div>

          {/* Image - Desktop only */}
          <div className="order-1 lg:order-2 hidden lg:block mt-[-90px]" >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-400 blur-3xl opacity-20"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-auto max-h-[450px] object-contain object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating achievement card */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center">
                      <span className="text-yellow-600 dark:text-yellow-400 text-lg">🏆</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">2024 Neubauer Fellow</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Educational Leadership</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;