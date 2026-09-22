import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CeoLetterProps {
  onOpenVault: () => void;
}

export const CeoLetter: React.FC<CeoLetterProps> = ({ onOpenVault }) => {
  return (
    <section id="letter" className="max-w-[1280px] mx-auto px-6 md:px-8 pb-12">
      <div className="rounded-[32px] bg-[#111] text-[#FAF9F6] overflow-hidden relative border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
            backgroundSize: '22px 22px'
          }}
        />
        <div className="absolute -right-20 -top-20 w-[420px] h-[420px] rounded-full bg-[#E8FF5A]/20 blur-[60px] pointer-events-none" />

        <div className="relative grid md:grid-cols-[1.1fr_0.9fr] gap-10 p-8 md:p-12 lg:p-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[11px] tracking-wide">
              CEO LETTER • Q2 2026 • AUSTIN, TX
            </div>

            <h2 className="text-[32px] md:text-[44px] font-bold leading-[0.95] tracking-[-0.02em] mt-6">
              “We’re not optimizing for optics. We’re optimizing for{" "}
              <span className="italic font-[800] text-[#E8FF5A]">staying power</span>.”
            </h2>

            <div className="mt-8 space-y-5 text-[15px] leading-[1.7] text-white/70 max-w-[56ch]">
              <p>
                Last month, an FAA inspector asked why we publish burn, failed hires, and term sheets we walked away from. My answer: if Texas is going to lead in UAS, trust can’t be a landing page. It has to be a flight log.
              </p>
              <p>
                Q2 was messy and good. Vortex X1 hit 47km over West Texas in 18mph crosswind, but our Austin line lost 2 days to a battery supplier QA miss. We said no to $2M because the SAFE would have moved IP out of Texas. Some called it naive. I call it alignment.
              </p>
              <p className="text-white/90 font-medium">
                This is a long game. The vault below is open for a reason.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#E8FF5A] text-black flex items-center justify-center font-bold text-[12px] shadow-sm">
                TO
              </div>
              <div>
                <div className="text-[18px] font-semibold leading-none">Titus O.</div>
                <div className="text-[11px] tracking-wide text-white/50 mt-1">
                  FOUNDER & CEO • SIGNING FROM EAST AUSTIN • TEXAS UAS
                </div>
              </div>
              <div className="ml-auto hidden md:block italic font-bold text-[28px] opacity-20 rotate-[-8deg] select-none">
                T.O.
              </div>
            </div>
          </div>

          <div className="md:border-l md:border-white/10 md:pl-10 flex flex-col justify-between">
            <div>
              <div className="text-[11px] tracking-[0.18em] text-white/40 font-semibold">
                AT A GLANCE
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { k: "Runway", v: "11 mo", sub: "at current burn • TX" },
                  { k: "Fleet", v: "12", sub: "X1 airframes • Austin" },
                  { k: "Flight Hrs", v: "1,240", sub: "Q2 • West Texas" },
                  { k: "Airworthy", v: "99.92%", sub: "Part 107 compliance" }
                ].map((item) => (
                  <div key={item.k} className="rounded-[20px] bg-white/[0.06] border border-white/10 p-4">
                    <div className="text-[11px] text-white/40 tracking-wide font-medium">{item.k}</div>
                    <div className="text-[28px] font-bold tracking-tight leading-none mt-2 text-white">{item.v}</div>
                    <div className="text-[11px] text-white/40 mt-2 font-mono">{item.sub}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[20px] bg-[#E8FF5A] text-black p-5 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold tracking-wide">OPEN VAULT</div>
                  <div className="text-[13px] mt-1 leading-tight font-medium">6 docs • FAA + TxDOT • no login</div>
                </div>
                <button 
                  onClick={onOpenVault}
                  className="w-9 h-9 rounded-full bg-black text-[#E8FF5A] flex items-center justify-center hover:scale-105 transition-transform"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="mt-6 text-[11px] leading-[1.5] text-white/30">
              This letter is not legal advice. FAA & TxDOT filings are in Vault. Forward-looking statements subject to UAS operational risk.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
