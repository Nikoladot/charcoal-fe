import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import PrivacyPolicyModal from './PrivacyPolicyModal/PrivacyPolicyModal'
import './PrivacyPolicyPopup.css'

const PrivacyPolicyPopup = ({ onClose }) => {
  const { t } = useTranslation('privacy')
  const [shouldShowPopup, setShouldShowPopup] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const userAcknowledged = sessionStorage.getItem('privacyAcknowledged')
    if (!userAcknowledged) {
      setShouldShowPopup(true)
    }
  }, [])

  const handleAcknowledge = () => {
    sessionStorage.setItem('privacyAcknowledged', 'true')
    setShouldShowPopup(false)
  }

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  if (!shouldShowPopup) {
    return null
  }

  return (
    <>
      <div className="privacy-popup">
        <p>
          {t('popupText', { link: '' })}
          <span className="privacy-link" onClick={handleOpenModal}>{t('here')}</span>.
        </p>
        <button className="close-button-privacypopup" onClick={handleAcknowledge}>OK</button>
      </div>
      {isModalOpen && <PrivacyPolicyModal onClose={handleCloseModal} />}
    </>
  )
}

PrivacyPolicyPopup.propTypes = {
  onClose: PropTypes.func,
}

export default PrivacyPolicyPopup
