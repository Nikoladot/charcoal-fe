import React from 'react'
import './AlbumSection.css';
import { albumOneImages } from '../../../../utils/imageImports';

function AlbumRow ({ images }) {

  const extendedImages = [...images, ...images];

  return (
    <div className="slider">
      <div className="slide-track">
        {extendedImages.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

const AlbumSection = () => {

  return (
      <AlbumRow images={albumOneImages} />
  );
};

export default AlbumSection;