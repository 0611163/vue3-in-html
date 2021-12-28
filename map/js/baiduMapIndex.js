import { useMap } from './baiduMap.js'
import { createMarker } from './marker.js'
import { markerIcon, qiangjiIcon } from './icon.js'
import { initControlButtons } from '../views/controlButtons.js'
import { initSwitchMapControl } from '../views/switchMapControl.js'
import { componentName } from '../../components/Maps/BaiduMapPage.js'
import { useVuexStore } from './vuexStore.js'

function useMapIndex() {
    let vuexStoreContainer = useVuexStore();
    let { map, deviceLayer, switchMap } = useMap(vuexStoreContainer);

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
