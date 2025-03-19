import './IntoItemCard.css';

type IntroItemCardType = {
  icon : JSX.Element;
  tittle :string;
  value : string;
}

export default function IntroItemCard({icon, tittle, value}:IntroItemCardType){
  return (
    <div className="intro-item-card">
      <div className='icon-area'>{icon}</div>
      <div className='tittle-area'>{tittle}</div>
      <div className='value-area'>{value}</div>
    </div>
  )
}