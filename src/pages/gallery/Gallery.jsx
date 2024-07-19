import React, { useEffect, useState } from 'react'

import { albumOneImages } from '../../utils/imageImports'
import './Gallery.css'
import LightBox from './components/LightBox/LightBox'

function Gallery() {
  const [showLightbox, setShowLightbox] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleImages, setVisibleImages] = useState(
    Array(albumOneImages.length).fill(false)
  )

  useEffect(() => {
    const staggeredIndexes = [
      ...Array(Math.min(6, albumOneImages.length)).keys()
    ]
    const remainingIndexes = [...Array(albumOneImages.length).keys()].slice(6)

    staggeredIndexes.forEach((index, i) => {
      setTimeout(() => {
        setVisibleImages((prevState) => {
          const newState = [...prevState]
          newState[index] = true
          return newState
        })
      }, i * 500) // 500ms interval for each image
    })

    setTimeout(() => {
      setVisibleImages((prevState) => {
        const newState = [...prevState]
        remainingIndexes.forEach((index) => {
          newState[index] = true
        })
        return newState
      })
    }, staggeredIndexes.length * 500) // Show the remaining images after the initial staggered ones
  }, [])

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setShowLightbox(true)
  }

  const closeLightbox = () => {
    setShowLightbox(false)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % albumOneImages.length)
  }

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + albumOneImages.length) % albumOneImages.length
    )
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      openLightbox(index)
    }
  }

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1 className="gallery-heading">Gallery Title</h1>
        <p className="gallery-description">
          This is a short description or subtitle for your gallery.
        </p>
      </div>
      <div className="gallery-container">
        {albumOneImages.map((src, index) => (
          <div
            key={index}
            className={`image-card ${visibleImages[index] ? 'fade-in' : ''}`}
            role="button"
            tabIndex={0}
            onClick={() => openLightbox(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            <img src={src} alt={`description ${index}`} className="image" />
          </div>
        ))}
      </div>
      {showLightbox && (
        <LightBox
          images={albumOneImages}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  )
}

export default Gallery
