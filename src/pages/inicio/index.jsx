

import { useNavigate, useParams } from "react-router-dom";

//import Formulario from '../../components/componenteinscripcion/cerrado'
import Componente from "../../components/inicio/componente.jsx"; // cambia esto a tu ruta real
import React, { useEffect, useState } from "react";
import {
    Button,
 
  } from "@mui/material";
  import {
    useMediaQuery,
    useTheme,
} from "@mui/material";

export default function Paginas() {
    const navigate = useNavigate();
const theme = useTheme();

            
            return (
                <>

                   <Componente/>
   {/*           
                   <Formulario/> */}
                </>
           
            );
        
        }