import React from 'react';
// Leaflet imports
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});
export const AUVMap = ({ auvs }) => {
    const avgLat = auvs.reduce((sum, auv) => sum + auv.latitude, 0) / auvs.length;
    const avgLng = auvs.reduce((sum, auv) => sum + auv.longitude, 0) / auvs.length;


    return (
         <div className="auv-map-panel">
        <MapContainer
          center={[avgLat, avgLng]}
          zoom={14}
          style={{ height: '600px', width: '600px' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {auvs.map(auv => (
            <Marker key={auv.id} position={[auv.latitude, auv.longitude]}>
              <Popup>
                <b>{auv.name}</b>
                <br />
                Battery: {Math.round(auv.battery * 100)}%
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    );
}
