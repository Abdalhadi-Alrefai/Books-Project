import { useContext, useState } from 'react'
import './NavBar.css'
import NavItem from './NavItem'
import { ThemeContext } from '../../../pages/Root'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BsToggle2Off, BsToggle2On, BsToggleOff, BsToggleOn } from 'react-icons/bs'


const NavBar = ({logo,navitem}) => {

  const {theme , setTheme} = useContext(ThemeContext)
  const [isOpen , setIsOpen] = useState(false)


  return (
    <nav className={`nav ${theme === "dark" ? "dark-theme" : ""}`}>
      <div className="logo">
      <h1>B-W<img src={logo}/>rld</h1>
      </div>
      <button className='toggle-menu' onClick={()=> setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={isOpen ? "nav-items active" : "nav-items"}>
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
