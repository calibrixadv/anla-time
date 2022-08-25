import React from 'react'
import {motion} from 'framer-motion'

import { AppWrap } from '../../wrapper'
import './Hero.scss'
import { Link } from 'react-router-dom'
import { Card } from '../../components'

const Hero = () => {
  function FirstSvgIcon(){
    return (
      <svg width="66" height="47" viewBox="0 0 66 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M58.875 13.9062V45.1875H7.125V13.9062" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M27.25 23.5312H38.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M64.625 7.89062V13.9062H1.375V7.89062" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.375 7.89062V1.875H64.625V7.89062" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
  return (
    <div className='app__hero'>
      <div className='app__hero_top'>
        <svg width="1440" height="279" viewBox="0 0 1440 279" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="path-1-outside-1_10_55" maskUnits="userSpaceOnUse" x="-301" y="-53" width="2084" height="332" fill="black">
            <rect fill="white" x="-301" y="-53" width="2084" height="332"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1768 250.478L1682.42 256.488C1596.83 262.498 1425.67 274.517 1254.5 244.468C1083.33 214.418 912.167 142.299 741 142.299C569.833 142.299 398.667 214.418 227.5 232.448C56.3333 250.478 -114.833 214.418 -200.417 196.388L-286 178.358V-38H-200.417C-114.833 -38 56.3333 -38 227.5 -38C398.667 -38 569.833 -38 741 -38C912.167 -38 1083.33 -38 1254.5 -38C1425.67 -38 1596.83 -38 1682.42 -38H1768V250.478Z"/>
          </mask>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1768 250.478L1682.42 256.488C1596.83 262.498 1425.67 274.517 1254.5 244.468C1083.33 214.418 912.167 142.299 741 142.299C569.833 142.299 398.667 214.418 227.5 232.448C56.3333 250.478 -114.833 214.418 -200.417 196.388L-286 178.358V-38H-200.417C-114.833 -38 56.3333 -38 227.5 -38C398.667 -38 569.833 -38 741 -38C912.167 -38 1083.33 -38 1254.5 -38C1425.67 -38 1596.83 -38 1682.42 -38H1768V250.478Z" fill="#BDE0FE"/>
        </svg>
      </div>
      <div className='app__hero_content'>
        <Link to='/calculator '>
          <Card text='find out how long ago this memorable occasion was' Icon={FirstSvgIcon}></Card>
        </Link>
        <p className='noselect'>or maybe...</p>
        <Link to='/archive'>
          <Card text="expolre our community’s times" Icon={FirstSvgIcon}></Card>
        </Link>
      </div>
    </div>
  )
}

export default AppWrap(Hero,'app__hero','app__secondarybg')