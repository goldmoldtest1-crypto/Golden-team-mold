import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route as rootRoute } from './routes/__root'
import { Route as indexRoute } from './routes/index'
import './styles/app.css'

// Initialize Convex (Your Database)
const convex = new ConvexReactClient("https://receptive-manatee-45.convex.cloud");
const queryClient = new QueryClient()

// Build the Route Tree manually to ensure it loads
const routeTree = rootRoute.addChildren([indexRoute])

// Create the Router
const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent',
})

// Define the App component inside main.tsx for maximum reliability
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <ConvexProvider client={convex}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ConvexProvider>
    </React.StrictMode>
  )
}
