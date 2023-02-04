import './Sidebar.css'

import telegram from '../../assets/icons/telegram.svg'
import whatsapp from '../../assets/icons/whatsapp.svg'
import instagram from '../../assets/icons/instagram.svg'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="my-photo"></div>
      <span className="my-name">Шахид Оздоев</span>
      <span className="my-prof">Software Developer</span>
      <ul className="menu">
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}><li className="menu-item">Обо мне</li></Link>
        <Link to="/projects" style={{ textDecoration: 'none', color: 'white' }}><li className="menu-item">Проекты</li></Link>
        <Link to="/skills" style={{ textDecoration: 'none', color: 'white' }}><li className="menu-item">Скилы</li></Link>
      </ul>
      <div className="socials">
        <img className="social-icon" src={telegram} alt="telegram" />
        <img className="social-icon" src={whatsapp} alt="whatsapp" />
        <img className="social-icon" src={instagram} alt="instagram" />
      </div>
      <span className='my-phone'>+7 999 879 6357</span>
    </div>
  )
}