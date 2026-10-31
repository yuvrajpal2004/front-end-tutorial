import React from 'react'
import "../index.css"
const Button=({btnType, btnText, handler})=>{
 if(btnType ==='success'){
  return <button className="btn btn-success btn" onClick={handler}>{btnText}</button>
 }
  else if(btnType ==='danger'){
  return <button className="btn btn-danger btn" onClick={handler}>{btnText}</button>
 }else{
  return <button className="btn btn-primary btn" onClick={handler}>{btnText}</button>
 }

};


export default Button

