import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import './LightBox.css'

function Lightbox({ images, currentIndex, onClose, onNext, onPrev }) {
  const overlayRef = useRef(null)

  useEffect(() => {
    // Auto-focus overlay when component mounts
    overlayRef.current?.focus()
  }, [])

  const handleNext = () => {
    onNext()
  }

  const handlePrev = () => {
    onPrev()
  }

  const handleClose = (e) => {
    // Close only if click is outside the image content
    if (e?.target?.classList?.contains('lightbox-overlay')) {
      onClose()
    }
  }

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        handleClose()
        break
      case 'ArrowLeft':
        handlePrev()
        break
      case 'ArrowRight':
        handleNext()
        break
      case 'Escape':
        onClose()
        break
      default:
        break
    }
  }

  return (
    <div
      ref={overlayRef}
      className="lightbox-overlay"
      onClick={handleClose}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
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
          alt={`Description ${currentIndex}`}
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
  onPrev: PropTypes.func.isRequired,
}

export default Lightbox
