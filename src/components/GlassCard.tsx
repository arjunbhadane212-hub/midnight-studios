import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  hover?: boolean;
}

const GlassCard = ({ children, className, glow = false, hover = false }: GlassCardProps) => {
  return (
    <div
      className={cn(
        glow ? 'glass-card-glow' : 'glass-card',
        hover && 'transition-all duration-300 hover:scale-[1.02] hover:border-primary/50',
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
