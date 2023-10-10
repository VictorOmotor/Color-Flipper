import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ColorFlipper from './components/ColorFlipper/ColorFlipper.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorFlipper />
  </React.StrictMode>,
)
