import React from 'react'
import ReactDOM from 'react-dom/client'
import { HomePage } from './routes/index'
import './styles/app.css'

console.log("🚀 Launching Golden Team Mold...");

const rootElement = document.getElementById('root')!
const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
)
