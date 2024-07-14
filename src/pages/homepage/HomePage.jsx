import React from 'react'

import CoverImage from './components/CoverImage/CoverImage'
import GeneralInfo from './components/GeneralInfo/GeneralInfo'
import IntroductionSection from './components/IntroductionSection/IntroductionSection'
import OurServices from './components/OurServices/OurServices'

import homeImage from '../../assets/charcoal.jpg'

// import AlbumSection from './components/AlbumSection/AlbumSection';

function HomePage() {
  return (
    <div className="container">
      <CoverImage image={homeImage} />
      <IntroductionSection />
      <GeneralInfo />
      <OurServices />
      {/* <AlbumSection /> */}
    </div>
  )
}

export default HomePage
