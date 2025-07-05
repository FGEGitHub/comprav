import React from 'react';
import { AppBar, Toolbar, Box, Stack, Typography, Button } from "@mui/material";
import SearchBar from "./buscador";
import IconButtons from "./iconox.jsx";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#d70000", py: 1 }}>
      <Toolbar sx={{ alignItems: "flex-start", flexDirection: "row", justifyContent: "space-between" }}>
        {/* IZQUIERDA: Logo que ocupa ambas filas */}
        <Box sx={{ mr: 2 }}>
          <Box component="img" src={logo} alt="Logo" sx={{ height: 60 }} />
        </Box>

        {/* DERECHA: Contenedor en dos filas */}
        <Box sx={{ flexGrow: 1 }}>
          {/* Primera fila: Buscador, ubicación, íconos */}
          <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
            <SearchBar />
            <Typography variant="body2" sx={{ color: "#fff" }}>
              Tu ubicación: <strong>(H3505) Col. Benítez</strong>
            </Typography>
            <IconButtons />
          </Stack>

          {/* Segunda fila: Menú inferior (botones) */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Button color="inherit" sx={{ color: "#fff", textTransform: "none" }}>Categorías</Button>
            <Button color="inherit" sx={{ color: "#fff", textTransform: "none" }}>Promociones</Button>
            <Button color="inherit" sx={{ color: "#fff", textTransform: "none" }}>Hacelo Easy</Button>
            <Button color="inherit" sx={{ color: "#fff", textTransform: "none" }}>Medios de Pago</Button>
            <Button color="inherit" sx={{ color: "#fff", textTransform: "none" }}>Servicios de instalaciones</Button>
            <Button color="inherit" sx={{ color: "#fff", textTransform: "none" }}>Locales</Button>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
