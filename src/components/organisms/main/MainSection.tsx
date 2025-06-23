import Thumbnail from '../article/thumbnail/Thumbnail';
import Carrer from '../article/career/Career';
import Introduce from '../article/introduce/Introduce';
import ProjectArticle from '../article/project/ProjectArticle';
import Skills from '../article/skills/Skills';
import './mainSection.css';
import AboutMe from '../article/aboutme/AboutMe';

export default function MainSection(){
  return(
    <main>
      <Thumbnail/>
      <AboutMe/>
      <Introduce />
      <Skills />
      <Carrer />
      <ProjectArticle />
    </main>
  )
}