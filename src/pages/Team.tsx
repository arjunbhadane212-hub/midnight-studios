import { useState } from 'react';
import { Link } from 'react-router-dom';
import AmbientBackground from '@/components/AmbientBackground';
import TeamMemberModal from '@/components/TeamMemberModal';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';

const teamMembers = [
  {
    role: 'Lead Developer',
    name: 'Alex Chen',
    bio: 'With over 5 years of experience in Roblox development, Alex leads our scripting team with a focus on performance-optimized code and scalable game systems. Specializing in complex gameplay mechanics and server-side architecture.',
    contributions: [
      'Architected core gameplay systems for 15+ major projects',
      'Developed custom networking solutions reducing latency by 40%',
      'Created reusable module library used across all projects',
      'Mentored junior developers and established coding standards',
    ],
  },
  {
    role: 'Lead Modeler',
    name: 'Jordan Rivera',
    bio: 'Jordan brings environments and characters to life with stunning 3D artistry. Expert in low-poly optimization without sacrificing visual quality, ensuring games run smoothly across all devices.',
    contributions: [
      'Designed and modeled 200+ unique game assets',
      'Established art pipeline reducing production time by 30%',
      'Created character rigs and animations for multiple games',
      'Developed LOD systems for optimal performance',
    ],
  },
  {
    role: 'UI Specialist',
    name: 'Sam Taylor',
    bio: 'Sam crafts intuitive and visually stunning user interfaces that enhance player experience. Focused on accessibility, responsiveness, and creating memorable first impressions.',
    contributions: [
      'Designed UI systems for 20+ Roblox experiences',
      'Implemented custom animation frameworks for fluid interactions',
      'Created accessible design guidelines for all projects',
      'Developed responsive layouts for all device types',
    ],
  },
  {
    role: 'Project Manager',
    name: 'Morgan Lee',
    bio: 'Morgan ensures every project runs smoothly from concept to launch. Expert in agile methodologies and client communication, keeping teams aligned and deadlines on track.',
    contributions: [
      'Successfully delivered 25+ projects on time and budget',
      'Implemented project management systems improving efficiency by 50%',
      'Coordinated cross-functional teams across multiple time zones',
      'Established quality assurance processes for all deliverables',
    ],
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <AmbientBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 stealth-nav">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-foreground">Rogue Origins</Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
            <Link to="/team" className="text-foreground transition-colors">Team</Link>
            <Link to="/projects#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Team Section */}
      <section className="relative z-10 py-24 pt-32">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
            Meet the Team
          </h1>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Click on a role to learn more about our talented team members.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <Button
                key={member.role}
                variant="stealth"
                size="xl"
                className="h-auto py-10 flex-col gap-4"
                onClick={() => setSelectedMember(member)}
              >
                <Users className="w-10 h-10 text-primary" />
                <span className="text-lg font-semibold">{member.role}</span>
                <span className="text-sm text-muted-foreground">{member.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <TeamMemberModal
        member={selectedMember}
        open={!!selectedMember}
        onClose={() => setSelectedMember(null)}
      />

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8 mt-auto">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-muted-foreground text-sm">
              © 2024 Rogue Origins. All rights reserved.
            </span>
            <div className="flex items-center gap-8">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Home</Link>
              <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Projects</Link>
              <Link to="/team" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Team</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Team;
