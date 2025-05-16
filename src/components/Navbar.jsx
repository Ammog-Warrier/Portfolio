import React, {useState} from 'react'
import {navLinks} from "../constants/index.js";


const Navitems=()=>{
  return (
      <ul className="nav-ul">
        {navLinks.map(({id,href,name})=>(
            <li key={id} className="nav-li">
              <a className="nav-li_a" href={href} onClick={()=>{}}>
                {name}
              </a>
            </li>

          ))}


      </ul>

  )
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen((prev) => !prev)

  return (
    <header className={'fixed top-0 left-0 right-0 z-50 bg-black/90'}>
      <div className={'max-w-7xl mx-auto'}>
        <div className={'flex justify-between items-center py-5 mx-auto c-space'}>
          <a className={'text-neutral-400 font-bold text-xl hover:text-white transition-colors'} href="/"> 
            Ammog
          </a>
          <button onClick={toggle} className={'text-neutral-400 hover:text-white  focus:outline-none sm:hidden flex'} aria-label='Toggle-menu' >
            <img src={isOpen?'assets/close.svg':'assets/menu.svg'} alt="toggle" className={'w-6 h-6'} />
            
          </button>

          <nav className={'sm:flex hidden'}>
            <Navitems/>

          </nav>

          <div className={`nav-sidebar ${isOpen ? `max-h-screen` : `max-h-0`} `}>
            <nav className={'p-5'}>
              <Navitems/>
            </nav>

          </div>
          


        </div>

      </div>
    </header>
  )
}

export default Navbar