import React from 'react';
import Rutas from './routes/routes.jsx'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
function App() {
  const element = useRoutes(Rutas)
  return element
}

function App() {
  return (
   <BrowserRouter>
        <ProductProvider>
          <CartProvider>
 
      <App />
    
    </CartProvider>
    </ProductProvider>
    </BrowserRouter>
  )
}

export default App
