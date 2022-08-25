import React from 'react'

import { motion } from 'framer-motion';
import { images } from '../../constants';

import './Gibberish.scss'

const Gibberish = () => {

    const random=(way,power,min)=>{
        power=Math.floor(power)
        min=Math.ceil(min)
        if(way===3){
            way=Math.round(Math.random());
        }
        if(way===0)
            return Math.random()*(power+min)+-min; //decrease
        if(way===1)
            return Math.random()*(power-min)+min; //increase
    }

    const slowTransition=(time)=>{
        return{
            type:'spring',
            repeat:Infinity,
            bounce:0,
            repeatType:'reverse',
            duration:10,
            delay:time
        }
    }


  return (
    <div className='app__header_gib_container'>
        <motion.img
            src={images.gibberish}
            alt='gibberish1'
            className='noselect'
            animate={{x:random(0,50,10),y:random(0,50,10)}}
            transition={slowTransition(2)}
        />
        <motion.img
            src={images.gibberish2}
            alt='gibberish2'
            className='noselect'
            animate={{x:random(3,100,50),y:random(0,50,10)}}
            transition={slowTransition(1)}
        />
        <motion.img
            src={images.gibberish3}
            alt='gibberish3'
            className='noselect'
            animate={{x:random(3,100,50),y:random(3,100,60)}}
            transition={slowTransition(5)}
        />
        <motion.img
            src={images.gibberish4}
            alt='gibberish4'
            className='noselect'
            animate={{x:random(0,200,90),y:random(0,100,10)}}
            transition={slowTransition(11)}
        />
        <motion.img
            src={images.gibberish5}
            alt='gibberish5'
            className='noselect'
            animate={{x:random(1,50,10),y:random(3,50,10)}}
            transition={slowTransition(9)}
        />
        <motion.img
            src={images.gibberish6}
            alt='gibberish6'
            className='noselect'
            animate={{x:random(3,110,60),y:random(0,100,60)}}
            transition={slowTransition(7)}
        />
        <motion.img
            src={images.gibberish7}
            alt='gibberish7'
            className='noselect'
            animate={{x:random(3,120,30),y:random(1,150,100)}}
            transition={slowTransition(7)}
        />
    </div>
  )
}

export default Gibberish