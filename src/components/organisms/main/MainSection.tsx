import AboutMeArticle from '../article/AboutMe/AboutMeArticle';
import Introduce from '../article/introduce/Introduce';
import './mainSection.css';

export default function MainSection(){
  return(
    <main>
      <AboutMeArticle/>
      <Introduce />
      <article className='test'>아티클3</article>
      <article className='test'>아티클4</article>
    </main>
  )
}