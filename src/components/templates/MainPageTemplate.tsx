import { useEffect, useState } from "react";
import TopMoveBtn from "../atoms/button/TopMoveBtn";
import Footer from "../organisms/footer/Footer";
import Header from "../organisms/Header/Header";

type MainPageTemplate = {
  children : React.ReactNode;
}
export default function MainPageTemplate({children}:MainPageTemplate){
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY>0){
        setIsScrolled(true);
      }
      else{
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return() =>{
      window.removeEventListener('scroll', handleScroll);
    }
    
  },[])
  return (
    <>
      <Header/>
      {children}
      <Footer/>
      {isScrolled?(<TopMoveBtn />):("")}
    </>
  )
}