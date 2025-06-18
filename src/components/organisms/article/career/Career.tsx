import './career.css';
import ArticleTittle from '../../../molecules/articleTittle/ArticleTittle';
import Avatar from '../../../atoms/avarta/Avatar';
import WorkCard from '../../../molecules/workCard/workCard';
import WorkAchievements from '../../../molecules/workAchievements/WorkAchievements';

const markanyWorkCardData = [
  {
    tittle : '위변조방지 솔루션 React 마이그레이션 개발',
    skill : ['React','TypeScript', 'Mui', 'Spring Boot'],
    participants: 2,
    contribution: '프론트엔드 개발 100%, 비지니스 로직 설계 100%, 백엔드 설계 70%',
    purpose: '서블릿 환경에서만 적용가능한 문제를 해결하기 위한 마이그레이션 개발',
    text : [
      'MFC 뷰어를 호출하는 레거시 JavaScript로직 개선 및 모듈화 작업 진행.',
      'WebSocket을 이용한 PC에 설치된 EXE와 통신 및 React State 갱신',
      'Spring Boot 백엔드와 협업하여 REST API 설계 및 비동기 처리 구현',
    ],
    achievement: 'KB신용정보원 등 타 SPA 환경에 프로젝트 진행'
  },
  {
    tittle: '사내 프로젝트 관리를 위한 Jira 연동 관리자 페이지 프론트엔드 개발',
    skill : ['React','TypeScript', 'Mui'],
    participants: 3,
    contribution: '프론트엔드 개발 100%, DB설계 참여 50%, Jira Api 설계 50%',
    purpose: 'Jira 사용 경험이 없는 엔지니어/영업 인원의 비일관된 입력 문제를 해결하기 위한 통합 입력 페이지 개발',
    text: [
      '백엔드와 협업하여 RestAPI 연동 및 FE 비동기 처리 구현.',
      'Jira API 규격에 맞는 사용자 입력 데이터 처리 로직 구현',
      'React Hook Form을 이용한 동적 폼 관리 및 검증 로직 추가.',
      'Context API와 useReducer를 활용한 전역 상태 관리.',
      '화면 렌더링 성능을 고려한 DB 테이블 설계.'
    ],
    achievement: '프로젝트 생성 및 이력 입력 시 일관된 데이터를 유지하고, 영업 부서도 쉽게 조회·공유할 수 있는 Jira 기반 관리 시스템 제공'
  },
  {
    tittle : '위변조방지 무설치형 솔루션 확장 개발',
    skill : ['JavaScript(ES6+)','HTML5', 'CSS3','java'],
    participants: 1,
    contribution: '전체 개발 100%, 요구사항 수집 및 설계 100%, 제안 및 협의 미팅 참여 100%',
    purpose: '사용자가 EXE를 설치해야만 하는 솔루션 문제를 해결하기 위해 웹 표준 멀티 디바이스용 솔루션 개발',
    text : [
      '기존 MFC 기반 뷰어를 HTML5뷰어로 구현.',
      '대민 시스템으로 멀티 OS 및 멀티 디바이스 환경에서 범용적으로 동작하도록 개발.',
      'UX 향상을 위해 빠른 렌더링 우선 작업.',
      'IOS 보안 정책 및 네트워크 오류를 고려한 자바스크립트 동작 설계'
    ],
    achievement: '국민카드 차세대 사업 자사 솔루션 제안 및 프로토타입 개발을 통해 납품 수주 및 프로젝트 참여'

  },
  {
    tittle: '비가시성 워터마크 솔루션 연동 프론트엔드 개발',
    skill : ['TypeScript', 'HTML5', 'CSS3'],
    participants: 2,
    contribution: '프론트엔드 개발 100%, 기획10%, 백엔드30%',
    purpose: '국방부의 출력 문서에 대한 보안 요구사항을 해결하기 위한 개발',
    text: [
      '워터마크 솔루션 연동 및 워터마크 삽입 기능 개발.',
      'CDN 환경에서 사이즈가 큰 이미지 워터마크 삽입 호율화 진행.',
      '화면 랜더링 이벤트를 활용한 UX개선.',
    ],
    achievement: '국방부 요구사항 해결 및 공통 모듈로 추후 적용 가능하도록 개발'
  },
  {
    tittle : '웹 콘텐츠 보안을 위한 무설치형 솔루션 프로토타입 개발',
    skill : ['TypeScript', 'WebPack'],
    participants: 1,
    contribution: '기획 및 개발 100%',
    purpose: '금융기관 고객들이 무설치형 화면 보호 솔루션을 원하여 프로토타입 개발',
    text: [
      '웹 콘텐츠 보호를 위한 무설치형 보안 솔루션 프로토타입 개발.',
      '개발자 도구 차단, 이벤트 감지 차단, 워터마크 삽입 기능 개발.',
      'Webpack 및 JavaScript 모듈화를 적용하여 손쉬운 적용 방식 구현.',
      '고객 환경의 의존성을 줄이고, 기능 확장성을 고려한 구조 설계.'
    ],
    achievement: '비가시성 워터마크 솔루션 연동 프로젝트에 사용'
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
            <div className='company-text'>
              <p>2020.03 ~ 2025.06</p>
            </div>
          </div>
          <div className='work-achievements'>
            <WorkAchievements />
          </div>
        </div>
        <div className='history'>
          <h2>Career History</h2>
          {markanyWorkCardData.map((item,index)=>(
            <WorkCard key={index} 
            tittle={item.tittle} 
            skill={item.skill} 
            text={item.text} 
            participants={item.participants} 
            contribution={item.contribution}
            achievement={item.achievement}
            purpose={item.purpose}/>
          ))}
        </div>
      </div>
    </article>
  )
}