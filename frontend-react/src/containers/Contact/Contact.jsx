import React from 'react'
import { useState } from 'react'

import $ from 'jquery'
import imageUrlBuilder from '@sanity/image-url'

import { AppWrap } from '../../wrapper'
import { client } from '../../client'
import './Contact.scss'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate=useNavigate()
    const [disabled,setDisabled]=useState(true)
    const [imagesAssets, setImagesAssets] = useState([]);
    const [wrongTypeofImage, setWrongTypeofImage] = useState(false);
    const [setField] = useState();
    const [loading,setLoading]=useState(false)
    const [formData,setFormData]=useState({
        type:'Bug Report',
        email:'',
        images:null,
        message:''
    })

    const builder=imageUrlBuilder(client)

    const urlFor=(source)=>{
        return builder.image(source)
    }

    const uploadImage=(images)=>{
        setLoading(true)
        for(let i=0;i<images.length;i++){
        if(images[i].type === 'image/png' || images[i].type === 'image/svg' || images[i].type === 'image/jpeg' || images[i].type === 'image/gif' || images[i].type === 'image/tiff') {
            setWrongTypeofImage(false)

            client.assets
            .upload('image',images[i],{contentType:images[i].type,filename:images[i].name})
            .then((document)=>{
                console.log(document)
                setImagesAssets((prevAssets)=>[
                    ...prevAssets,document
                ])
                if(i==images.length-1){
                    setLoading(false)
                }
            })
            .catch((error)=>{
                console.log('upload failed:',error.message)
            })
    }
    else{
        console.log('wrong type of file')
        setWrongTypeofImage(true)
    }
    }
}

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(imagesAssets[0]?._id){

      const doc = {
        _type: 'contactSchema',
        type:formData.type,
        email:formData.email,
        message:formData.message,
        images: 
            imagesAssets.map((main_image)=>({
                    _type:'image',
                    _key:main_image.originalFilename,
                    asset:{
                        _type:'reference',
                        _ref:main_image?._id,
                    }
            }))
      };
      console.log(doc)
      client.create(doc).then(() => {
        navigate('/')
      });
        }
    else {
        console.log('an error occured!')
      setField(true);

      setTimeout(
        () => {
          setField(false);
        },
        20000,
      );
    }
    }

    const handleChange=(e)=>{
        if(e.target.nodeName=='SPAN'){
            setFormData({...formData,['message']:e.target.innerHTML})
        }
        if(e.target.name=='type')
        {
            setFormData({...formData,['type']:e.target.value})
        }
        if(e.target.name=='email'){
            setFormData({...formData,['email']:e.target.value})
        }
    }
    const arrayChange=(e)=>{
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            uploadImage(e.target.files)
        
  } else {
    alert("Your browser does not support File API");
  }
}


  $("span[contenteditable='true'][maxlength]").on('keyup paste', function (event) {
    var cntMaxLength = parseInt($(this).attr('maxlength'));
    if($(this).text().length >0){
        setDisabled(false)
    }
    else if($(this).text().length==0){
        setDisabled(true)
    }

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
  /*

  const handleDelete=()=>{
    client.fetch('*[_type == "contactSchema"]')
    .then((data)=>{
        for(const element of data)
        {
            client.delete(element._id).then(console.log('done'))
        }
    })
  }
  */

  return (
    <>

    <div className='app__contact'>
        <p className='p-title'>Don't be shy, ask the AnlaSquad!</p>
        <form onSubmit={handleSubmit} className='app__contact_form' id='contact_form'>
            <select name='type' onChange={handleChange}>
                <option>Bug Report</option>
                <option>Suggestion</option>
                <option>Review</option>
            </select>
            <div className='app__contact_form_user'>
                <label htmlFor="email">Your email (Optional)</label>
                <input type="email" onChange={handleChange} name='email' className='app_input' placeholder='Email'/>
            </div>
            <div className='app__contact_form_images'>
                <input type='file' name='image' onChange={arrayChange} id='image' className='app__contact_image' accept='image/*' multiple></input>
                <label htmlFor="image" className='app__contact_form_image_label'>Choose images</label>
                <p className='p-text'>{imagesAssets.map((image)=>{
                    return image.originalFilename+', '
                })}</p>
            </div>
            <div className='app__contact_form_message'>
                <label htmlFor="contact_message">Your Message (Required)</label>
                <span contentEditable aria-required='true' maxLength='5000' onInput={handleChange} role='input' form='contact_form' className='intruder noselect' id='contact_message'></span>
            </div>
            <button type='submit' form='contact_form' className='transparent-button app__contact_button' disabled={disabled}><p className='p-text'>{loading?'Loading images':'Send'}</p></button>
        </form>
    </div>
    </>
  )
}

export default AppWrap(Contact,'app__contact','app__primarybg',true)