import { useEffect, useState } from 'react';
import './Header.css';

export default function Header() {
  const tittleName = "ChangeToDev";
  const headerContentsList = ['Introduce', 'Skills', 'Career', 'Project'];
  const [mobileState, setMobileState] = useState(false);
  
  //For Mobile Header Navigator
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavSwitch = ()=>{setIsNavOpen((prev=>!prev))}
  // const handleNavOpen = ()=>{setIsNavOpen(true)}
  const handleNabClose =()=>{setIsNavOpen(false)}
  const handleNavMove =(id:string)=>{
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleNabClose();
  }


  // Scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll and resize event listeners
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      setMobileState(window.innerWidth < 700);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Initialize mobile state on mount
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLogiClick = ()=>{
    window.scrollTo({top:0, behavior:'smooth'})
  }

  const handleNavScroll = (id:string)=>{
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <header className={isScrolled||mobileState?'header-optional':'header-default'}>
      <div className='header-container-common'>
        <div className={`header-tittle ${isScrolled||mobileState?'header-items-optional':'header-items-default'}`} onClick={handleLogiClick}>{tittleName}</div>
        <div className='header-contents-default'>
          {headerContentsList.map((item, index) => (
            <nav 
            className={isScrolled||mobileState?'header-items-optional':'header-items-default'} 
            key={index}
            onClick={()=>handleNavScroll(item)} 
            >{item}</nav>
          ))}
        </div>
        <button className='header-contents-mobile-btn' type='button' onClick={handleNavSwitch}>
          <img src='/tagDev/images/icons8-menu.svg' alt='Menu' />
        </button>                                                                                                                                                   
      </div>
      <div className={`header-contents-mobile-nav ${isNavOpen?'act':''}`}>
      {headerContentsList.map((item, index) => (
        <nav 
        className='header-contents-mobile-items' 
        key={index}
        onClick={()=>handleNavMove(item)} 
        >{item}</nav>
      ))}
    </div>
    
    </header>
  );
}
