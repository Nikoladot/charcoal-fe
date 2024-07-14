import React from 'react'

// Ensure you create this CSS file or include these styles in your global styles
import imageOne from '../../../../assets/bags.png'
import imageTwo from '../../../../assets/dzak1.png'
import './OurServices.css'

function OurServices() {
  return (
    <div className="our-services">
      <h1 className="our-services-title">Our offer</h1>
      <div className="our-services-cards">
        <div className="card">
          <div className="card-description">
            Our innovative solutions are designed to boost your creative projects, providing you
            with the tools and support needed to achieve exceptional results and bring your vision
            to life.
          </div>
          <img src={imageOne} alt="Service 1" className="card-image" />
        </div>
        <div className="card">
          <div className="card-description">
            Our innovative solutions are designed to boost your creative projects, providing you
            with the tools and support needed to achieve exceptional results and bring your vision
            to life.
          </div>
          <img src={imageTwo} alt="Service 2" className="card-image" />
        </div>
      </div>
    </div>
  )
}

export default OurServices
