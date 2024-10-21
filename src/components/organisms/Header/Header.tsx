import { useEffect, useState } from 'react';
import HeaderTittle from '../../atoms/tittle/HeaderTittle';
import './Header.css';

export default function Header() {
  const headerContentsList = ['About me', 'Skills', 'Archiving', 'Projects', 'Career'];

  // 모바일용 네비게이션 버튼
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavBtn = () => {
    setIsNavOpen(!isNavOpen);
  };

  // 스크롤 상태 CSS 처리
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header style={{ backgroundColor: isScrolled ? 'beige' : '' }}>
      <div className={isScrolled ? 'scrolled-header header-common' : 'noScrolled-header header-common'}>
        <HeaderTittle />
        <div className='header-menu-group'>
          {headerContentsList.map((item, index) => (
            <nav className='header-item' key={index}>{item}</nav>
          ))}
        </div>
        <button className='header-menu-mobile-btn' type='button' onClick={handleNavBtn}>
          <img src='/src/assets/images/icons8-menu.svg' alt='Menu' />
        </button>
      </div>
      <div className={`header-menu-mobile-group ${isNavOpen ? 'open' : ''} scrolled-header`}>
        {headerContentsList.map((item, index) => (
          <nav className='header-mobile-item header-item' key={index}>{item}</nav>
        ))}
      </div>
    </header>
  );
}
