import React from 'react'
import "./App.css"
import Heading from './components/Heading'

import Todoitems from './components/Todoitems'
import AddTodo from './components/AddTodo'


function App() {
  //  const todoitems = [
  //   { id: 1, todotext: "buy milk", tododate: "18/04/2026" },
  //   { id: 2, todotext: "go to collage ", tododate: "18/04/2026" },
  //   { id: 3, todotext: "buy a car", tododate: "18/04/2029" }
  // ]
  return (
    <div>
     <Heading/>
     <AddTodo/>
     <Todoitems/>
    </div>
  )
}

export default App
