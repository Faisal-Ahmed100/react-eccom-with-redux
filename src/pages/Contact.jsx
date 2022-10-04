import React from 'react'
import ProFooter from '../components/ProFooter'

const Contact = () => {
  return (
    <>
    <div className='container'>
  <div className="contact-page">
  <form className='shodow-sm border'>
      <div class="mb-3">
    <label for="exampleInputText"  class="form-label">Name</label>
    <input type="text" placeholder='Your name' class="form-control" id="exampleInputText" />
  </div>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button type="submit" class="btn btn-primary">Submit</button>
      </form>
  </div>
    </div>
    <ProFooter />
    </>
  )
}

export default Contact