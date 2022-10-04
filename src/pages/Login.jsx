import React from 'react'
import { Link } from 'react-router-dom'
import ProFooter from '../components/ProFooter'

const Login = () => {
  return (
    <>
   <div className='container'>
    <div className="login-page">
    <form className='shadow-sm border'>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3 form-check d-flex justify-content-between">
   <div>
   <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
   </div>
    <Link to='/register'>
    <p>SiginUp</p>
  </Link>
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
 
   </div>
   <ProFooter />
   </>
  )
}

export default Login