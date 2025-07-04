import React from 'react';

import { InputBase, Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: 400,
        borderRadius: 5,
        px: 2,
        backgroundColor: "#f5f5f5",
      }}
    >
      <InputBase
        sx={{ flex: 1 }}
        placeholder="Buscar productos..."
        inputProps={{ "aria-label": "buscar productos" }}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
