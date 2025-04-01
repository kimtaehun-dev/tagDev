import { FaUser, FaCalendarAlt, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaGithubSquare } from "react-icons/fa";

import ArticleTittle from '../../../molecules/articleTittle/ArticleTittle'
import IntroItemCard from '../../../molecules/IntroduceCard/IntroItemCard'
import './Introduce.css'

/* 오늘의 놀라운 사실
*  TypeScript는 string으로 객체를 인덱싱할 때 타입 안전성을 보장하기 어렵다고 판단해서 경고를 띄움
*  유틸리티 타입 Record<Key, Type> => 특정키만 가진 객체를 만들수있음. 
*/

const cardDatas: { icon: IconKey; CardTittle: string; CardValue: string }[] = [
  { icon: "프로필아이콘", CardTittle: "이름", CardValue: "김태헌" },
  { icon: "달력아이콘", CardTittle: "생년월일", CardValue: "95.09.21" },
  { icon: "주소아이콘", CardTittle: "주소", CardValue: "서울" },
  { icon: "전화아이콘", CardTittle: "전화번호", CardValue: "010-8684-6599" },
  { icon: "편지지아이콘", CardTittle: "이메일", CardValue: "changetodev@gmail.com" },
  { icon: "기간아이콘", CardTittle: "총 경력", CardValue: "4년" },
];

type IconKey = "프로필아이콘" | "달력아이콘" | "주소아이콘" | "전화아이콘" | "편지지아이콘" | "기간아이콘";
const iconMap: Record<IconKey, JSX.Element> = {
  "프로필아이콘": <FaUser />,
  "달력아이콘": <FaCalendarAlt />,
  "주소아이콘": <FaMapMarkerAlt />,
  "전화아이콘": <FaPhone />,
  "편지지아이콘": <FaEnvelope />,
  "기간아이콘": <FaClock />,
};


export default function Introduce(){
  return(
    <article className="introduce-article" id="Introduce">
      <div className="introduce-container">
        <ArticleTittle tittleText={"Introduce"}/>
        <div className='introduce-body'>
          {cardDatas.map((item,index)=>(
            <IntroItemCard key={index} icon={iconMap[item.icon]} tittle={item.CardTittle} value={item.CardValue}/>
          ))}
        </div>
          <a className="git-url"href="https://github.com/EnterRyan" target="_blank" >
            <div className='github-area'>
              <div className='github-tittle'>
                <FaGithubSquare size={40}/>
                <h2>GitHub</h2>
              </div>
              <div className='github-url'>
                <p>https://github.com/EnterRyan</p>
              </div>
            </div>
          </a>
          {/* <IntroduceText/> */}
      </div>
    </article>
  )
}