import { loadTemplate } from '../js/loadVue.js'
import { createTest2 } from './Test2/Test2.js'
import { defineComponent, reactive, computed, toRefs, ref, getCurrentInstance } from '../js/importVue.js'

//组件定义
let componentName = "test";

async function createTest() {

    let [template, Test2] = await Promise.all([
        loadTemplate(componentName),
        createTest2()
    ])

    return defineComponent({
        name: componentName,
        template,
        components: {
            Test2
        },
        beforeCreate() {

        },
        setup(props, context) {

            return {

            }
        }
    });
}

export { createTest, componentName }
