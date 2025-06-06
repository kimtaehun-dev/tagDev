import ArticleTittle from '../../../molecules/articleTittle/ArticleTittle';
import './ProjectArticle.css';

export default function ProjectArticle() {
  return (
    <article id="Project" className="project-frame">
      <ArticleTittle tittleText="Projects" />
      <div className="project-content-wrapper">
        <div className="project-content">
          {/* 프로젝트 내용은 추후 추가 예정 */}
        </div>
      </div>
    </article>
  );
} 