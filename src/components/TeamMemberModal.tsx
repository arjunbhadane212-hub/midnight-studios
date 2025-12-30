import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { User } from 'lucide-react';

interface TeamMember {
  role: string;
  name: string;
  bio: string;
  contributions: string[];
}

interface TeamMemberModalProps {
  member: TeamMember | null;
  open: boolean;
  onClose: () => void;
}

const TeamMemberModal = ({ member, open, onClose }: TeamMemberModalProps) => {
  if (!member) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="glass-card-glow border-primary/30 max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">{member.role}</DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col items-center gap-6 py-4">
          <div className="w-28 h-28 rounded-full bg-secondary/50 border-2 border-primary/30 flex items-center justify-center glow-button">
            <User className="w-14 h-14 text-primary" />
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
          </div>
          
          <div className="w-full">
            <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Key Contributions</h4>
            <ul className="space-y-2">
              {member.contributions.map((contribution, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeamMemberModal;
