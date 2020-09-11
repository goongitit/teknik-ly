import React from 'react'
import '../styling/HomeBody.scss'

export default function SubscribeBlog () {
  return <section className='blog-mailing-list'>
    <h2>
      We have a blog! <a className='link-to-blog' href='/blog'>(Click here!)</a>
    </h2>
    <p>
      Wanna be able to solve very simple, technical issues that <i>anyone </i>
      (we mean anyone, no matter how "tech-illiterate" you are)? Whilst saving
      time, resources and money? Allow us to send you newsletters (monthly, so
      we aren't as annoying) by entering your email below! Unsubscribe anytime.
    </p>
    <form>
      <input type='email' />
      <button className='mailing-button'>Subscribe Now!</button>
    </form>
  </section>
}
