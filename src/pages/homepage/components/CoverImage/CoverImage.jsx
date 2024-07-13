import React from 'react';
import './CoverImage.css';
import './CoverImage.css';
import logo from '../../../../assets/logo.png'


export default function CoverImage({ image }) {
  return (
    <div className='cover-image'>
      <img className='cover-img' src={image} alt='Cover' />
      <div className='text-overlay'>
        <div className='logo-fade'></div>
        <img className="logo" src={logo} />
      </div>
        <div className='bottom-fade'></div>
    </div>
  );
}
