import React ,{useState} from 'react'
import { Link } from 'react-router-dom';
import {HiMenuAlt4,HiX} from 'react-icons/hi';
import {motion} from 'framer-motion'

import {images} from '../../constants'
import './Navbar.scss'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src={images.logo} alt="logo" className='noselect'/>
            <div></div>
        </div>
        <ul className='app__navbar-links'>
            {['home','get started','calculator','about','terms&use','contact'].map((item)=>(
                <li className='app__flex p-text noselect' key={`link-${item}`}>
                    <div/>
                    <Link to={item!=='home'?`/${item}`:'/'}>{item}</Link>
                </li>
            ))}
        </ul>

        <div className='app__navbar-menu'>
            <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home','get started','about','terms&use','contact'].map((item) => (
                <li key={item} className='noselect'>
                  <Link to={item!=='home'?`/${item}`:'/'} onClick={() => setToggle(false)}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
        </div>
    </nav>
  )
}

export default Navbar
