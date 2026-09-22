import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  MapPin, 
  FileText, 
  FileSpreadsheet, 
  ChartColumn, 
  Video, 
  Play, 
  Download, 
  ExternalLink, 
  ShieldCheck, 
  Check, 
  Copy, 
  ArrowUpRight 
} from 'lucide-react';
import { BlogPost, FileType } from '../types';

interface BlogDetailViewProps {
  post: BlogPost;
  onBack: () => void;
  onSelectPost: (postId: string) => void;
  allPosts: BlogPost[];
}

export const BlogDetailView: React.FC<BlogDetailViewProps> = ({
  post,
  onBack,
  onSelectPost,
  allPosts
}) => {
  const [pdfExpanded, setPdfExpanded] = useState(true);
  const [csvExpanded, setCsvExpanded] = useState(true);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const currentIndex = allPosts.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : allPosts[allPosts.length - 1];
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : allPosts[0];

  const handleCopyLink = () => {
    navigator.clipboard?.writeText?.(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleDownload = (filename: string) => {
    setDownloadSuccess(filename);
    setTimeout(() => setDownloadSuccess(null), 2500);
  };

  const renderFileIcon = (type: FileType) => {
    switch (type) {
      case 'PDF':
        return <FileText className="w-5 h-5" />;
      case 'CSV':
        return <FileSpreadsheet className="w-5 h-5" />;
      case 'Deck':
        return <ChartColumn className="w-5 h-5" />;
      case 'Video':
      case 'MP4':
        return <Video className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#141414] selection:bg-[#E8FF5A] selection:text-black">
      {/* Detail View Header */}
      <header className="sticky top-0 z-40 backdrop-blur-[18px] bg-[#FAF9F6]/80 border-b border-black/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 h-[64px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={onBack}
              className="w-[28px] h-[28px] rounded-full bg-black text-[#E8FF5A] flex items-center justify-center font-black text-[11px] tracking-widest hover:scale-105 transition-transform"
              title="Back to Home"
            >
              V
            </button>
            <div className="font-[800] tracking-[-0.02em] text-[13px] md:text-[14px] leading-none">
              VORTEX — CEO JOURNAL
            </div>
            <div className="hidden md:block h-[14px] w-px bg-black/10 ml-2" />
            <div className="hidden md:block text-[11px] tracking-[0.14em] font-[600] text-black/40 uppercase">
              TRANSPARENCY HUB
            </div>
          </div>

          <button 
            onClick={onBack}
            className="hidden md:flex items-center gap-2 px-4 h-8 rounded-full bg-white border border-black/[0.08] shadow-[0_1px_2px_rgba(0,0,0,0.04)] text-[12.5px] font-[500] tracking-[-0.01em] hover:bg-black hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Back to Updates
          </button>

          <div className="flex items-center gap-2">
            <button 
              onClick={onBack}
              className="md:hidden w-8 h-8 rounded-full bg-white border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition"
              title="Back"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="px-3 h-7 rounded-full bg-black text-white flex items-center gap-1.5 text-[11px] font-[700] tracking-[0.08em]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E8FF5A] animate-pulse" />
              AUSTIN, TX
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative max-w-[1200px] mx-auto px-6 md:px-8 pt-10 md:pt-14">
        {/* Post Heading & Top Meta */}
        <div className="max-w-[900px]">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="px-3 py-1.5 rounded-full bg-[#E8FF5A] text-black text-[11px] font-[700] tracking-[0.12em] uppercase">
              FOR {post.category.toUpperCase()}S
            </div>
            <div className="flex items-center gap-2 text-[12px] font-[500] tracking-[0.04em] text-black/50 font-mono">
              <span>{post.date.toUpperCase()}</span>
              <span className="w-1 h-1 rounded-full bg-black/20" />
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" /> {post.readTime}
              </span>
            </div>
          </div>

          <h1 className="font-[900] text-[36px] md:text-[60px] leading-[0.92] tracking-[-0.04em] mb-6 text-[#111]">
            {post.title}
            {post.subtitle && (
              <>
                <br />
                <span className="font-[400] tracking-[-0.03em] text-black/70">
                  {post.subtitle}
                </span>
              </>
            )}
          </h1>

          <div className="flex items-center gap-3 mb-8">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="w-9 h-9 rounded-full object-cover border border-black/10" 
            />
            <div className="text-[13px] leading-[1.2]">
              <div className="font-[700] tracking-[-0.01em]">
                {post.author.name} — {post.author.role}
              </div>
              <div className="font-[400] text-black/50">
                {post.author.locationNote}
              </div>
            </div>
            <div className="ml-auto hidden md:flex items-center gap-2 text-[11px] font-[600] tracking-[0.08em] text-black/40 font-mono">
              <MapPin className="w-3.5 h-3.5" /> {post.author.coordinates}
            </div>
          </div>

          {/* Metric Highlights */}
          <div className="grid grid-cols-3 gap-3 mb-10">
            {post.highlightMetrics.map((m) => (
              <div 
                key={m.label}
                className="rounded-[20px] bg-white border border-black/[0.06] shadow-[0_8px_24px_rgba(0,0,0,0.04)] p-4 md:p-5 backdrop-blur-xl"
              >
                <div className="text-[10px] font-[700] tracking-[0.16em] text-black/40 mb-1">
                  {m.label}
                </div>
                <div className="text-[22px] md:text-[26px] font-[800] tracking-[-0.03em] leading-none mb-1 text-[#111]">
                  {m.value}
                </div>
                <div className="text-[11px] font-[500] text-black/40">
                  {m.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column Content + Sticky Sidebar */}
        <div className="grid lg:grid-cols-[1.65fr_0.95fr] gap-10 md:gap-14 items-start pb-16 border-b border-black/[0.06]">
          {/* Left Main Article Column */}
          <div className="min-w-0">
            <p className="text-[19px] md:text-[20px] leading-[1.55] tracking-[-0.01em] font-[400] text-black/80 mb-8">
              {post.intro}
            </p>

            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-black/10" />
              <div className="text-[10px] font-[700] tracking-[0.2em] text-black/30 font-mono">
                {post.fieldNoteNumber}
              </div>
              <div className="h-px flex-1 bg-black/10" />
            </div>

            <div className="space-y-8">
              {post.sections.map((sec, idx) => (
                <section key={sec.id} id={sec.id} className="pt-2">
                  <h2 className="font-[800] text-[22px] md:text-[26px] tracking-[-0.03em] leading-[1.1] mb-4 text-[#111]">
                    {sec.title}
                  </h2>

                  <div className="space-y-4">
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-[15.5px] leading-[1.75] text-black/70 font-[400]">
                        {p}
                      </p>
                    ))}
                  </div>

                  {sec.quote && (
                    <div className="my-8 rounded-[24px] bg-white border border-black/[0.06] p-6 md:p-7 flex gap-5 shadow-sm">
                      <div className="w-1 self-stretch rounded-full bg-[#E8FF5A] shrink-0" />
                      <div>
                        <p className="text-[16px] md:text-[18px] leading-[1.5] font-[600] tracking-[-0.01em] text-[#111]">
                          {sec.quote.text}
                        </p>
                        <div className="mt-3 text-[12px] font-[600] tracking-[0.06em] text-black/40">
                          {sec.quote.author}
                        </div>
                      </div>
                    </div>
                  )}

                  {sec.bulletPoints && (
                    <ul className="space-y-3 mt-5">
                      {sec.bulletPoints.map((item, bIdx) => (
                        <li key={bIdx} className="flex gap-3 text-[14.5px] leading-[1.6] text-black/70">
                          <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.orderedPoints && (
                    <ol className="space-y-3 list-none counter mt-5">
                      {sec.orderedPoints.map((item, oIdx) => (
                        <li key={oIdx} className="flex gap-4 text-[14.5px] leading-[1.6] text-black/70">
                          <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-[11px] font-[700] shrink-0">
                            {oIdx + 1}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ol>
                  )}

                  {sec.externalLink && (
                    <div className="mt-6 rounded-[20px] bg-white border border-black/[0.06] p-4 flex gap-3 shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-[#E8FF5A] flex items-center justify-center shrink-0 mt-0.5">
                        <ExternalLink className="w-4 h-4 text-black" />
                      </div>
                      <div>
                        <div className="text-[12px] font-[700] tracking-[0.08em] text-black/40 mb-1">
                          {sec.externalLink.badge}
                        </div>
                        <a 
                          href={sec.externalLink.href}
                          className="text-[14px] font-[600] tracking-[-0.01em] underline decoration-black/20 underline-offset-4 hover:decoration-black text-[#111]"
                        >
                          {sec.externalLink.title}
                        </a>
                        <div className="text-[12px] text-black/40 mt-1 font-mono">
                          {sec.externalLink.meta}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* If this is the flight corridor section, show interactive SVG map */}
                  {idx === 1 && post.flightMapData && (
                    <div className="mt-8 rounded-[32px] overflow-hidden bg-[#0E0E0E] border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
                      <div className="flex items-center justify-between px-6 h-[52px] border-b border-white/10">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#E8FF5A] flex items-center justify-center">
                            <MapPin className="w-3.5 h-3.5 text-black" />
                          </div>
                          <div className="text-white text-[12px] font-[600] tracking-[0.06em]">
                            {post.flightMapData.corridorName}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] font-[500] text-white/40">
                          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          LIVE LOG REPLAY
                        </div>
                      </div>

                      <div className="relative h-[340px] md:h-[380px] bg-[#121212] overflow-hidden">
                        <div 
                          className="absolute inset-0 opacity-[0.08]"
                          style={{
                            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                            backgroundSize: '32px 32px'
                          }}
                        />
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 380">
                          <path d="M0 80 Q 200 60 400 90 T 800 70" stroke="white" strokeOpacity="0.07" fill="none" strokeWidth="1" />
                          <path d="M0 180 Q 200 160 400 190 T 800 170" stroke="white" strokeOpacity="0.07" fill="none" strokeWidth="1" />
                          <path d="M0 280 Q 200 260 400 290 T 800 270" stroke="white" strokeOpacity="0.07" fill="none" strokeWidth="1" />
                          
                          {/* Main trajectory flight line */}
                          <path 
                            d="M 60 240 C 180 220, 260 180, 360 200 C 460 220, 520 140, 640 160 C 700 170, 730 120, 740 100" 
                            stroke="#E8FF5A" 
                            strokeWidth="3" 
                            fill="none" 
                            strokeLinecap="round" 
                            strokeDasharray="8 8" 
                          />
                          <path 
                            d="M 60 240 C 180 220, 260 180, 360 200 C 460 220, 520 140, 640 160 C 700 170, 730 120, 740 100" 
                            stroke="#E8FF5A" 
                            strokeWidth="8" 
                            fill="none" 
                            opacity="0.15" 
                            strokeLinecap="round" 
                          />

                          {/* Waypoints */}
                          <g>
                            <circle cx="60" cy="240" r="6" fill="#E8FF5A" />
                            <circle cx="60" cy="240" r="12" fill="#E8FF5A" opacity="0.2" />
                            <text x="60" y="268" fill="white" fontSize="11" fontWeight="600" textAnchor="middle" opacity="0.7">
                              LAUNCH
                            </text>
                          </g>

                          <g>
                            <circle cx="360" cy="200" r="4" fill="white" opacity="0.9" />
                            <rect x="348" y="140" width="88" height="22" rx="11" fill="white" />
                            <text x="392" y="154" fill="black" fontSize="10" fontWeight="700" textAnchor="middle">
                              WIND 26mph
                            </text>
                          </g>

                          <g>
                            <circle cx="640" cy="160" r="4" fill="white" opacity="0.9" />
                            <rect x="560" y="175" width="118" height="22" rx="11" fill="#E8FF5A" />
                            <text x="619" y="189" fill="black" fontSize="10" fontWeight="700" textAnchor="middle">
                              OBSTACLE AVOID x3
                            </text>
                          </g>

                          <g>
                            <circle cx="740" cy="100" r="7" fill="white" />
                            <circle cx="740" cy="100" r="14" fill="white" opacity="0.2" />
                            <text x="740" y="80" fill="white" fontSize="11" fontWeight="600" textAnchor="middle" opacity="0.9">
                              CACHE PT
                            </text>
                          </g>
                        </svg>

                        <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                          <div className="px-3 py-2 rounded-full bg-white/10 backdrop-blur border border-white/10 text-white text-[11px] font-[600]">
                            {post.flightMapData.statsPill}
                          </div>
                          <div className="px-3 py-2 rounded-full bg-[#E8FF5A] text-black text-[11px] font-[700]">
                            {post.flightMapData.statusPill}
                          </div>
                        </div>
                      </div>

                      <div className="px-6 py-3 bg-[#0E0E0E] flex items-center justify-between border-t border-white/10">
                        <div className="text-[11px] font-[500] text-white/40 font-mono">
                          {post.flightMapData.logId}
                        </div>
                        <div className="text-[11px] font-[700] tracking-[0.08em] text-white/60">
                          {post.flightMapData.figNumber}
                        </div>
                      </div>
                    </div>
                  )}
                </section>
              ))}

              {/* Video Player Preview Container */}
              {post.videoData && (
                <div className="rounded-[32px] overflow-hidden bg-black border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
                  <div 
                    className="relative aspect-[16/9] bg-[#101010] group cursor-pointer"
                    onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                  >
                    <img 
                      src={post.videoData.thumbnailUrl}
                      alt={post.videoData.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-[1.02] transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-[72px] h-[72px] rounded-full bg-[#E8FF5A] flex items-center justify-center shadow-[0_8px_32px_rgba(232,255,90,0.5)] transition-transform group-hover:scale-110 ${
                        isPlayingVideo ? 'scale-90 opacity-0' : ''
                      }`}>
                        <Play className="w-7 h-7 text-black ml-1" fill="black" />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                      <div>
                        <div className="text-white font-[700] tracking-[-0.01em] text-[15px]">
                          {post.videoData.title}
                        </div>
                        <div className="text-white/60 text-[12px] font-[500] mt-1">
                          {post.videoData.subtitle}
                        </div>
                      </div>
                      <div className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur text-white text-[11px] font-[700] border border-white/20 font-mono">
                        {post.videoData.duration}
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/15">
                      <div 
                        className="h-full bg-[#E8FF5A] transition-all duration-300"
                        style={{ width: isPlayingVideo ? '45%' : '0%' }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* What Broke / Honest Disclosure */}
              <section id="whatbroke">
                <h2 className="font-[800] text-[22px] md:text-[26px] tracking-[-0.03em] leading-[1.1] mb-4 text-[#111]">
                  {post.honestNote.title}
                </h2>
                <p className="text-[15.5px] leading-[1.75] text-black/70">
                  {post.honestNote.content}
                </p>
                <div className="mt-4 rounded-[16px] bg-[#E8FF5A]/40 border border-[#E8FF5A] px-4 py-3 text-[13px] font-[500] text-black/80">
                  <span className="font-[700]">Integrity Check: </span>
                  {post.honestNote.bannerText}
                </div>
              </section>

              {/* Next Steps */}
              <section id="next">
                <h2 className="font-[800] text-[22px] md:text-[26px] tracking-[-0.03em] leading-[1.1] mb-4 text-[#111]">
                  {post.nextSteps.title}
                </h2>
                <p className="text-[15.5px] leading-[1.75] text-black/70 mb-4">
                  {post.nextSteps.content}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {post.nextSteps.pills.map((pill, pIdx) => (
                    <span 
                      key={pIdx}
                      className={`px-3 py-1.5 rounded-full text-[12px] font-[600] ${
                        pIdx === 0 ? 'bg-white border border-black/10' : 'bg-black text-white'
                      }`}
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Right Sticky Sidebar */}
          <aside className="lg:sticky lg:top-[88px] space-y-5">
            {/* Attached Files Box */}
            <div className="rounded-[28px] bg-white border border-black/[0.06] shadow-[0_12px_32px_rgba(0,0,0,0.06)] p-5 md:p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-[800] tracking-[-0.02em] text-[14px]">
                  Attached Files
                </h3>
                <div className="text-[11px] font-[700] tracking-[0.1em] text-black/30 font-mono">
                  {post.attachedFiles.length} FILES
                </div>
              </div>

              {downloadSuccess && (
                <div className="mb-3 p-2.5 bg-[#E8FF5A] text-black rounded-[12px] text-[11px] font-semibold flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  Downloaded: {downloadSuccess}
                </div>
              )}

              <div className="space-y-3">
                {post.attachedFiles.map((file) => (
                  <div
                    key={file.name}
                    className="group flex items-center gap-3 p-3 rounded-[16px] border border-black/[0.06] bg-[#FAF9F6] hover:bg-white hover:border-black/10 hover:shadow-[0_6px_16px_rgba(0,0,0,0.06)] transition-all cursor-pointer"
                    onClick={() => handleDownload(file.name)}
                  >
                    <div className={`w-10 h-10 rounded-[12px] ${file.color || 'bg-black/5 text-black'} flex items-center justify-center shrink-0`}>
                      {renderFileIcon(file.type)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[13px] font-[600] tracking-[-0.01em] truncate text-[#111]">
                        {file.name}
                      </div>
                      <div className="text-[11px] font-[500] text-black/40 flex items-center gap-2 font-mono">
                        <span>{file.type}</span>
                        <span className="w-1 h-1 rounded-full bg-black/20" />
                        <span>{file.size}</span>
                      </div>
                    </div>
                    <button 
                      className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all"
                      title="Download file"
                    >
                      {file.type === 'Deck' ? <ArrowUpRight className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-[11px] font-[500] leading-[1.5] text-black/40 bg-[#FAF9F6] rounded-[12px] p-3 border border-dashed border-black/10">
                All files are hashed and logged. Downloading counts as investor verification access under our transparency charter.
              </div>
            </div>

            {/* In This Update Table of Contents */}
            <div className="rounded-[24px] bg-[#111111] text-white p-6 border border-white/10">
              <div className="text-[11px] font-[700] tracking-[0.14em] text-white/40 mb-4">
                IN THIS UPDATE
              </div>
              <div className="space-y-2.5">
                {post.sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block text-[13.5px] font-[500] tracking-[-0.01em] text-white/60 hover:text-[#E8FF5A] transition-colors"
                  >
                    {s.title}
                  </a>
                ))}
                <a
                  href="#whatbroke"
                  className="block text-[13.5px] font-[500] tracking-[-0.01em] text-white/60 hover:text-[#E8FF5A] transition-colors"
                >
                  {post.honestNote.title}
                </a>
                <a
                  href="#next"
                  className="block text-[13.5px] font-[500] tracking-[-0.01em] text-white/60 hover:text-[#E8FF5A] transition-colors"
                >
                  {post.nextSteps.title}
                </a>
              </div>
              <div className="mt-6 h-px bg-white/10" />
              <div className="mt-4 flex items-center gap-2 text-[11px] font-[500] text-white/30">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {post.readTime} • Verified blackbox attached
              </div>
            </div>

            {/* Trust & Verification Card */}
            <div className="rounded-[24px] bg-white border border-black/[0.06] shadow-[0_8px_24px_rgba(0,0,0,0.04)] p-6">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-black" />
                <h3 className="font-[800] text-[13px] tracking-[-0.01em]">
                  Trust & Verification
                </h3>
                <span className="ml-auto px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-[700] tracking-[0.08em]">
                  VERIFIED
                </span>
              </div>
              <div className="space-y-3 text-[12.5px]">
                <div className="flex justify-between">
                  <span className="text-black/50 font-[500]">FAA Compliance</span>
                  <span className="font-[600] flex items-center gap-1">
                    {post.verificationData.faaCompliance}
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black/50 font-[500]">Flight Blackbox</span>
                  <span className="font-[600] font-mono">{post.verificationData.blackboxHash}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black/50 font-[500]">Regulatory</span>
                  <span className="font-[600]">{post.verificationData.regulatoryStandard}</span>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="rounded-[12px] bg-[#FAF9F6] border border-black/5 p-2.5 text-center">
                  <div className="text-[11px] font-[700] tracking-[0.06em]">NO</div>
                  <div className="text-[10px] text-black/40 font-[600]">Manual Override</div>
                </div>
                <div className="rounded-[12px] bg-[#FAF9F6] border border-black/5 p-2.5 text-center">
                  <div className="text-[11px] font-[700] tracking-[0.06em]">YES</div>
                  <div className="text-[10px] text-black/40 font-[600]">Full Telemetry</div>
                </div>
              </div>
            </div>

            {/* Share Card */}
            <div className="rounded-[24px] bg-[#E8FF5A] p-5 flex items-center justify-between shadow-sm">
              <div className="text-[13px] font-[700] tracking-[-0.01em] text-black">
                Share this update
              </div>
              <button
                onClick={handleCopyLink}
                className="h-9 px-4 rounded-full bg-black text-white text-[12px] font-[600] flex items-center gap-2 hover:bg-black/90 transition-colors"
              >
                {copiedLink ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copiedLink ? "Copied" : "Copy link"}
              </button>
            </div>
          </aside>
        </div>

        {/* Embedded Document Previews Section */}
        <div className="pt-10 pb-6">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="font-[800] text-[18px] tracking-[-0.02em]">
              Document Previews
            </h2>
            <div className="px-2.5 py-1 rounded-full bg-black text-white text-[10px] font-[700] tracking-[0.12em]">
              ATTACHED
            </div>
            <div className="h-px flex-1 bg-black/10 ml-2" />
          </div>

          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
            {/* Collapsible PDF Viewer Preview */}
            {post.pdfPreview && (
              <div className="rounded-[28px] bg-white border border-black/[0.06] shadow-[0_12px_32px_rgba(0,0,0,0.06)] overflow-hidden">
                <div className="h-[52px] px-5 flex items-center justify-between border-b border-black/[0.06] bg-[#FAF9F6]">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="text-[13px] font-[600] truncate max-w-[220px]">
                      {post.pdfPreview.title}
                    </div>
                  </div>
                  <button
                    onClick={() => setPdfExpanded(!pdfExpanded)}
                    className="text-[12px] font-[600] px-3 h-7 rounded-full bg-white border border-black/10 hover:bg-black hover:text-white transition-colors"
                  >
                    {pdfExpanded ? "Collapse" : "Expand"}
                  </button>
                </div>

                {pdfExpanded && (
                  <div className="p-6 bg-[#F6F4EF]">
                    <div className="max-w-[480px] mx-auto bg-white rounded-[8px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-black/10 p-8">
                      <div className="flex justify-between items-start mb-8 border-b border-black/10 pb-4">
                        <div className="text-[10px] font-[800] tracking-[0.16em]">
                          VORTEX INTERNAL • CONFIDENTIAL
                        </div>
                        <div className="text-[10px] font-[600] text-black/40 font-mono">
                          {post.date}
                        </div>
                      </div>
                      <div className="text-[18px] font-[800] tracking-[-0.02em] leading-[1.15] mb-3">
                        {post.title}
                      </div>
                      <div className="text-[11px] font-[500] text-black/50 mb-6">
                        Prepared by Autonomy & Flight Ops • {post.fieldNoteNumber}
                      </div>
                      <div className="space-y-4">
                        <div className="h-[7px] w-full bg-black rounded-full" />
                        <div className="space-y-2">
                          <div className="h-2 w-full bg-black/10 rounded-full" />
                          <div className="h-2 w-[92%] bg-black/10 rounded-full" />
                          <div className="h-2 w-[88%] bg-black/10 rounded-full" />
                        </div>
                        <div className="grid grid-cols-3 gap-3 pt-2">
                          {post.pdfPreview.metrics.map((m) => (
                            <div key={m.label} className="rounded-[10px] bg-[#FAF9F6] border border-black/5 p-3">
                              <div className="text-[9px] font-[700] tracking-[0.1em] text-black/40">
                                {m.label}
                              </div>
                              <div className="text-[16px] font-[800] mt-1 text-[#111]">
                                {m.value}
                              </div>
                              <div className="h-1 w-full bg-black/10 rounded-full mt-2 overflow-hidden">
                                <div 
                                  className={`h-full rounded-full ${m.isYellow ? 'bg-[#E8FF5A]' : 'bg-black'}`}
                                  style={{ width: `${m.percent}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="pt-2 text-[9px] font-[600] text-black/30 tracking-[0.08em]">
                          PAGE 1 OF {post.pdfPreview.totalPages} • CONTINUED IN FULL REPORT ↓
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Collapsible CSV Viewer Preview */}
            {post.csvPreview && (
              <div className="rounded-[28px] bg-white border border-black/[0.06] shadow-[0_12px_32px_rgba(0,0,0,0.06)] overflow-hidden">
                <div className="h-[52px] px-5 flex items-center justify-between border-b border-black/[0.06] bg-[#FAF9F6]">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#E8FF5A] flex items-center justify-center">
                      <FileSpreadsheet className="w-4 h-4 text-black" />
                    </div>
                    <div className="text-[13px] font-[600]">
                      {post.csvPreview.filename}
                    </div>
                    <div className="px-2 py-0.5 rounded-full bg-black text-white text-[9px] font-[700]">
                      {post.csvPreview.rows.length} ROWS PREVIEW
                    </div>
                  </div>
                  <button
                    onClick={() => setCsvExpanded(!csvExpanded)}
                    className="text-[12px] font-[600] px-3 h-7 rounded-full bg-white border border-black/10 hover:bg-black hover:text-white transition-colors"
                  >
                    {csvExpanded ? "Collapse" : "Expand"}
                  </button>
                </div>

                {csvExpanded && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-[#111] text-white text-[10px] font-[700] tracking-[0.1em]">
                          <th className="px-4 py-3">TIME (CDT)</th>
                          <th className="px-4 py-3">EVENT</th>
                          <th className="px-4 py-3">ALT</th>
                          <th className="px-4 py-3">ACTION</th>
                        </tr>
                      </thead>
                      <tbody className="text-[12.5px] font-[500]">
                        {post.csvPreview.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="border-t border-black/[0.06] hover:bg-[#FAF9F6] transition-colors">
                            <td className="px-4 py-3 font-mono text-[11px]">{row.time}</td>
                            <td className="px-4 py-3 max-w-[180px] truncate">{row.event}</td>
                            <td className="px-4 py-3 font-mono">{row.alt}</td>
                            <td className="px-4 py-3">
                              <span className={`px-2 py-1 rounded-full text-[11px] font-[700] ${row.tone}`}>
                                {row.action}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="px-4 py-3 bg-[#FAF9F6] border-t border-black/[0.06] text-[11px] font-[500] text-black/40 flex items-center justify-between">
                      <span>Showing {post.csvPreview.rows.length} of {post.csvPreview.totalRows} log lines • Full CSV attached</span>
                      <span className="font-[700] text-black/60">SCROLL →</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Previous & Next Post Navigation Cards */}
        <div className="mt-12 grid md:grid-cols-2 gap-4 pb-16">
          <div
            onClick={() => onSelectPost(prevPost.id)}
            className="group rounded-[24px] bg-white border border-black/[0.06] p-5 flex items-center gap-4 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:border-black/10 transition-all cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-[#FAF9F6] border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-[700] tracking-[0.12em] text-black/30">
                PREVIOUS UPDATE
              </div>
              <div className="text-[14px] font-[700] tracking-[-0.01em] mt-1 text-[#111]">
                {prevPost.title}
              </div>
            </div>
          </div>

          <div
            onClick={() => onSelectPost(nextPost.id)}
            className="group rounded-[24px] bg-[#111] text-white border border-white/10 p-5 flex items-center gap-4 justify-between hover:bg-black transition-colors cursor-pointer"
          >
            <div>
              <div className="text-[11px] font-[700] tracking-[0.12em] text-white/40">
                NEXT UPDATE
              </div>
              <div className="text-[14px] font-[700] tracking-[-0.01em] mt-1">
                {nextPost.title}
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-[#E8FF5A] group-hover:text-black transition-colors">
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Detail View Footer */}
        <footer className="border-t border-black/[0.06] py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-[600] tracking-[0.08em] text-black/30">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-black text-[#E8FF5A] flex items-center justify-center font-black text-[10px]">
              V
            </div>
            <span>© 2026 VORTEX AEROSPACE • AUSTIN, TX • CEO TRANSPARENCY HUB</span>
          </div>
          <div className="flex items-center gap-4">
            <span>BUILT FOR TRUST</span>
            <span className="w-1 h-1 rounded-full bg-black/20" />
            <span className="text-black/50">All logs cryptographically signed</span>
          </div>
        </footer>
      </main>
    </div>
  );
};
