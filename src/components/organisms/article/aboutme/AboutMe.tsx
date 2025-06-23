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
              저는 사용자 경험을 최우선으로 생각하며, 명확한 의도와 흐름이 있는 UI/UX를 구현하는 데 집중합니다.
              구조화된 설계와 컴포넌트 분리에 흥미를 느끼며, 꾸준한 학습을 통해 더 나은 사용 경험을 제공하고자 합니다.<br/>
              기능이 아닌 ‘경험’을 만드는 개발자가 되고자 노력합니다.
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