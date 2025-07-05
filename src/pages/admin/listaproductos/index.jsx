import React from "react";
import Nav from "../../../components/navbar.jsx"

import Componente from "../../../components/admin/listaproductos/listaProductos.jsx"; // Cambia esto a tu ruta real
export default function Adminstock() {
    return (
        <>
        <Nav />
            <Componente />
        </>
    )
}