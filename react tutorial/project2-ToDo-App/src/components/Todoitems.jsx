import React from 'react'
import TodoItem from "./TodoItem"

function Todoitems() {
  const todoitems = [
    { id:1, todotext: "buy milk", tododate: "18/04/2026" },
    { id: 2, todotext: "go to collage ", tododate: "18/04/2026" },
    { id: 3, todotext: "buy a car", tododate: "18/04/2029" }
  ];
  return (
    <div>
      { todoitems.map(item => (
        <TodoItem key={item.id} id={item.id} todoText={item.todotext} todoDate={item.tododate} />
      ))}
    </div>
  )
}

export default Todoitems;
