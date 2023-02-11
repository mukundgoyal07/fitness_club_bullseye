import React, { useState } from 'react'


export const Addtodo = (props) => {
    const [title,settitle]=useState("");
    const [desc,setdesc]=useState("");
    const [isbn,setisbn]=useState("");
    const submit=(e)=>{
e.preventDefault();
if(!title||!desc){
    alert("title and desc can't be blank");
}
else{
    props.addtodo(title,desc,isbn);
}
    }
  return (
    <>
    <div className="container " >
    <form onSubmit={submit}>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Title</label>
      <input type="text" value={title} className="form-control" onChange={(e)=>settitle(e.target.value)} id="title" aria-describedby="emailHelp"/>
      </div>
    <div className="mb-3">
      <label htmlFor="desc" className="form-label">Author</label>
      <input type="password" value={desc} onChange={(e)=>setdesc(e.target.value)} className="form-control" id="desc"/>
    </div>

    <div className="mb-3">
      <label htmlFor="ISBN" className="form-label">ISBN#</label>
      <input type="password" value={isbn} onChange={(e)=>setdesc(e.target.value)} className="form-control" id="isbn"/>
    </div>
    
    <button type="submit" class="btn btn-primary">Add Book</button>
  </form>
  </div>
</>  )
}
