
import Leaflet from 'leaflet';

import Logo from '../images/mapMarker.svg'

const MapIcon = Leaflet.icon({
    iconUrl: Logo, 
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
  })


export default MapIcon

