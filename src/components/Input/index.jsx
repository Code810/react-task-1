import React from 'react'
import "./index.css"

function Input({type,name}) {
  return (
 <>
 <span>{name}</span>
 <input type={type} placeholder={name}/>
 </>
  )
}

export default Input

