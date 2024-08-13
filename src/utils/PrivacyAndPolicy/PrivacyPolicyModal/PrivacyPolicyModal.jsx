import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import './PrivacyPolicyModal.css'

const PrivacyPolicyModal = ({ onClose }) => {
  const { t } = useTranslation('privacy')

  return (
    <div className="privacy-modal-overlay" onClick={onClose}>
      <div className="privacy-modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{t('privacyPolicy.title')}</h2>
        {Object.values(t('privacyPolicy.sections', { returnObjects: true })).map((section, index) => (
          <div key={index}>
            <h3>{section.title}</h3>
            <p>{section.content}</p>
          </div>
        ))}
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

PrivacyPolicyModal.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default PrivacyPolicyModal
