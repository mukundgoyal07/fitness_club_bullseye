import React from 'react'
import './footer.css'

export const Footer = () => {
let footerstyle={
  position:"relative",
  top:"70vh",
  width:"100%",
  border:"2px solid red"
  
}
let fcolor={
  color:"black"
}
  return (
    <footer className='bg-dark text-light' style={footerstyle}>
      <p className='text-center' style={fcolor}>Copyright &copy; Mytodoslist.com</p>
    </footer>
  ) 
}
