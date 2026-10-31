import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Nav from './component/Nav'
import Footer from './component/Footer'
import Home from './component/Home'
import {Outlet} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav/>
     <Outlet/>
     <Footer/>
     
     
    </>
  )
}

export default App
