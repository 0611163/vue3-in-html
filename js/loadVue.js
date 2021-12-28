/**
 * 用于加载.vue文件的template和style
 */

import { request, loadVue, getVueTemplate, loadVueCss, loadVueScopedCss } from '../js/loadHtml.js'

/** 组件根路径 */
let path = './components/';

/** 组件文件扩展名 */
let fileExt = '.vue';

/**
 * 加载App组件
 * @param {string} rootContainerId App组件根标签id
 */
function loadApp(rootContainerId) {
    return loadVue('./App.vue', rootContainerId.replace('#', ''));
}

/**
 * 获取组件模板
 * @param {string} componentName 组件名称(组件的name属性)
 * @param {string} subPath 组件所在子路径
 */
async function loadTemplate(componentName, subPath = undefined) {
    let url = path + (subPath || '') + componentName + fileExt;
    const data = await request(url);
    loadVueCss(data, componentName);
    loadVueScopedCss(data, componentName);
    return getVueTemplate(data, componentName);
}

export { loadApp, loadTemplate }
