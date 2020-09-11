import React from 'react'
import '../styling/HomeBody.scss'

function Advertisement () {
  return <section className='ad'>
    <h2>Why Teknicians?</h2>
    <div className='grid-container'>
      <div className='box'>
        <div className='icon' id='aplus' />
        <h4>CompTIA A+ Certified</h4>
        <p>
          Our Teknicians are CompTIA A+ Certified (we do verify), and may have
          other certifications as well!
        </p>
      </div>
      <div className='box'>
        <div className='icon' id='gta' />
        <h4>On-Demand, Location is No Object</h4>
        <p>
          As long as you're in the Greater Toronto Area, we're there for you!
        </p>
      </div>
      <div className='box'>
        <div className='icon' id='xp' />
        <h4>Experienced in the Field</h4>
        <p>
          Teknicians have anywhere from a few years to <i>decades</i> of
          experience in the field of technical support. So don't worry, we've
          got your back!
        </p>
      </div>
    </div>
  </section>
}

export default Advertisement
