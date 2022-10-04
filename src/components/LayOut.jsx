import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const LayOut = ({children}) => {
  return (
    <>
    <Navbar />
    {children}
    <Footer />
    </>
  
  )
}

export default LayOut