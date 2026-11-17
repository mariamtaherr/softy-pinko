import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Styles: Tailwind, AOS animations and Boxicons font icons
import './index.css'
import 'aos/dist/aos.css'
import 'boxicons/css/boxicons.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
