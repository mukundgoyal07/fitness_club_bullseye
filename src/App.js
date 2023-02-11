
import './App.css';
 import Header from "./mycomponents/Header";
import Todos from "./mycomponents/Todos";
import {Footer} from "./mycomponents/Footer";
import React, { useState } from 'react';
import { Addtodo } from './mycomponents/Addtodo';


function App() {
  const onDelete=(todo)=>{
    console.log("I am on delete of todo",todo);
  settodos(todos.filter((e)=>{
    return e!==todos;
  }));
  }
  const addtodo=(title,desc)=>{
    console.log("I am adding a todo");
    let sno=todos[todos.length-1].sno+1;
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    settodos([...todos,myTodo]);
    console.log(myTodo);
  

}

  const [todos, settodos] = useState([
    {
sno:1,
title:"Harry Potter",
desc:"J.K Rowlin"
  },
    {
sno:2,
title:"Wings of fire",
desc:"APJ Abdul Kalam"
  },
    {
sno:3,
title:"Rich Dad Poor Dad",
desc:"ABC"
  }
]);


  
  
   
  

  return (
 
<><Header title="Book Management System" />
<Addtodo addtodo={addtodo}/>
<Todos todos={todos} onDelete={onDelete}/>
<Footer/>
</>



  );
}

export default App;
