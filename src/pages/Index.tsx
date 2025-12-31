import { Link } from 'react-router-dom';
import AmbientBackground from '@/components/AmbientBackground';
import AnimatedCounter from '@/components/AnimatedCounter';
import StealthCard from '@/components/StealthCard';
import { Button } from '@/components/ui/button';
import { Code, Box, Palette, HelpCircle, ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: 'What types of projects do you work on?',
    answer: 'We specialize in Roblox game development, including scripting, 3D modeling, UI/UX design, and full-cycle game production.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope. Simple projects may take 1-2 weeks, while complex games can take several months.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes, we provide post-launch support and maintenance services to ensure your game runs smoothly.',
  },
  {
    question: 'How do I get started?',
    answer: 'Join our Discord server and describe your project. Our team will review your requirements and get back to you promptly.',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <AmbientBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 stealth-nav">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-foreground">Rogue Origins</Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground transition-colors">Home</Link>
            <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
            <Link to="/team" className="text-muted-foreground hover:text-foreground transition-colors">Team</Link>
            <Link to="/projects#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in-up">
            Rogue Origins
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-16 animate-fade-in-up animation-delay-200">
            Execution-focused game development group specializing in Roblox experiences.
          </p>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <StealthCard className="p-8 animate-fade-in-up animation-delay-200" hover={false}>
              <AnimatedCounter end={25} suffix="+" label="Projects" />
            </StealthCard>
            <StealthCard className="p-8 animate-fade-in-up animation-delay-400" hover={false}>
              <AnimatedCounter end={150} suffix="K+" label="Visits" />
            </StealthCard>
            <StealthCard className="p-8 animate-fade-in-up animation-delay-600" hover={false}>
              <AnimatedCounter end={5} suffix="K+" label="Members" />
            </StealthCard>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="relative z-10 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
            What We Do
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            We specialize in three core disciplines that bring Roblox experiences to life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Scripting */}
            <div id="scripting-section" className="scroll-mt-24">
              <StealthCard className="p-8 h-full">
                <div className="flex flex-col items-center text-center">
                  <Code className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold text-foreground mb-4">Scripting</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Performance-optimized code and scalable game systems. From complex gameplay mechanics to server-side architecture, we build robust foundations.
                  </p>
                </div>
              </StealthCard>
            </div>

            {/* Building */}
            <div id="building-section" className="scroll-mt-24">
              <StealthCard className="p-8 h-full">
                <div className="flex flex-col items-center text-center">
                  <Box className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold text-foreground mb-4">Building</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Stunning 3D environments and assets with low-poly optimization. Games run smoothly across all devices without sacrificing visual quality.
                  </p>
                </div>
              </StealthCard>
            </div>

            {/* UI Design */}
            <div id="ui-section" className="scroll-mt-24">
              <StealthCard className="p-8 h-full">
                <div className="flex flex-col items-center text-center">
                  <Palette className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold text-foreground mb-4">UI Design</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Intuitive and visually stunning user interfaces. Focused on accessibility, responsiveness, and creating memorable player experiences.
                  </p>
                </div>
              </StealthCard>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <StealthCard key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.question}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </StealthCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Start?
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            Explore our portfolio and see what we can build together.
          </p>
          
          <Link to="/projects">
            <Button variant="stealth" size="xl" className="text-lg">
              View Our Projects
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8">
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

export default Index;
