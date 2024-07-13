import React from 'react';
import './LightBox.css'; // Ensure this CSS file is defined with appropriate styles

const Lightbox = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  const handleNext = () => {
    onNext();
  };

  const handlePrev = () => {
    onPrev();
  };

  const handleClose = (e) => {
    // Check if the click was outside the image content
    if (e.target.classList.contains('lightbox-overlay')) {
      onClose();
    }
  };

  return (
    <div className="lightbox-overlay" onClick={handleClose}>
      <div className="lightbox-content">
        <div className="lightbox-navigation">
          <button className="lightbox-arrow lightbox-prev" onClick={handlePrev}>
            &lt;
          </button>
          <button className="lightbox-arrow lightbox-next" onClick={handleNext}>
            &gt;
          </button>
        </div>
        <img src={images[currentIndex]} alt={`Image ${currentIndex}`} className="lightbox-image" />
      </div>
    </div>
  );
};

export default Lightbox;
