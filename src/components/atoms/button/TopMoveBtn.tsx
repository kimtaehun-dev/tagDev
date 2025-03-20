import './TopMoverBtn.css'

export default function TopMoveBtn(){
  const handlePageUpClick = ()=>{
    window.scrollTo({top:0, behavior:'smooth'})
  }
  return (
    <button type='button' className='scroll-move-top-button' onClick={handlePageUpClick}>
      <img className='up-scroll-button-img' src='/tagDev/images/up-long-solid.svg'/>
    </button>
  )
}