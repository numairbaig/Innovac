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
        "w-[40px] h-[40px] md:w-[44px] md:h-[44px] rounded-xl bg-white/[0.06] border border-white/15 backdrop-blur-sm flex items-center justify-center shrink-0 transition-all duration-200 group-hover:border-[#FF4D00]/60 group-hover:bg-[#FF4D00]/15 group-hover:shadow-[0_0_15px_rgba(255,77,0,0.25)]",
        containerClassName
      )}
    >
      {src ? (
        <img 
          src={src} 
          alt={alt} 
          className={cn("w-5 h-5 object-contain transition-transform duration-200 group-hover:scale-110", className)} 
        />
      ) : Icon ? (
        <Icon 
          size={19} 
          className={cn("text-white transition-all duration-200 group-hover:scale-110 group-hover:text-[#FF4D00]", className)} 
        />
      ) : null}
    </div>
  );
}
