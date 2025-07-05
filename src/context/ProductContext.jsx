import React, { createContext, useContext, useState } from "react";

// Productos simulados
const productosIniciales = [
  { id: 1, nombre: "Cemento", marca: "Loma Negra", modelo: "-", categoria: "Materiales", precio: 12000, stock: 50 },
  { id: 2, nombre: "Arena fina", marca: "San Juan", modelo: "-", categoria: "Materiales", precio: 8000, stock: 100 },
  { id: 3, nombre: "Ladrillo hueco 18x18x33", marca: "Cerámica Pilar", modelo: "-", categoria: "Materiales", precio: 150, stock: 500 },
  // ... más productos
];

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productos, setProductos] = useState(productosIniciales);

  const agregarProducto = (producto) => {
    setProductos((prev) => [...prev, { ...producto, id: Date.now() }]);
  };

  const editarProducto = (id, nuevosDatos) => {
    setProductos((prev) =>
      prev.map((prod) => (prod.id === id ? { ...prod, ...nuevosDatos } : prod))
    );
  };

  const eliminarProducto = (id) => {
    setProductos((prev) => prev.filter((prod) => prod.id !== id));
  };

  return (
    <ProductContext.Provider
      value={{
        productos,
        agregarProducto,
        editarProducto,
        eliminarProducto,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Hook personalizado para consumir el contexto
export const useProductos = () => useContext(ProductContext);
