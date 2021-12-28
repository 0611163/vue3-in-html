import { loadVue } from '../../js/loadHtml.js'
import { defineComponent, reactive, computed, toRefs, ref, getCurrentInstance } from '../../js/importVue.js'

async function initSwitchMapControl(switchMap, mapPageComponentName, vuexStoreContainer) {

    let { vuexStore } = vuexStoreContainer;

    await loadVue('./map/views/switchMapControl.vue', 'switchMapControlContainer', mapPageComponentName);

    //状态及数据
    const state = reactive({
        imgs: [{
            src: './map/images/e-map.png',
            type: 1,
            alt: '电子地图'
        },
        {
            src: './map/images/image-map.png',
            type: 2,
            alt: '卫星地图'
        }]
    })

    //方法
    function imgClick(e) {
        let type = parseInt(e.target.attributes['value'].value);
        switchMap(type);
    }

    function getImgClass(type) {
        let imgMargin = type === 1;

        if (vuexStore.state.mapTileType === type) {
            return { imgCurrent: true, imgMargin: imgMargin }
        } else {
            return { img: true, imgMargin: imgMargin }
        }
    }

    //App定义
    let app = Vue.createApp({
        name: 'switchMapControl',
        setup(props, context) {

            return {
                ...toRefs(state),

                //计算属性
                ...{

                },

                //方法
                ...{
                    imgClick,
                    getImgClass
                }
            }
        }
    });
    app.mount('#switchMapControl');
}

export { initSwitchMapControl }
