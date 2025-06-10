import './WorkAchievements.css';

type WorkAchievement = {
  title: string;
  items: string[];
};

const achievements: WorkAchievement[] = [
  {
    title: "주도적 제품 문제 해결 및 개선 성과",
    items: [
      "서블릿 환경에 종속적인 이슈를 SPA, PHP, 웹표준 환경으로 마이그레이션",
      "레거시 코드 리팩토링 및 보안취역점 개선",
      "타 부서와의 협의를 통한 솔루션 보완 진행",
      "효율적인 프로젝트 관리를 위한 사내 프로젝트 관리 페이지 개발"
    ]
  },
  {
    title: "기술적 성과",
    items: [
      "React와 TypeScript를 활용한 프론트엔드 개발",
      "고 해상도 워터마크 이미지 비동기 api 호출 및 랜더링 최적화",
      "프론트엔드 디자인 패턴/개발 방법론에 대한 적극적인 적용"
    ]
  },
  {
    title: "프로젝트 진행 성과",
    items: [
      "고객 니즈 파악 후 여러 프로토타입 개발 진행",
      "프로토타입 개발 후 고객 피드백 반영 및 최적화 진행",
      "개발 모듈을 통한 고객 제안 , 미팅 후 프로젝트 확정 및 진행",
      "금융 및 공공 기관 여러 프로젝트 솔루션 적용 커스텀마이징 지원"
    ]
  }
];

export default function WorkAchievements() {
  return (
    <div className="work-achievements">
      <h3>주요 업무 성과</h3>
      {achievements.map((achievement, index) => (
        <div key={index} className="achievement-section">
          <h4>{achievement.title}</h4>
          <ul>
            {achievement.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
} 