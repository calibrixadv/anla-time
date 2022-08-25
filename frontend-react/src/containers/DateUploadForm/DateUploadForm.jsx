import React,{ useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import $ from 'jquery'

import { AppWrap } from '../../wrapper'
import { DateContext } from '../../constants'
import { client } from '../../client'


import './DateUploadForm.scss'

const DateUploadForm = () => {
  const navigate=useNavigate()

  const [disabled,setDisabled]= useState(false)

  const [loading,setLoading]= useState(false)

  const {data,setData}=useContext(DateContext)

  const [formData,setFormData]=useState({
    name:'',
    second_name:'',
    first_date:data.first_date,
    second_date:data.second_date,
    update:data.use_current_time,
    event_name:'',
    tags:[],
    description:''
  })

  const buttonHandler=()=>{
    setData({ first_date:'2022-08-13T00:44', second_date:'', use_current_time:true })
  }

  useEffect(() => {
    if(JSON.stringify(data)!=='""')
    {
      setDisabled(true)
    }
  }, [data])

  const handleChange=(e)=>{
    if(e.target.nodeName=='SPAN'){
      setFormData({...formData,['description']:e.target.innerHTML})
    }
    else if(e.target.name=='tags'){
      var string=e.target.value;
      string=string.replace(/\s/gi,'')
      var array=string.split(',')
      setFormData({...formData,['tags']:array})
    }
    else{
      const {name,value}=e.target
      setFormData({...formData,[name]:value})
    }
  }

  useEffect(() => {
    console.log(formData)
  
  }, [formData])
  
  
  const handleSubmit=()=>{
    setLoading(true);
    const dateSchema={
      _type:'dateSchema',
      name:formData.name,
      second_name:formData.second_name,
      first_date:formData.first_date,
      second_date:formData.second_date,
      update:formData.update,
      event_name:formData.event_name,
      tags:formData.tags,
      description:formData.description,
    }
    client.create(dateSchema)
      .then(()=>{
        setLoading(false)
      })
  }

  if(data=='')
  {
    navigate('/error')
  }

  $("span[contenteditable='true'][maxlength]").on('keyup paste', function (event) {
    var cntMaxLength = parseInt($(this).attr('maxlength'));

    if ($(this).text().length >= cntMaxLength && event.key != 'Backspace' && 
      event.key != 'ArrowLeft' && event.key != 'ArrowRight' && event.key != 39 && 
      event.key != 'ArrowDown') {

      event.preventDefault();

      $(this).html(function(i, currentHtml) {
        window.alert('Maximum character limit reached!')
        return currentHtml.substring(0, cntMaxLength-1);
      });
     }
  });

  return (
    <div className='app__date_upload_main_ctn app__flex'>
        <button onClick={buttonHandler} style={{display:'none'}} id='butonul'>eu sunt butonul</button>
        <p className='p-text p-title noselect'>Let the world know about your occasions:</p>
        <form id='data_form' onSubmit={handleSubmit} className='app__date_upload_form_ctn'>
          <div className='app__date_upload_input'>
            <input type="text" className='app_input noselect' id='name' name='name' onChange={handleChange} required/>
            <label htmlFor='name' className='noselect'>your name:</label>
          </div>
          <div className='app__date_upload_input'>
            <input type="text" className='app_input noselect'  id='second_name' name='second_name' onChange={handleChange} placeholder="(ex: Relation Partener's name)"/>
            <label htmlFor='second_name' className='noselect' >important person's name:</label>
          </div>
          <div className='app__date_upload_input'>
            <input type="datetime-local" name='first_date' onChange={handleChange}  className='app__input_date noselect' id='first_date' required defaultValue={disabled ? data.first_date : ''} disabled={disabled}/>
            <label htmlFor='first_date' className='noselect' >start-date:</label>
          </div>
          <div className='app__date_upload_input'>
            {
              data.use_current_time ? 
            <input type="text" className='app__input_date app_input noselect' name='update' id='final_date' required defaultValue='using current time'  disabled={true}/>
            :
            <input type="datetime-local" className='app__input_date app_input noselect' name='second_date' id='final_date' onChange={handleChange} required defaultValue={disabled ? data.second_date: ''}  disabled={disabled}/>
            }
            <label htmlFor='final_date' className='noselect' >end-date:</label>
          </div>
          <div className='app__date_upload_input' >
            <input type="text" id='date_name' className='app_input noselect' onChange={handleChange} name='event_name' required  placeholder='(ex: first trip)'/>
            <label htmlFor='date_name' className='noselect' >event-name:</label>
          </div>
          <div className='app__date_upload_input' >
            <input type="text" id='date_tags' name='tags' className='app_input noselect' onChange={handleChange} required placeholder='(ex: love, congrats, gym)'/>
            <label htmlFor='date_tags' className='noselect' >filter tags:</label>
          </div>
          <div className='app__date_upload_input'>
            <span className="intruder noselect" maxLength='1000' onInput={handleChange} role='input' from='data_form' id='date_description' contentEditable='true'/>
            <label htmlFor='date_description' className='noselect' >a brief description</label>
        </div>
        </form>
        <p className='p-text noselect warning'>Please separate the tags by commas! And keep in mind that tags are only one word!(gym-lover still counts as one word!)</p>
        <button className='transparent-button' type='submit' form='data_form' disabled={loading}><p className='p-text noselect'>{loading ? 'Publishing!' : 'Upload'}</p></button>
    </div>
  )
}

export default AppWrap(DateUploadForm,'app__date_upload','app__primarybg',true)