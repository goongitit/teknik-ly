import React from 'react'
import '../styling/Navigation.scss'
import '../App.scss'

function Navigation () {
  return <div className='nav'>
    <a href='/' className='no-underline logo'>
      <div>
        <h1>Teknik<span className='different'>.ly</span></h1>
        <h6>An army of A+ Certified tech personnel at your disposal.</h6>
      </div>
    </a>
    <ul>
      <a href='/hiresignup'><li>Request a Teknician!</li></a>
      <a href='/jobsignup'><li>Become a Teknician!</li></a>
      <a href='/faq'><li>FAQ</li></a>
    </ul>
  </div>
}

export default Navigation
