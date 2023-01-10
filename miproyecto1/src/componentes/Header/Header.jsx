  import React from 'react'

  function Header (props){

let nombre = "Impectory Gym"

  function mostrarNombre() {

    return `Bienvenido a ${nombre}`;
  }
    return (
    <div>
        <h1>{mostrarNombre()}</h1>
    </div>
  )
}




export default Header  