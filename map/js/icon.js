let markerIcon = L.icon({
    iconUrl: './map/images/marker.png',
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, 0],
    shadowUrl: null,
    shadowSize: [0, 0],
    shadowAnchor: [0, 0]
});

let qiangjiIcon = L.icon({
    iconUrl: './map/images/qiangji.png',
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, 0],
    shadowUrl: null,
    shadowSize: [0, 0],
    shadowAnchor: [0, 0]
});

/**
 * 设置marker朝向
 * @param {L.Marker} marker 
 * @param {Number} direction 1-东、2-西、3-南、4-北、5-东南、6-东北、7-西南、8-西北
 */
function setMarkerDirection(marker, direction) {
    let angle;

    switch (direction) {
        case 1:
            angle = 0;
            break;
        case 2:
            angle = 180;
            break;
        case 3:
            angle = 90;
            break;
        case 4:
            angle = -90;
            break;
        case 5:
            angle = 45;
            break;
        case 6:
            angle = -45;
            break;
        case 7:
            angle = 135;
            break;
        case 8:
            angle = -135;
            break;
    }

    marker.setRotationOrigin('center center');
    marker.setRotationAngle(angle);
}

export { markerIcon, qiangjiIcon, setMarkerDirection }
