import React from 'react'
import { Link } from 'react-router-dom'
import '../styling/HomeBody.scss'

function Landing () {
  return <div className='landing'>
    <h2>Need Tek support? We've got an army of Teknicians, mobilized, ready!</h2>
    <div className='call-to-action'>
      <button>Login</button>
      <Link className='no-underline' to='/hiresignup'><button>New to Teknik.ly? Sign up now!</button></Link>
      <br /><br /><br />
      <h2>
        Want work in your field? On your on <a href='/linkedin'>schedule</a>, and terms?
        <a className='no-underline react-router-dom-links' href='/jobsignup'>  Become a Teknician!</a>
      </h2>
      <button>Teknician Login</button>
      <button>New to Teknik.ly? Sign up now!</button>
    </div>
  </div>
}

export default Landing
