import './Avartar.css';

type AvartarType = {
  imagePath : string;
  avartarName :string;
}

export default function Avartar({imagePath,avartarName}:AvartarType){
  return (
    <div className='avartar-fame'>
      <img src={imagePath} />
      <p>{avartarName}</p>
    </div>
  )
}