import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../../assets/logo.png';
import './CoverImage.css';
import IntroductionSection from '../IntroductionSection/IntroductionSection';

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
  );
}

CoverImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default CoverImage;
