

import { useNavigate, useParams } from "react-router-dom";
import Nav from "../../components/navbar.jsx"; // cambia esto a tu ruta real
//import Formulario from '../../components/componenteinscripcion/cerrado'
import Componente from "../../components/promociones/componente.jsx"; // cambia esto a tu ruta real
import React from "react";

  import {
    useMediaQuery,
    useTheme,
} from "@mui/material";

export default function Paginas() {
    const navigate = useNavigate();
const theme = useTheme();

            
            return (
                <>
<Nav/>
                   <Componente/>

                </>
           
            );
        
        }