import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='hero'>
      <div className="hero-bg"></div>
      
        <img src="https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

        <div className="container mx-auto">
          <div className="hero-banner">
            <h2 className='mb-4'>This is your online shop</h2>
       
              <Link to='/product'>
                     <button type='button' className='btn btn-outline-dark'>
                      Shop now
                  </button>    
              </Link>
            
          </div>
        </div>
        <Footer />
      
    </div>
  )
}

export default Home