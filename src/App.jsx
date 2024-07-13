import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import Gallery from './pages/gallery/Gallery';
import AboutUs from './pages/aboutus/AboutUs';
import ContactPage from './pages/contactpage/ContactPage';
import ScrollToTop from "./utils/ScrollToTop";
import Layout from './utils/Layout';


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
  );
}

export default App;
