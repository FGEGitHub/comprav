import React from "react";
import Slider from "react-slick";
import { Box, Typography, Button } from "@mui/material";
import inversion from "../assets/inversion.png"; 
const slides = [
  {
    titulo: "Diseño para cada espacio",
    descripcion: "Del 4 al 27 de julio",
    boton: "Descubrí lo nuevo en Muebles e Iluminación",
    img: inversion,
    color: "#00a6a6"
  },
  {
    titulo: "Cocinas que inspiran",
    descripcion: "Hasta 40% OFF",
    boton: "Ver ofertas en electro",
    img: inversion,
    color: "#ef476f"
  },
  {
    titulo: "¡Iluminá tus ideas!",
    descripcion: "Todo en lámparas LED",
    boton: "Ver catálogo",
    img: inversion,
    color: "#ffd166"
  },
  {
    titulo: "Jardines vivos",
    descripcion: "Del 1 al 15 de agosto",
    boton: "Conocé nuestras herramientas",
    img: inversion,
    color: "#06d6a0"
  },
  {
    titulo: "Sillas & confort",
    descripcion: "Lo nuevo en home office",
    boton: "Ir a oficina",
    img: inversion,
    color: "#118ab2"
  },
  {
    titulo: "Renová tu baño",
    descripcion: "Sanitarios y grifería top",
    boton: "Ver más",
    img: inversion,
    color: "#073b4c"
  }
];


const Carrusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000
  };

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              height: { xs: "300px", md: "500px" },
              backgroundImage: `url(${slide.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "20%",
                left: "10%",
                backgroundColor: slide.color,
                padding: 4,
                borderRadius: 4,
                maxWidth: "40%",
                color: "#fff",
                boxShadow: 3
              }}
            >
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                {slide.descripcion}
              </Typography>
              <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
                {slide.titulo}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ff6f00",
                  color: "#fff",
                  borderRadius: 3,
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#ff8f00"
                  }
                }}
              >
                {slide.boton}
              </Button>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carrusel;
