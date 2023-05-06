import { useState } from 'react'
function Header () {
  const [click, setClick] = useState(true)

  return (
    <div className="w-full h-16 lg:h-20 bg-white flex justify-between items-center shadow-md sticky top-0 z-50 px-[5%] lg:px-[9%]">
      <a className="text-2xl font-semibold text-black lg:text-[28px]" href="#">Marketo.</a>
      <nav className={`navMenu ${!click ? '' : 'hidden sm:flex'}`}>
        <ul className="navList p-4 flex flex-col gap-3 sm:flex-row">
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Review</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div onClick={() => setClick(!click)} className={`Hmenu fas  ${click ? 'fa-bars' : 'fa-times'}`} ></div>
    </div>
  )
}
export default Header
