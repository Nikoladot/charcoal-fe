import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Footer from '../footer/Footer'
import NavigationMenu from '../utils/NavigationMenu/NavigationMenu'
import PrivacyPolicyPopup from './PrivacyAndPolicy/PrivacyPolicyPopup'
import PrivacyPolicyModal from './PrivacyAndPolicy/PrivacyPolicyModal/PrivacyPolicyModal'

function Layout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openPrivacyModal = () => {
    setIsModalOpen(true)
  }

  const closePrivacyModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="layout">
      <main className="main-content">{children}</main>
      <NavigationMenu />
      <Footer openPrivacyModal={openPrivacyModal} />
      <PrivacyPolicyPopup />
      {isModalOpen && <PrivacyPolicyModal onClose={closePrivacyModal} />}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
