import React, { useState, useEffect } from 'react';

interface NavigationItem {
  id: string;
  label: string;
  icon: string;
}

interface SectionNavigationProps {
  sections: NavigationItem[];
}

const SectionNavigation: React.FC<SectionNavigationProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
      <nav aria-label="On this page" className="bg-white rounded-2xl shadow-xl border border-[#dde8de] p-3">
        <ul className="space-y-1">
          {sections.map((section) => {
            const active = activeSection === section.id;
            return (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  aria-current={active ? 'true' : undefined}
                  className={`flex items-center gap-3 w-full pl-3 pr-5 py-2.5 rounded-xl text-left transition-all duration-200 ${
                    active
                      ? 'bg-[#e8f0eb] text-[#1a3325] font-semibold'
                      : 'text-[#4f6357] hover:bg-[#f0f4f1] hover:text-[#1a3325]'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`h-2 w-2 rounded-full flex-shrink-0 transition-colors ${active ? 'bg-[#2d5a3d]' : 'bg-[#c8dcc8]'}`}
                  />
                  <span className="text-sm whitespace-nowrap">{section.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default SectionNavigation;