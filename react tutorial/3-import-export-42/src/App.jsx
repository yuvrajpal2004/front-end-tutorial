import { useState } from 'react'

import './App.css'
import {Denser,Smuth} from './components/Button'
import DynamicComponent from './components/DynamicComponent'

function App() {
 

  return (
    <>
   <p>hii</p>
      <Denser/>
      <Smuth/>
       <DynamicComponent/>
    </>
  )
}

export default App
