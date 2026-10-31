import React from 'react'
import './button.css'

function Button({btntype, btntext, action}) {
  return (
    <>
     <button className={btntype} onClick={action}>{btntext} </button>
    
   
    </>
  )
}

export default Button
