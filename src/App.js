import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//import custom components/pages
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import CookieNotif from './components/CookieNotif'
import Landing from './components/Landing'
import Advertisement from './components/Advertisement'
import SubscribeBlog from './components/SubscribeBlog'

import LinkedInPage from './pages/LinkedInPage'
//pages
import Privacy from './pages/Privacy'
import About from './pages/About'
import Blog from './pages/Blog'

function App () {
  return <Router><Switch><div>
    <CookieNotif />
    <div className='main-body'>
      <Navigation />
      <Route path='/' exact>
        <Landing />
        <Advertisement />
        <SubscribeBlog />
      </Route>
      <Route path='/privacy'>
        <Privacy />
      </Route>
      <Route path='/faq'>
        TODO<h1>Frequently Asked Questions</h1>
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/contact'>
        TODOContact
      </Route>
      <Route path='/blog'>
        <Blog />
      </Route>
      <Route path='/terms'>
        TODOterms of use
      </Route>
      <Route path='/hiresignup'>
        sign up with google/fb/linkedin/email TODO, maybe add email later?
      </Route>
      <Route path='/jobsignup'>
        sign up with google/fb/linkedin/email TODO, maybe add email later? for
        prospective Teknicians
      </Route>
    </div>
    <Footer />
  </div></Switch></Router>
}

export default App
