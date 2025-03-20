import Divider from "../../atoms/divider/Divider";

import './ArticleTittle.css';
type ArticleTittleType = {
  tittleText : string;
  }
export default function ArticleTittle({tittleText}:ArticleTittleType){
  return (
    <div className="article-tittle">
      <h3 className='tittle-text'>{tittleText}</h3>
      <Divider />
    </div>
  )
}