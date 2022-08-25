import React,{useState,useEffect} from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import {client} from '../../client' 
import { DateComponent } from '../../components';
import './StartPage.scss'
import { Link } from 'react-router-dom';

const StartPage = () => {
    const [mainDate, setMainDate] = useState('')

    useEffect(() => {
      const query='*[_type == "countdownSchema"]';
    
      client.fetch(query).then((result)=>{
        setMainDate(new Date(result[1].date));
      }).catch((err)=>{
      })
    }, [])




  return (
    <div className='app__header app__flex'>
        <div className='app__header_container'>

            <motion.div
                whileInView={{ x: [-1000, 0], opacity: [0, 1], scale:[0,1]}}
                transition={{ duration: 2, ease: 'easeOut'}}
                className="app__flex"
                viewport={{ once: true }}
            >
                <h1 className='noselect'>Anla~Time</h1>
                <p className='app__header_description p-text noselect'>the time which always shines</p>

            </motion.div>
            <Link to='/get%20started'>
              <button className='transparent-button'><p className='p-text noselect'>get started!</p></button>
            </Link>
        </div>
        <div className='app__header_footer'>
            <div className='app__flex'>
                <p className='p-text noselect'>our own time!c:</p>
                {mainDate===''?<p className='p-text noselect'>Waiting for the date!</p> : <DateComponent intialDate={mainDate} className='p-text noselect'/>}
            </div>
            <svg width="1440" height="350" viewBox="0 0 1440 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M-44.0001 45.1937L18.8749 59.6274C81.7499 74.0611 207.5 102.928 333.25 81.2779C459 59.6274 584.75 -12.541 710.5 1.89264C836.25 16.3263 962 117.362 1087.75 153.446C1213.5 189.531 1339.25 160.663 1402.12 146.229L1465 131.796V305H1402.12C1339.25 305 1213.5 305 1087.75 305C962 305 836.25 305 710.5 305C584.75 305 459 305 333.25 305C207.5 305 81.7499 305 18.8749 305H-44.0001V45.1937Z" fill="#BDE0FE"/>
            </svg>
        </div>
    </div>
  )
}

export default AppWrap(StartPage,'startpage','app__primarybg',true)