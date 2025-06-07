import './career.css';
import ArticleTittle from '../../../molecules/articleTittle/ArticleTittle';
import Avatar from '../../../atoms/avarta/Avatar';
import WorkCard from '../../../molecules/workCard/workCard';

const markanyWorkCardData = [
  {
    tittle : '기존 서블릿 기반 솔루션의 SPA 컴포넌트화 마이그레이션 개발',
    skill : ['React','TypeScript', 'Google Mui'],
    text : [
      '서블릿 기반 환경에서 제공되던 솔루션을 SPA + REST API 구조로 변경.',
      'React + TypeScript를 활용하여 모듈화된 컴포넌트 개발.',
      'MUI를 적용하여 UI 일관성을 유지하고 반응형 디자인 최적화.',
      'Java 기반의 API와 연동하여 데이터 처리 및 비즈니스 로직 유지.'
    ]
  },
  {
    tittle: '사내 프로젝트 관리를 위한 Jira 연동 관리자 페이지 프론트엔드 개발',
    skill : ['React','TypeScript', 'Google Mui'],
    text: [
      'Jira API와 연동된 관리자 페이지 프론트엔드 설계 및 개발.',
      'React + TypeScript 기반 개발 및 MUI를 활용한 UI 디자인 적용.',
      'Spring Boot 백엔드와 협업하여 REST API 설계 및 비동기 처리 구현.',
      'React Hook Form을 이용한 동적 폼 관리 및 검증 로직 추가.',
      'Context API와 useReducer를 활용한 전역 상태 관리 최적화.',
      '화면 렌더링 성능을 고려한 효율적인 DB 호출을 위해 DB 마이그레이션 참여.'
    ]
  },
  {
    tittle: '비가시성 워터마크 솔루션 연동 프론트엔드 개발',
    skill : ['TypeScript', 'HTML5', 'CSS3'],
    text: [
      '워터마크 솔루션 연동 및 워터마크 삽입 기능 개발.',
      'CDN 환경에서 사이즈가 큰 이미지 워터마크 삽입 호율화 진행.',
      '화면 랜더링 이벤트를 활용한 UX개선.',
    ]
  },
  {
    tittle : '위변조방지 무설치형 솔루션 확장 개발',
    skill : ['JavaScript(ES6+)','HTML5', 'CSS3'],
    text : [
      '기존 MFC 기반 뷰어를 HTML5로 마이그레이션.',
      'UX 향상을 위해 빠른 렌더링 성능 최적화.',
      'JavaScript, HTML5, CSS3 및 Java(API) 활용.',
      '멀티 OS 및 멀티 디바이스 환경에서 범용적으로 동작하도록 개발.'
    ]
  },
  {
    tittle : '웹 콘텐츠 보안을 위한 무설치형 솔루션 프로토타입 개발',
    skill : ['TypeScript', 'WebPack'],
    text: [
      '웹 콘텐츠 보호를 위한 무설치형 보안 솔루션 프로토타입 개발.',
      '개발자 도구 차단, 이벤트 감지 차단, 워터마크 삽입 기능 개발.',
      'Webpack 및 JavaScript 모듈화를 적용하여 손쉬운 적용 방식 구현.',
      '고객 환경의 의존성을 줄이고, 기능 확장성을 고려한 구조 설계.'
    ]
  },
  {
    tittle : '레거시 코드 개선 및 취약점 해결 ',
    skill: ['JavaScript(ES6+)'],
    text : [
      '사용자 PC에 설치된 솔루션 모듈 호출 로직 유지보수.',
      '레거시 코드 ES6 문법으로 개선.',
      '보안 취약점 해결 및 클린코드 컨버팅.'
    ]
  },
]

export default function Carrer(){
  return (
    <article className='carrer-frame' id="Career">
      <ArticleTittle tittleText={"Career"}/>
      <div className='carrer-container'>
        <div className='company-desciption'>
          <div className='company-logo'>
            <Avatar imagePath='/tagDev/images/markany_logo.jpg' avatarName='마크애니'/>
          </div>
          <div className='company-text'>
            <p>2020.03 ~ 2025.06</p>
          </div>
        </div>
        <div className='history'>
          <h2>Career History</h2>
          {markanyWorkCardData.map((item,index)=>(
            <WorkCard key ={index} tittle={item.tittle} skill={item.skill} text={item.text}/>
          ))}
        </div>
      </div>
    </article>
  )
}