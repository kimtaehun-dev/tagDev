import AboutMeArticle from '../article/AboutMe/AboutMeArticle';
import Introduce from '../article/introduce/Introduce';
import Skills from '../article/skills/Skills';
import './mainSection.css';

export default function MainSection(){
  return(
    <main>
      <AboutMeArticle/>
      <Introduce />
      <Skills />
    </main>
  )
}