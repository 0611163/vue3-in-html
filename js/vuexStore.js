/**
 * 状态管理
 */

const CHANGE_HELLOVUE3_VISIBLE = "changeHelloVue3Visible";
const CHANGE_MAP_TYPE = "changeMapType";

const state = {
    helloVue3Visible: true,
    /** 1:高德地图 2:百度地图 3:SuperMap地图 4:第二个高德地图页面 */
    mapType: 1
}

const mutations = {
    changeHelloVue3Visible(state, value) {
        state.helloVue3Visible = value;
    },

    changeMapType(state, newMapType) {
        state.mapType = newMapType;
    }
}

const vuexStore = new Vuex.Store({
    state,
    mutations
});

export {
    vuexStore,
    CHANGE_HELLOVUE3_VISIBLE,
    CHANGE_MAP_TYPE
}
