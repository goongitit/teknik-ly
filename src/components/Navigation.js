import React from 'react'
import '../styling/Navigation.scss'

function Navigation () {
  return <div>
    <a href='/'><div className='logo' /></a>
    <ul>
      <a href='/hiresignup'><li>Request a Teknician!</li></a>
      <a href='/jobsignup'><li>Become a Teknician!</li></a>
      <a href='/faq'><li>FAQ</li></a>
    </ul>
  </div>
}

export default Navigation
