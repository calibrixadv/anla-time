import React, { useRef, useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom';
import UseAnimations from 'react-useanimations';


import github from 'react-useanimations/lib/github'

import { AppWrap } from '../../wrapper';
import { DateComponent } from '../../components';
import {difference, DateContext} from '../../constants';



import './DateForm.scss'



const DateForm = () => {


    const [use_current_time, set_use_current_time] = useState(false)

    const [date, setDate] = useState('')

    const [date2, setDate2] = useState('')

    const [disabled,setDisabled]=useState(false)

    const [can_submit, set_can_submit] = useState(false)

    const [url,setUrl]=useState('/page-create')

    const isMounted=useRef(false)

    const {data,setData}=useContext(DateContext)
    
    const changeState=function (){
        const component=document.getElementById('current_time')
        set_use_current_time(component.checked)
    }

    const errorMessage=function (error){
        const target=document.getElementsByClassName('p-target')[0]
        target.innerHTML=error
        target.style='display:block'
        document.getElementById('auto_updateble_text').style='display:none'
    }

    const calculateDate=function () {
        const date_component=document.getElementById('auto_updateble_text')
        const target=document.getElementsByClassName('p-target')[0]

        if(date2=='' && !use_current_time)
        {
            errorMessage('second date seems empty!')
        }

        if(date=='')
        {
            errorMessage('first date seems empty!')
            if(date2=='' && !use_current_time)
            {
                errorMessage('please fill the date fields!')
            }
        }

        const aux=new Date(date)

        const aux2=new Date(date2)


        if(aux.getTime()>aux2.getTime() && !use_current_time)
        {
            errorMessage('the first date seems older than the final one!')
            set_can_submit(false)
        }
        else{
            generateUrl()
            if(date!='' && date2!='')
            {
                target.innerHTML=difference(date,date2)
                set_can_submit(true)
            }
            if(use_current_time && date!=''){
                date_component.style='display:block'
                target.style='display:none'
                set_can_submit(true)
            }
            else{
                date_component.style='display:none'
                target.style='display:block'
            }
        }

    }
    
    const generateUrl=function(){
        setData({
            first_date:date,
            second_date:date2,
            use_current_time:use_current_time
        })
        console.log(data)
        setUrl({
            pathname:`/page-create/${date}`,
        })
    }

    useEffect(()=>{
        if(isMounted.current){
            const date_component=document.getElementById('auto_updateble_text')
            const current_time=new Date()
            const target_date=new Date(date)
            if(target_date.getTime()<current_time.getTime())
            {
                date_component.setAttribute('data-date',date)
                setDisabled(false)
                set_can_submit(false)
            }
            else{
                errorMessage('the first date seems older than the final one!')
            }
        }
        else{
            isMounted.current=true;
        }
    },[date])

    useEffect(()=>{
        const component=document.getElementById('last_date')
        set_can_submit(false)
        if(use_current_time){
            component.disabled=true
        }
        else{
            component.disabled=false
        }
    },[use_current_time])
    

  return (
    <div className='app__date_container app__flex'>
        <div className='app__date_main_ctn app__flex'>
            <div className='app__date_user_input'>
                <div className='app__date_start_ctn'>
                    <p className='noselect'>Your beautiful memory</p>
                    <input type='datetime-local' onChange={()=>{ setDisabled(true); setDate(document.getElementById('first_date').value)}} className='app__input_date' id='first_date' name='first_date'/>
                </div>
                <div className='app__date_end_ctn'>
                    <div>
                        <input type='checkbox' id='current_time' className='noselect' onClick={changeState}/>
                        <label htmlFor="current_time" className='noselect'>Update current time</label>
                    </div>
                    <input type='datetime-local' onChange={()=>{setDate2(document.getElementById('last_date').value)}} className='app__input_date' id='last_date' name='last_date'/>
                </div>
            </div>
            <div className='app__date_user_options'>
                <button id='button_calculate' className='transparent-button' disabled={disabled} onClick={calculateDate}><p className='p-text noselect'>calculate</p></button>
            </div>

        </div>
        <div className='app__date_btns'>

            <Link to={url} style={{pointerEvents: !can_submit ? 'none' : ''}}>
                <button id='publish' disabled={!can_submit}className='transparent-button'>
                    <p className='p-text noselect'>Share this date to the world!</p>
                </button>
            </Link>
            <p className='p-text p-target noselect'></p>
            <DateComponent id='auto_updateble_text' style={{display:'none'}} className='p-text noselect'/>
            <p className='p-text noselect'>the date is calculated without the end date!</p>
        </div>
    </div>
  )
}

export default AppWrap(DateForm,'dateform','app__primarybg',true)