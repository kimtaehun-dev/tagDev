import HeaderTittle from '../../atoms/tittle/headerTittle';
import './Header.css'

export default function Header(){
  const headerContentsList = ['About me','Skills', 'Archiving','Projects','Career'];
  return(
    <header>
      <div className='header-contents'>
        <HeaderTittle />
        <div className='header-menu'>
          {headerContentsList.map((item, index)=>(
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    </header>
  )
}