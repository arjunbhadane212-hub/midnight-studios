import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AmbientBackground from '@/components/AmbientBackground';
import ProjectCard from '@/components/ProjectCard';
import InfiniteReviewCarousel from '@/components/InfiniteReviewCarousel';
import { Button } from '@/components/ui/button';
import { Code, Box, Palette } from 'lucide-react';

type CategoryFilter = 'all' | 'scripting' | 'building' | 'ui';

// Project images
import scriptingProject1 from '@/assets/project-scripting-1.jpg';
import scriptingProject2 from '@/assets/project-scripting-2.jpg';
import modelingProject1 from '@/assets/project-modeling-1.jpg';
import modelingProject2 from '@/assets/project-modeling-2.jpg';
import uiProject1 from '@/assets/project-ui-1.jpg';
import uiProject2 from '@/assets/project-ui-2.jpg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const location = useLocation();

  // Scroll to top when navigating to this page without a hash anchor
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location]);

  const filterButtons: { key: CategoryFilter; label: string; icon: React.ReactNode }[] = [
    { key: 'ui', label: 'UI Design', icon: <Palette className="w-5 h-5" /> },
    { key: 'scripting', label: 'Scripting', icon: <Code className="w-5 h-5" /> },
    { key: 'building', label: 'Building', icon: <Box className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <AmbientBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 stealth-nav">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-foreground">Rogue Origins</Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <Link to="/projects" className="text-foreground transition-colors">Projects</Link>
            <Link to="/team" className="text-muted-foreground hover:text-foreground transition-colors">Team</Link>
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
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Explore our portfolio of Roblox experiences across scripting, modeling, and UI design.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filterButtons.map(({ key, label, icon }) => (
              <Button
                key={key}
                variant="stealth"
                size="lg"
                className={`gap-2 ${activeFilter === key ? 'border-primary text-primary' : ''}`}
                onClick={() => setActiveFilter(activeFilter === key ? 'all' : key)}
              >
                {icon}
                {label}
              </Button>
            ))}
          </div>

          {/* UI Design */}
          {(activeFilter === 'all' || activeFilter === 'ui') && (
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
          )}

          {/* Scripting */}
          {(activeFilter === 'all' || activeFilter === 'scripting') && (
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
          )}

          {/* Building */}
          {(activeFilter === 'all' || activeFilter === 'building') && (
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
          )}
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

export default Projects;
