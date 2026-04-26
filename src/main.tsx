import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { HomePage } from './routes/index'
import './styles/app.css'

// Professional Connection Setup
const convex = new ConvexReactClient("https://receptive-manatee-45.convex.cloud");

const rootElement = document.getElementById('root')!
const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <ConvexProvider client={convex}>
      <HomePage />
    </ConvexProvider>
  </React.StrictMode>
)
