import React from 'react'
import Title from './Title'

import Tour from './Tour'
const Tours = () => {
  return (
   
      <section className="section" id="tours">
      {/* <div className="section-title">
        <h2>featured <span>tours</span></h2>
      </div> */}
      <Title title="featured" subtitle="tours"/>
        <Tour/>
      
    </section>
   
  )
}

export default Tours
