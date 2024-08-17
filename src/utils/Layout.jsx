import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Footer from '../footer/Footer'
import ContactNavigation from '../utils/ContactNavigation/ContactNavigation'
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

  useEffect(() => {
    const setViewportHeight = () => {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    window.addEventListener('resize', setViewportHeight)
    setViewportHeight()

    return () => {
      window.removeEventListener('resize', setViewportHeight)
    }
  }, [])

  return (
    <div className="layout">
      <main className="main-content">{children}</main>
      <ContactNavigation />
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
