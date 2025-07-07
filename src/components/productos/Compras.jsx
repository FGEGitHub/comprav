import React, { useState } from "react";
import { useProductos } from "../../context/ProductContext";
import { useCarrito } from "../../context/CartContext";

const productosPorPagina = 10;

export default function VistaConFiltroYCategorias() {
  const { productos } = useProductos();
  const { agregarAlCarrito, carrito } = useCarrito();

  const categorias = [...new Set(productos.map((p) => p.categoria))];
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);

  const toggleCategoria = (categoria) => {
    setCategoriasSeleccionadas((prev) =>
      prev.includes(categoria)
        ? prev.filter((c) => c !== categoria)
        : [...prev, categoria]
    );
    setPaginaActual(1); // Reinicia la página cuando se cambia un filtro
  };

  const filtrados = categoriasSeleccionadas.length
    ? productos.filter((p) => categoriasSeleccionadas.includes(p.categoria))
    : productos;

  const totalPaginas = Math.ceil(filtrados.length / productosPorPagina);
  const inicio = (paginaActual - 1) * productosPorPagina;
  const productosPagina = filtrados.slice(inicio, inicio + productosPorPagina);

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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {productosPagina.map((p) => (
            <div
              key={p.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: 8,
                padding: 10,
                boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
                textAlign: "center",
                backgroundColor: "#fff",
              }}
            >
              <img
                src={p.imagen}
                alt={p.nombre}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
                }}
                style={{
                  width: "100%",
                  height: 150,
                  objectFit: "cover",
                  borderRadius: 4,
                  marginBottom: 10,
                }}
              />
              <h4>{p.nombre}</h4>
              <p><strong>Marca:</strong> {p.marca}</p>
              <p><strong>Precio:</strong> ${p.precio.toLocaleString()}</p>
              <p><strong>Stock:</strong> {p.stock}</p>
              <button onClick={() => agregarAlCarrito(p)}>Agregar al carrito</button>
            </div>
          ))}
        </div>

        {/* Paginación */}
        {totalPaginas > 1 && (
          <div style={{ marginTop: 20, textAlign: "center" }}>
            {Array.from({ length: totalPaginas }, (_, i) => (
              <button
                key={i}
                onClick={() => setPaginaActual(i + 1)}
                style={{
                  margin: "0 5px",
                  padding: "5px 10px",
                  background: paginaActual === i + 1 ? "#007bff" : "#f0f0f0",
                  color: paginaActual === i + 1 ? "#fff" : "#000",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}

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
