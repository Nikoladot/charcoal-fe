import React from 'react'
import { useTranslation } from 'react-i18next'

import secondImage from '../../assets/albumone/image1.jpg'
import firstImage from '../../assets/fire.jpg'
import './AboutUs.css'


function AboutUs() {
  const { t } = useTranslation()


  return (
    <div className="about-us">
      <section className="section black-background">
        <div className="text-content txt-cntn-one">
          <h1>{t('about_us_title')}</h1>
          <p>
          {t('about_us_content')}
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
          <h1>{t('our_team_title')}</h1>
          <p>
          {t('our_team_content')}
          </p>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
