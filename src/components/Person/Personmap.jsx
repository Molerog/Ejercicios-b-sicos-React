import React from 'react'
import './Person.css';

function Person({object}) {
   
    const person = object.map(elemento => {
        return (
            <li key = {elemento.id}> {elemento.name} {elemento.surname} {elemento.age} años</li>
        )
    })    
  return (
    <div className = 'prueba'><ul>{person}</ul></div>
  )
}

export default Person