import React from 'react'
import Title from './Title'

import Service from './Service'
const Services = () => {
  return (
    
       <section className="section services" id="services">
      {/* <div className="section-title">
         <h2>our <span>services</span></h2>
         
      </div> */}
      <Title title="our" subtitle="services"/>
      <Service/>
      {/* <div className="section-center services-center">
        {servicedata.map((item)=>{
          return(<article className="service" key={item.id}>
          <span className="service-icon"><i className={item.icon}></i></span>
          <div className="service-info">
            <h4 className="service-title">{item.title}</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>);
        })} */}
        {/* <article className="service">
          <span className="service-icon"><i className="fas fa-wallet fa-fw"></i></span>
          <div className="service-info">
            <h4 className="service-title">saving money</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>

        <article className="service">
          <span className="service-icon"><i className="fas fa-tree fa-fw"></i></span>
          <div className="service-info">
            <h4 className="service-title">endless hiking</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>

        <article className="service">
          <span className="service-icon"><i className="fas fa-socks fa-fw"></i></span>
          <div className="service-info">
            <h4 className="service-title">amazing comfort</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article> */}
      {/* </div> */}
    </section>

  )
}

export default Services
