import './WorkAchievements.css';

export type WorkAchievement = {
  title: string;
  items: string[];
};

type WorkAchievementsProps = {
  achievements: WorkAchievement[];
};

export default function WorkAchievements({ achievements }: WorkAchievementsProps) {
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