import React from 'react'
import {navLinks} from "../constants/index.js";

const Navitems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({id, href, name}) => (
        <li key={id} className="nav-li">
          <a className="nav-li_a" href={href}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  )
}

const Navbar = () => {
  return (
    <header className={'fixed top-0 left-0 right-0 z-[100] bg-black/90 backdrop-blur-sm'}>
      <div className={'max-w-7xl mx-auto'}>
        <div className={'flex justify-between items-center py-5 mx-auto c-space'}>
          <a className={'text-neutral-400 font-bold text-xl hover:text-white transition-colors'} href="/"> 
            Ammog
          </a>

          <nav>
            <Navitems />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar