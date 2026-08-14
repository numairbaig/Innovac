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
        "w-[40px] h-[40px] md:w-[44px] md:h-[44px] rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-all duration-200 group-hover:border-[#FF4D00]/50 group-hover:bg-[#FF4D00]/10",
        containerClassName
      )}
    >
      {src ? (
        <img 
          src={src} 
          alt={alt} 
          className={cn("w-5 h-5 object-contain transition-transform duration-200 group-hover:scale-105", className)} 
        />
      ) : Icon ? (
        <Icon 
          size={18} 
          className={cn("text-[#FF4D00] transition-all duration-200 group-hover:scale-105 group-hover:text-[#FF6A00]", className)} 
        />
      ) : null}
    </div>
  );
}
