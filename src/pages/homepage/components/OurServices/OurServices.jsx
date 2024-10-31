import React from 'react'
import { useTranslation } from 'react-i18next'

import imageTwo from '../../../../assets/bag.webp'
import imageOne from '../../../../assets/wholesale.webp'
import './OurServices.css'

function OurServices() {
  const { t } = useTranslation('content', 'alt-meta')

  return (
    <div className="our-services">
      <h2 className="our-services-title">{t('our_offer_title')}</h2>
      <div className="our-services-cards">
        <div className="card">
          <div className="card-content">
            <div className="card-description">
              {t('our_offer_wholesale')}
            </div>
            <img src={imageOne} alt={t('alt.our_services_wholesale')} className="card-image" />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-description">
              {t('our_offer_bags')}
            </div>
            <img src={imageTwo} alt={t('alt.our_services_bags')} className="card-image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices
