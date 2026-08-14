import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  accentColor?: string; // e.g. "text-[#FF4D00]", "text-[#20C77A]", or "text-accent"
  className?: string;
}

export function Breadcrumb({ items, accentColor = "text-[#FF4D00]", className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex flex-wrap items-center gap-2 text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-6", className)}>
      <Link to="/" className="hover:text-white transition-colors">Home</Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight size={12} className={cn("shrink-0", accentColor)} />
            {item.href && !isLast ? (
              <Link to={item.href} className="hover:text-white transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className={cn("font-bold", isLast ? accentColor : "text-white")}>
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

interface PageLabelProps {
  children: React.ReactNode;
  accentColor?: string;
  className?: string;
}

export function PageLabel({ children, accentColor = "text-[#FF4D00]", className }: PageLabelProps) {
  return (
    <p className={cn("text-xs font-bold tracking-[0.25em] uppercase mb-6", accentColor, className)}>
      {children}
    </p>
  );
}
