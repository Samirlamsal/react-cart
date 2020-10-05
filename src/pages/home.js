import React from 'react';
import Services from '../components/services';
import Arrival from '../components/new_arrivals';
import About_us from '../components/about_us';
import Contact_us from '../components/contact_us';
import Navigation from '../components/navig';


function Home(){

  return(
    <>
    <Navigation about='About'/>

    <div className="services">
    <img className="background" src="/service_images/background1.jpg"></img>

      <div className="container">
      <h1>Services we Provide</h1>
        <div className="flex-container">
          {Services.map((service, key)=>(
              <div key={key}className="card">
                <h2>{service.name}</h2>
                <img className="service_image" src={service.image} alt=""></img>
                <p>{service.content}</p>
              </div>
          ))}
          </div>
      </div>

    </div>
    <Arrival/>
    <About_us/>
    <Contact_us/>

    </>
  )
}

export default Home;
