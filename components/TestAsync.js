//测试异步组件

import { loadTemplate } from '../js/loadVue.js'
import { defineComponent, defineAsyncComponent, reactive, computed, toRefs, ref, getCurrentInstance } from '../js/importVue.js'

//组件定义
let componentName = "testAsync";

async function createTestAsync() {
    let template = await loadTemplate(componentName);

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

let TestAsync = defineAsyncComponent(createTestAsync)

export { TestAsync, componentName }
