import { loadTemplate } from '../../js/loadVue.js'
import { useMapIndex } from '../../map/js/baiduMapIndex.js'
import { defineComponent, defineAsyncComponent, reactive, computed, toRefs, ref, getCurrentInstance } from '../../js/importVue.js'
import Msg from '../../map/js/msg.js'

let componentName = "baiduMapPage";

let resize = window.onresize = function () {
    $('#' + componentName).height($(window).height());
}

let map;
let switchMap;

//组件定义
async function createBaiduMapPage() {
    Msg.show('百度地图是一个异步组件，现在才创建');

    const template = await loadTemplate(componentName, 'Maps/');

    return defineComponent({
        name: componentName,
        components: {},
        template,
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
            Msg.show('欢迎切换到百度地图');
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

//你要是这样写，控制台提示warn：using "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))"
//这里defineAsyncComponent是多包裹了一层？
let BaiduMapPage = defineAsyncComponent(createBaiduMapPage)

export { BaiduMapPage, componentName }
