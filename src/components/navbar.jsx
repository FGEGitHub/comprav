// src/components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Box } from "@mui/material";
import SearchBar from "./buscador";
import IconButtons from "./iconox.jsx";

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff", boxShadow: 1 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* LOGO */}
        <Box component="img" src="../assets/logo.png" alt="Logo" sx={{ height: 40 }} />

        {/* Buscador */}
        <SearchBar />

        {/* Íconos */}
        <IconButtons />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
