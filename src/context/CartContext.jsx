import React, { createContext, useContext, useState, useEffect, useRef } from "react";

const CartContext = createContext();
const EXPIRACION_MS = 30 * 60 * 1000; // 30 minutos

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const timeoutRef = useRef(null);

  // ⚡ Al montar, verificar si ya hay carrito guardado y si está vigente
  useEffect(() => {
    const data = localStorage.getItem("carrito");
    const tiempoGuardado = localStorage.getItem("carritoTimestamp");

    console.log("🗂️ Cargando carrito:", data);
    console.log("⏱️ Timestamp guardado:", tiempoGuardado);

    if (data && tiempoGuardado) {
      const tiempoGuardadoMs = parseInt(tiempoGuardado, 10);

      if (isNaN(tiempoGuardadoMs)) {
        console.warn("⚠️ Timestamp inválido, usando carrito de todas formas");
        setCarrito(JSON.parse(data));
        reiniciarTemporizador();
        return;
      }

      const tiempoTranscurrido = Date.now() - tiempoGuardadoMs;

      console.log("⏳ Tiempo transcurrido (ms):", tiempoTranscurrido);

      if (tiempoTranscurrido < EXPIRACION_MS) {
        console.log("✅ Carrito vigente, cargando...");
        setCarrito(JSON.parse(data));
        reiniciarTemporizador();
      } else {
        console.log("⌛ Carrito vencido");
        alertaVencido();
        setCarrito([]); // Limpia solo el estado, no el storage aún
        localStorage.removeItem("carrito");
        localStorage.removeItem("carritoTimestamp");
      }
    } else if (data) {
      // Si hay carrito pero sin timestamp, igual se usa
      console.log("🟢 Carrito sin timestamp, cargando...");
      setCarrito(JSON.parse(data));
      reiniciarTemporizador();
    }
  }, []);

  // 🧠 Siempre guardar carrito y timestamp al actualizar
  const guardarEnLocalStorage = (nuevoCarrito) => {
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    localStorage.setItem("carritoTimestamp", Date.now().toString());
  };

  // 🕒 Reinicia el temporizador de expiración
  const reiniciarTemporizador = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      alertaVencido();
      vaciarCarrito();
    }, EXPIRACION_MS);
  };

  // 📣 Detecta actividad del usuario para reiniciar el timer
  useEffect(() => {
    const eventos = ["click", "mousemove", "keydown", "scroll", "touchstart"];
    eventos.forEach((ev) =>
      window.addEventListener(ev, reiniciarTemporizador)
    );
    return () =>
      eventos.forEach((ev) =>
        window.removeEventListener(ev, reiniciarTemporizador)
      );
  }, []);

  // ➕ Agregar producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const yaExiste = prev.find((p) => p.id === producto.id);
      let nuevoCarrito;
      if (yaExiste) {
        nuevoCarrito = prev.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      } else {
        nuevoCarrito = [...prev, { ...producto, cantidad: 1 }];
      }
      guardarEnLocalStorage(nuevoCarrito);
      return nuevoCarrito;
    });
    reiniciarTemporizador();
  };

  // ➖ Quitar producto (baja cantidad o elimina)
  const quitarDelCarrito = (id) => {
    setCarrito((prev) => {
      const nuevoCarrito = prev.flatMap((p) => {
        if (p.id === id) {
          if (p.cantidad > 1) {
            return [{ ...p, cantidad: p.cantidad - 1 }];
          } else {
            return [];
          }
        }
        return [p];
      });
      guardarEnLocalStorage(nuevoCarrito);
      return nuevoCarrito;
    });
    reiniciarTemporizador();
  };

  // 🗑️ Vaciar carrito manualmente
  const vaciarCarrito = () => {
    setCarrito([]);
    localStorage.removeItem("carrito");
    localStorage.removeItem("carritoTimestamp");
  };

  // 🚨 Mostrar alerta cuando expira
  const alertaVencido = () => {
    alert("⏰ Tu carrito que estabas viendo venció. Comenzá de nuevo.");
  };

  return (
    <CartContext.Provider
      value={{ carrito, agregarAlCarrito, quitarDelCarrito, vaciarCarrito }}
    >
      {children}
    </CartContext.Provider>
  );
};

// ✅ Hook para usar en componentes
export function useCarrito() {
  return useContext(CartContext);
}
