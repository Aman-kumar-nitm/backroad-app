import React from 'react'
import { tourdata } from './data';
const Tour = () => {
  return (
    <div className="section-center featured-center">
            {tourdata.map((item)=>{
             return ( <article className="tour-card" key={item.id}>
              <div className="tour-img-container">
                <img src={item.img} className="tour-img" alt="" />
                <p className="tour-date">{item.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{item.title}</h4>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                  vitae tempore voluptatum maxime reprehenderit eum quod
                  exercitationem fugit, qui corporis.
                </p>
                <div className="tour-footer">
                  <p>
                    <span><i className="fas fa-map"></i></span> {item.country}
                  </p>
                  <p>{item.days}</p>
                  <p>{item.money}</p>
                </div>
              </div>
            </article>);
    
            })}
            
          </div>
  )
}

export default Tour
