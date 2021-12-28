import { DrawControl } from '../js/drawControl.js'
import { Measure } from '../js/measure.js'
import Msg from '../js/msg.js'
import { loadHtml } from '../../js/loadHtml.js'
import { defineComponent, reactive, computed, toRefs, ref, getCurrentInstance } from '../../js/importVue.js'

function bind(map, vuexStore) {
    //绘制
    let drawControl = new DrawControl(map);
    drawControl.selectedFeatureCallback = (drawnFeature) => {
        console.log("selectedFeatureCallback", drawnFeature);
    };
    drawControl.updatedFeatureCallback = (drawnFeature) => {
        console.log("updatedFeatureCallback", drawnFeature);
    };
    $('#btnDrawMarker').on('click', () => {
        drawControl.drawMarker();
    });
    $('#btnDrawPolyline').on('click', () => {
        drawControl.drawPolyline();
    });
    $('#btnDrawBufferPolyline').on('click', () => {
        let val = $('#bufferValue').val();
        let reg = /^[1-9][0-9]{0,2}$/;
        if (!reg.test(val)) {
            Msg.alert("请输入3位以内的整数");
            return;
        }
        let bufferValue = parseFloat(val);
        drawControl.drawBufferPolyline(bufferValue);
    });
    $('#btnDrawPolygon').on('click', () => {
        drawControl.drawPolygon();
    });
    $('#btnDrawRectangle').on('click', () => {
        drawControl.drawRectangle();
    });
    $('#btnDrawCircle').on('click', () => {
        drawControl.drawCircle();
    });
    $('#btnStartEditFeature').on('click', () => {
        drawControl.startEdit();
    });
    $('#btnStopEditFeature').on('click', () => {
        drawControl.stopEdit();
    });
    $('#btnDeleteFeature').on('click', () => {
        drawControl.deleteSelected();
    });

    //量算
    let measure = new Measure(drawControl);
    $('#btnMeasureDistance').on('click', () => {
        measure.measureDistance();
    });
    $('#btnMeasureArea').on('click', () => {
        measure.measureArea();
    });

    function bindBtnSwitchMapClick() {
        //切换底图(测试C#调用js代码)
        $('#btnSwitchMap').on('click', function () {
            if (vuexStore.state.mapTileType == 1) {
                window.switchMap(2);
            } else {
                window.switchMap(1);
            }
        });
    }

    //维护按钮状态
    let app = Vue.createApp({
        name: 'btnSwitchMap',
        mounted() {
            bindBtnSwitchMapClick();
        },
        setup(props, context) {

            //计算属性
            const btnValue = computed(() => {
                if (vuexStore.state.mapTileType == 1) {
                    return '显示影像地图';
                } else {
                    return '显示电子地图';
                }
            });

            return {
                //计算属性
                ...{
                    btnValue
                },
            }
        }
    });
    app.mount('#tmplBtnSwitchMap');
}

async function initControlButtons(map, mapPageComponentName, vuexStoreContainer) {

    let { vuexStore } = vuexStoreContainer;

    await loadHtml('./map/views/controlButtons.html', 'controlButtonsContainer', mapPageComponentName);

    bind(map, vuexStore);
}

export { initControlButtons }
