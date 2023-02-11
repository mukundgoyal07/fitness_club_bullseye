import React from 'react'
import { Todoitem } from './Todoitem'

export default function todos(props) {
  return (
    
    <div className='container'>
      
      <h3 className='text-center my-3'>Books</h3>
      {props.todos.length===0?"No todos to display":
      props.todos.map((todos)=>{
        return(
          <>
          
         <Todoitem todos={todos} key={todos.sno} onDelete={props.onDelete} />
         <hr/>
          </>)
      })}
  
      </div>
  )
}
