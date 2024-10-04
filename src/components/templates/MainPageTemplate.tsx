import TopMoveBtn from "../atoms/button/TopMoveBtn";
import Footer from "../organisms/footer/Footer";
import Header from "../organisms/Header/Header";

type MainPageTemplate = {
  children : React.ReactNode;
}
export default function MainPageTemplate({children}:MainPageTemplate){
  return (
    <>
      <Header/>
      {children}
      <Footer/>
      <TopMoveBtn />
    </>
  )
}