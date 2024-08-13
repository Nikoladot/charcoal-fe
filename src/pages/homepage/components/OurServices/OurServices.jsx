import React from 'react'
import { useTranslation } from 'react-i18next';

import imageTwo from '../../../../assets/bag.jpg'
import imageOne from '../../../../assets/wholesale.jpg'
import './OurServices.css'

function OurServices() {
  const { t } = useTranslation();

  return (
    <div className="our-services">
      <h1 className="our-services-title">{t('our_offer_title')}</h1>
      <div className="our-services-cards">
        <div className="card">
          <div className="card-content">
            <div className="card-description">
              {t('our_offer_wholesale')}
            </div>
            <img src={imageOne} alt="Service 1" className="card-image" />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-description">
              {t('our_offer_bags')}
            </div>
            <img src={imageTwo} alt="Service 2" className="card-image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices
