import React from 'react';
import Rutas from './routes/routes.jsx'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
function AppRoutes() {
  const element = useRoutes(Rutas)
  return element
}

function App() {
  return (

        <ProductProvider>
          <CartProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </CartProvider>
    </ProductProvider>
  )
}

export default App
