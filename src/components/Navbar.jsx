import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const state=useSelector(state=>state.handleCart);

  
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm bg-white py-3">
  <div className="container">
    <NavLink className='text-decoration-none' to="/">
      <div className="navbar-brand text-uppercase fw-bold">bd selhouse</div>
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item me-4">
          <NavLink className="text-decoration-none" aria-current="page" to="/">
          <div className="nav-link">Home</div>
          </NavLink>
        </li>
     
        <li className="nav-item me-4">
          <NavLink className="text-decoration-none" to="/about">
            <div className='nav-link'>About</div>
          </NavLink>
        </li>
        <li className="nav-item me-4">
          <NavLink className="text-decoration-none" to="/product">
            <div className='nav-link'>Products</div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="text-decoration-none" to="/contact">
            <div className='nav-link text-decoration-none'>Contact</div>
          </NavLink>
        </li>
      
       
      </ul>
      <div className="bottons">
       <NavLink to='/register'>
       <button type='button' className='btn btn-white border btn-outline-dark ms-2'>
          <i className='fa fa-user-plus me-1'></i>
          Register</button>
       </NavLink>
       <NavLink to='/login'>
       <button type='button' className='btn btn-white border btn-outline-dark ms-2'>
          <i className='fa fa-sign-in me-1'></i>
          Login</button>
       </NavLink>
        <NavLink to='/cart'>
        <button type='button' className='btn btn-white border btn-outline-dark ms-2'>
          <i className='fa fa-shopping-cart me-1'></i>
          Cart ({state.length})</button>
        </NavLink>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar