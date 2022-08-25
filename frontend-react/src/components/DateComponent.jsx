import React,{useEffect,useState} from 'react'
import { difference } from '../constants';


const DateComponent = ({intialDate,id,style,className}) => {
    const [showDate, setShowDate] = useState('')

    useEffect(()=>{
        const timer= setInterval(()=>{
            if(typeof intialDate!==undefined && id!==undefined)
            {
                setShowDate(difference(document.getElementById(id).dataset.date,new Date()))
            }
            else{
                setShowDate(difference(intialDate,new Date()))
            }

        }, 1000);
         return ()=>{
            clearInterval(timer);
         };
    },[])
  return (
    <p id={id} style={style} className={className}>{showDate}</p>
  )
}

export default DateComponent