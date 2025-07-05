import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  Paper
} from '@mui/material';

const categorias = [
  'Materiales de Construcción',
  'Herramientas',
  'Pintura',
  'Jardinería',
  'Sanitarios',
];

function AdminStock() {
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleGuardar = () => {
    if (!nombre || !categoria || !precio) {
      setMensaje('Todos los campos son obligatorios');
      return;
    }

    const producto = {
      nombre,
      categoria,
      precio: parseFloat(precio),
    };

    // Simula guardado
    console.log('Producto guardado:', producto);
    setMensaje('Producto guardado exitosamente ✔️');

    // Limpia el formulario
    setNombre('');
    setCategoria('');
    setPrecio('');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 6,
      }}
    >
      <Paper elevation={4} sx={{ p: 4, width: 400 }}>
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Agregar nuevo producto
        </Typography>

        <TextField
          fullWidth
          label="Nombre del producto"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          margin="normal"
        />

        <TextField
          fullWidth
          select
          label="Categoría"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          margin="normal"
        >
          {categorias.map((cat, i) => (
            <MenuItem key={i} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          fullWidth
          label="Precio"
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          margin="normal"
        />

        {mensaje && (
          <Typography color="primary" mt={2} fontSize="0.9rem">
            {mensaje}
          </Typography>
        )}

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, backgroundColor: '#d70000', '&:hover': { backgroundColor: '#b10000' } }}
          onClick={handleGuardar}
        >
          Guardar producto
        </Button>
      </Paper>
    </Box>
  );
}

export default AdminStock;
