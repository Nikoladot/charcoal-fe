import React from 'react'

import PropTypes from 'prop-types'
import './LightBox.css'

function Lightbox({ images, currentIndex, onClose, onNext, onPrev }) {
  const handleNext = () => {
    onNext()
  }

  const handlePrev = () => {
    onPrev()
  }

  const handleClose = (e) => {
    // Check if the click was outside the image content
    if (e.target.classList.contains('lightbox-overlay')) {
      onClose()
    }
  }

  return (
    <div
      className="lightbox-overlay"
      onClick={handleClose}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClose()
        }
      }}
    >
      <div className="lightbox-content">
        <div className="lightbox-navigation">
          <button className="lightbox-arrow lightbox-prev" onClick={handlePrev}>
            &lt;
          </button>
          <button className="lightbox-arrow lightbox-next" onClick={handleNext}>
            &gt;
          </button>
        </div>
        <img
          src={images[currentIndex]}
          alt={`Description  ${currentIndex}`}
          className="lightbox-image"
        />
      </div>
    </div>
  )
}

Lightbox.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentIndex: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired
}

export default Lightbox
