import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../footer/Footer'
import ContactNavigation from '../utils/ContactNavigation/ContactNavigation'
import NavigationMenu from '../utils/NavigationMenu/NavigationMenu'

function Layout({ children }) {
  return (
    <div className="layout">
      <main className="main-content">{children}</main>
      <ContactNavigation />
      <NavigationMenu />
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
