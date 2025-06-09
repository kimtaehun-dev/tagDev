import './WorkAchievements.css';

type WorkAchievement = {
  title: string;
  items: string[];
};

const achievements: WorkAchievement[] = [
  {
    title: "프로젝트 리드 및 개발",
    items: [
      "프로젝트 기획부터 배포까지 전 과정 주도",
      "팀원들과의 효율적인 협업을 위한 프로세스 개선",
      "코드 리뷰 및 기술 문서화 주도"
    ]
  },
  {
    title: "기술적 성과",
    items: [
      "React와 TypeScript를 활용한 프론트엔드 개발",
      "성능 최적화를 통한 페이지 로딩 시간 50% 단축",
      "재사용 가능한 컴포넌트 설계 및 구현"
    ]
  },
  {
    title: "문제 해결 및 개선",
    items: [
      "크로스 브라우징 이슈 해결",
      "사용자 경험 개선을 위한 UI/UX 개선",
      "코드 품질 향상을 위한 리팩토링 수행"
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