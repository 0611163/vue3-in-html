import { loadApp } from './js/loadVue.js'
import { zhCn } from './libs/element-plus/locale/zh-cn.js'
import { HelloVue3 } from './components/HelloVue3.js'
import { createTest } from './components/Test.js'
import { createRouter } from './js/useRouter.js'
import { TestAsync } from '../components/TestAsync.js'

async function useApp() {

    let [_, Test, router] = await Promise.all([
        loadApp('#app'),
        createTest(),
        createRouter()
    ])

    const app = Vue.createApp({
        name: 'App',
        components: {
            HelloVue3,
            Test,
            TestAsync
        }
    });

    app.use(ElementPlus, {
        locale: zhCn
    });

    app.use(Vuex);

    app.use(router);

    app.mount('#app');
}

export { useApp }
