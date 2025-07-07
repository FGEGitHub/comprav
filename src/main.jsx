import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Root from './App.jsx'; // Aquí importa por su nombre real

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
