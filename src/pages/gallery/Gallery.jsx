import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import { albumOneImages } from '../../utils/imageImports'
import './Gallery.css'
import LightBox from './components/LightBox/LightBox'

function Gallery() {
  const { t } = useTranslation('meta', 'content')

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
      }, i * 500)
    })

    setTimeout(() => {
      setVisibleImages((prevState) => {
        const newState = [...prevState]
        remainingIndexes.forEach((index) => {
          newState[index] = true
        })
        return newState
      })
    }, staggeredIndexes.length * 500)
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
      <Helmet>
        <title>{t('meta:meta.gallery.title')}</title>
        <meta name="description" content={t('meta:meta.gallery.description')} />
        <meta name="keywords" content={t('meta:meta.gallery.keywords')} />

        {/* hreflang tags for SEO */}
        <link rel="alternate" hreflang="en" href="http://yourdomain.com/en/gallery" />
        <link rel="alternate" hreflang="sr" href="http://yourdomain.com/sr/gallery" />
        <link rel="alternate" hreflang="bg" href="http://yourdomain.com/bg/gallery" />
        <link rel="alternate" hreflang="mk" href="http://yourdomain.com/mk/gallery" />
        <link rel="alternate" hreflang="sq" href="http://yourdomain.com/sq/gallery" />
        <link rel="alternate" hreflang="ro" href="http://yourdomain.com/ro/gallery" />
        <link rel="alternate" hreflang="de" href="http://yourdomain.com/de/gallery" />
      </Helmet>
      <div className="gallery-header">
        <h1 className="gallery-heading">{t('content:gallery_title')}</h1>
        <p className="gallery-description">
          {t('content:gallery_description')}
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
