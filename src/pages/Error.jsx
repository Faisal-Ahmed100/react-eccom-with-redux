import React from 'react'
import { NavLink } from 'react-router-dom';
import ErrorImg from '../img/404.gif';

const Error = () => {
  return (
 <div className="error-page">
       <div className='container'>
        <div className="error">
            <img src={ErrorImg} alt="/" />
            <button className='btn btn-white border px-4'>
                <NavLink to='/' className='text-decoration-underline'>
                    Back
                </NavLink>
            </button>
        </div>
    </div>
 </div>
  )
}

export default Error