import { loadTemplate } from '../../js/loadVue.js'
import { useMapIndex } from '../../map/js/supermapIndex.js'
import { defineComponent, reactive, computed, toRefs, ref, getCurrentInstance } from '../../js/importVue.js'

let componentName = "supermapPage";

let resize = function () {
    $('#' + componentName).height($(window).height());
}

let map;
let switchMap;

//组件定义
async function createSuperMapPage() {
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

export { createSuperMapPage, componentName }
