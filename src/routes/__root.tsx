import { 
  createRootRoute, 
  Outlet, 
  ScrollRestoration,
  HeadContent,
  Scripts
} from '@tanstack/react-router'
import * as React from 'react'
import '../styles/app.css'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ScrollRestoration />
      <Scripts />
    </>
  )
}
