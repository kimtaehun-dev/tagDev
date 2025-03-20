import './workCard.css'

type WorkCardType = {
  tittle : string;
  text :string[];
}

export default function WorkCard({tittle, text}:WorkCardType){
  return (
    <div className='work-card-frame'>
      <div className='card-tittle'>
        <p> ■ {tittle}</p>
      </div>
      <div className='card-text'>
        {text.map((item,index)=>(
          <p key={index}>- {item}</p>
        ))}
      </div>
    </div>
  )
}