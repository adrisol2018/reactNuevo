import React from 'react';
import CadWidget from './catWidget';


function Navbar(props) {
    return(
      <>
      <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Fifth navbar example">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Inicio</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample05">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-1">
          <li className="nav-item">
            <a className="nav-link active">Contacto</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Productos</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Productos</a></li>
              <li><a className="dropdown-item" href="#">Misión</a></li>
              <li><a className="dropdown-item" href="#">Visión</a></li>
            </ul>
          </li>
        </ul>
        <form role="search">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
        </form>
        <div className='navbar'>
          <CadWidget/>
        </div>
      </div>
    </div>
  </nav>
  </div>
      </>
       
    )
}

export default Navbar
