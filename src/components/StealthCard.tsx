import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface StealthCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const StealthCard = ({ children, className, hover = true }: StealthCardProps) => {
  return (
    <div
      className={cn(
        hover ? 'stealth-card-hover' : 'stealth-card',
        className
      )}
    >
      {children}
    </div>
  );
};

export default StealthCard;
