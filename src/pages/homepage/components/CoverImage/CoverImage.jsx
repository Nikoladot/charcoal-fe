import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import logo from '../../../../assets/Logo/logo-transparent-png.png'
import IntroductionSection from '../IntroductionSection/IntroductionSection'
import { useTranslation } from 'react-i18next'
import './CoverImage.css'

function CoverImage({ image }) {
  const { t } = useTranslation('alt-meta', 'content')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = image;
    img.onload = () => setIsLoaded(true)
  }, [image]);

  return (
    <div className="cover-image">
      {!isLoaded && (
        <div className="skeleton-loader">
          <div className="spinner"></div>
        </div>
      )}
      {isLoaded && (
        <>
          <img className="cover-img" src={image} alt={t('alt.homepage-img-alt')} />
          <div className="text-overlay">
            <div className="logo-fade"></div>
            <img className="logo" src={logo} alt="prodaja cumura vranje" />
          </div>
          <h1 className='homepage-title'>{t('content:homepage_title')}</h1>
          <IntroductionSection />
          <div className="bottom-fade"></div>
        </>
      )}
    </div>
  );
}

CoverImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default CoverImage
