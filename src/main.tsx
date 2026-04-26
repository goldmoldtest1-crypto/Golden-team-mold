import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route as rootRoute } from './routes/__root'
import { Route as indexRoute } from './routes/index'
import './styles/app.css'

const convex = new ConvexReactClient("https://receptive-manatee-45.convex.cloud");
const queryClient = new QueryClient()

const routeTree = rootRoute.addChildren([indexRoute])
const router = createRouter({ routeTree })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConvexProvider client={convex}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ConvexProvider>
  </React.StrictMode>
)
