import React, { useState } from "react";
import {
  IconButton,
  Stack,
  Badge,
  Popover,
  Typography
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCarrito } from "../context/CartContext"; // asegurate de que el path sea correcto

function IconButtons() {
  const { carrito, quitarDelCarrito } = useCarrito();
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const [anchorElCarrito, setAnchorElCarrito] = useState(null);

  const handleCarritoClick = (event) => setAnchorElCarrito(event.currentTarget);
  const handleCarritoClose = () => setAnchorElCarrito(null);

  return (
    <Stack direction="row" spacing={2}>
      <IconButton aria-label="usuario" sx={{ color: "#fff" }}>
        <AccountCircleIcon />
      </IconButton>

      <IconButton aria-label="favoritos" sx={{ color: "#fff" }}>
        <FavoriteBorderIcon />
      </IconButton>

      <IconButton aria-label="carrito" onClick={handleCarritoClick} sx={{ color: "#fff" }}>
        <Badge badgeContent={totalItems} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>

      <Popover
        open={Boolean(anchorElCarrito)}
        anchorEl={anchorElCarrito}
        onClose={handleCarritoClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{ sx: { width: 300, p: 2 } }}
      >
        <Typography variant="h6" gutterBottom>Carrito</Typography>
        {carrito.length === 0 ? (
          <Typography variant="body2">El carrito está vacío.</Typography>
        ) : (
          carrito.map((item, idx) => (
            <Stack
              key={idx}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={1}
              sx={{ mb: 1 }}
            >
              <Typography variant="body2">
                {item.nombre} x{item.cantidad}
              </Typography>
              <IconButton size="small" onClick={() => quitarDelCarrito(item.id)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Stack>
          ))
        )}
      </Popover>
    </Stack>
  );
}

export default IconButtons;
