import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../../components'

import { AppWrap } from '../../wrapper'
import './Introduction.scss'


const Introduction = () => {
  const EmptyIcon=()=>{
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
    <>
      <div className='app__getstarted_main_ctn'>
        <p className='p-title noselect'>brief description</p>
        <p className='p-text noselect'><b>(this description is not fully accurate!)</b> <br/>The idea behind this website was to track time in a fun and interesting way. Currently, all you can do is view other dates from our users and the duration between two dates! In the "about" page, you may learn more about the project, myself, or even send a feedback or comment! Since we're striving to make improvements, this is not the final version.</p>
        <div className='app__getstarted_buttons_ctn'>
          <Link to='/calculator'>
            <Card text='find out how long ago your memorable occasion was' color='blue' useIcon={false} Icon={EmptyIcon}></Card>
          </Link>
          <Link to='/archive'>
            <Card text="expolre our community’s times" color='blue'useIcon={false} Icon={EmptyIcon}></Card>
          </Link>
        </div>

      </div>
    </>
  )
}

export default AppWrap(Introduction,'app__getstarted','app__primarybg',true)