import ArticleTittle from '../../../molecules/articleTittle/ArticleTittle'
import './Introduce.css'
export default function Introduce(){
  return(
    <div className="introduce-article">
      <div className="introduce-container">
        <ArticleTittle tittleText={"Introduce"}/>
      </div>
    </div>
  )
}