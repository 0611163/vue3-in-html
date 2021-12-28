/**
 * 地图
 */

import { tileUrl, tileUrlImage } from '../config/config.js'
import Msg from './msg.js'

function useMap(vuexStoreContainer) {

    let { vuexStore, CHANGE_MAP_TILE_TYPE } = vuexStoreContainer;

    let deviceLayer = L.layerGroup();

    let tileLayer = new L.TileLayer(tileUrl, {
        minZoom: 8,
        maxZoom: 18,
        coordType: 'gcj02'
    });

    let tileLayerImage = new L.TileLayer(tileUrlImage, {
        minZoom: 8,
        maxZoom: 18,
        coordType: 'gcj02'
    });

    let centerLatLng = L.latLng(31.81880456, 117.18087366);

    let mapBounds = L.latLngBounds(L.latLng(31.0, 116.6), L.latLng(32.6, 117.8));

    let map = new L.Map('map', {
        center: centerLatLng,
        zoom: 12,
        minZoom: 8,
        maxZoom: 18,
        maxBounds: mapBounds,
        layers: [tileLayer],
        attributionControl: false,
        doubleClickZoom: false,
        zoomControl: false
    });

    map.addLayer(deviceLayer); //设备图层

    L.control.scale().addTo(map); //比例尺

    //显示经纬度和地图层级
    map.addEventListener("mousemove", function (e) {
        showMousePosition(e);
        showMapZoom();
    });
    map.addEventListener("zoomend", function (e) {
        showMapZoom();
    });

    //复制经纬度
    $('#map').on('keydown', function (e) {
        if (e.ctrlKey && e.key == 'c') {
            copyMousePosition();
            Msg.show('经纬度已复制到剪贴板');
        }
    });

    let mousePositionDiv;
    function showMousePosition(e) {
        if (!mousePositionDiv) {
            mousePositionDiv = $('#mouseposition');
        }
        mousePositionDiv.text(e.latlng.lng.toFixed(8) + ", " + e.latlng.lat.toFixed(8));
    }

    let mapZoomDiv;
    function showMapZoom() {
        if (!mapZoomDiv) {
            mapZoomDiv = $('#mapzoom');
        }
        mapZoomDiv.text(map.getZoom().toString());
    }

    /**
     * 复制经纬度
     */
    function copyMousePosition() {
        let str = $("#mouseposition").text();
        navigator.clipboard.writeText(str); //复制到剪贴板
    }

    /**
     * 底图切换
     */
    function switchMap(type) {
        if (type == 1) {
            tileLayerImage.remove();
            map.addLayer(tileLayer);
        }
        if (type == 2) {
            tileLayer.remove();
            map.addLayer(tileLayerImage);
        }
        vuexStore.commit(CHANGE_MAP_TILE_TYPE, type);
    }

    window.switchMap = switchMap; //用于C#调用js代码

    return {
        map,
        deviceLayer,
        switchMap
    }
}

export { useMap }
