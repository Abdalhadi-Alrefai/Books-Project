import { LuBookOpen } from 'react-icons/lu'
import Box from '../Box/Box'
import './Card.css'
import { MdStarRate } from 'react-icons/md'
import { useContext } from 'react'
import { ThemeContext } from '../../../pages/Root'

const Card = ({title}) => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`card ${theme === "dark" ? "dark-theme" : ""}`}>
      <h1>{title}</h1>
      <div>
        <Box icon1={<LuBookOpen />}
        icon2={<MdStarRate />}/>
      </div>
    </div>
  )
}

export default Card
