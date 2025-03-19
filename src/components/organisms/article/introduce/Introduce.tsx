import ArticleTittle from '../../../molecules/articleTittle/ArticleTittle'
import './Introduce.css'
export default function Introduce(){
  return(
    <div className="introduce-frame">
      <div className="introduce-container">
        <ArticleTittle tittleText={"Introduce"}/>
        <div className='introduce-main'>

        </div>
      </div>
    </div>
  )
}