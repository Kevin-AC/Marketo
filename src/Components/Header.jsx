import { useState } from 'react'
function Header () {
  const [click, setClick] = useState(true)

  return (
    <div className="w-full h-16 lg:h-20 bg-white flex justify-between items-center shadow-md sticky top-0 z-50 px-[5%] lg:px-[9%]">
      <a className="text-2xl font-semibold text-black lg:text-[28px]" href="#hero">Marketo.</a>
      <nav className={`navMenu ${!click ? '' : 'hidden sm:flex'}`}>
        <ul className="navList p-4 flex flex-col gap-3 sm:flex-row">
          <li><a href="#hero">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#review">Review</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div onClick={() => setClick(!click)} className={`Hmenu fas  ${click ? 'fa-bars' : 'fa-times'}`} ></div>
    </div>
  )
}
export default Header
