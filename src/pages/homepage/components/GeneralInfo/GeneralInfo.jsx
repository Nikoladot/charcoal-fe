import React from 'react'
import { useTranslation } from 'react-i18next'

import imageThree from '../../../../assets/charcoalMaking.webp'
import imageOne from '../../../../assets/making_charcoal.webp'
import imageTwo from '../../../../assets/rostilj.webp'
import './GeneralInfo.css'

function GeneralInfo() {
  const { t } = useTranslation('content', 'alt-meta')

  return (
    <div className="general-info-container">
      <div className="grid-container">
        <div className="grid-item info-img first-img">
          <img className="gi-img" src={imageOne} alt={t('alt.general-imgOne')} />
        </div>
        <div className="grid-item description first-description">
          <h2>{t('making_process_title')}</h2>
          <p>{t('making_process_content')}</p>
        </div>
        <div className="grid-item description second-description">
          <h2>{t('how_and_when_title')}</h2>
          <p>{t('how_and_when_content')}</p>
        </div>
        <div className="grid-item info-img second-img">
          <img className="gi-img" src={imageTwo} alt={t('alt.general-imgTwo')} />
        </div>
        <div className="grid-item info-img third-img">
          <img className="gi-img" src={imageThree} alt={t('alt.general-imgThree')} />
        </div>
        <div className="grid-item description third-description">
          <h2>{t('package_title')}</h2>
          <p>{t('package_content')}</p>
        </div>
      </div>
    </div>
  )
}

export default GeneralInfo
