import { useState } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import AnimatedCounter from '@/components/AnimatedCounter';
import GlassCard from '@/components/GlassCard';
import ProjectCard from '@/components/ProjectCard';
import TeamMemberModal from '@/components/TeamMemberModal';
import { Button } from '@/components/ui/button';
import { Code, Box, Palette, MessageSquareQuote, Users, Rocket, Shield } from 'lucide-react';

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

const Index = () => {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <ParticleBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold text-foreground">[Group Name]</span>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
            <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors">Team</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 glow-text animate-fade-in-up">
            [Group Name Placeholder]
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-200">
            We are an execution-focused game development group specializing in Roblox experiences. 
            We deliver polished, scalable projects with a strong emphasis on performance and long-term maintainability.
          </p>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <GlassCard glow className="p-8 animate-fade-in-up animation-delay-200">
              <AnimatedCounter end={25} suffix="+" label="Projects" />
            </GlassCard>
            <GlassCard glow className="p-8 animate-fade-in-up animation-delay-400">
              <AnimatedCounter end={150} suffix="K+" label="Visits" />
            </GlassCard>
            <GlassCard glow className="p-8 animate-fade-in-up animation-delay-600">
              <AnimatedCounter end={5} suffix="K+" label="Members" />
            </GlassCard>
          </div>

          {/* Deep Dive */}
          <GlassCard className="max-w-4xl mx-auto p-8 md:p-12 text-left">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/20 text-primary">
                <Rocket className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">What We Do</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our work spans full-cycle development, including core gameplay systems, scripting, 
                  UI/UX design, modeling, optimization, and live support. We focus on building 
                  high-quality games efficiently while maintaining consistent standards.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { icon: Code, label: 'Scripting' },
                { icon: Box, label: 'Modeling' },
                { icon: Palette, label: 'UI/UX' },
                { icon: Shield, label: 'Optimization' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-secondary/30">
                  <item.icon className="w-6 h-6 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4 glow-text">
            Our Projects
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Explore our portfolio of Roblox experiences across scripting, modeling, and UI design.
          </p>

          {/* Scripting */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Code className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Scripting</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard title="Project Alpha" image={scriptingProject1} category="Scripting" />
              <ProjectCard title="Project Beta" image={scriptingProject2} category="Scripting" />
            </div>
          </div>

          {/* Modeling */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Box className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Modeling</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard title="Project Alpha" image={modelingProject1} category="Modeling" />
              <ProjectCard title="Project Beta" image={modelingProject2} category="Modeling" />
            </div>
          </div>

          {/* UI Design */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Palette className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">UI Design</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard title="Project Alpha" image={uiProject1} category="UI Design" />
              <ProjectCard title="Project Beta" image={uiProject2} category="UI Design" />
            </div>
          </div>

          {/* Testimonial */}
          <GlassCard className="testimonial-glow max-w-3xl mx-auto p-8 md:p-12 text-center">
            <MessageSquareQuote className="w-12 h-12 text-glow-secondary mx-auto mb-6 opacity-60" />
            <blockquote className="text-xl md:text-2xl text-foreground italic mb-6 leading-relaxed">
              "The team was incredibly efficient and delivered exactly what we needed. Highly recommended!"
            </blockquote>
            <cite className="text-primary font-semibold">— @ClientName</cite>
          </GlassCard>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="relative z-10 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4 glow-text">
            Meet the Team
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Click on a role to learn more about our talented team members.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <Button
                key={member.role}
                variant="team"
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 glow-text">
            Get in Touch
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            Ready to bring your Roblox vision to life? Join our community and let's create something amazing together.
          </p>
          
          <Button variant="glow" size="xl" className="text-lg">
            Join our Discord
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 glass-card border-t border-border/30 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-muted-foreground text-sm">
              © 2024 [Group Name]. All rights reserved.
            </span>
            <div className="flex items-center gap-8">
              <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Home</a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Projects</a>
              <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors text-sm">About</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
