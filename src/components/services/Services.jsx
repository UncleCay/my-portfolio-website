import React from 'react'
import './services.css'
import webdev from '../../assets/webdev__icon.jpg'
import ui_ux from '../../assets/ui_ux__icon.jfif'

const Services = () => {
  return (
    <section id="services">
      <h1>Services</h1>
      <div className='serviceCards'>
        <div className="serviceCard">
          <img src={webdev} alt="Caleb Orakpor - webdev_logo"/>
          <h2>WEB DEVELOPMENT</h2>
          <p> I design and develop 
            any form of Reactjs or Javascrip project;<br />
             website, web application, landing page, online form.
            etc.
          </p>
        </div>
        <div className="serviceCard">
          <img src={ui_ux} alt="Caleb Orakpor - webdev_logo"/>
          <h2>UI/UX</h2>
          <p> I design from scratch and improve 
            user-interface and user-experience of already existing website and web application
            using Figma and Paint graphics editor.
          </p>
        </div>
      </div>
      <div className="lowerBackground"></div>
    </section>
  )
}

export default Services
