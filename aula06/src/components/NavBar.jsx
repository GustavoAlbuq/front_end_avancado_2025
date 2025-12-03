import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <nav>
        <Link to="/">Inicial</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/">A faculdade</Link>



    </nav>
  )
}

export default NavBar