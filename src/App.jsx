import React from 'react';
import Rutas from './routes/routes.jsx';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";

export function App() {
  const element = useRoutes(Rutas);
  return element;
}

export default function Root() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  );
}
