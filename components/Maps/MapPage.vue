<style scoped>
#map {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  cursor: default;
}

#mouseposition {
  position: absolute;
  right: 190px;
  bottom: 10px;
  z-index: 999;
  width: 200px;
  height: 20px;
  font-size: 14px;
  line-height: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  vertical-align: bottom;
  text-align: center;
  overflow: hidden;
}

#mapzoom {
  position: absolute;
  right: 150px;
  bottom: 10px;
  z-index: 999;
  width: 28px;
  height: 20px;
  font-size: 14px;
  line-height: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  vertical-align: bottom;
  text-align: center;
  overflow: hidden;
}

.labelIconText {
  font-size: 16px;
  color: #ffffff;
  font-weight: bold;
  line-height: 30px;
  text-align: center;
  cursor: default;
}

.labelIconTextVertical {
  font-size: 16px;
  color: #ffffff;
  font-weight: bold;
  line-height: 20px;
  text-align: center;
  word-wrap: break-word;
  cursor: default;
}

.regionPolygon {
  cursor: default;
}

.tips {
  margin-bottom: 30px;
}
</style>

<template>
  <div style="height: 100%;">
    <div id="map"></div>
    <div id="mouseposition"></div>
    <div id="mapzoom"></div>
  </div>
</template>

<script>
import { getVueTemplateFromCache } from "/js/loadHtml.js";
import { useMapIndex } from "/map/js/index.js";
import {
  defineComponent,
  reactive,
  computed,
  toRefs,
  ref,
  getCurrentInstance,
} from "/js/importVue.js";

let componentName = "mapPage";

let resize = function () {
  $("#" + componentName).height($(window).height());
};

let map;
let switchMap;

//组件定义
async function createMapPage() {
  return defineComponent({
    name: componentName,
    components: {},
    template: getVueTemplateFromCache(componentName),
    beforeCreate() {},
    async mounted() {
      $(window).on("resize", resize);
      resize();
      let mapContainer = await useMapIndex();
      map = mapContainer.map;
      switchMap = mapContainer.switchMap;
    },
    activated() {
      resize();
      map && map.invalidateSize(false);
      window.switchMap = switchMap;
    },
    unmounted() {
      $(window).off("resize", resize);
    },
    setup(props, context) {
      return {};
    },
  });
}

export { createMapPage, componentName };
</script>
