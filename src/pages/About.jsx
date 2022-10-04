import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../redux/actions';

const About = () => {
const state = useSelector((state)=>state.handleCountAndUser);
const dispatch=useDispatch();
console.log(state.count)

  return (
    <div className='container'>
<div className='d-flex justify-content-center flex-column align-items-center h-screen'>
<h1>Count: {state.count}</h1>
<h1>User: {state.users}</h1>
  <div className="buttons">
    
    <button className='btn btn-dark ms-2'>Reset</button>
    <button className='btn btn-dark ms-2'>-</button>
<button className='btn btn-dark ms-2' onClick={()=>dispatch(addUser('faisal'))}>+</button>
  </div>
</div>

<hr />

<div className='grid-box'>
<header className='header'>header</header>
<nav className='menu'>menu</nav>
<div className="content">content</div>
<div className="body">main body</div>
<footer className='footers'>footer</footer>

</div>

    </div>
  )
}

export default About
