import { NavLink } from 'react-router-dom'
import './NavItem.css'

const NavItem = ({ href, content }) => {
  return (
    <NavLink to={href}>
      {content}
    </NavLink>
  )
}

export default NavItem



