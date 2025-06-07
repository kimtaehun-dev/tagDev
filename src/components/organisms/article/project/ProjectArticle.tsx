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
    description: "개인 히스토리를 담은 포트폴리오 페이지 입니다.\n프로젝트 소개, 기술 스택, 프로젝트 기간, 주요 기능 등을 포함하며 멀티 디바이스를 고려하여 제작되었습니다.",
    images: [
      "/tagDev/images/projects/tagDev/tagDevThumbnail.png",
      "/tagDev/images/projects/tagDev/viewMobile.png",
      "/tagDev/images/projects/tagDev/viewPC.png"
    ],
    tags: ["React", "TypeScript", "Vite", "CSS"]
  },
  {
    title: "Jira Management",
    description: "JIRA를 처음 사용하는 부서내 사용자들이 일관된 데이터를 입력하기 위한 관리자 페이지 입니다.",
    images: [
      "/tagDev/images/projects/jiraManageMent/login.png",
      "/tagDev/images/projects/jiraManageMent/loginError1.png",
      "/tagDev/images/projects/jiraManageMent/loginError2.png",
      "/tagDev/images/projects/jiraManageMent/mainpageLight.png",
      "/tagDev/images/projects/jiraManageMent/mainpageDark.png",
      "/tagDev/images/projects/jiraManageMent/sideNav.png",
      "/tagDev/images/projects/jiraManageMent/likeSearch.png",
      "/tagDev/images/projects/jiraManageMent/searchfilter.png",
      "/tagDev/images/projects/jiraManageMent/createProject.png",
      "/tagDev/images/projects/jiraManageMent/createForm.png",
      "/tagDev/images/projects/jiraManageMent/detailpage.png"
    ],
    tags: ["React", "TypeScript", "Vite", "react-hook-form", "google-Mui"]
  },
    {
    title: "e-PageSAFER fot SPA NoAX",
    description: "ePageSAFER NoAX(위변조방지 솔루션)를 SPA+RestApi환경에 제공하기 위한 마이그레이션 입니다.",
    images: [
      "/tagDev/images/projects/ePageSAFER_SPA/mainSample.png",
      "/tagDev/images/projects/ePageSAFER_SPA/installCheck.png",
      "/tagDev/images/projects/ePageSAFER_SPA/Error.png",
      "/tagDev/images/projects/ePageSAFER_SPA/getInstall.png",
      "/tagDev/images/projects/ePageSAFER_SPA/runView.png",
    ],
    tags: ["React", "TypeScript", "google-Mui","WebScoket"]
  },
  {
    title: "e-PageSAFER Zero-Client for Mail",
    description: "ePageSAFER(위변조방지 솔루션) 웹표준버전을 메일 솔루션과 연동하기 위한 프로젝트 입니다.",
    images: [
      "/tagDev/images/projects/ePageSAFER_SPA/mainSample.png",
      "/tagDev/images/projects/ePageSAFER_SPA/installCheck.png",
      "/tagDev/images/projects/ePageSAFER_SPA/Error.png",
      "/tagDev/images/projects/ePageSAFER_SPA/getInstall.png",
      "/tagDev/images/projects/ePageSAFER_SPA/runView.png",
    ],
    tags: ["HTML", "CSS","JavaScript", "java"]
  },
  {
    title: "My blog Project",
    description: "Notion Api를 활용한 블로그만들기 프로젝트입니다.(진행중)",
    images: [
      "/tagDev/images/projects/tagDev/tagDevThumbnail.png",
    ],
    tags: ["Nextjs", "tailwindCss","Vercel", "TanstackQuery"]
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