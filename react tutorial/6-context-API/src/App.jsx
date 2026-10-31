import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { data } from './context/UserContext'

import Kahani from './Kahani'

function App() {
  let usrName=useContext(data)
  
 

  return (
    <>
   <h1>{usrName}</h1>
   <Kahani/>
    </>
  )
}

export default App
