import React from 'react';

interface Fellowship {
  label: string;
  year: string;
}

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  ctaText?: string;
  ctaUrl?: string;
  fellowships?: Fellowship[];
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  imageUrl,
  ctaText,
  ctaUrl,
  fellowships = [{ label: "Neubauer Fellow", year: "2024" }],
}) => {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: '#f0f4f1' }}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ minHeight: '78vh' }}
        >
          {/* Content panel */}
          <div className="flex flex-col justify-center py-14 lg:py-20 lg:pr-14 order-2 lg:order-1">

            {/* Award badge */}
            {fellowships.map((f, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 mb-8 w-fit px-4 py-2 rounded-full"
                style={{
                  border: '1px solid rgba(184,150,46,0.35)',
                  backgroundColor: 'rgba(184,150,46,0.08)',
                }}
              >
                <svg
                  className="w-3.5 h-3.5 flex-shrink-0"
                  style={{ color: '#b8962e' }}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: '#b8962e' }}
                >
                  {f.year} {f.label}
                </span>
              </div>
            ))}

            {/* Mobile: photo + title row */}
            <div className="lg:hidden flex items-center gap-5 mb-8">
              <div
                className="flex-shrink-0 rounded-full overflow-hidden shadow-lg"
                style={{ width: '140px', height: '140px', border: '3px solid white' }}
              >
                <img
                  src={imageUrl}
                  alt={title}
                  width={140}
                  height={140}
                  className="block"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    transform: 'scale(1.2)',
                    transformOrigin: 'center top',
                  }}
                />
              </div>
              <div>
                <h1
                  className="text-3xl font-serif font-semibold leading-tight"
                  style={{ color: '#1a2e1e' }}
                >
                  {title}
                </h1>
                <p
                  className="mt-1.5 text-xs font-semibold tracking-widest uppercase"
                  style={{ color: '#4a7c59' }}
                >
                  {subtitle}
                </p>
              </div>
            </div>

            {/* Desktop title */}
            <div className="hidden lg:block">
              <h1
                className="font-serif font-semibold leading-[1.08] mb-4"
                style={{
                  fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                  color: '#1a2e1e',
                }}
              >
                {title}
              </h1>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-8"
                style={{ color: '#4a7c59' }}
              >
                {subtitle}
              </p>
            </div>

            <p
              className="text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: '#5a7060' }}
            >
              {description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-14">
              {ctaText && ctaUrl && (
                <a
                  href={ctaUrl}
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-lg transition-colors duration-200 text-sm"
                  style={{ backgroundColor: '#1a3325' }}
                >
                  {ctaText}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              )}
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded-lg transition-all duration-200 text-sm"
                style={{
                  border: '1px solid #c8dcc8',
                  color: '#2d5a3d',
                  backgroundColor: 'white',
                }}
              >
                About Mandy
              </a>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-6 pt-8"
              style={{ borderTop: '1px solid #dde8de' }}
            >
              <div>
                <div
                  className="text-3xl font-serif font-semibold"
                  style={{ color: '#1a3325' }}
                >
                  62K+
                </div>
                <div
                  className="text-xs font-medium tracking-wide uppercase mt-1"
                  style={{ color: '#6b7f70' }}
                >
                  Student Visits
                </div>
              </div>
              <div>
                <div
                  className="text-3xl font-serif font-semibold"
                  style={{ color: '#1a3325' }}
                >
                  60
                </div>
                <div
                  className="text-xs font-medium tracking-wide uppercase mt-1"
                  style={{ color: '#6b7f70' }}
                >
                  Schools Served
                </div>
              </div>
              <div>
                <div
                  className="text-3xl font-serif font-semibold"
                  style={{ color: '#1a3325' }}
                >
                  $2.2M+
                </div>
                <div
                  className="text-xs font-medium tracking-wide uppercase mt-1"
                  style={{ color: '#6b7f70' }}
                >
                  Competitive Grants
                </div>
              </div>
            </div>
          </div>

          {/* Photo panel — desktop only */}
          <div className="order-1 lg:order-2 hidden lg:flex items-center py-12">
            <div className="relative w-full">
              <div
                className="overflow-hidden rounded-2xl shadow-xl"
                style={{ border: '1px solid #dde8de' }}
              >
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-auto object-cover object-top"
                  style={{
                    maxHeight: '560px',
                    objectPosition: 'center top',
                  }}
                />
              </div>
              {/* Offset decorative border */}
              <div
                className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl pointer-events-none"
                style={{ border: '1px solid #c8dcc8', zIndex: -1 }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
