import React from 'react'
import { useEffect, useState } from 'react'
import '../styling/CookieNotif.scss'

function CookieNotif () {
  return <div className='cookie-notif'>
    <p><a href='/' className='no-underline'>Teknik.ly</a> uses cookies to enhance user experience and to analyze
    performance and traffic. <a href='/' className='no-underline'>Teknik.ly</a> also shares information about your
    use of the site (<a href='/' className='no-underline'>https://teknik.ly/</a>) with its social media, advertising and
    analytics partners. <a href='/privacy'>View Cookie Policy</a></p>

  </div>//<button onClick={ HideNotif }>I Accept</button> // close button
  function HideNotif () {
    const [mounted, isMounted] = useState ()
    isMounted (!mounted)
    return <p>closed notif</p>
  }
}





export default CookieNotif
