import { useState } from 'react';
import { Link } from 'react-router-dom';
import AmbientBackground from '@/components/AmbientBackground';
import StealthCard from '@/components/StealthCard';
import ProjectCard from '@/components/ProjectCard';
import TeamMemberModal from '@/components/TeamMemberModal';
import InfiniteReviewCarousel from '@/components/InfiniteReviewCarousel';
import { Button } from '@/components/ui/button';
import { Code, Box, Palette, Users } from 'lucide-react';

// Project images
import scriptingProject1 from '@/assets/project-scripting-1.jpg';
import scriptingProject2 from '@/assets/project-scripting-2.jpg';
import modelingProject1 from '@/assets/project-modeling-1.jpg';
import modelingProject2 from '@/assets/project-modeling-2.jpg';
import uiProject1 from '@/assets/project-ui-1.jpg';
import uiProject2 from '@/assets/project-ui-2.jpg';

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
];

const Projects = () => {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <AmbientBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 stealth-nav">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-foreground">[Group Name]</Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <Link to="/projects" className="text-foreground transition-colors">Projects</Link>
            <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors">Team</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-24 pt-32">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
            Our Projects
          </h1>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Explore our portfolio of Roblox experiences across scripting, modeling, and UI design.
          </p>

          {/* UI Design */}
          <div id="ui-design" className="mb-16 scroll-mt-24">
            <div className="flex items-center gap-3 mb-8">
              <Palette className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">UI Design</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard title="Project Alpha" image={uiProject1} category="UI Design" />
              <ProjectCard title="Project Beta" image={uiProject2} category="UI Design" />
            </div>
          </div>

          {/* Scripting */}
          <div id="scripting" className="mb-16 scroll-mt-24">
            <div className="flex items-center gap-3 mb-8">
              <Code className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">Scripting</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard title="Project Alpha" image={scriptingProject1} category="Scripting" />
              <ProjectCard title="Project Beta" image={scriptingProject2} category="Scripting" />
            </div>
          </div>

          {/* Building */}
          <div id="building" className="mb-16 scroll-mt-24">
            <div className="flex items-center gap-3 mb-8">
              <Box className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">Building</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard title="Project Alpha" image={modelingProject1} category="Building" />
              <ProjectCard title="Project Beta" image={modelingProject2} category="Building" />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
            What Clients Say
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Trusted by game developers and studios worldwide.
          </p>
        </div>
        <InfiniteReviewCarousel />
      </section>

      {/* Team Section */}
      <section id="team" className="relative z-10 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
            Meet the Team
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Click on a role to learn more about our talented team members.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <Button
                key={member.role}
                variant="stealth"
                size="xl"
                className="h-auto py-8 flex-col gap-4"
                onClick={() => setSelectedMember(member)}
              >
                <Users className="w-8 h-8 text-primary" />
                <span className="text-lg font-semibold">{member.role}</span>
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

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            Ready to bring your Roblox vision to life? Join our community and let's create something amazing together.
          </p>
          
          <Button variant="stealth" size="xl" className="text-lg">
            Join our Discord
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-muted-foreground text-sm">
              © 2024 [Group Name]. All rights reserved.
            </span>
            <div className="flex items-center gap-8">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Home</Link>
              <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Projects</Link>
              <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors text-sm">About</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
