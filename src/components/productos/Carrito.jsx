import React from "react";
import { useCarrito } from "../../context/CartContext";

export default function CarritoResumen() {
  const { carrito, agregarAlCarrito, quitarDelCarrito, vaciarCarrito } = useCarrito();

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  if (carrito.length === 0) {
    return (
      <div>
        <h3>Carrito</h3>
        <p>El carrito está vacío.</p>
      </div>
    );
  }

  return (
    <div>
      <h3>Carrito</h3>
      <table border="1" cellPadding="6" width="100%">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Subtotal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((item) => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>{item.cantidad}</td>
              <td>${item.precio}</td>
              <td>${item.precio * item.cantidad}</td>
              <td>
                <button onClick={() => quitarDelCarrito(item.id)}>-</button>
                <button onClick={() => agregarAlCarrito(item)}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ marginTop: 10 }}>
        <strong>Total:</strong> ${total.toLocaleString()}
      </p>

      <div style={{ marginTop: 10 }}>
        <button onClick={vaciarCarrito} style={{ marginRight: 10 }}>
          Vaciar carrito
        </button>
        <button onClick={() => alert("Compra realizada!")}>
          Finalizar compra
        </button>
      </div>
    </div>
  );
}
