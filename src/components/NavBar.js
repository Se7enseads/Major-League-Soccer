import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg shadow-lg px-3 mx-3'>
      <div className='container'>
        {/* Link to home */}
        <Link className='navbar-brand' to='/'>
          <img src={logo} alt='Logo' height={'25px'} />{' '}
          <span className='fw-bold'>MLS</span>
        </Link>
        {/* Link to leagues */}
        <Link className='nav-link' to='/leagues'>
          <h4>Leagues</h4>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
