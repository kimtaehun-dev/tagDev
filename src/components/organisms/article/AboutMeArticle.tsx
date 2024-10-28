import Divider from '../../atoms/divider/Divider';
import './AboutMeArticle.css';

export default function AboutMeArticle() {

  return (
    <article className='about-me-frame'>
      <div className='app-main-tittle'>To the Front-end Developer</div>
      <Divider/>
      <div className='app-main-text'>
        <p className='intro-text text-type-1'>Hello,</p>
        <p className='intro-text text-type-2'>This is <span>TaeHun's</span> portfolio.</p>
      </div>
    </article>
  );
}
