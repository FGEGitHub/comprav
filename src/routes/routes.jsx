
import Inicio from '../pages/inicio/index';
import Adminstock from '../pages/admin/stock/index';
import AdminProducts from '../pages/admin/listaproductos/index';
import React from 'react';
const Rutas = [
 
    { path: '/', element: <Inicio /> },

    
        { path: '/admin/stock', element: <Adminstock /> },
                { path: '/admin/productos', element: <AdminProducts /> },

    ];


export default Rutas;