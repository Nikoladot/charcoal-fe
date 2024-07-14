import React from 'react'

import secondImage from '../../assets/albumone/image.jpg'
// replace with actual image path
import firstImage from '../../assets/fire.jpg'

import './AboutUs.css'

function AboutUs() {
  return (
    <div className="about-us">
      <section className="section black-background">
        <div className="text-content txt-cntn-one">
          <h1>About Us</h1>
          <p>
            YLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et metus non felis
            ullamcorper tincidunt. Vivamus euismod justo in nunc aliquet, at hendrerit erat
            elementum. Proin cursus orci vitae erat aliquam, id tincidunt nulla feugiat.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Suspendisse potenti. Sed feugiat sapien at libero facilisis, et tristique ex
            fringilla.
          </p>
        </div>
        <div className="image-container right-image">
          <img src={firstImage} alt="About Us" />
        </div>
      </section>
      <div className="line"></div> {/* Horizontal line */}
      <section className="section lighter-black-background">
        <div className="image-container left-image">
          <img src={secondImage} alt="Our Team" />
        </div>
        <div className="text-content txt-cntn-two">
          <h1>Our Team</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et metus non felis
            ullamcorper tincidunt. Vivamus euismod justo in nunc aliquet, at hendrerit erat
            elementum. Proin cursus orci vitae erat aliquam, id tincidunt nulla feugiat.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Suspendisse potenti. Sed feugiat sapien at libero facilisis, et tristique ex
            fringilla.
          </p>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
