import { loadTemplate } from '../../js/loadVue.js'
import { useMapIndex } from '../../map/js/index.js'
import { defineComponent, reactive, computed, toRefs, ref, getCurrentInstance } from '../../js/importVue.js'

let componentName = "mapPage";

let resize = function () {
    $('#' + componentName).height($(window).height());
}

let map;
let switchMap;

//组件定义
async function createMapPage() {
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

export { createMapPage, componentName }
