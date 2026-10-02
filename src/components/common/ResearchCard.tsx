import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, BookOpen, User } from 'lucide-react';

export interface ResearchCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime?: string;
  date?: string;
  author?: string;
  imageUrl?: string;
}

export const ResearchCard: React.FC<ResearchCardProps> = ({
  slug,
  title,
  excerpt,
  category,
  readTime = "5 min read",
  date = "[DATE — TO BE PROVIDED]",
  author = "Joint Bricks Research Desk",
  imageUrl = "/images/urban-commercial-corridor.jpg",
}) => {
  return (
    <div className="dossier-card rounded-xs overflow-hidden flex flex-col justify-between group transition-all duration-300 corner-crosshair">
      <div>
        <div className="relative h-52 bg-[#E5DFC8] overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/85 via-transparent to-transparent" />
          <div className="absolute top-3 left-3">
            <span className="bg-[#0B0B0A]/90 backdrop-blur-md text-[#FAF8F5] text-[9px] font-mono font-medium px-2.5 py-1 rounded-xs border border-[#23221E] uppercase tracking-wider">
              {category}
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-7">
          <div className="flex flex-wrap items-center gap-2 text-[10px] text-[#827E74] font-mono mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#BFA272]" />
              <span>{date}</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <BookOpen className="w-3 h-3 text-[#BFA272]" />
              <span>{readTime}</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <User className="w-3 h-3 text-[#BFA272]" />
              <span className="truncate max-w-[120px]">{author}</span>
            </span>
          </div>

          <h3 className="font-serif-display text-xl font-medium text-[#0F0F0E] group-hover:text-[#BFA272] transition-colors line-clamp-2 mb-2.5 leading-snug">
            {title}
          </h3>

          <p className="text-xs text-[#47453F] line-clamp-3 leading-relaxed mb-4">
            {excerpt}
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-7 pt-0">
        <Link
          to={`/research/${slug}`}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#0F0F0E] group-hover:text-[#BFA272] transition-colors"
        >
          <span>Read Research Brief</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
