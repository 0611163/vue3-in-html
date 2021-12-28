import { createMapPage } from '../components/Maps/MapPage.js'
import { createSuperMapPage } from '../components/Maps/SuperMapPage.js'
import { BaiduMapPage } from '../components/Maps/BaiduMapPage.js'
import { createMapPage2 } from '../components/Maps/MapPage2.js'

async function createRouter() {

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
