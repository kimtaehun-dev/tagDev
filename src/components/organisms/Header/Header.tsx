
import HeaderTittle from '../../atoms/tittle/HeaderTittle';
import './Header.css'

export default function Header(){
  const headerContentsList = ['About me','Skills', 'Archiving','Projects','Career'];
  return(
    <header>
      <div className='header-contents'>
        <HeaderTittle />
        <div className='header-menu-group'>
          {headerContentsList.map((item, index)=>(
            <div className='header-item' key={index}>{item}</div>
          ))}
        </div>
      </div>
    </header>
  )
}