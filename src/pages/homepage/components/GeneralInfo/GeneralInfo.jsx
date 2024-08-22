import React from 'react'
import { useTranslation } from 'react-i18next';

import imageThree from '../../../../assets/charcoalMaking.jpg'
import imageOne from '../../../../assets/making_charcoal.png'
import imageTwo from '../../../../assets/rostilj.jpg'
import './GeneralInfo.css'

function GeneralInfo() {
  const { t } = useTranslation()

  return (
    <div className="general-info-container">
      <div className="grid-container">
        <div className="grid-item info-img first-img">
          <img className="gi-img" src={imageOne} alt="Charcoal Origin" />
        </div>
        <div className="grid-item description first-description">
          <h1>{t('making_process_title')}</h1>
          <p>
            {t('making_process_content')}
          </p>
        </div>
        <div className="grid-item description second-description">
          <h1>{t('how_and_when_title')}</h1>
          <p>
            {t('how_and_when_content')}
          </p>
        </div>
        <div className="grid-item info-img second-img">
          <img
            className="gi-img"
            src={imageTwo}
            alt="Charcoal Making Process"
          />
        </div>
        <div className="grid-item info-img third-img">
          <img className="gi-img" src={imageThree} alt="Charcoal Packaging" />
        </div>
        <div className="grid-item description third-description">
          <h1>{t('package_title')}</h1>
          <p>
            {t('package_content')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default GeneralInfo
