import React from 'react'

import ReactDOM from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'

import App from './App'
import './index.css'
import ContactNavigation from './utils/ContactNavigation/ContactNavigation'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ContactNavigation />
      <App />
    </Router>
  </React.StrictMode>
)
