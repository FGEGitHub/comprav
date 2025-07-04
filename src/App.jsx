import React from 'react';
import Rutas from './routes/routes.jsx'
import { BrowserRouter, useRoutes } from 'react-router-dom'

function AppRoutes() {
  const element = useRoutes(Rutas)
  return element
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
