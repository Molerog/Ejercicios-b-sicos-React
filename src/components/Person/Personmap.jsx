import React from 'react'
import './Person.css';

function Person({object}) {
   
    const person = object.map(elemento => {
        return (
            <li key = {elemento.id}> {elemento.name} </li>
        )
    })    
  return (
    <div className = 'prueba'><ul>{person}</ul></div>
  )
}

export default Person