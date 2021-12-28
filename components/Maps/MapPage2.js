/**
 * 该组件用于测试在程序中加载两个高德地图组件，它们具有不同的状态；例如：其中一个显示电子地图，另一个显示影像地图，且分别绘制了不同的图形在地图上
 */

import { loadTemplate } from '../../js/loadVue.js'
import { useMapIndex } from '../../map/js/index2.js'
import { defineComponent, reactive, computed, toRefs, ref, getCurrentInstance } from '../../js/importVue.js'

let componentName = "mapPage2";

let resize = function () {
    $('#' + componentName).height($(window).height());
}

let map;
let switchMap;

//组件定义
async function createMapPage2() {
    let template = await loadTemplate(componentName, 'Maps/');

    return defineComponent({
        name: componentName,
        components: {},
        template: template,
        beforeCreate() {

        },
        mounted() {
            $(window).on('resize', resize);
            resize();
            let mapContainer = useMapIndex();
            map = mapContainer.map;
            switchMap = mapContainer.switchMap;
        },
        activated() {
            resize();
            map && map.invalidateSize(false);
            window.switchMap = switchMap;
        },
        unmounted() {
            $(window).off("resize", resize);
        },
        setup(props, context) {

            return {

            }
        }
    });
}

export { createMapPage2, componentName }
