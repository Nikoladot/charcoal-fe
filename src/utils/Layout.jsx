import React from 'react'

import PropTypes from 'prop-types'

import Footer from '../footer/Footer'
import ContactNavigation from '../utils/ContactNavigation/ContactNavigation'
import NavigationMenu from '../utils/NavigationMenu/NavigationMenu'

// Pretpostavljamo da već imaš Footer komponentu

function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
      <ContactNavigation />
      <NavigationMenu />
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
