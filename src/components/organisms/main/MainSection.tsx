import AboutMeArticle from '../article/AboutMe/AboutMeArticle';
import Carrer from '../article/career/Career';
import Introduce from '../article/introduce/Introduce';
import Skills from '../article/skills/Skills';
import './mainSection.css';

export default function MainSection(){
  return(
    <main>
      <AboutMeArticle/>
      <Introduce />
      <Skills />
      <Carrer />
    </main>
  )
}