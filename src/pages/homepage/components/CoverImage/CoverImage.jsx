import React from 'react'

import PropTypes from 'prop-types'

import logo from '../../../../assets/Logo/logo-transparent-png.png'
import IntroductionSection from '../IntroductionSection/IntroductionSection'
import './CoverImage.css'

function CoverImage({ image }) {
  return (
    <div className="cover-image">
      <img className="cover-img" src={image} alt="Cover" />
      <div className="text-overlay">
        <div className="logo-fade"></div>
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <IntroductionSection />
      <div className="bottom-fade"></div>
    </div>
  )
}

CoverImage.propTypes = {
  image: PropTypes.string.isRequired
}

export default CoverImage
