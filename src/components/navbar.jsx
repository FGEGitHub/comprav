import React, { useState } from 'react';
import {
  AppBar, Toolbar, Box, Stack, Typography, Button,
  Menu, MenuItem, Drawer, List, ListItem, ListItemText
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchBar from "./buscador";
import IconButtons from "./iconox.jsx";
import logo from "../assets/logo.jpg";

function Navbar() {
  // 🧭 Estado para ubicación
  const [anchorElUbicacion, setAnchorElUbicacion] = useState(null);
  const [ubicacionSeleccionada, setUbicacionSeleccionada] = useState("Col. Benítez");

  const handleUbicacionClick = (event) => setAnchorElUbicacion(event.currentTarget);
  const handleUbicacionClose = (ubicacion) => {
    if (ubicacion) setUbicacionSeleccionada(ubicacion);
    setAnchorElUbicacion(null);
  };

  // 🗂 Estado para categorías
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  const toggleDrawer = (open) => () => setDrawerOpen(open);
  const handleCategoriaClick = (categoria) => {
    setCategoriaSeleccionada(categoria);
    setDrawerOpen(false);
  };

  // Listas
  const ubicaciones = ["Local 1", "Local 2", "Local 3"];
  const categorias = ['Herramientas', 'Construcción', 'Jardinería', 'Pintura'];

  return (
    <AppBar position="static" sx={{ backgroundColor: "#d70000", py: 1 }}>
      <Toolbar sx={{ alignItems: "flex-start", flexDirection: "row", justifyContent: "space-between" }}>
        {/* Logo */}
        <Box sx={{ mr: 2 }}>
          <Box component="img" src={logo} alt="Logo" sx={{ height: 60 }} />
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          {/* Fila superior */}
          <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
            <SearchBar />

            {/* Botón de ubicación con ícono de flecha */}
            <Button
              onClick={handleUbicacionClick}
              sx={{ color: "#fff", textTransform: "none", display: "flex", alignItems: "center" }}
              endIcon={<ArrowDropDownIcon />}
            >
              Tu ubicación: <strong>&nbsp;({ubicacionSeleccionada})</strong>
            </Button>
<Menu
  anchorEl={anchorElUbicacion}
  open={Boolean(anchorElUbicacion)}
  onClose={() => handleUbicacionClose(null)}
  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
  transformOrigin={{ vertical: "top", horizontal: "left" }}
  getContentAnchorEl={null} // si usás MUI v4, necesario para evitar comportamiento default
  PaperProps={{
    sx: {
      mt: 1, // opcional: separación de unos píxeles para que no quede pegado
    }
  }}
>
              {ubicaciones.map((ubic, i) => (
                <MenuItem key={i} onClick={() => handleUbicacionClose(ubic)}>{ubic}</MenuItem>
              ))}
            </Menu>

            <IconButtons />
          </Stack>

          {/* Fila inferior */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              onClick={toggleDrawer(true)}
              sx={{ color: "#fff", textTransform: "none", display: "flex", alignItems: "center" }}
              endIcon={<ArrowDropDownIcon />}
            >
              {categoriaSeleccionada ? categoriaSeleccionada : "Categorías"}
            </Button>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
              <Box sx={{ width: 250 }} role="presentation">
                <List>
                  {categorias.map((text, index) => (
                    <ListItem button key={index} onClick={() => handleCategoriaClick(text)}>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>

            <Button sx={{ color: "#fff", textTransform: "none" }}>Promociones</Button>
            <Button sx={{ color: "#fff", textTransform: "none" }}>Hacelo Easy</Button>
            <Button sx={{ color: "#fff", textTransform: "none" }}>Medios de Pago</Button>
            <Button sx={{ color: "#fff", textTransform: "none" }}>Servicios de instalaciones</Button>
            <Button sx={{ color: "#fff", textTransform: "none" }}>Locales</Button>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
