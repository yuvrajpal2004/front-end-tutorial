import React, { use, useContext } from 'react'
import { story } from './context/Story'

function Kahani() {
    let kahani=useContext(story)
  return (
    <>
    <h2>{kahani.name}</h2>
      <h4>{kahani.storyLine}</h4>
    </>
  )
}

export default Kahani
