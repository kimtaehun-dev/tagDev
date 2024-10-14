import AboutMeArticle from '../article/AboutMeArticle';
import './mainSection.css';

export default function MainSection(){
  return(
    <main>
      <AboutMeArticle/>
      <article className='test'>아티클2</article>
      <article className='test'>아티클3</article>
      <article className='test'>아티클4</article>
    </main>
  )
}