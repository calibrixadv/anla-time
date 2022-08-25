import React from 'react'
import { AppWrap } from '../../wrapper'

const ErrorPage = ({message}) => {
    console.log(message)
  return (<>
    <p>An error occured! :(</p>
  </>
  )
}

export default AppWrap(ErrorPage,'app__error','app__primarybg',true)