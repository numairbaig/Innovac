import React from 'react';
import { cn } from '@/src/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ServiceIconProps {
  icon?: LucideIcon;
  src?: string;
  alt?: string;
  className?: string;
  containerClassName?: string;
}

export function ServiceIcon({ icon: Icon, src, alt = "Service Icon", className, containerClassName }: ServiceIconProps) {
  return (
    <div 
      className={cn(
        "w-[42px] h-[42px] md:w-[44px] md:h-[44px] lg:w-[48px] lg:h-[48px] rounded-xl bg-[#0A2319]/80 border border-[#50FF96]/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-[#00E676] group-hover:shadow-[0_0_18px_rgba(0,230,118,0.3)] group-hover:bg-[#0F3723]/90",
        containerClassName
      )}
    >
      {src ? (
        <img 
          src={src} 
          alt={alt} 
          className={cn("w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-105", className)} 
        />
      ) : Icon ? (
        <Icon 
          size={20} 
          className={cn("text-[#00E676] transition-all duration-300 group-hover:scale-105 group-hover:text-[#19F58A]", className)} 
        />
      ) : null}
    </div>
  );
}
