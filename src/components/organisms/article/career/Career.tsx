import './career.css';
import ArticleTittle from '../../../molecules/articleTittle/ArticleTittle';
import Avatar from '../../../atoms/avarta/Avatar';
import WorkCard from '../../../molecules/workCard/workCard';
import WorkAchievements from '../../../molecules/workAchievements/WorkAchievements';

const markanyWorkCardData = [
  {
    tittle: '위변조방지 솔루션 React 마이그레이션 개발',
    during : "2021.11 ~ 2022.04",
    skill: ['React', 'TypeScript', 'WebSocket', 'Spring Boot'],
    participants: 2,
    contribution: 'UI/UX 개발 100%, 프론트엔드 비즈니스 로직 개발 100%',
    purpose:
      '서블릿 구조에서 SPA + REST 환경으로 솔루션 이식 가능성 확보 및 현대화 대응',
    text: [
      {
        issue:
          '레거시 코드가 var 기반으로 작성되어 호이스팅 의존과 전역 스코프 충돌 문제가 발생, React 환경에서 직접 활용하기 어려움',
        resolution:
          '변수를 let/const로 재정의하고, 전역 변수를 지역 변수 및 함수 파라미터로 전환하여 예측 가능한 동작 확보'
      },
      {
        issue:
          'WebSocket 통신에서 진행 상태에 대한 사용자 피드백이 충분하지 않아 UX 저하',
        resolution:
          'WebSocket 이벤트를 단계별로 시각화하는 모달 UI를 구현해 실시간 진행 상황을 명확히 전달'
      },
    ],
    achievement:
      'KB신용정보원 납품 및 BNK캐피탈 대상 제안·데모 제공'
  },
  {
    tittle: '사내 프로젝트 관리를 위한 관리자 페이지 프론트엔드 개발 및 유지보수',
    during : "2023.01 ~ 2025.06",
    skill: ['React', 'TypeScript', 'MUI', 'React Hook Form', 'TanStack Query', 'JWT'],
    participants: 3,
    contribution: 'UI/UX 개발, 프로젝트 URL 구조 설계, 기능/화면 설계 참여',
    purpose:
      'Jira의 자유 입력 특성으로 인한 데이터 비일관성을 줄이기 위해, Jira를 데이터베이스처럼 활용하는 CRUD 전용 페이지를 개발하여 입력 오류 최소화',
    text: [
      {
        issue:
          'Quill 텍스트 에디터와 Jira 에디터의 마크다운 문법 차이로 호환 불가',
        resolution:
          '렌더/제출 시점에 모두 동작하는 양방향 컨버터 함수를 직접 구현해 호환성 80%확보'
      },
      {
        issue:
          'MUI 기본 컴포넌트가 React Hook Form과 직접 연동되지 않아 제어 및 타입 안정성 부족',
        resolution:
          'MUI 컴포넌트를 커스텀하고 control 전달을 위한 제네릭/타입을 재정의해 안정적 폼 제어 구현'
      },
      {
        issue:
          '히스토리 데이터 대량 조회로 단일 요청·렌더링 시 성능 저하',
        resolution:
          'API 페이지네이션 설계 및 TanStack Query 캐싱으로 점진 로딩으로 LCP 약 60%감소'
      },
      {
        issue:
          '등록 시 과도한 검증 단계로 사용자 피로도 증가',
        resolution:
          '동적 폼·조건부 검증으로 절차를 단순화하여 입력 단계 3단계 → 1단계로 단축'
      }
    ],
    achievement:
      '통합 입력 구조 도입으로 데이터 불일치 감소, Jira 대시보드에 정형 데이터 활용'
  },
  {
    tittle: '위변조방지 무설치형 솔루션 확장 개발',
    during : "2024.01 ~ 2024.12",
    skill: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Java'],
    participants: 1,
    contribution:
      '전체 개발 100%, 요구사항 수집·설계 100%, 제안·협의 미팅 참여 100%',
    purpose:
      '설치형(EXE) 의존을 해소하고 웹 표준 기반 멀티 디바이스용 솔루션을 제공',
    text: [
      {
        issue:
          'EXE 기반 뷰어 의존으로 모바일·iOS 환경에서 사용 불가',
        resolution:
          'HTML5 기반으로 뷰어 로직을 재구현해 브라우저 네이티브 동작 확보, 단일 코드베이스로 멀티 디바이스 지원'
      },
      {
        issue:
          '초기 렌더 단계에서 통합 스크립트가 렌더링을 블로킹해 첫 화면 표시 지연',
        resolution:
          '필수 부트스트랩만 HTML에 인라인하고 비핵심 비즈니스 로직은 CDN 비동기 로딩으로 분리해 초기 페인트 가속'
      },
      {
        issue:
          'iOS(WKWebView) 정책으로 파일 접근/다운로드 등 일부 기능 제약으로 동일 기능 제공이 어려움',
        resolution:
          '기능 감지 기반으로 iOS에는 Viewer-only 경량 UI 제공, 관련 버튼 비노출 및 “상세 기능은 PC에서 이용” 안내 UX 추가'
      }
    ],
    achievement:
      '국민카드 차세대 프로젝트에 제안 및 프로토타입 납품 성공 → 최종 수주 및 참여'
  },
  {
    tittle: '비가시성 워터마크 솔루션 연동 프론트엔드 개발',
    during : "2025.01 ~ 2025.06",
    skill: ['TypeScript', 'HTML5', 'CSS3'],
    participants: 3,
    contribution: '프론트엔드 100%, 설계 60%, 백엔드 30%',
    purpose:
      '국방부 출력 문서 보안 요건 충족을 위한 비가시성 워터마크 삽입·갱신 기능 구현',
    text: [
      {
        issue:
          'CDN의 대용량 워터마크 이미지를 동기 로드하며 LCP 약 2초 지연',
        resolution:
          '최소 타일 단위 소형 이미지만 사용하고 CSS background 반복으로 대체, 초기 렌더 차단을 회피해 LCP < 1초 달성'
      },
      {
        issue:
          '개발자 도구에서 `<img>` 제거 등 단순 조작으로 워터마크 우회 가능성',
        resolution:
          'DevTools 오픈/디버깅 시그널 탐지 후 차단/안내 처리, DOM 비의존 타일링으로 단순 엘리먼트 삭제에 내성 확보'
      },
      {
        issue:
          '워터마크 주기 갱신 시 네트워크 지연으로 화면 깜빡임 발생 가능',
        resolution:
          '요구 시간 이전 선행 fetch + 로딩 완료 시점 교체(더블 버퍼링)로 무중단 갱신'
      }
    ],
    achievement:
      '예비군 필증 무단 캡처 대응 시나리오에 적용, 주기적 갱신 로직으로 보안 요구 충족'
  },
  {
    tittle: '웹 콘텐츠 보안을 위한 무설치형 솔루션 프로토타입 개발',
    during : "2025.03 ~ 2025.06",
    skill: ['TypeScript', 'Webpack'],
    participants: 1,
    contribution: '기획 및 개발 100%',
    purpose:
      '설치형 의존 없는 브라우저 기반 화면 보안 수요 검증을 위한 무설치형 자바스크립트 프로토타입',
    text: [
      {
        issue:
          '사내 WebDRM이 설치형에만 대응하여 고객 니즈에도 판매가 어려움',
        resolution:
          '브라우저 표준(순수 JS) 기반으로 동작하는 무설치형 프로토타입을 주도적으로 설계·구현'
      },
      {
        issue:
          '설치형이 제공하던 OS 레벨 이벤트 차단을 브라우저만으로는 대체 어려움',
        resolution:
          '브라우저 보안 모델 한계를 전제로 억제·탐지 전략 채택: 복사/붙여넣기·컨텍스트 메뉴·단축키 인터셉트, 가시성/포커스 변화 감지 위반시 후 처리용 콜백 함수 지원'
      },
      {
        issue:
          '문서·화면의 무단 유출에 대한 가시적 억제 장치 필요',
        resolution:
          '사선 텍스트 워터마크를 뷰포트 전역에 오버레이하고 사용자/세션 식별자·타임스탬프를 동적으로 주입, CSS 타일링·불투명도 제어로 가독성과 억제력 균형'
      },
      {
        issue:
          'DevTools를 통한 리소스 노출 및 무효화 시도',
        resolution:
          'DevTools/디버깅 시그널 감지 시 즉시 보안 안내 페이지로 전환, 민감 로직 난독화/무결성 체크로 우회 난이도 상향'
      },
      {
        issue:
          '고객사별 정책·환경 편차로 단일 번들의 유연한 적용이 어려움',
        resolution:
          'Webpack 기반 모듈화와 옵션화(워터마크 문구/강도, 차단 정책, 리다이렉트 URL 등), UMD/ESM 번들 및 CDN 배포로 손쉬운 임베드 지원'
      }
    ],
    achievement:
      '비가시성 워터마크 연동 프로젝트에 모듈 형태로 재사용'
  }
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
            during={item.during}
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