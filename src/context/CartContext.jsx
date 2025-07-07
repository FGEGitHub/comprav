import React, { createContext, useContext, useState, useEffect, useRef } from "react";

const CartContext = createContext();
const EXPIRACION_MS = 15 * 60 * 1000; // 15 minutos

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const timeoutRef = useRef(null);

  // 🚀 Cargar carrito desde localStorage al inicio
  useEffect(() => {
    const data = localStorage.getItem("carrito");
    const tiempoGuardado = localStorage.getItem("carritoTimestamp");

    if (data && tiempoGuardado) {
      const tiempoTranscurrido = Date.now() - parseInt(tiempoGuardado, 10);
      if (tiempoTranscurrido < EXPIRACION_MS) {
        setCarrito(JSON.parse(data));
        reiniciarTemporizador();
      } else {
        localStorage.removeItem("carrito");
        localStorage.removeItem("carritoTimestamp");
      }
    }
  }, []);

  // 🧠 Guardar carrito en localStorage al cambiar
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    localStorage.setItem("carritoTimestamp", Date.now().toString());
  }, [carrito]);

  // 🕒 Iniciar y reiniciar el temporizador de inactividad
  const reiniciarTemporizador = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      vaciarCarrito();
    }, EXPIRACION_MS);
  };

  // 📣 Escuchar actividad del usuario
  useEffect(() => {
    const eventos = ["click", "mousemove", "keydown", "scroll", "touchstart"];
    eventos.forEach((ev) => window.addEventListener(ev, reiniciarTemporizador));
    return () => eventos.forEach((ev) => window.removeEventListener(ev, reiniciarTemporizador));
  }, []);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const yaExiste = prev.find((p) => p.id === producto.id);
      if (yaExiste) {
        return prev.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      } else {
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
    reiniciarTemporizador();
  };

  const quitarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((p) => p.id !== id));
    reiniciarTemporizador();
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    localStorage.removeItem("carrito");
    localStorage.removeItem("carritoTimestamp");
  };

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, quitarDelCarrito, vaciarCarrito }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCarrito = () => useContext(CartContext);
