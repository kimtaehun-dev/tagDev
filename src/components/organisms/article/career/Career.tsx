import './career.css';
import ArticleTittle from '../../../molecules/articleTittle/ArticleTittle';
import Avatar from '../../../atoms/avarta/Avatar';
import WorkCard from '../../../molecules/workCard/workCard';
import type { WorkCardType } from '../../../molecules/workCard/workCard';
import WorkAchievements from '../../../molecules/workAchievements/WorkAchievements';
import type { WorkAchievement } from '../../../molecules/workAchievements/WorkAchievements';

type CompanyCareer = {
  name: string;                    // 회사명 (Avatar avatarName)
  logo: string;                    // 로고 경로 (/tagDev/images/...)
  period: string;                  // 재직 기간
  achievements: WorkAchievement[]; // 좌측 "주요 업무 성과" 박스
  workCards: WorkCardType[];       // 우측 경력 카드 목록
};

const markanyWorkCardData: WorkCardType[] = [
  {
    tittle: '위변조방지 솔루션 React 마이그레이션 개발',
    during: "2021.11 ~ 2022.04",
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
    during: "2023.01 ~ 2025.06",
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
    during: "2024.01 ~ 2024.12",
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
    during: "2025.01 ~ 2025.06",
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
    during: "2025.03 ~ 2025.06",
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

const markanyAchievements: WorkAchievement[] = [
  {
    title: "주도적 제품 문제 해결 및 개선 성과",
    items: [
      "서블릿 환경에 종속적인 이슈해결",
      "레거시 코드 리팩토링",
      "타 부서와의 협의를 통한 솔루션 보완",
      "사내 이력 관리 페이지 개발"
    ]
  },
  {
    title: "기술적 성과",
    items: [
      "React와 TypeScript를 적극활용",
      "디자인 패턴/개발 방법론에 적용",
      "고 해상도 워터마크 이미지 비동기 Api 호출 및 랜더링 시간단축",
    ]
  },
  {
    title: "프로젝트 진행 성과",
    items: [
      "고객 니즈 파악 후 여러 프로토타입 개발 진행",
      "프로토타입 개발 후 고객 피드백 반영 후 제품화",
      "개발 모듈을 통한 고객 제안 ,미팅 후 프로젝트 확정 및 진행",
      "금융 및 공공 기관 여러 프로젝트 솔루션 커스텀마이징 지원"
    ]
  }
]

const tongroCareer: CompanyCareer = {
  name: '통로이미지(주)',
  logo: '/tagDev/images/tongroImage_logo.png',
  period: '2025.09 ~ 재직중 (10개월)',
  achievements: [
    {
      title: '담당 / 역할',
      items: [
        '에디터 프론트팀 · 연구원/팀원',
        '프론트엔드 개발',
      ],
    },
    {
      title: '주요 업무',
      items: [
        '웹 기반 에디터 기능 개발 및 유지보수',
        '클립아트코리아 서비스와 에디터 간 기능 및 인증 연동',
        '에디터 서비스 도메인 분리 및 인증/SEO 구조 개선 프로젝트 참여',
        'Claude 팀 공통 skill 및 rules 구축',
        'StoryBook 배포 프로세스 구축으로 베이스/복합 컴포넌트 40여 개 형상 관리',
        '에디터 어드민 페이지의 테이블·차트를 통한 백오피스 데이터 시각화',
      ],
    },
  ],
  workCards: [
    {
      tittle: '에디터 텍스트 레이아웃 계산 및 버츄얼라이징 처리 개선',
      during: '2025.09 ~ 재직중',
      skill: ['Next.js', 'TypeScript', 'Redux & ReduxSaga'],
      purpose:
        '디자인 단위(다중 페이지) 환경에서 텍스트 객체의 폰트를 일괄 변경할 수 있도록 기능을 확장하고, 버츄얼라이징 환경에서도 정확한 레이아웃 계산이 가능하도록 처리 구조 개선',
      text: [
        {
          issue:
            '폰트 일괄 변경 요구가 동일 페이지 다중 텍스트·디자인 전체·특정 폰트 선택 등으로 확장되었으나, 기존에는 현재 페이지의 단일 텍스트만 변경 가능했고, 텍스트가 그룹 객체(이미지+텍스트) 내부에 가변 depth로 중첩되어 디자인 전체에서 텍스트 객체 위치(index)를 일괄 수집하기 어려움',
          resolution:
            '재귀 기반 탐색 함수로 중첩 그룹 구조를 순회하며 모든 텍스트 객체의 index를 수집하고, 특정 폰트 코드와 일치하는 객체만 필터링하는 코어 로직을 구현해 다양한 범위의 폰트 변경 요구에 대응',
        },
        {
          issue:
            '텍스트 변경·레이아웃 계산이 DOM 기반으로 이루어져, DOM에 존재하지 않는 버츄얼라이징된 페이지에는 폰트 변경 및 레이아웃 반영이 불가능',
          resolution:
            '버츄얼라이징된 페이지에 렌더링 플래그를 두어 순차적으로 DOM에 마운트하고, useEffect로 mount 시점을 감지해 해당 페이지 텍스트 객체의 폰트 변경 및 레이아웃 재계산을 수행',
        },
      ],
      achievement:
        '중첩 객체 구조에서도 모든 텍스트 객체를 정확히 탐색·제어 가능, 버츄얼라이징 환경에서도 폰트 변경 및 레이아웃 계산이 정상 반영, 다중 페이지 에디터에서 일관된 텍스트 편집 경험 제공',
    },
    {
      tittle: '에디터 서비스 도메인 분리 프로젝트',
      during: '2025.09 ~ 재직중',
      skill: ['Next.js', 'NextAuth', 'TypeScript', 'SEO'],
      purpose:
        '기존 클립아트코리아 하위 도메인에 종속된 에디터 서비스를 독립 도메인으로 분리하고, 기존 백엔드 API 구조를 유지하면서 비로그인 사용자 사용 흐름을 확보하며, 템플릿·검색 결과 페이지의 SEO 노출 확대',
      text: [
        {
          issue:
            '기존 API가 accessToken 기반으로 강하게 결합되어 구조 변경이 불가능하고, 비로그인 사용자에게도 기능을 제공해야 하는 정책과 충돌하며, 소셜 로그인·기존 계정·익명 토큰 등 서로 다른 인증 방식이 혼재되어 통합 인증 흐름이 부재',
          resolution:
            'NextAuth 기반으로 익명 토큰/소셜 로그인/기존 계정 로그인을 하나의 인증 파이프라인으로 통합하고, signIn 인터페이스 표준화 및 타입 확장으로 인증 상태 관리를 정립, authGuard 라우팅 제어와 Context Provider로 전역 인증 상태 동기화 구조 설계',
        },
        {
          issue:
            '템플릿 데이터 prefetch·meta 생성·다이나믹 사이트맵 생성 과정에서도 인증 토큰이 필요해 요청마다 익명 토큰 발급 API가 반복 호출되며, 크롤러 요청 시 서버 부하 확대 가능성 존재',
          resolution:
            '서버 실행 컨텍스트에서 익명 토큰을 캐싱하는 싱글톤 패턴을 적용하고, 클라이언트/서버 환경을 구분해 accessToken을 주입하는 API 호출 래퍼 함수를 구현',
        },
        {
          issue:
            '어드민 기반 이벤트성 SEO만 존재하고 대량의 템플릿/검색 결과 페이지에 대한 자동화된 SEO 전략이 부재해, 신규 콘텐츠가 추가되어도 검색 엔진에 노출되지 않는 구조',
          resolution:
            '경쟁 서비스 SEO 구조를 분석해 개선 방향을 도출하고, 템플릿·검색 결과 페이지에 meta 및 다이나믹 sitemap을 적용, 페이지 단위 sitemap 분할·index 구조로 대량 콘텐츠 크롤링에 대응하며 이벤트성 SEO와 콘텐츠 단위 SEO를 병행',
        },
      ],
      achievement:
        '인증 구조 변경 없이 비로그인 사용자 흐름을 확보하고 서버 토큰 캐싱으로 중복 API 호출을 제거해 크롤러 유입 환경에서도 안정적 트래픽 처리 구조 구축, 템플릿·검색 결과 페이지에 SEO·다이나믹 사이트맵을 적용해 대량 콘텐츠의 검색 노출·인덱싱이 가능한 구조로 확장',
    },
    {
      tittle: 'GentriAI(가명) 프로토타입 개발 참여',
      during: '2025.09 ~ 재직중',
      skill: ['Next.js', 'TypeScript', 'ky', 'NextAuth', 'StoryBook'],
      participants: 8,
      contribution:
        '소셜·이메일 인증/인가 구현, tossPayments 결제 연동, 팀 개발 harness 정의, 디자인 시스템 및 StoryBook 규칙 정의·구축 (구성: 기획 2, 디자인 1, 프론트 2, 백엔드 3)',
      purpose:
        '클립아트코리아 구독자의 이탈을 방지하기 위한 AI 이미지 생성 플랫폼 구축',
      text: [
        {
          issue:
            '신규 디자인 시스템이 베이스 컴포넌트부터 쌓아 올리는 bottom-up 방식이 아니라 복합 컴포넌트 단위의 페이지 디자인으로 구성되어, 프로젝트 초기부터 UI 일관성을 유지하기 어렵고 중복 UI 코드가 양산되었으며, Figma MCP로 컴포넌트를 구현할 때 토큰 소모량도 과도했음',
          resolution:
            'Material Design 3을 기반으로 프리미티브 색상 팔레트부터 시맨틱 토큰까지 정의·협의한 뒤 Tailwind 4로 이관하고, 이 토큰을 기준으로 복합 컴포넌트를 베이스 컴포넌트와 도메인 컴포넌트로 분리해 재사용 구조를 확립',
        },
      ],
      achievement:
        '디자인 토큰을 체계적으로 정의해 Figma 설정값과 코드가 일치하게 되면서, Claude가 Figma MCP를 통해 컴포넌트를 한층 수월하게 구현할 수 있게 되었고, 일관된 UI와 컴포넌트 variants 정의를 기반으로 재사용성 높은 범용 공통 컴포넌트를 구축',
    },
  ],
}

// [0] 최신 회사를 위로, [1] 마크애니
const companies: CompanyCareer[] = [
  tongroCareer,
  {
    name: '마크애니',
    logo: '/tagDev/images/markany_logo.jpg',
    period: '2020.03 ~ 2025.06',
    achievements: markanyAchievements,
    workCards: markanyWorkCardData,
  },
]


export default function Carrer() {
  return (
    <article className='carrer-frame' id="Career">
      <ArticleTittle tittleText={"Career"} />
      {companies.map((company) => (
        <div className='carrer-company-block' key={company.name}>
          <div className='carrer-container'>
            <div className='company-desciption'>
              <div className='company-logo'>
                <Avatar imagePath={company.logo} avatarName={company.name} />
                <div className='company-text'>
                  <p>{company.period}</p>
                </div>
              </div>
              <div className='work-achievements'>
                <WorkAchievements achievements={company.achievements} />
              </div>
            </div>
            <div className='history'>
              <h2>Career History</h2>
              {company.workCards.map((item, index) => (
                <WorkCard key={index}
                  tittle={item.tittle}
                  during={item.during}
                  skill={item.skill}
                  text={item.text}
                  participants={item.participants}
                  contribution={item.contribution}
                  achievement={item.achievement}
                  purpose={item.purpose} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </article>
  )
}