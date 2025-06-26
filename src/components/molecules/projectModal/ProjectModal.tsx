import { useState } from 'react';
import './ProjectModal.css';
import type { Project } from '../../organisms/article/project/ProjectArticle';

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <div className="modal-body">
          <div className="modal-image">
            <img src={project.images[currentImageIndex].src} alt={`${project.title} screenshot ${currentImageIndex + 1}`} />
            {project.images.length > 1 && (
              <div className="image-controls">
                <button onClick={handlePrevImage} className="image-nav-button">←</button>
                <span className="image-counter">{currentImageIndex + 1} / {project.images.length}</span>
                <button onClick={handleNextImage} className="image-nav-button">→</button>
              </div>
            )}
          </div>
          <div className="modal-info">
            <h2>{project.title}</h2>
            <p>{project.images[currentImageIndex].caption}</p>
            <div className="project-tags">
              {project.tags.map((tag: string, index: number) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 