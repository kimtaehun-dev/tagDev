import { useState } from 'react';
import './ProjectCard.css';

type Project = {
  title: string;
  description: string;
  images: string[];
  tags: string[];
};

type ProjectCardProps = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="project-card"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-image-container">
        <img src={project.images[0]} alt={project.title} className="project-image" />
        {isHovered && (
          <div className="project-overlay">
            <span className="view-details">View Details</span>
          </div>
        )}
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p style={{ whiteSpace: 'pre-line' }}>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag: string, index: number) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}