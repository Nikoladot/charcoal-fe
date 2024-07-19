import React from 'react'

import PropTypes from 'prop-types'

import { albumOneImages } from '../../../../utils/imageImports'
import './AlbumSection.css'

function AlbumRow({ images }) {
  const extendedImages = [...images, ...images]

  return (
    <div className="slider">
      <div className="slide-track">
        {extendedImages.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`description ${index}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

AlbumRow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
}

function AlbumSection() {
  return <AlbumRow images={albumOneImages} />
}

export default AlbumSection
