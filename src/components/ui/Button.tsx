import React from 'react';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  as?: React.ElementType;
  withArrow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, as, withArrow, children, ...props }, ref) => {
    const baseStyles = "group inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-[10px]";
    
    const variants = {
      primary: "bg-accent text-white hover:bg-accent-bright shadow-sm",
      secondary: "bg-primary text-white hover:bg-primary/90",
      dark: "bg-transparent text-white border border-white/20 hover:border-accent hover:text-accent",
      outline: "border border-border text-primary hover:bg-white hover:border-primary/20",
      ghost: "text-primary hover:bg-white/50",
    };
    
    const sizes = {
      sm: "h-10 px-5 text-xs tracking-wider",
      md: "h-12 px-6 text-sm tracking-wide",
      lg: "h-14 px-8 text-sm tracking-wide",
    };
    
    const classes = cn(baseStyles, variants[variant], sizes[size], className);
    
    const content = (
      <>
        {children}
        {withArrow && (
          <ArrowRight 
            size={16} 
            className="ml-2 transition-transform duration-300 group-hover:translate-x-1" 
          />
        )}
      </>
    );

    if (href) {
      return (
        <Link to={href} className={classes}>
          {content}
        </Link>
      );
    }
    
    const Comp = as || "button";
    return (
      <Comp className={classes} ref={ref} {...props}>
        {content}
      </Comp>
    );
  }
);
Button.displayName = 'Button';
