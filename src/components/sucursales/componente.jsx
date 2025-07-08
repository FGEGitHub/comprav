import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function SucursalesMap() {
  const [data, setData] = useState(null);
  const [centros, setCentros] = useState([]);

  useEffect(() => {
    fetch("/2suc.geojson")
      .then((res) => res.json())
      .then((geojson) => {
        setData(geojson);

        // Calcular centro de cada polígono
        const cs = geojson.features.map((feature) => {
          const coords = feature.geometry.coordinates[0]; // array de [lng, lat]
          const latitudes = coords.map((c) => c[1]);
          const longitudes = coords.map((c) => c[0]);

          const lat = latitudes.reduce((a, b) => a + b) / latitudes.length;
          const lng = longitudes.reduce((a, b) => a + b) / longitudes.length;
          return [lat, lng];
        });

        setCentros(cs);
      })
      .catch(console.error);
  }, []);

  return (
    <div style={{ height: "500px" }}>
      <MapContainer center={[-27.47, -58.83]} zoom={13} style={{ height: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        
        {data && (
          <GeoJSON
            data={data}
            style={{ color: "#007bff", weight: 2, fillOpacity: 0.4 }}
          />
        )}

        {centros.map((pos, i) => (
          <Marker key={i} position={pos}>
            <Popup>Sucursal {i + 1}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
