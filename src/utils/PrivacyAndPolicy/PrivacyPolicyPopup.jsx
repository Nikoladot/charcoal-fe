import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import PrivacyPolicyModal from './PrivacyPolicyModal/PrivacyPolicyModal'
import './PrivacyPolicyPopup.css'

const PrivacyPolicyPopup = ({ onClose }) => {
  const { t } = useTranslation('privacy')
  const [shouldShowPopup, setShouldShowPopup] = useState(false) // Initial state is false
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const userAcknowledged = sessionStorage.getItem('privacyAcknowledged')
    // Set shouldShowPopup to true only if the user hasn't acknowledged it
    if (!userAcknowledged) {
      setShouldShowPopup(true)
    }
  }, [])

  const handleAcknowledge = () => {
    sessionStorage.setItem('privacyAcknowledged', 'true')
    setShouldShowPopup(false) // Hide popup after acknowledgment
  }

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  if (!shouldShowPopup) {
    return null // Don't render anything if the popup should not show
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
