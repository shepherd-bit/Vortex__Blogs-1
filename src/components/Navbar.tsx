import React from 'react';

interface NavbarProps {
  onNavigateSection: (sectionId: string) => void;
  onGoHome: () => void;
  isDetailView?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigateSection,
  onGoHome,
  isDetailView = false
}) => {
  return (
    <nav className="sticky top-0 z-40 backdrop-blur-xl bg-[#FAF9F6]/80 border-b border-black/[0.06]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 h-[64px] flex items-center justify-between">
        <div 
          onClick={onGoHome}
          className="flex items-center gap-3 cursor-pointer group"
          title="Back to CEO Journal Home"
        >
          <div className="w-7 h-7 rounded-full bg-black text-[#E8FF5A] flex items-center justify-center text-[11px] font-semibold tracking-widest group-hover:scale-105 transition-transform">
            T
          </div>
          <span className="text-[12px] font-semibold tracking-[0.18em]">
            TITUS O. — CEO JOURNAL • AUSTIN, TX
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[13px]">
          <button 
            onClick={() => onNavigateSection('updates')} 
            className="hover:opacity-60 transition font-medium"
          >
            Updates
          </button>
          <button 
            onClick={() => onNavigateSection('vault')} 
            className="hover:opacity-60 transition font-medium"
          >
            Documents
          </button>
          <button 
            onClick={() => onNavigateSection('letter')} 
            className="hover:opacity-60 transition font-medium"
          >
            Letter
          </button>
          <button 
            onClick={() => onNavigateSection('about')} 
            className="hover:opacity-60 transition font-medium"
          >
            About
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-black/10 text-[11px] tracking-wide shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2f9e44] animate-pulse" />
            EST 2024 • AUSTIN, TX
          </div>
          {isDetailView ? (
            <button
              onClick={onGoHome}
              className="text-[12px] font-medium px-3.5 py-1.5 rounded-full bg-black text-white hover:bg-black/90 transition"
            >
              ← Back to Journal
            </button>
          ) : (
            <button
              onClick={() => onNavigateSection('updates')}
              className="md:hidden text-[12px] font-medium px-3 py-1.5 rounded-full bg-black text-white"
            >
              Browse
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
