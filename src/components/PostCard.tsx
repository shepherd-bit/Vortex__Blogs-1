import React from 'react';
import { ArrowUpRight, FileText, FileSpreadsheet, ChartColumn, Video, FileStack } from 'lucide-react';
import { BlogPost, FileType } from '../types';

interface PostCardProps {
  post: BlogPost;
  index: number;
  onSelect: (postId: string) => void;
}

export const PostCard: React.FC<PostCardProps> = ({ post, index, onSelect }) => {
  const renderFileIcon = (type: FileType) => {
    switch (type) {
      case 'PDF':
        return <FileText className="w-[14px] h-[14px]" />;
      case 'CSV':
        return <FileSpreadsheet className="w-[14px] h-[14px]" />;
      case 'Deck':
        return <ChartColumn className="w-[14px] h-[14px]" />;
      case 'Video':
      case 'MP4':
        return <Video className="w-[14px] h-[14px]" />;
      default:
        return <FileStack className="w-[14px] h-[14px]" />;
    }
  };

  return (
    <article
      onClick={() => onSelect(post.id)}
      className={`group relative bg-white rounded-[28px] border border-black/[0.08] p-6 md:p-7 shadow-[0_2px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-[3px] transition-all duration-300 flex flex-col cursor-pointer
        ${index === 0 ? 'md:col-span-7 md:row-span-2' : 'md:col-span-5'}
        ${index === 1 ? 'md:col-span-5' : ''}
        ${index >= 2 ? (index % 2 === 0 ? 'md:col-span-5' : 'md:col-span-7') : ''}
      `}
    >
      {post.featured && (
        <div className="absolute top-0 left-7 right-7 h-[3px] bg-[#E8FF5A] rounded-b-full" />
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[11px] tracking-wide text-black/40 font-medium">
            {post.date}
          </span>
          <span className="w-1 h-1 rounded-full bg-black/20" />
          <span
            className={`text-[10px] px-2.5 py-0.5 rounded-full border font-semibold tracking-wider uppercase
              ${post.category === 'Investor' ? 'bg-[#E8FF5A]/60 border-black/10 text-black' : ''}
              ${post.category === 'Regulatory' ? 'bg-[#F2EDE8] border-black/10 text-black/70' : ''}
              ${post.category === 'Public' ? 'bg-white border-black/10 text-black/60' : ''}
              ${post.category === 'Culture' ? 'bg-black text-white border-black' : ''}
            `}
          >
            {post.category}
          </span>
        </div>

        {/* Touch devices never hover, so the arrow stays visible below `md`. */}
        <div className="w-7 h-7 rounded-full bg-[#FAF9F6] border border-black/10 flex items-center justify-center shrink-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="w-3.5 h-3.5 text-black" />
        </div>
      </div>

      {post.thumbnail && (
        <div
          className={`mt-5 overflow-hidden rounded-[20px] bg-[#F2EDE8] border border-black/[0.06] ${index === 0 ? 'h-[180px] md:h-[220px]' : 'h-[150px]'}`}
        >
          <img
            src={post.thumbnail}
            alt={`${post.title} thumbnail`}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}

      <h3
        className={`mt-5 leading-[1.05] tracking-[-0.02em] font-bold text-[#111] group-hover:text-black/80 transition-colors ${
          index === 0 ? 'text-[28px] md:text-[34px]' : 'text-[20px] md:text-[24px]'
        }`}
      >
        {post.title}
      </h3>

      <p className="mt-3 text-[14px] leading-[1.6] text-black/60 line-clamp-2">
        {post.excerpt}
      </p>

      <div className="mt-auto pt-6">
        <div className="flex flex-wrap gap-2">
          {post.landingFiles.map((file, idx) => (
            <div
              key={idx}
              className="h-8 px-3 rounded-full bg-[#FAF9F6] border border-black/10 flex items-center gap-2 text-[12px] font-medium hover:bg-[#F2EDE8] transition"
            >
              <span className="w-5 h-5 rounded-full bg-white border border-black/10 flex items-center justify-center text-black">
                {renderFileIcon(file.type)}
              </span>
              <span className="truncate max-w-[150px]">{file.name}</span>
              <span className="text-[10px] text-black/40 ml-1 font-mono">{file.size}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[28px] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]" />
    </article>
  );
};
