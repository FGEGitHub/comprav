
import Inicio from '../pages/inicio/index';
import Mediosdepago from '../pages/mediosdepago/index';
import Promociones from '../pages/promociones/index';

import Adminstock from '../pages/admin/stock/index';
import AdminProducts from '../pages/admin/listaproductos/index';
import React from 'react';
const Rutas = [
      { path: '/', element: <Inicio /> },
  { path: '/inicio', element: <Inicio /> },
  { path: '/mediosdepago', element: <Mediosdepago /> },
  { path: '/promociones', element: <Promociones /> },
  

  
  { path: '/admin/stock', element: <Adminstock /> },
  { path: '/admin/productos', element: <AdminProducts /> }
];


export default Rutas;