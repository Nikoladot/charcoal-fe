import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import { albumOneImages } from '../../utils/imageImports'
import './Gallery.css'
import LightBox from './components/LightBox/LightBox'

function Gallery() {
  const { t, i18n } = useTranslation(['meta', 'content', 'alt-meta'])
  const currentLanguage = i18n.language

  const [showLightbox, setShowLightbox] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleImages, setVisibleImages] = useState(
    Array(albumOneImages(t).length).fill(false) // Pass t here
  )

  useEffect(() => {
    const staggeredIndexes = [
      ...Array(Math.min(6, albumOneImages(t).length)).keys()
    ]
    const remainingIndexes = [...Array(albumOneImages(t).length).keys()].slice(6)

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
  }, [t]) // Add t as a dependency

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setShowLightbox(true)
  }

  const closeLightbox = () => {
    setShowLightbox(false)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % albumOneImages(t).length)
  }

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + albumOneImages(t).length) % albumOneImages(t).length
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
        {/* Dynamic Title, Description, and Keywords */}
        <title>{t('meta:meta.gallery.title')}</title>
        <meta name="description" content={t('meta:meta.gallery.description')} />
        <meta name="keywords" content={t('meta:meta.gallery.keywords')} />
        
        {/* Canonical Tag for the Current Language Version */}
        <link
          rel="canonical"
          href={`https://cumurprodaja-plv.com/${currentLanguage}/gallery`}
        />

        {/* hreflang tags for SEO */}
        <link rel="alternate" hreflang="en" href="https://cumurprodaja-plv.com/en/gallery" />
        <link rel="alternate" hreflang="sr" href="https://cumurprodaja-plv.com/sr/gallery" />
        <link rel="alternate" hreflang="bg" href="https://cumurprodaja-plv.com/bg/gallery" />
        <link rel="alternate" hreflang="mk" href="https://cumurprodaja-plv.com/mk/gallery" />
        <link rel="alternate" hreflang="sq" href="https://cumurprodaja-plv.com/sq/gallery" />
        <link rel="alternate" hreflang="ro" href="https://cumurprodaja-plv.com/ro/gallery" />
        <link rel="alternate" hreflang="de" href="https://cumurprodaja-plv.com/de/gallery" />
      </Helmet>
      <div className="gallery-header">
        <h1 className="gallery-heading">{t('content:gallery_title')}</h1>
        <p className="gallery-description">
          {t('content:gallery_description')}
        </p>
      </div>
      <div className="gallery-container">
        {albumOneImages(t).map((image, index) => ( // Call the function here
          <div
            key={index}
            className={`image-card ${visibleImages[index] ? 'fade-in' : ''}`}
            role="button"
            tabIndex={0}
            onClick={() => openLightbox(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            <img src={image.src} alt={t(`alt-meta:${image.alt}`)} className="image" /> {/* Use image.alt */}
          </div>
        ))}
      </div>
      {showLightbox && (
        <LightBox
          images={albumOneImages(t).map(image => image.src)} // Pass the image sources
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

