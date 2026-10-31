
import { useState } from 'react'
import './App.css'
import Number from './component/Number'

function App() {

  let [color,setColor] = useState("red")


  return (
    <>
    <Number/>
      {/* <div>
        <h1>Hi this is my fevuorate color {color}</h1>
        <button onClick={
          () =>setColor("pink")
        }>chenge color</button>
      </div> */}
    </>
  )
}

export default App
