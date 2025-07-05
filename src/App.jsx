import React from 'react';
import Rutas from './routes/routes.jsx'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { ProductProvider } from "./context/ProductContext";
function AppRoutes() {
  const element = useRoutes(Rutas)
  return element
}

function App() {
  return (
        <ProductProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </ProductProvider>
  )
}

export default App
