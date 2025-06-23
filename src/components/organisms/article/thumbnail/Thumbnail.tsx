import Divider from '../../../atoms/divider/Divider';
import './thumbnail.css';

export default function Thumbnail() {

  return (
    <article className='thumbnail-frame'>
      <div className='thumbnail-tittle'>Front-end Developer</div>
      <Divider/>
      <div className='thumbnail-text-box'>
        <p className='thumbnail-text text-type-1'>Hello,</p>
        <p className='thumbnail-text text-type-2'>This is <span>TaeHun's</span> portfolio.</p>
        <p className='thumbnail-print-text'>
          해당 포트폴리오는 웹으로 만들어졌습니다. URL을 참조해주시면 감사드리겠습니다.
          <br/>https://enterryan.github.io/tagDev/
        </p>
      </div>
    </article>
  );
}
