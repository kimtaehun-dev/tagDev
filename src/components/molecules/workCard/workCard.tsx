import './workCard.css'
export type TextTpye={
  issue:string;
  resolution:string;
}
export type WorkCardType = {
  tittle : string;
  during:string;
  skill:string[];
  text :TextTpye[];
  participants?: number;
  contribution?: string;
  achievement?: string;
  purpose?: string;
}
function IssueResolutionList({ items }: { items: TextTpye[] }) {
  return (
    <ul className="ir-list">
      {items.map((it, i) => (
        <li key={i} className="ir-pair">
          <div className="ir-row">
            <span className="ir-badge ir-badge-issue">문제</span>
            <p className="ir-text">{it.issue}</p>
          </div>
          <div className="ir-row">
            <span className="ir-badge ir-badge-solution">해결</span>
            <p className="ir-text">{it.resolution}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function WorkCard({tittle,during, skill, text, participants, contribution, achievement, purpose}:WorkCardType){
  return (
    <div className='work-card-frame'>
      <div className='card-tittle'>
        <p> ■ {tittle}</p>
        <p>{during}</p>
        <div className='container-card-skill'>
          {skill.map((item, index)=>(
            <span className='card-skill' key={`${item}${index}`}>{item}</span>
          ))}
        </div>
        {(participants || contribution) && (
          <div className='card-meta'>
            {participants && <span className='meta-item'>참가인원: {participants}명</span>}
            {contribution && <span className='meta-item'>기여도: {contribution}</span>}
          </div>
        )}
      </div>
      {purpose && (
        <div className='card-purpose'>
          <h4>개발 목적</h4>
          <p className='whitespace-pre-line'>{purpose}</p>
        </div>
      )}
      <div className='card-text'>
        <IssueResolutionList items={text} />
      </div>
      {achievement && (
        <div className='card-achievement'>
          <h4>주요 성과</h4>
          <p className='whitespace-pre-line'>{achievement}</p>
        </div>
      )}
    </div>
  )
}