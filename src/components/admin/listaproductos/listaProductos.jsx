import React, { useState } from "react";
import { useProductos } from "../../../context/ProductContext";

export default function ListaProductos() {
  const { productos } = useProductos();
  const [filtro, setFiltro] = useState("");

  const filtrados = productos.filter((p) =>
    `${p.nombre} ${p.marca} ${p.modelo} ${p.categoria}`
      .toLowerCase()
      .includes(filtro.toLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>
      <h2>Listado de Productos</h2>
      <input
        type="text"
        placeholder="Buscar"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        style={{ width: "100%", marginBottom: 10 }}
      />
      <table border="1" cellPadding="8" width="100%">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Precio</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {filtrados.map((p) => (
            <tr key={p.id}>
              <td>{p.nombre}</td>
              <td>{p.marca}</td>
              <td>${p.precio.toLocaleString()}</td>
              <td>{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
