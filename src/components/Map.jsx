import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";



import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
} from 'react-leaflet'

export const Map =() =>{

    const position = [-25.425, -49.2722]

    return(
        <MapContainer style={{width: '80vw', height: '60vh'}} center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Senai Celso Charuri. <br /> Aulão do professor André.
          </Popup>
        </Marker>
      </MapContainer>
    )
}