import React from 'react';
import { IconButton, Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function IconButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <IconButton aria-label="usuario">
        <AccountCircleIcon />
      </IconButton>
      <IconButton aria-label="favoritos">
        <FavoriteBorderIcon />
      </IconButton>
      <IconButton aria-label="carrito">
        <ShoppingCartIcon />
      </IconButton>
    </Stack>
  );
}

export default IconButtons;
