import { useMap } from "./supermap.js";
import { createMarker } from './marker.js'
import { markerIcon, qiangjiIcon } from './icon.js'
import { initControlButtons } from '../views/controlButtons.js'
import { useVuexStore } from './vuexStore.js'
import { loadVue } from "/js/loadHtml.js";

async function useMapIndex() {

    let vuexStoreContainer = useVuexStore();

    let { map, deviceLayer, switchMap } = useMap();

    let componentName = "supermapPage";

    initControlButtons(map, componentName, vuexStoreContainer);

    let rotatedMarker = createMarker(117.18087366, 31.81880456, {
        id: 2,
        title: '测试旋转marker',
        name: '测试旋转marker',
        icon: qiangjiIcon,
        direction: 6
    });

    deviceLayer.addLayer(rotatedMarker);

    return {
        map,
        switchMap
    }
}

export {
    useMapIndex
}
