import StealthCard from './StealthCard';

interface ProjectCardProps {
  title: string;
  image: string;
  category: string;
}

const ProjectCard = ({ title, image, category }: ProjectCardProps) => {
  return (
    <StealthCard className="overflow-hidden group">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <span className="text-xs font-medium text-primary uppercase tracking-wider">{category}</span>
        <h3 className="text-lg font-semibold text-foreground mt-1">{title}</h3>
      </div>
    </StealthCard>
  );
};

export default ProjectCard;
