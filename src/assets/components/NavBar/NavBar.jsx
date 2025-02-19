import { useContext, useEffect, useRef, useState } from 'react'
import './NavBar.css'
import NavItem from './NavItem'
import { ThemeContext } from '../../../pages/Root'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BsToggle2Off, BsToggle2On } from 'react-icons/bs'


const NavBar = ({logo,navitem}) => {

  const {theme , setTheme} = useContext(ThemeContext)
  const [isOpen , setIsOpen] = useState(false)
  const sideBar = useRef(null);
  const toggleBtn = useRef(null);

  useEffect(() => {
    const ClickOut = (event) => {
      if (
        sideBar.current &&
        !sideBar.current.contains(event.target) &&
        toggleBtn.current &&
        !toggleBtn.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", ClickOut);

    return () => {
      document.removeEventListener("mousedown", ClickOut);
    };
  }, []);
  


  return (
    <nav className={`nav ${theme === "dark" ? "dark-theme" : ""}`}>
      <div className="logo">
      <h1>B-W<img src={logo}/>rld</h1>
      </div>
      <button ref={toggleBtn} className='toggle-menu' onClick={()=> setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div ref={sideBar} className={isOpen ? "nav-items active" : "nav-items"}>
        <ul>
          {navitem?.map((item,index) => {
            return (
              <li key={index}>
                <NavItem
                href={item.href}
                content={item.content}
                />
              </li>
            )
          })}
        </ul>
        <button className='mobile-mode' onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? (<>Dark Mode<i><BsToggle2Off /></i></>) : (<>Light Mode<i><BsToggle2On /></i></>)}
        </button>
      </div>
      
      <button className='mode' onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? (<><i><MdOutlineDarkMode/></i>dark mode</>) : (<><i><MdOutlineLightMode/></i>Light Mode </>)}
      </button>
    </nav>
  )
}

export default NavBar
