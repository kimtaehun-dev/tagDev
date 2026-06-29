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
                B2C 라이브 서비스부터 B2B 백오피스까지 두루 경험한<br/>
                프론트엔드 개발자 김태헌입니다.
              </p>
              <p>
                레거시 환경(HTML·CSS·JS)에서 출발해 React·Next.js 기반 개발로 영역을 넓혀왔습니다.<br/>
                프로덕트의 버전별 백엔드 호환 관리, 디자이너와 함께한 머티리얼 디자인 3 기반 디자인 시스템 구축,<br/>
                StoryBook을 통한 비개발자와의 커뮤니케이션, 릴리즈 노트 문서화 기반 히스토리 관리까지<br/>
                각 서비스 특성에 맞는 개발·협업 방식을 익혀왔습니다.
              </p>
              <p>
                요즘은 팀에 AI 개발 방식을 녹여내는 데 집중하고 있습니다.<br/>
                TDD·PRD 기반 프로세스를 실험하고, Claude Code의 Rule·Skill 같은 팀 단위 하네스를 설계하며<br/>
                AI와 협업하는 개발 문화를 만들어가고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}