import Divider from '../../../atoms/divider/Divider';
import './AboutMeArticle.css';

export default function AboutMeArticle() {

  return (
    <article className='about-me-frame'>
      <div className='app-main-tittle'>Front-end Developer</div>
      <Divider/>
      <div className='app-main-text'>
        <p className='intro-text text-type-1'>Hello,</p>
        <p className='intro-text text-type-2'>This is <span>TaeHun's</span> portfolio.</p>
        <p className='intro-print-text'>
          해당 포트폴리오는 웹으로 만들어졌습니다. URL을 참조해주시면 감사드리겠습니다.
          <br/>https://enterryan.github.io/tagDev/
        </p>
      </div>
    </article>
  );
}
