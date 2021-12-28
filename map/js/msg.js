/**
 * 消息提示
 */

import { defineComponent, reactive, computed, toRefs, ref, getCurrentInstance } from '../../js/importVue.js'
import { zhCn } from '../../libs/element-plus/locale/zh-cn.js'

let elId = '#message1026';
if ($(elId).length == 0) {
    $('body').append('<div id="message1026"></div>');
}

let loadingHandle;
let self;

//方法
function show(message) {
    self.$message(message);
}

function alert(message, title) {
    self.$alert(message, title, {
        type: 'warning',
        confirmButtonText: '确定'
    });
}

function info(message, title) {
    self.$alert(message, title, {
        type: 'info',
        confirmButtonText: '确定'
    });
}

function confirm(message, title, okCallback, cancelCallback) {
    self.$confirm(message, title, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
        okCallback && okCallback();
    }).catch(() => {
        cancelCallback && cancelCallback();
    });
}

function messageBox(message, title, callback) {
    self.$alert(message, title, {
        confirmButtonText: '确定',
        callback: action => {
            callback && callback(action);
        }
    });
}

function loading(msg) {
    loadingHandle = self.$loading({
        lock: true, //lock的修改符--默认是false
        text: msg, //显示在加载图标下方的加载文案
        spinner: 'el-icon-loading', //自定义加载图标类名
        background: 'rgba(0, 0, 0, 0.5)', //遮罩层颜色
        target: document.querySelector('#threeContainer') //loadin覆盖的dom元素节点
    })
}

function loadingClose() {
    loadingHandle && loadingHandle.close()
}

//方法
let functions = {
    show,
    alert,
    info,
    confirm,
    messageBox,
    loading,
    loadingClose
};

//组件
let msg = Vue.createApp({
    name: 'Msg',
    template: '<div></div>',
    setup(props, context) {
        self = getCurrentInstance().appContext.config.globalProperties;

        return {
            ...functions
        }
    }
});

msg.use(ElementPlus, {
    locale: zhCn
});

msg.mount(elId);

export default {
    ...functions
}
