import './Avatar.css';

type AvatarType = {
  imagePath : string;
  avatarName?:string;
}

export default function Avatar({imagePath,avatarName}:AvatarType){
  return (
    <div className='avatar-fame'>
      <img src={imagePath} />
      {avatarName&&(<p>{avatarName}</p>)}
    </div>
  )
}