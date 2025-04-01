import './workCard.css'

type WorkCardType = {
  tittle : string;
  skill:string[];
  text :string[];
}

export default function WorkCard({tittle,skill, text}:WorkCardType){
  return (
    <div className='work-card-frame'>
      <div className='card-tittle'>
        <p> ■ {tittle}</p>
        <div className='container-card-skill'>
          {skill.map((item, index)=>(
            <span className='card-skill' key={`${item}${index}`}>{item}</span>
          ))}
        </div>
      </div>
      <div className='card-text'>
        {text.map((item,index)=>(
          <p key={index}>- {item}</p>
        ))}
      </div>
    </div>
  )
}