import React from 'react';

function Contact_us(){
  return(
    <div className="contact_us">
      <div className="left">
      <div className="card-container">
        <div className="contact-card">
          <h3>Our Services</h3>
            <ul>
              <li>Lorem upsum</li>
              <li>Lorem upsum</li>
              <li>Lorem upsum</li>
              <li>Lorem upsum</li>
            </ul>
        </div>
        <div className="contact-card">
          <h3>Contact Us</h3>
          <h2>Company Name</h2>
          <p>companyname@gmail.com</p>
          <p>9845956700</p>

          </div>
        </div>
      </div>

      <div className="right">
        <div className="form-container">
        <h3>Send us a message</h3>

          <div className="form">
            <form>
              <input type="text" placeholder="Your Name"></input>
              <input type="text" placeholder="Type your message here"></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  )

}


export default Contact_us;
