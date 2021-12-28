/**
 * 地图
 */

import { supermapUrl } from '../config/config.js'
import Msg from './msg.js'

function useMap() {
    let deviceLayer = L.layerGroup();

    let center = [31.81880456, 117.18087366];

    let maxBounds = L.latLngBounds(L.latLng(25.0, 100.0), L.latLng(35.0, 125.0));

    let map = L.map('map', {
        center: center,
        maxBounds: maxBounds,
        minZoom: 5,
        maxZoom: 18,
        zoom: 10
    });

    L.supermap.tiledMapLayer(supermapUrl).addTo(map);

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

    //用于C#调用js代码(SuperMap地图暂无底图切换功能)
    let switchMap = function () {
        Msg.show('SuperMap地图暂无底图切换功能');
    };

    window.switchMap = switchMap;

    return {
        map,
        deviceLayer,
        switchMap
    }
}

export { useMap }
