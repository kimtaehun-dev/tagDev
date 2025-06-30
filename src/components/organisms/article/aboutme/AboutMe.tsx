import ArticleTittle from '../../../molecules/articleTittle/ArticleTittle';
import './about-me.css';

export default function AboutMe(){
  return (
    <article className='aboutme-frame' id='AboutMe'>
      <ArticleTittle tittleText={"AboutMe"}/>
      <div className='aboutme-container'>
        <div className='aboutme-content'>
          <div className='profile-image'>
            <img 
              src='/tagDev/images/my-photo.jpg' 
              alt='프로필 이미지'
              className='profile-photo'
            />
          </div>
          <div className='greeting-section'>
            <h3 className='greeting-title'>안녕하세요! 👋</h3>
            <div className='greeting-content'>
              <p>
              기술적인 문제를 푸는 것도 중요하지만,<br/> 
              기획과 구조 설계에서부터 사용자 중심의 흐름을 만들기 위해 고민하고 실천합니다.<br/>
              구조화된 설계와 컴포넌트 분리에 흥미를 느끼며, 프론트엔드 개발자가 가져야할 UX감각에 관심이 있어 <br/>
              의도 있는 경험을 구현하고자 도전합니다.
              </p>
              <p>
                AI 도구를 적극 활용하면서도, 스스로 사고하고 구현하는 개발 역량의 성장을 놓치지 않으려 노력합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}