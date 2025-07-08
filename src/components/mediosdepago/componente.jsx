import React from "react";
import visaLogo from "../../assets/Visasvg.svg";
import masterLogo from "../../assets/Mastercard.svg";

const promociones = [
  {
    id: 1,
    cuotas: 6,
    interes: "sin interés",
    minimo: "$200.000",
    detalle:
      "VÁLIDO PARA COMPRAS WEB Y PRESENCIAL DESDE EL 01/01/2025 AL 31/07/2025. OBTENIENDO 6 CUOTAS SIN INTERÉS EN COMPRAS MAYORES A $200.000 (DOSCIENTOS MIL PESOS) EN TODA LA COMPRA EN PRODUCTOS VENDIDOS POR EASY ABONANDO CON TARJETAS DE CRÉDITO VISA Y MASTERCARD BANCARIAS.",
    logo: [visaLogo, masterLogo],
  },
  {
    id: 2,
    cuotas: 3,
    interes: "sin interés",
    minimo: "sin mínimo",
    detalle:
      "Válido para compras online y presenciales del 01/03/2025 al 31/07/2025. Aplica solo con tarjetas de crédito VISA y MASTERCARD.",
    logo: [visaLogo, masterLogo],
  },
];

const MediosDePago = () => {
  return (
    <div className="flex flex-col items-center gap-6 py-6">
      {promociones.map((promo) => (
        <div
          key={promo.id}
          className="w-[90%] bg-white rounded-lg shadow-md flex flex-row justify-between items-center px-4 py-4"
        >
          {/* Columna 1: Logos */}
          <div className="w-1/3 flex items-center justify-center gap-4">
            {promo.logo.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="logo"
                style={{ width: "15vw", height: "15vh", objectFit: "contain" }}
              />
            ))}
          </div>

          {/* Columna 2: Título */}
          <div className="w-1/3 flex flex-col items-center justify-center text-center px-2">
            <h2 className="text-xl md:text-2xl font-bold text-red-600">
              {promo.cuotas} Cuotas {promo.interes}
            </h2>
            <p className="text-sm text-red-500 mt-1">
              En compras mayores a {promo.minimo}
            </p>
          </div>

          {/* Columna 3: Detalle */}
          <div className="w-1/3 px-4 text-sm text-gray-700 overflow-y-auto max-h-32">
            {promo.detalle}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MediosDePago;
