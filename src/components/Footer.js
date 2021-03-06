import React from 'react'
import '../styling/Footer.scss'
//import custom components/pages

function Footer () {
  return <div className='footer'>
    <ul>
      <li>&copy;2020</li>
      <li><a href='/'>Teknik.ly</a></li>
      <li>All Rights Reserved.</li>
      <li><a href='/about'>About Us</a></li>
      <li><a href='/blog'>Blog</a></li>
      <li><a href='/privacy'>Privacy Policy</a></li>
      <li><a href='/terms'>Terms of Use</a></li>
      <li><a href='/contact'>Contact Us</a></li>
    </ul>
    <div className='social'>
      <ul>
        <a href='facebook.com/'><li className='' /></a>
        <a href='twitter.com/'><li className='' /></a>
        <a href='instagram.com/'><li className='' /></a>
        <a href='linkedin.com/'><li className='' /></a>
      </ul>
    </div>
  </div>
}

export default Footer
