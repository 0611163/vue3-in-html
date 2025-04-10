import { loadVue } from "/js/loadHtml.js";

async function createRouter() {

    let { BaiduMapPage } = await loadVue("/components/Maps/BaiduMapPage.vue", "baiduMapPage");
    let { createMapPage } = await loadVue("/components/Maps/MapPage.vue", "mapPage");
    let { createSuperMapPage } = await loadVue("/components/Maps/SuperMapPage.vue", "supermapPage");
    let { createMapPage2 } = await loadVue("/components/Maps/MapPage2.vue", "mapPage2");

    const routes = [
        {
            path: '/',
            component: createMapPage
        },
        {
            path: '/baiduMap',
            component: BaiduMapPage
        },
        {
            path: '/supermap',
            component: createSuperMapPage
        },
        {
            path: '/map2',
            component: createMapPage2
        }
    ]

    const router = VueRouter.createRouter({
        history: VueRouter.createMemoryHistory(),
        routes,
    })

    return router;

}

export { createRouter }
