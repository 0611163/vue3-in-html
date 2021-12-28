/**
 * 电子地图相关的状态管理
 */

function useVuexStore() {
    const CHANGE_MAP_TILE_TYPE = "changeMapTileType";

    const state = {
        /** 1:电子地图 2:影像地图 */
        mapTileType: 1
    }

    const mutations = {
        changeMapTileType(state, newMapTileType) {
            state.mapTileType = newMapTileType;
        }
    }

    const vuexStore = new Vuex.Store({
        state,
        mutations
    });

    return {
        vuexStore,
        CHANGE_MAP_TILE_TYPE
    }
}

export { useVuexStore }
