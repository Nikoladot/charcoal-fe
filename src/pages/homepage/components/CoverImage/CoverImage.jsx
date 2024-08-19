import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import logo from '../../../../assets/Logo/logo-transparent-png.png';
import IntroductionSection from '../IntroductionSection/IntroductionSection';
import './CoverImage.css';

function CoverImage({ image }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setIsLoaded(true);
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
          <img className="cover-img" src={image} alt="Cover" />
          <div className="text-overlay">
            <div className="logo-fade"></div>
            <img className="logo" src={logo} alt="Logo" />
          </div>
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

export default CoverImage;
