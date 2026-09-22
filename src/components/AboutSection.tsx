import React from 'react';

interface AboutSectionProps {
  onSelectPost: (postId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onSelectPost }) => {
  return (
    <section id="about" className="border-t border-black/10 bg-[#F2EDE8]/70">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-14 md:py-20 grid md:grid-cols-[1.1fr_0.9fr] gap-12">
        <div>
          <div className="text-[11px] tracking-[0.18em] text-black/40 font-semibold">
            ABOUT THIS JOURNAL • TEXAS UAS
          </div>
          <h4 className="text-[28px] md:text-[36px] font-bold leading-[0.95] mt-4 max-w-[18ch] tracking-[-0.02em] text-[#111]">
            A Texas UAS log built like a flight log, not a press release.
          </h4>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "No ghostwriter",
              "No PR filter",
              "Files > Words",
              "Texas-built",
              "Part 107 Compliant"
            ].map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1.5 rounded-full bg-white border border-black/10 text-[12px] font-medium shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="text-[14px] leading-[1.7] text-black/70 space-y-4">
          <p>
            Hi — I’m Titus. I run a small team in Austin, Texas building long-range delivery drones for the Texas triangle. This journal is my attempt to make company building legible: flight hours, FAA filings, failures, and decisions that didn’t make the pitch deck.
          </p>
          <p>
            If you’re an investor: everything material is in Updates + Vault — including our{" "}
            <button 
              onClick={() => onSelectPost('2')}
              className="text-black font-semibold underline underline-offset-4 decoration-black/30 hover:decoration-black"
            >
              47km West Texas range test
            </button>. If you’re a regulator: FAA Part 107 and Texas DOT UAS corridor docs are tagged. If you’re public: start with our{" "}
            <button 
              onClick={() => onSelectPost('1')}
              className="text-black font-semibold underline underline-offset-4 decoration-black/30 hover:decoration-black"
            >
              Q2 Operational and Financial Review
            </button>.
          </p>
          <div className="pt-2 flex items-center gap-3">
            <div className="h-px flex-1 bg-black/10" />
            <span className="text-[11px] tracking-wide text-black/40 font-mono">
              EST 2024 • AUSTIN, TX • FAA Part 107 • Texas DOT UAS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
