import { useState } from 'react';
import './ProjectArticle.css';
import ArticleTittle from '../../../molecules/articleTittle/ArticleTittle';
import ProjectCard from '../../../molecules/projectCard/ProjectCard';
import ProjectModal from '../../../molecules/projectModal/ProjectModal';

export type Project = {
  title: string;
  description: string;
  images: { src: string; caption: string }[];
  tags: string[];
};

const projects: Project[] = [
  {
    title: "TagDev",
    description: "개인 포트폴리오 페이지 입니다.\n프로젝트 소개, 기술 스택, 프로젝트 기간, 주요 기능을 소개합니다.",
    images: [
      { src: "/tagDev/images/projects/tagDev/tagDevThumbnail.png", caption: "CSS-Value를 통해 전체적인 색감을 통일 하였습니다." },
      { src: "/tagDev/images/projects/tagDev/layoutFlex.png", caption: "FlexBox/Grid를 통한 레이아웃을 구성합니다." },
      { src: "/tagDev/images/projects/tagDev/useModal.png", caption: "모달창을 구성 및 데이터 전달을 구현하였습니다." },
      { src: "/tagDev/images/projects/tagDev/mobileView.png", caption: "미디어 쿼리를 통한 디스플레이 감지로 멀티 디바이스를 지원합니다." },
      { src: "/tagDev/images/projects/tagDev/printPDF.png", caption: "미디어 쿼리를 통해 DOM요소 숨김 및 레이아웃 수정으로 출력을 지원합니다." },
    ],
    tags: ["React", "TypeScript", "Vite", "CSS"]
  },
  {
    title: "Jira Management",
    description: "사내 프로젝트 관리자 페이지 개발 입니다.",
    images: [
      { src: "/tagDev/images/projects/jiraManageMent/login.png", caption: "인증 쿠키(리프레시 토큰)가 없는 경우 리다이렉트를 구성" },
      { src: "/tagDev/images/projects/jiraManageMent/loginError1.png", caption: "react-hook-form을 통한 인풋 미입력 필터" },
      { src: "/tagDev/images/projects/jiraManageMent/loginError2.png", caption: "백엔드 Api 응답값을 통해 로그인 실패 리턴" },
      { src: "/tagDev/images/projects/jiraManageMent/mainpageLight.png", caption: "tanStackQuery의 useInfiniteQuery로 페이지네이션 이동시 api호출 관리" },
      { src: "/tagDev/images/projects/jiraManageMent/mainpageDark.png", caption: "ContextApi+useReducer를 통한 테마 컨트롤" },
      { src: "/tagDev/images/projects/jiraManageMent/sideNav.png", caption: "on/off 가능한사이드 네비게이션을 통해 데이터 공간 확보" },
      { src: "/tagDev/images/projects/jiraManageMent/likeSearch.png", caption: "파라미터 및 api응답 타입을 사전에 정의하여 검색 기능 확보" },
      { src: "/tagDev/images/projects/jiraManageMent/searchfilter.png", caption: "검색 필터를 통한 정확한 데이터 탐색 유도 구현" },
      { src: "/tagDev/images/projects/jiraManageMent/createProject.png", caption: "커스텀 Quill 에디터 및  프로젝트 생성에 필요한 Form을 react-hook-form으로 관리" },
      { src: "/tagDev/images/projects/jiraManageMent/createForm.png", caption: "react-hook-form을 통한 필수 입력값 입력 유도" },
    ],
    tags: ["React", "TypeScript", "Vite","JWT","Mui","Quill", "react-hook-form",  "TanStackQuery",]
  },
  {
    title: "e-PageSAFER fot SPA NoAX",
    description: "ePageSAFER NoAX(위변조방지 솔루션)를 SPA+RestApi환경에 제공하기 위한 마이그레이션 입니다.",
    images: [
      { src: "/tagDev/images/projects/ePageSAFER_SPA/mainSample.png", caption: "샘플페이지로 증명서 출력 이밴트 시점부터 모달을 통한 솔루션이 동작합니다." },
      { src: "/tagDev/images/projects/ePageSAFER_SPA/installCheck.png", caption: "WebSocket연결 및 클라이언트 EXE와 연결 중인 State일때 입니다." },
      { src: "/tagDev/images/projects/ePageSAFER_SPA/getInstall.png", caption: "WebSocket에 연결이 실패한 경우, 또는 응답온 클라이언트 버전이 설정값보다 낮은경우 state입니다." },
      { src: "/tagDev/images/projects/ePageSAFER_SPA/Error.png", caption: "백엔드 Api에서 status 200이 아닌경우 및 사전에 정의된 에러코드의 경우의 state입니다." },
      { src: "/tagDev/images/projects/ePageSAFER_SPA/runView.png", caption: "모든 통신이 완료 되었을 경우 클라이언트 EXE에 커스텀 프로토콜을 통해 EXE를 실행시킵니다." }
    ],
    tags: ["React", "TypeScript", "google-Mui","WebScoket"]
  },
  {
    title: "e-PageSAFER Zero-Client with ScreenTarce",
    description: "ePageSAFER (위변조방지 솔루션)웹 표준에 비가시 워터마크 솔루션 이식 프로젝트 입니다.",
    images: [
      { src: "/tagDev/images/projects/ePageSAFER_ScreenTrace/samplePage.png", caption: "타 부서의 비가시성 워터마크를 HTML5 뷰어에 적용하는 솔루션입니다." },
      { src: "/tagDev/images/projects/ePageSAFER_ScreenTrace/ScreenTraceApplay.png", caption: "대용량 비가시성 이미지를 소형 이미지로 대처하고 CSS background 반복 처리로 대체하여 LCP를 1.75초에서 1초 미만으로 개선하여 사용자 UX를 개선." },
      { src: "/tagDev/images/projects/ePageSAFER_ScreenTrace/ScreenTraceApplay.png", caption: "워터마크 이지미 갱신시 모든 이미지가 로드된 후 반영하는 로직을 통해 검출 오류 케이스 제거" },
      { src: "/tagDev/images/projects/ePageSAFER_ScreenTrace/devtoolDetec.png", caption: "개발자 도구함을 통한 img 태그 제거를 대비한 Dev툴 차단 ts모듈을 적용" },
    ],
    tags: ["HTML5", "CSS3","TypeScript","WebPack","java"]
  },
  {
    title: "e-PageSAFER Zero-Client for Mail",
    description: "ePageSAFER(위변조방지 솔루션) 웹표준버전을 메일 솔루션과 연동하기 위한 프로젝트 입니다.",
    images: [
      { src: "/tagDev/images/projects/zero-mail/mainPc.png", caption: "메일발송 솔루션 업체에서 발송한 HTML5 뷰어로 onload시 내용을 파싱함" },
      { src: "/tagDev/images/projects/zero-mail/mobileAndroid.png", caption: "멀티 디바이스의 요구사항을 위한 반응형 디자인을 지원" },
      { src: "/tagDev/images/projects/zero-mail/mobileIOS.png", caption: "iOS의 경우 로컬 파일이 CDN 경로를 참조할수 없는 정책 이슈를 대응하기 위해 필수 js를 인라인으로 사용" }
    ],
    tags: ["HTML5", "CSS3","JavaScript", "java"]
  },
  {
    title: "My blog Project",
    description: "Notion Api를 활용한 블로그만들기 프로젝트입니다.",
    images: [
      { src: "/tagDev/images/projects/notionBlog/notionDB.png", caption: "Notion DB 구성 및 NotionApi를 통한 연동작업" },
      { src: "/tagDev/images/projects/notionBlog/mainPage.png", caption: "Grid/Flex를 통한 와이어 프레임 및 atricle 포지셔닝" },
      { src: "/tagDev/images/projects/notionBlog/vercel.png", caption: "vercel을 통한 배포 및 Analytics로 모니터링" },
      { src: "/tagDev/images/projects/notionBlog/infiniteScroll.png", caption: "TanstackQuery+ObserverDiv 무한스크롤" },
      { src: "/tagDev/images/projects/notionBlog/DarkMode.png", caption: "TailwindCSS를 통한 DarkMode" },
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