import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import AboutUs from './pages/aboutus/AboutUs'
import ContactPage from './pages/contactpage/ContactPage'
import Gallery from './pages/gallery/Gallery'
import HomePage from './pages/homepage/HomePage'
import Layout from './utils/Layout'
import ScrollToTop from './utils/ScrollToTop'
import './i18n'

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/:lang/homepage" element={<HomePage />} />
          <Route path="/:lang/gallery" element={<Gallery />} />
          <Route path="/:lang/about" element={<AboutUs />} />
          <Route path="/:lang/contact" element={<ContactPage />} />
          {/* Redirect from root to a default language homepage */}
          <Route path="/" element={<Navigate to="/en/homepage" />} />
          {/* Optionally handle any undefined routes */}
          <Route path="*" element={<Navigate to="/en/homepage" />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
