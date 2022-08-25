import React from 'react'

import './Card.scss'

const Card = ({text,useIcon,Icon,color}) => {
    var colorTheme = ({
        mainColor:'rgba(237, 222, 231, 1)',
        secondaryColor:'rgba(255, 238, 244, 1)'
    })
    if(color=='blue'){
        colorTheme.mainColor='rgba(189, 224, 254, 1)'
        colorTheme.secondaryColor='rgba(227, 242, 255, 1)'
    }
  return (
    <>
        <button className='app__hero_card' style={{backgroundColor:colorTheme.mainColor}}>  {/* flex column */}
          <div className='app__hero_card_view' style={{backgroundColor:colorTheme.secondaryColor}}> {/* flex center*/}
            <p className='noselect'>{text}</p>
          </div>
          {useIcon ? <Icon></Icon> : <svg></svg>}
        </button>
    </>
  )
}
export default Card
