import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { LAUNCH_EASE } from './PageTransition';

interface NavbarProps {
  onNavigateSection: (sectionId: string) => void;
  onGoHome: () => void;
  isDetailView?: boolean;
}

/** Drawer links — the desktop nav row above covers 768px and up. */
const MOBILE_NAV_LINKS = [
  { id: 'updates', label: 'Updates', hint: 'Every note, newest first' },
  { id: 'vault', label: 'Documents', hint: 'FAA + TxDOT filings' },
  { id: 'letter', label: 'Letter', hint: 'Q2 2026, from the CEO' },
  { id: 'about', label: 'About', hint: 'Who runs this log' },
];

export const Navbar: React.FC<NavbarProps> = ({
  onNavigateSection,
  onGoHome,
  isDetailView = false
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Never let the drawer outlive a resize back into desktop layout.
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 768px)');
    const closeOnDesktop = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  // Escape closes the drawer; the page behind it stops scrolling.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const handleDrawerNavigate = (sectionId: string) => {
    setMenuOpen(false);
    onNavigateSection(sectionId);
  };

  return (
    <nav className="sticky top-0 z-40 backdrop-blur-xl bg-[#FAF9F6]/80 border-b border-black/[0.06]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 h-[64px] flex items-center justify-between">
        <div
          onClick={onGoHome}
          className="flex items-center gap-3 cursor-pointer group min-w-0"
          title="Back to CEO Journal Home"
        >
          <div className="w-7 h-7 rounded-full bg-black text-[#E8FF5A] flex items-center justify-center text-[11px] font-semibold tracking-widest group-hover:scale-105 transition-transform shrink-0">
            T
          </div>
          <span className="text-[12px] font-semibold tracking-[0.18em] truncate">
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

        <div className="flex items-center gap-3 shrink-0">
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
          ) : null}
          {/* Mobile menu trigger — the nav links are hidden below `md`. */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden w-9 h-9 rounded-full bg-white border border-black/10 flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.04)] active:scale-95 transition-transform"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile drawer — `md:hidden`, so desktop never renders it. */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-nav"
            className="md:hidden fixed inset-0 z-50 bg-[#FAF9F6] flex flex-col overflow-y-auto"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: LAUNCH_EASE }}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="w-full max-w-[1280px] mx-auto px-6 h-[64px] flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-7 h-7 rounded-full bg-black text-[#E8FF5A] flex items-center justify-center text-[11px] font-semibold tracking-widest shrink-0">
                  T
                </div>
                <span className="text-[12px] font-semibold tracking-[0.18em] truncate">
                  TITUS O. — CEO JOURNAL
                </span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-white border border-black/10 flex items-center justify-center shrink-0 active:scale-95 transition-transform"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <nav className="w-full max-w-[1280px] mx-auto px-6 flex-1">
              {MOBILE_NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleDrawerNavigate(link.id)}
                  className="w-full min-h-[64px] flex items-center justify-between gap-4 py-6 border-b border-black/[0.08] text-left active:opacity-60 transition-opacity"
                >
                  <span className="text-[26px] font-bold tracking-[-0.02em] leading-none">
                    {link.label}
                  </span>
                  <span className="text-[11px] text-black/40 text-right shrink-0">
                    {link.hint}
                  </span>
                </button>
              ))}
            </nav>

            <div className="w-full max-w-[1280px] mx-auto px-6 py-6 flex items-center justify-between gap-3 shrink-0">
              <span className="flex items-center gap-2 text-[11px] text-black/50">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2f9e44]" />
                EST 2024 • AUSTIN, TX
              </span>
              <a
                href="mailto:titus@vortexuas.com"
                className="h-9 px-4 rounded-full bg-black text-white text-[12px] font-medium flex items-center active:opacity-80 transition-opacity"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
