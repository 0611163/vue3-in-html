/**
 * 测试组件在子路径下
 */

import { loadTemplate } from '../../js/loadVue.js'
import { defineComponent, reactive, computed, toRefs, ref, getCurrentInstance } from '../../js/importVue.js'

//组件定义
let componentName = "test2";

async function createTest2() {
    let template = await loadTemplate(componentName, 'Test2/');

    return defineComponent({
        name: componentName,
        template: template,
        beforeCreate() {

        },
        setup(props, context) {

            return {

            }
        }
    });
}

export { createTest2, componentName }
