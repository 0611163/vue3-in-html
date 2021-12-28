import { loadTemplate } from '../js/loadVue.js'
import { vuexStore, CHANGE_MAP_TYPE } from '../js/vuexStore.js'
import { defineComponent, defineAsyncComponent, reactive, computed, toRefs, ref, getCurrentInstance } from '../js/importVue.js'
import { createTestDialog } from '../components/TestDialog.js'

let self;
let router;

//状态及数据
const state = reactive({
    dateTime: '',
    defaultTime: new Date()
})

//计算属性
const visible = computed(() => {
    return vuexStore.state.helloVue3Visible;
});

const dateTimeStr = computed(() => {
    if (state.dateTime) {
        return dayjs(state.dateTime).format('YYYY-MM-DD HH:mm:ss');
    }
});

const currentMap = computed(() => {
    if (vuexStore.state.mapType == 1) {
        return '高德地图';
    }

    if (vuexStore.state.mapType == 2) {
        return '百度地图';
    }

    if (vuexStore.state.mapType == 3) {
        return 'SuperMap地图';
    }

    if (vuexStore.state.mapType == 4) {
        return '第二个高德地图页面';
    }
});

//方法
function updateDateTime() {
    state.dateTime = new Date();
}

function showDialog() {
    self.refs.dialog.show('父组件传给对话框的内容');
}

function changeMap(type) {
    if (type === 1) {
        this.$router.push('/')
    }

    if (type === 2) {
        this.$router.push('/baiduMap')
    }

    if (type === 3) {
        this.$router.push('/supermap')
    }

    if (type === 4) {
        this.$router.push('/map2')
    }

    vuexStore.commit(CHANGE_MAP_TYPE, type);
}

//组件定义
let componentName = "helloVue3";

async function createHelloVue3() {

    let [template, TestDialog] = await Promise.all([
        loadTemplate(componentName),
        createTestDialog()
    ])

    return defineComponent({
        name: componentName,
        template,
        props: {
            title: String
        },
        components: {
            TestDialog
        },
        beforeCreate() {

        },
        setup(props, context) {
            //console.log('props', props)
            //console.log('context', context)
            self = getCurrentInstance();
            router = getCurrentInstance().appContext.config.globalProperties.$router;

            return {
                ...toRefs(state),

                //计算属性
                ...{
                    visible,
                    dateTimeStr,
                    currentMap
                },

                //方法
                ...{
                    updateDateTime,
                    showDialog,
                    changeMap
                }
            }
        }
    });
}

let HelloVue3 = defineAsyncComponent(createHelloVue3)

export { HelloVue3, componentName }
