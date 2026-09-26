import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight, FileText } from 'lucide-react';
import { DRONE_IMAGE_BASE64 } from '../data/droneAsset';

interface HeroProps {
  onReadLatest: () => void;
  onOpenVault: () => void;
  onSelectPost: (postId: string) => void;
  vaultCount: number;
}

export const Hero: React.FC<HeroProps> = ({
  onReadLatest,
  onOpenVault,
  onSelectPost,
  vaultCount
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // The parallax only drives the `hidden lg:block` floating assets, so on
    // touch devices there is nothing to move — skip the listener entirely.
    if (window.matchMedia('(hover: none)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setMousePos({
        x: (e.clientX - centerX) / centerX,
        y: (e.clientY - centerY) / centerY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative max-w-[1280px] mx-auto px-6 md:px-8 pt-14 md:pt-20 pb-16 md:pb-28 overflow-hidden lg:overflow-visible"
    >
      {/* Background ambient blurs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[10%] w-[520px] h-[520px] rounded-full bg-[#F2EDE8] blur-[40px] opacity-80" />
        <div className="absolute right-[-8%] top-[20%] w-[360px] h-[360px] rounded-full bg-[#E8FF5A]/60 blur-[32px] opacity-70" />
        <div className="absolute left-[30%] bottom-[-10%] w-[700px] h-[400px] rounded-full bg-white blur-[60px] opacity-90" />
      </div>

      {/* Desktop Floating Assets & Parallax */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none overflow-hidden">
        {/* Drone Asset */}
        <div 
          className="absolute right-[2%] top-[2%] w-[560px] max-w-[48vw] select-none pointer-events-auto cursor-pointer group"
          onClick={() => onSelectPost('2')}
          title="Click to view Vortex X1 Range Test Log"
          style={{
            animation: 'floatDrone 6.5s ease-in-out infinite',
            transform: `translate3d(${mousePos.x * 14}px, ${mousePos.y * -10}px, 0) rotate(-6deg)`
          }}
        >
          <div className="relative">
            <img 
              src="./hero-image/drone-hero-3.PNG"
              alt="Matte black delivery drone hovering"
              className="w-full h-auto object-contain transition-transform group-hover:scale-105"
              style={{ filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.25))' }}
            />
            <div 
              className="absolute left-[18%] right-[18%] -bottom-2 h-[36px] rounded-[100%] bg-black/30 blur-[18px]"
              style={{ animation: 'shadowPulse 6.5s ease-in-out infinite' }}
            />
            <div className="absolute top-[12%] right-[14%] px-2.5 py-1 rounded-full bg-black text-[#E8FF5A] text-[10px] font-semibold tracking-wide flex items-center gap-1.5 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8FF5A] animate-pulse" />
              VORTEX X1 • HOVER
            </div>
          </div>
        </div>

        {/* Floating Document Card (Q2 Memo) */}
        <div 
          onClick={() => onSelectPost('1')}
          className="absolute left-[2%] top-[16%] w-[252px] bg-white rounded-[20px] border border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] p-4 z-10 pointer-events-auto cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all"
          style={{
            animation: 'floatA 6s ease-in-out infinite',
            transform: `translate3d(${mousePos.x * -18}px, ${mousePos.y * -12}px, 0) rotate(-2deg)`
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-[11px] font-medium text-black/60">
              <div className="w-6 h-6 rounded-full bg-[#FAF9F6] border border-black/10 flex items-center justify-center">
                <FileText className="w-3 h-3" />
              </div>
              Q2 2026
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E8FF5A] text-black font-semibold">
              PDF
            </span>
          </div>
          <div className="text-[13px] font-semibold leading-tight text-[#111]">
            Investor Memo.pdf
          </div>
          <div className="mt-2 h-[5px] w-full bg-black/5 rounded-full overflow-hidden">
            <div className="h-full w-[72%] bg-black rounded-full" />
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-[11px] text-black/40">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            12 pages • 1,240 hrs logged
          </div>
        </div>

        {/* Floating Stat Card ($1.2M ARR) */}
        <div 
          onClick={() => onSelectPost('1')}
          className="absolute right-[22%] top-[56%] w-[200px] bg-[#111] text-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.18)] p-4 z-20 pointer-events-auto cursor-pointer hover:scale-105 transition-transform"
          style={{
            animation: 'floatB 7s ease-in-out infinite',
            transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * -14}px, 0) rotate(2deg)`
          }}
        >
          <div className="flex items-center justify-between text-[11px] text-white/60">
            <span>FLIGHT HRS</span>
            <span className="flex items-center gap-1 text-[#E8FF5A]">
              <ArrowUpRight className="w-3 h-3" /> LIVE
            </span>
          </div>
          <div className="text-[28px] font-bold tracking-tight leading-none mt-2">
            $1.2M ARR
          </div>
          <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 text-[11px] text-[#E8FF5A]">
            ↑ 1,240 hrs • 47km test
          </div>
          <div className="mt-3 flex gap-1 h-6 items-end">
            {[30, 50, 35, 70, 55, 80, 65].map((val, idx) => (
              <div 
                key={idx}
                className="flex-1 bg-white/15 rounded-full hover:bg-[#E8FF5A] transition-colors"
                style={{ height: `${val}%`, minHeight: '6px' }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Hero Copy */}
      <div className="relative z-10 max-w-[820px] mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/10 text-[11px] tracking-wide shadow-[0_4px_16px_rgba(0,0,0,0.04)] mb-6">
          <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
          TRANSPARENCY LOG • AUSTIN, TX • UPDATED 2 DAYS AGO
        </div>

        <h1 className="text-[44px] md:text-[72px] lg:text-[84px] font-[800] leading-[0.9] tracking-[-0.04em] text-balance">
          Building in public is a{" "}
          <span className="bg-[#E8FF5A] px-2 md:px-3 rounded-[12px] md:rounded-[18px] inline-block -rotate-[1deg] font-[800] shadow-sm">
            feature,
          </span>{" "}
          not a bug.
        </h1>

        <p className="mt-6 text-[16px] md:text-[18px] leading-[1.6] text-black/60 max-w-[560px] mx-auto">
          Texas-based UAS. Monthly notes, FAA filings, and raw flight logs from the CEO. No PR filter. For investors, regulators, and anyone who cares how drones get built in Austin.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button 
            onClick={onReadLatest}
            className="h-11 px-6 rounded-full bg-black text-white text-[13px] font-medium flex items-center gap-2 hover:bg-black/90 transition shadow-sm"
          >
            Read latest <ArrowRight className="w-4 h-4" />
          </button>
          <button 
            onClick={onOpenVault}
            className="h-11 px-6 rounded-full bg-white border border-black/10 text-[13px] font-medium shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:bg-[#F2EDE8] transition"
          >
            Vault ({vaultCount})
          </button>
        </div>

        {/* Mobile Mockup representation */}
        <div className="mt-10 lg:hidden">
          <div 
            onClick={() => onSelectPost('2')}
            className="relative mx-auto max-w-[360px] cursor-pointer"
          >
            <img 
              src={DRONE_IMAGE_BASE64}
              alt="Matte black delivery drone"
              className="w-full h-auto object-contain rotate-[-6deg]"
              style={{ filter: 'drop-shadow(0 24px 40px rgba(0,0,0,0.2))' }}
            />
            <div className="absolute left-[20%] right-[20%] -bottom-1 h-[24px] bg-black/20 blur-[14px] rounded-[100%]" />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 max-w-[420px] mx-auto text-left">
            <div 
              onClick={() => onSelectPost('1')}
              className="bg-white rounded-[18px] border border-black/10 p-3 shadow-[0_10px_30px_rgba(0,0,0,0.06)] cursor-pointer"
            >
              <div className="text-[10px] text-black/40">Q2 2026 • PDF</div>
              <div className="text-[13px] font-medium mt-1 leading-tight">Investor Memo.pdf</div>
            </div>
            <div 
              onClick={() => onSelectPost('1')}
              className="bg-[#111] text-white rounded-[18px] p-3 cursor-pointer"
            >
              <div className="text-[10px] text-white/50">FLIGHT HRS</div>
              <div className="text-[22px] font-bold tracking-tight">
                $1.2M <span className="text-[12px] text-[#E8FF5A] font-medium">↑34%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
