
import { useEffect, useState } from 'react';
import HeaderTittle from '../../atoms/tittle/HeaderTittle';
import './Header.css'

export default function Header(){
  const headerContentsList = ['About me','Skills', 'Archiving','Projects','Career'];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY>0){
        setIsScrolled(true)
      }
      else{
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return ()=>{
      window.removeEventListener('scroll', handleScroll);
    }

  },[])

  return(
    <header style={{backgroundColor: isScrolled?'beige':''}}>
      <div className={isScrolled?'scrolled-header header-common':'noScrolled-header header-common'}>
        <HeaderTittle />
        <div className='header-menu-group'>
          {headerContentsList.map((item, index)=>(
            <nav className='header-item' key={index}>{item}</nav>
          ))}
        </div>
      </div>
    </header>
  )
}