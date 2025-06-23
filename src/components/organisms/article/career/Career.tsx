import './career.css';
import ArticleTittle from '../../../molecules/articleTittle/ArticleTittle';
import Avatar from '../../../atoms/avarta/Avatar';
import WorkCard from '../../../molecules/workCard/workCard';
import WorkAchievements from '../../../molecules/workAchievements/WorkAchievements';

const markanyWorkCardData = [
  {
    tittle : '위변조방지 솔루션 React 마이그레이션 개발',
    skill : ['React','TypeScript', 'WebSocket', 'Spring Boot'],
    participants: 2,
    contribution: '프론트엔드 개발 100%, 비지니스 로직 설계 100%, 백엔드 설계 50%',
    purpose: '서블릿 구조에서 SPA+REST 환경으로 솔루션 이식 가능성 확보 및 현대화 대응',
    text : [
      '레거시 JS 기반 MFC 뷰어 호출 로직을 React 컴포넌트로 분리 및 모듈화.',
      'WebSocket 기반 사용자 피드백 흐름을 UX 중심으로 개선. (모달 단계 진행 시각화 포함)',
      'WebSocket을 활용해 웹 앱 ↔ MFC 뷰어 간 데이터 송수신 구성.',
    ],
    achievement: 'KB신용정보원 납품 + BNK캐피탈 대상 제안서 작성 및 데모 제공.'
  },
  {
    tittle: '사내 프로젝트 관리를 위한 관리자 페이지 프론트엔드 개발',
    skill : ['React','TypeScript', 'Mui', 'react-hook-form','TanStackQuery','JWT'],
    participants: 3,
    contribution: '프론트엔드 개발 100%, 프로젝트 URL 구조설계 70%, 전체 기획/설계 50%',
    purpose: "Jira 플랫폼의 자유로운 입력 특성으로 발생하는 고객 정보 등 주요 데이터의 비일관성을 개선하기 위해,Jira를 데이터베이스처럼 활용하는 입력/조회 전용 페이지를 개발하여 엔지니어 및 영업 부서의 입력 오류를 최소화",
    text: [
      'Quill 에디터 커스터마이징을 통한 jira 에디터와 양방향 호환성 확보.',
      'Jira API 규격에 맞는 사용자 입력 데이터 처리 로직 구현',
      'React Hook Form을 이용한 동적 폼 관리 및 검증 로직 추가.',
      'REST API URL 구조 및 호출방식 정의 등 프론트 주도 API 설계.',
      'Context API + useReducer 구조로 다크모드, 인증 등 전역 상태 관리 구성.',
      'JWT 인증/인가 규칙 설계 및 토큰관리 구현.',
      '수집된 데이터를 통해 Jira 대시보드를 구현하여 부서 상황 공유'
    ],
    achievement: '통합된 프로젝트 입력 구조 도입 → 부서 내 데이터 불일치 최소화, Jira 대시보드 정형 데이터 활용.'
  },
  {
    tittle : '위변조방지 무설치형 솔루션 확장 개발',
    skill : ['JavaScript(ES6+)','HTML5', 'CSS3','java'],
    participants: 1,
    contribution: '전체 개발 100%, 요구사항 수집 및 설계 100%, 제안 및 협의 미팅 참여 100%',
    purpose: '사용자가 EXE를 설치해야만 하는 솔루션 문제를 해결하기 위해 웹 표준 멀티 디바이스용 솔루션 개발',
    text : [
      '기존 EXE 기반 뷰어를 HTML5 기반으로 재구현하여, 모바일·iOS 포함 멀티 디바이스 지원 확보.',
      '랜더링 순서를 제한하고, 오프라인 환경을 고려한 로딩 설계로 UX 최적화.',
      'IOS 보안 정책 및 네트워크 오류를 고려한 자바스크립트 동작 설계'
    ],
    achievement: '국민카드 차세대 프로젝트에 솔루션 제안 및 프로토타입 납품 성공 → 최종 수주 및 프로젝트 참여'
  },
  {
    tittle: '비가시성 워터마크 솔루션 연동 프론트엔드 개발',
    skill : ['TypeScript', 'HTML5', 'CSS3'],
    participants: 3,
    contribution: '프론트엔드 개발 100%, 설계60%, 백엔드30%',
    purpose: '국방부의 출력 문서에 대한 보안 요구사항을 해결하기 위한 개발',
    text: [
      '워터마크 솔루션 연동 및 워터마크 삽입 기능 개발.',
      '대용량 비가시성 이미지를 소형 이미지로 대처하고 CSS background 반복 처리로 대체하여 LCP를 1.75초에서 1초 미만으로 개선하여 사용자 UX를 개선.',
      '개발자 도구를 통한 이미지 태그 삭제 행위를 방지하기 위해 DevTools 탐지 및 차단 모듈을 적용.',
      '워터마크 갱신 지연을 방지하기 위해 요구 시간 이전에 선행 fetch를 수행하고, 이미지 렌더링 완료 후 교체하는 로직을 적용하여 화면 지연 방지.',
    ],
    achievement: '국방부 예비군 필증 무단 캡처 유출 대응을 위해 비가시성 워터마크를 주기적으로 갱신하는 보안 로직을 구현하여 고객사의 요구사항을 해결.'
  },
  {
    tittle : '웹 콘텐츠 보안을 위한 무설치형 솔루션 프로토타입 개발',
    skill : ['TypeScript', 'WebPack'],
    participants: 1,
    contribution: '기획 및 개발 100%',
    purpose: '금융기관 고객들이 무설치형 프로토타입 개발',
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