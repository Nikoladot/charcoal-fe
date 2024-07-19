import React from 'react'

import homeImage from '../../assets/charcoal.jpg'
import CoverImage from './components/CoverImage/CoverImage'
import GeneralInfo from './components/GeneralInfo/GeneralInfo'
import OurServices from './components/OurServices/OurServices'

function HomePage() {
  return (
    <div className="container">
      <CoverImage image={homeImage} />
      <GeneralInfo />
      <OurServices />
      {/* <AlbumSection /> */}
    </div>
  )
}

export default HomePage
