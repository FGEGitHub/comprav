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
   <BrowserRouter>
       {/*  <ProductProvider>
          <CartProvider> */}
 
      <AppRoutes />
    
{/*     </CartProvider>
    </ProductProvider> */}
    </BrowserRouter>
  )
}

export default App
