import { useState } from 'react';
import './ProjectArticle.css';
import ArticleTittle from '../../../molecules/articleTittle/ArticleTittle';
import ProjectCard from '../../../molecules/projectCard/ProjectCard';
import ProjectModal from '../../../molecules/projectModal/ProjectModal';

type Project = {
  title: string;
  description: string;
  images: string[];
  tags: string[];
};

const projects: Project[] = [
  {
    title: "TagDev",
    description: "개인 히스토리를 담은 포트폴리오 페이지 입니다. 프로젝트 소개, 기술 스택, 프로젝트 기간, 주요 기능 등을 포함합니다.",
    images: [
      "/tagDev/images/projects/tagDev/tagDevThumbnail.png",
      "/tagDev/images/projects/tagDev/tagDevThumbnail.png",
      "/tagDev/images/projects/tagDev/tagDevThumbnail.png"
    ],
    tags: ["React", "TypeScript", "Vite", "CSS"]
  },
  {
    title: "Jira Management",
    description: "부서에서 지라 사용에 익숙하지 않은 사용자들이 일관된 데이터를 입력하기 위한 관리자 페이지 입니다.",
    images: [
      "/tagDev/images/projects/jiraManageMent/메인페이지.png",
      "/tagDev/images/projects/jiraManageMent/메인페이지 다크모드.png",
      "/tagDev/images/projects/jiraManageMent/상세페이지.png",
      "/tagDev/images/projects/jiraManageMent/프로젝트 생성 페이지.png",
      "/tagDev/images/projects/jiraManageMent/사이드 네비게이터.png",
      "/tagDev/images/projects/jiraManageMent/상세검색필터.png",
      "/tagDev/images/projects/jiraManageMent/like검색진행.png",
      "/tagDev/images/projects/jiraManageMent/로그인.png",
      "/tagDev/images/projects/jiraManageMent/로그인 입력X.png",
      "/tagDev/images/projects/jiraManageMent/로그인실패.png",
      "/tagDev/images/projects/jiraManageMent/검색결과X.png",
      "/tagDev/images/projects/jiraManageMent/필수입력 체크.png"
    ],
    tags: ["React", "TypeScript", "Vite", "react-hook-form", "google-mui"]
  }
];

export default function ProjectArticle() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <article id="Project" className="project-article">
      <ArticleTittle tittleText={"Project"}/>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </article>
  );
} 