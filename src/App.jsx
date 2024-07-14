import React from 'react'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import AboutUs from './pages/aboutus/AboutUs'
import ContactPage from './pages/contactpage/ContactPage'
import Gallery from './pages/gallery/Gallery'
import HomePage from './pages/homepage/HomePage'
import Layout from './utils/Layout'
import ScrollToTop from './utils/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
