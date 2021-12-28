import { loadTemplate } from '../js/loadVue.js'
import { vuexStore } from '../js/vuexStore.js'
import { defineComponent, reactive, computed, toRefs, watch } from '../js/importVue.js'

//状态及数据
const state = reactive({
    dialogVisible: false,
    content: ''
})

//方法
function show(content) {
    state.dialogVisible = true;
    state.content = content;
}

function handleClose() {
    state.dialogVisible = false;
}

function OK() {
    state.dialogVisible = false;
}

//组件定义
let componentName = "testDialog";

async function createTestDialog() {
    let template = await loadTemplate(componentName);

    return defineComponent({
        name: componentName,
        template,
        props: {
            visible: Boolean
        },
        beforeCreate() {

        },
        setup(props, context) {
            //console.log('props', props)
            //console.log('context', context)
            //watch(count, (newValue, oldValue) => { });

            return {
                ...toRefs(state),

                //计算属性
                ...{

                },

                //方法
                ...{
                    show,
                    handleClose,
                    OK
                }
            }
        }
    });
}

export { createTestDialog, componentName }
