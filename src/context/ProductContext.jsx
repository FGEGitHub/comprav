import React, { createContext, useContext, useState } from "react";

// Productos simulados

  const productosIniciales = [
  { id: 1, nombre: "Cemento", marca: "Loma Negra", modelo: "-", categoria: "Materiales", precio: 12000,unico:"No", stock: 50, imagen: "https://www.lomanegra.com.ar/uploads/productos/cemento-bolsa-50kg.jpg", promocion: "No" },
  { id: 2, nombre: "Arena fina", marca: "San Juan", modelo: "-", categoria: "Materiales", precio: 8000,unico:"No", stock: 100, imagen: "https://materialeselmartillo.com.ar/wp-content/uploads/2021/06/arena-fina.jpg", promocion: "No" },
  { id: 3, nombre: "Ladrillo hueco 18x18x33", marca: "Cerámica Pilar", modelo: "-", categoria: "Materiales", precio: 150,unico:"No", stock: 500, imagen: "https://corralonelcruce.com.ar/wp-content/uploads/2020/06/ladrillo-hueco-18x18x33.jpg", promocion: "20% en un pago" },
  { id: 4, nombre: "Hierro del 8", marca: "Acindar", modelo: "8mm", categoria: "Hierros", precio: 3200,unico:"No", stock: 200, imagen: "https://acindar.com.ar/wp-content/uploads/2020/10/hierro-8mm.jpg", promocion: "No" },
  { id: 5, nombre: "Hierro del 6", marca: "Acindar", modelo: "6mm", categoria: "Hierros", precio: 2500,unico:"No", stock: 250, imagen: "https://acindar.com.ar/wp-content/uploads/2020/10/hierro-6mm.jpg", promocion: "3 cuotas sin interés" },
  { id: 6, nombre: "Cal Hidratada", marca: "El Milagro", modelo: "-", categoria: "Materiales", precio: 3200,unico:"No", stock: 80, imagen: "https://calmilagro.com.ar/img/productos/cal-hidratada.png", promocion: "No" },
  { id: 7, nombre: "Bolsa de Yeso", marca: "Yesera Tucumana", modelo: "-", categoria: "Materiales", precio: 2800,unico:"No", stock: 60, imagen: "https://yeserastucumanas.com.ar/assets/images/producto.jpg", promocion: "No" },
  { id: 8, nombre: "Piedra partida 6-20", marca: "Cantera Pilar", modelo: "-", categoria: "Materiales", precio: 10000,unico:"No", stock: 70, imagen: "https://materialespilar.com.ar/wp-content/uploads/2021/01/piedra-partida.jpg", promocion: "No" },
  { id: 9, nombre: "Membrana asfáltica 30kg", marca: "Megaflex", modelo: "30kg", categoria: "Impermeabilizantes", precio: 18000,unico:"No", stock: 40, imagen: "https://megaflex.com.ar/wp-content/uploads/2020/05/membrana.png", promocion: "No" },
  { id: 10, nombre: "Ladrillo común", marca: "La Esperanza", modelo: "-", categoria: "Materiales", precio: 120,unico:"No", stock: 600, imagen: "https://corralonluz.com.ar/wp-content/uploads/2021/07/ladrillo-comun.jpg", promocion: "20% en un pago" },
  { id: 11, nombre: "Teja colonial", marca: "Cerámica Roja", modelo: "-", categoria: "Techos", precio: 450,unico:"No", stock: 300, imagen: "https://tejasrojas.com.ar/wp-content/uploads/2020/07/teja-colonial.jpg", promocion: "No" },
  { id: 12, nombre: "Chapa galvanizada N°25", marca: "Cindar", modelo: "6m", categoria: "Techos", precio: 19000,unico:"No", stock: 90, imagen: "https://chapagalvanizada.com.ar/imagenes/chapa25.jpg", promocion: "No" },
  { id: 13, nombre: "Tanque de agua 1000L", marca: "Rotoplas", modelo: "1000L", categoria: "Plomería", precio: 52000,unico:"Si", stock: 15, imagen: "https://rotoplas.com.ar/images/producto-tanque.jpg", promocion: "3 cuotas sin interés" },
  { id: 14, nombre: "Cañería PVC 110mm", marca: "Duratop", modelo: "110mm", categoria: "Plomería", precio: 8900,unico:"No", stock: 120, imagen: "https://duratop.com.ar/uploads/pvc.jpg", promocion: "No" },
  { id: 15, nombre: "Bidet blanco", marca: "Ferrum", modelo: "Andina", categoria: "Sanitarios", precio: 27000,unico:"Si", stock: 10, imagen: "https://ferrum.com.ar/images/bidet-andina.jpg", promocion: "No" },
  { id: 16, nombre: "Inodoro largo blanco", marca: "Ferrum", modelo: "Trento", categoria: "Sanitarios", precio: 35000,unico:"Si", stock: 15, imagen: "https://ferrum.com.ar/images/inodoro.jpg", promocion: "3 cuotas sin interés" },
  { id: 17, nombre: "Pileta de cocina", marca: "Johnson", modelo: "Simple", categoria: "Cocinas", precio: 18000,unico:"Si", stock: 20, imagen: "https://johnsonacero.com/uploads/pileta.jpg", promocion: "No" },
  { id: 18, nombre: "Canilla monocomando", marca: "FV", modelo: "Libby", categoria: "Grifería", precio: 22000,unico:"Si", stock: 25, imagen: "https://fvsa.com/uploads/libby.jpg", promocion: "No" },
  { id: 19, nombre: "Pintura látex 20L", marca: "Alba", modelo: "Interior", categoria: "Pinturas", precio: 26000,unico:"No", stock: 30, imagen: "https://alba.com.ar/uploads/latex20l.jpg", promocion: "No" },
  { id: 20, nombre: "Pintura sintética 4L", marca: "Sherwin Williams", modelo: "Exterior", categoria: "Pinturas", precio: 16000,unico:"No", stock: 40, imagen: "https://sherwin.com/uploads/sintetica.jpg", promocion: "20% en un pago" },

  { id: 21, nombre: "Disco corte amoladora", marca: "Bosch", modelo: "115mm", categoria: "Herramientas", precio: 2500,unico:"No", stock: 50, promocion: "No", imagen: "https://bosch.com.ar/uploads/disco.jpg" },
  { id: 22, nombre: "Amoladora 4 1/2", marca: "DeWalt", modelo: "DWE4010", categoria: "Herramientas", precio: 35000,unico:"No", stock: 10, promocion: "No", imagen: "https://dewalt.com.ar/uploads/amoladora.jpg" },
  { id: 23, nombre: "Martillo de uña", marca: "Tramontina", modelo: "-", categoria: "Herramientas", precio: 6000,unico:"No", stock: 40, promocion: "No", imagen: "https://tramontina.com.ar/uploads/martillo.jpg" },
  { id: 24, nombre: "Cinta métrica 5m", marca: "Stanley", modelo: "-", categoria: "Herramientas", precio: 3000,unico:"No", stock: 80, promocion: "No", imagen: "https://stanley.com.ar/uploads/cinta.jpg" },
  { id: 25, nombre: "Escalera de aluminio 6 peldaños", marca: "Werner", modelo: "-", categoria: "Herramientas", precio: 38000,unico:"Si", stock: 15, promocion: "No", imagen: "https://werner.com/uploads/escalera.jpg" },
  { id: 26, nombre: "Placa Durlock 12.5mm", marca: "Durlock", modelo: "Standard", categoria: "Revestimientos", precio: 6800,unico:"No", stock: 100, promocion: "No", imagen: "https://durlock.com.ar/uploads/placa.jpg" },
  { id: 27, nombre: "Masilla Durlock", marca: "Durlock", modelo: "25kg", categoria: "Revestimientos", precio: 7000,unico:"No", stock: 60, promocion: "No", imagen: "https://durlock.com.ar/uploads/masilla.jpg" },
  { id: 28, nombre: "Perfil omega 35mm", marca: "Durlock", modelo: "-", categoria: "Revestimientos", precio: 1200,unico:"No", stock: 200, promocion: "No", imagen: "https://durlock.com.ar/uploads/perfil.jpg" },
  { id: 29, nombre: "Clavos 2”", marca: "Fate", modelo: "-", categoria: "Fijaciones", precio: 800,unico:"No", stock: 100, promocion: "No", imagen: "https://clavosfate.com.ar/uploads/clavos.jpg" },
  { id: 30, nombre: "Tornillos drywall", marca: "Wurth", modelo: "25mm", categoria: "Fijaciones", precio: 1500,unico:"No", stock: 100, promocion: "No", imagen: "https://wurth.com.ar/uploads/tornillos.jpg" },

  { id: 31, nombre: "Manguera jardín 15m", marca: "Garden Life", modelo: "-", categoria: "Jardinería", precio: 9500,unico:"No", stock: 25, promocion: "No", imagen: "https://gardenlife.com.ar/uploads/manguera.jpg" },
  { id: 32, nombre: "Pala ancha", marca: "Bellota", modelo: "-", categoria: "Herramientas", precio: 7500,unico:"No", stock: 35, promocion: "No", imagen: "https://bellota.com.ar/uploads/pala.jpg" },
  { id: 33, nombre: "Carretilla metálica", marca: "Pretul", modelo: "-", categoria: "Herramientas", precio: 27000,unico:"No", stock: 10, promocion: "No", imagen: "https://pretul.com.ar/uploads/carretilla.jpg" },
  { id: 34, nombre: "Balde albañil", marca: "Induplas", modelo: "20L", categoria: "Obra", precio: 3000,unico:"No", stock: 50, promocion: "No", imagen: "https://induplas.com.ar/uploads/balde.jpg" },
  { id: 35, nombre: "Nivel burbuja 60cm", marca: "Stanley", modelo: "-", categoria: "Herramientas", precio: 4200,unico:"No", stock: 45, promocion: "No", imagen: "https://stanley.com.ar/uploads/nivel.jpg" },
  { id: 36, nombre: "Caja eléctrica embutir", marca: "Cambre", modelo: "-", categoria: "Electricidad", precio: 800,unico:"No", stock: 90, promocion: "No", imagen: "https://cambre.com.ar/uploads/caja.jpg" },
  { id: 37, nombre: "Tubo corrugado 3/4", marca: "Cambre", modelo: "-", categoria: "Electricidad", precio: 900,unico:"No", stock: 120, promocion: "No", imagen: "https://cambre.com.ar/uploads/tubo.jpg" },
  { id: 38, nombre: "Cables 2.5mm", marca: "Nexans", modelo: "-", categoria: "Electricidad", precio: 12500,unico:"No", stock: 100, promocion: "No", imagen: "https://nexans.com/uploads/cable.jpg" },
  { id: 39, nombre: "Disyuntor bipolar 40A", marca: "Sica", modelo: "-", categoria: "Electricidad", precio: 9500,unico:"No", stock: 25, promocion: "No", imagen: "https://sica.com.ar/uploads/disyuntor.jpg" },
  { id: 40, nombre: "Llave térmica 10A", marca: "Sica", modelo: "-", categoria: "Electricidad", precio: 3500,unico:"No", stock: 30, promocion: "No", imagen: "https://sica.com.ar/uploads/termica.jpg" },

  { id: 41, nombre: "Caja de herramientas", marca: "Stanley", modelo: "19\"", categoria: "Herramientas", precio: 14000,unico:"No", stock: 15, promocion: "No", imagen: "https://stanley.com.ar/uploads/caja.jpg" },
  { id: 42, nombre: "Mezcladora manual", marca: "Gamma", modelo: "G190", categoria: "Herramientas", precio: 49000,unico:"No", stock: 5, promocion: "No", imagen: "https://gamma.com.ar/uploads/mezcladora.jpg" },
  { id: 43, nombre: "Espejo baño 60x80", marca: "Ferrum", modelo: "-", categoria: "Sanitarios", precio: 18000,unico:"No", stock: 8, promocion: "No", imagen: "https://ferrum.com.ar/uploads/espejo.jpg" },
  { id: 44, nombre: "Vanitory 60cm", marca: "Ferrum", modelo: "Veneto", categoria: "Sanitarios", precio: 48000,unico:"No", stock: 7, promocion: "No", imagen: "https://ferrum.com.ar/uploads/vanitory.jpg" },
  { id: 45, nombre: "Rejilla piso inoxidable", marca: "FV", modelo: "10x10", categoria: "Sanitarios", precio: 2500,unico:"No", stock: 60, promocion: "No", imagen: "https://fvsa.com/uploads/rejilla.jpg" },
  { id: 46, nombre: "Puerta placa 70cm", marca: "Oblak", modelo: "-", categoria: "Aberturas", precio: 43000,unico:"No", stock: 10, promocion: "No", imagen: "https://oblak.com.ar/uploads/puerta.jpg" },
  { id: 47, nombre: "Ventana aluminio 100x100", marca: "Aluar", modelo: "Blanca", categoria: "Aberturas", precio: 62000,unico:"No", stock: 8, promocion: "No", imagen: "https://aluar.com/uploads/ventana.jpg" },
  { id: 48, nombre: "Cemento rápido", marca: "Sika", modelo: "-", categoria: "Materiales", precio: 16000,unico:"No", stock: 30, promocion: "No", imagen: "https://sika.com/uploads/cemento.jpg" },
  { id: 49, nombre: "Espuma poliuretánica", marca: "Soudal", modelo: "-", categoria: "Selladores", precio: 8700,unico:"No", stock: 40, promocion: "No", imagen: "https://soudal.com/uploads/espuma.jpg" },
  { id: 50, nombre: "Sellador acrílico blanco", marca: "Sika", modelo: "-", categoria: "Selladores", precio: 5400,unico:"No", stock: 45, promocion: "No", imagen: "https://sika.com/uploads/sellador.jpg" }
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
