import React from 'react'  //En componentes funcionales no hace falta importar react (en clases sí)
import './Data.css';

// class Data extends React.Component{
//   render(){
//     return <ul className = 'text'>
//            <li> {this.props.object.name}</li>
//            <li> {this.props.object.surname}</li>
//            <li> {this.props.object.age}</li>           
//            </ul>
//   }
// }

 //el parámetro siempre es "props", poniendo llaves se destructura
  
const Data = ({object}) => {
  return (
    <div className = 'text'>
      <span>{object.name} </span>
      <span>{object.surname} </span>
      <span>{object.age} </span>
    </div>

  )
}

export default Data