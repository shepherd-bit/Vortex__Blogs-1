import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-[#FAF9F6] rounded-t-[32px] mt-0 overflow-hidden relative">
      <div className="absolute right-0 top-0 w-[420px] h-[420px] rounded-full bg-[#E8FF5A]/10 blur-[60px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#FAF9F6] text-black flex items-center justify-center font-bold text-[12px]">
            T
          </div>
          <div>
            <div className="text-[20px] font-bold leading-none tracking-tight">
              Transparency is trust.
            </div>
            <div className="text-[12px] text-white/50 mt-1">
              CEO Journal • Austin, TX • 2024—2026 • No cookies, no trackers.
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-4 h-10 rounded-full bg-white/10 border border-white/10 text-[12px]">
            Questions? <span className="text-white font-medium">titus@vortexuas.com</span>
          </div>
          <a 
            href="mailto:titus@vortexuas.com" 
            className="h-10 px-5 rounded-full bg-[#E8FF5A] text-black text-[13px] font-medium flex items-center gap-2 hover:bg-[#E8FF5A]/90 transition"
          >
            Say hi <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 h-12 flex items-center justify-between text-[11px] text-white/30 tracking-wide">
          <span>© TITUS O. — BUILT IN PUBLIC • AUSTIN, TX</span>
          <span className="hidden md:block">MADE IN TEXAS • FAA Part 107 • TxDOT UAS CORRIDOR</span>
          <span>AUSTIN • WEST TEXAS</span>
        </div>
      </div>
    </footer>
  );
};
