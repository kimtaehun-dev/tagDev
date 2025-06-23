import './workCard.css'

type WorkCardType = {
  tittle : string;
  skill:string[];
  text :string[];
  participants?: number;
  contribution?: string;
  achievement?: string;
  purpose?: string;
}

export default function WorkCard({tittle, skill, text, participants, contribution, achievement, purpose}:WorkCardType){
  console.log(achievement);
  return (
    <div className='work-card-frame'>
      <div className='card-tittle'>
        <p> ■ {tittle}</p>
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
        {text.map((item,index)=>(
          <p key={index}>{item}</p>
        ))}
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