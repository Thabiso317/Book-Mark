import React, {useState} from 'react'

export default function TodoForm(props) {
    const [input, setInput]=useState("");

    const handleSubmit =(e)=>{
      e.preventDefault();
      
      props.addTodo(input)
      setInput("")
    }

  return (
    <form value={input}
    onSubmit={handleSubmit} className="todo-form">
        <input onChange={(e)=> setInput(e.target.value)} className="todo-input" placeholder="Add a todo"/>
        <button type="submit" className="todo-button">Add Todo</button>
    </form>
  )
}
