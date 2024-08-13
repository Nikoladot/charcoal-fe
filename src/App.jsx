import React from 'react'
import { Route, Routes } from 'react-router-dom'
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
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
