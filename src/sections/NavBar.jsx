import React, { useState } from 'react'
import ham from '../../public/assets/menu.svg'
import close from '../../public/assets/close.svg'
import { navLinks } from '../constants'
const NavItems = ()=>{
  return(
    <ul className='nav-ul'>
     {navLinks.map((links)=>{
     return(
        <li key={links.id} className='nav-li'>
          <a href={links.href} className='nav-li_a' onClick={()=>{}}>{links.name}</a>
        </li>
     )
     })}
    </ul>
  )
}
const NavBar = () => {
 
  const [isOpen, setIsOpen] =useState(false)
  return (
    <header className='flxed top-0 left-0 right-0 z-50 bg-black/90'>
       <div className='max-w-7xl mx-auto'>
            <div className='flex items-center justify-between py-5 mx-auto c-space'>
              <div className='flex items-center justify-center gap-3'>
                <img src="/assets/code.svg" className='w-8 h-8' alt="" />
                <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>Suprateek Sen</a>
              </div>
                <button onClick={() => setIsOpen(!isOpen)} className='text-neutral-400 hover:text/white focus:outline-none sm:hidden flex ' aria-label='toggel menu'>
                    <img src={isOpen ? close : ham} alt="toggle" className='w-6 h-6' />
                </button>
                <nav className="sm:flex hidden">
                    <NavItems />
                </nav>
            </div>
       </div>
       <div className={`nav-sidebar ${isOpen?'max-h-screen':'max-h-0'}`}>
        <nav className='p-5'>
          <NavItems />
        </nav>
       </div>
    </header>
  )
}

export default NavBar