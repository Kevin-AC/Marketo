import { useState } from 'react'
function Header () {
  const [click, setClick] = useState(true)

  return (
    <div className="w-full h-16 bg-white flex justify-between items-center shadow-md sticky top-0 z-50 px-[5%] lg:px-[9%]">
      <a className="text-2xl font-semibold" href="#">Marketo.</a>
      {!click && <nav className="bg-white w-[70%] h-auto absolute top-20 right-4 z-50">
        <ul className="navList p-4 flex flex-col gap-3">
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Review</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>}
      <div onClick={() => setClick(!click)} className={`Hmenu fas  ${click ? 'fa-bars' : 'fa-times'}`} ></div>
    </div>
  )
}
export default Header
