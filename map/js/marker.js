import { setMarkerDirection } from './icon.js'
import Msg from './msg.js'

function createMarker(lng, lat, options) {

    let defaultOptions = {
        id: undefined,
        title: undefined,
        name: undefined,
        icon: undefined,
        direction: undefined
    }

    options = Object.assign(defaultOptions, options);

    let latlng = new L.LatLng(lat, lng);

    let marker = new L.Marker(latlng, options);

    marker.setIcon(options.icon);

    marker.addEventListener("click", markerClick);

    if (options.direction) {
        setMarkerDirection(marker, options.direction);
    }

    return marker;
}

function markerClick(e) {
    let marker = e.sourceTarget;
    Msg.info(marker.options.name);
}

export { createMarker }
