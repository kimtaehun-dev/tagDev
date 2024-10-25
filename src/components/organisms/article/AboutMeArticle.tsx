import Divider from '../../atoms/divider/Divider';
import './AboutMeArticle.css';

export default function AboutMeArticle() {

  return (
    <article className='about-me-frame'>
      <div className='app-main-tittle'>To the Front-end Developer</div>
      <Divider/>
      <div className='app-main-text'>
        <p>Hello, </p>
        <p>this is <span>TaeHun's</span> portfolio.</p>
      </div>
    </article>
  );
}
