import React from 'react'
import "./App.css"
function Box({name="Ambuj Kumar" , role="web developer"}) {
  return (
    <div className='box'>
      <h1>{name}</h1>
      <h3>{role}</h3>
    </div>
  )
}

export default Box
