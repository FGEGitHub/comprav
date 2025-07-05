import React, { useState } from "react";
import { useProductos } from "../../context/ProductContext";
import { useCarrito } from "../../context/CartContext";

export default function VistaConFiltroYCategorias() {
  const { productos } = useProductos();
  const { agregarAlCarrito, carrito } = useCarrito();

  // Obtener categorías únicas
  const categorias = [...new Set(productos.map((p) => p.categoria))];
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);

  const toggleCategoria = (categoria) => {
    setCategoriasSeleccionadas((prev) =>
      prev.includes(categoria)
        ? prev.filter((c) => c !== categoria)
        : [...prev, categoria]
    );
  };

  const filtrados = categoriasSeleccionadas.length
    ? productos.filter((p) => categoriasSeleccionadas.includes(p.categoria))
    : productos;

  return (
    <div style={{ display: "flex", padding: 20 }}>
      {/* Filtros */}
      <aside style={{ width: "20%", marginRight: 20 }}>
        <h4>Categorías</h4>
        {categorias.map((cat) => (
          <div key={cat}>
            <label>
              <input
                type="checkbox"
                checked={categoriasSeleccionadas.includes(cat)}
                onChange={() => toggleCategoria(cat)}
              />
              {cat}
            </label>
          </div>
        ))}
      </aside>

      {/* Productos */}
      <main style={{ width: "80%" }}>
        <h2>Productos</h2>
        <table border="1" cellPadding="8" width="100%">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Marca</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map((p) => (
              <tr key={p.id}>
                <td>{p.nombre}</td>
                <td>{p.marca}</td>
                <td>{p.categoria}</td>
                <td>${p.precio.toLocaleString()}</td>
                <td>{p.stock}</td>
                <td>
                  <button onClick={() => agregarAlCarrito(p)}>Agregar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Carrito Resumen */}
        <div style={{ marginTop: 30 }}>
          <h3>Carrito</h3>
          {carrito.length === 0 ? (
            <p>El carrito está vacío.</p>
          ) : (
            <ul>
              {carrito.map((item) => (
                <li key={item.id}>
                  {item.nombre} x {item.cantidad} (${item.precio * item.cantidad})
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}
