import { loadVue } from "/js/loadHtml.js";
import { useMap } from './map.js'
import { createMarker } from './marker.js'
import { markerIcon, qiangjiIcon } from './icon.js'
import { initControlButtons } from '../views/controlButtons.js'
import { useVuexStore } from './vuexStore.js'

async function useMapIndex() {
    let vuexStoreContainer = useVuexStore();
    let { map, deviceLayer, switchMap } = useMap(vuexStoreContainer);

    let componentName = "mapPage2";

    let { initSwitchMapControl } = await loadVue("/map/views/switchMapControl.vue", "switchMapControlContainer", componentName);

    initControlButtons(map, componentName, vuexStoreContainer);
    initSwitchMapControl(switchMap, componentName, vuexStoreContainer);

    let marker = createMarker(117.18060493, 31.81903928, {
        id: 1,
        title: '测试marker',
        name: '测试marker',
        icon: markerIcon
    });

    let rotatedMarker = createMarker(117.18007386, 31.81726155, {
        id: 2,
        title: '测试旋转marker',
        name: '测试旋转marker',
        icon: qiangjiIcon,
        direction: 6
    });

    let rotatedMarker2 = createMarker(117.18619480, 31.81659604, {
        id: 3,
        title: '测试旋转marker2',
        name: '测试旋转marker2',
        icon: qiangjiIcon,
        direction: 7
    });

    deviceLayer.addLayer(marker);
    deviceLayer.addLayer(rotatedMarker);
    deviceLayer.addLayer(rotatedMarker2);

    return {
        map,
        switchMap
    }
}

export { useMapIndex }
