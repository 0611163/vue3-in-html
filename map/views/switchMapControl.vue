<style>
#switchMapControl {
  position: absolute;
  right: 10px;
  bottom: 10px;
  background-color: transparent;
  width: 135px;
  height: 44px;
  z-index: 1999;
  border: 0;
  text-align: right;
  user-select: none;
}

#switchMapControl .imgCurrent {
  width: 56px;
  height: 40px;
  border: solid 2px #0197a6;
  border-radius: 4px;
}

#switchMapControl .img {
  width: 56px;
  height: 40px;
  border: solid 2px #999999;
  border-radius: 4px;
  opacity: 0.8;
}

#switchMapControl .imgMargin {
  margin-right: 10px;
}
</style>

<template>
  <div id="switchMapControl">
    <img
      v-for="item in imgs"
      @click="imgClick"
      :class="getImgClass(item.type)"
      :src="item.src"
      :alt="item.alt"
      :value="item.type"
      :key="item.type"
    />
  </div>
</template>

<script>
import { loadVue } from "/js/loadHtml.js";
import {
  defineComponent,
  reactive,
  computed,
  toRefs,
  ref,
  getCurrentInstance,
} from "/js/importVue.js";

let app;

async function initSwitchMapControl(
  switchMap,
  mapPageComponentName,
  vuexStoreContainer
) {
  let { vuexStore } = vuexStoreContainer;

  //状态及数据
  const state = reactive({
    imgs: [
      {
        src: "./map/images/e-map.png",
        type: 1,
        alt: "电子地图",
      },
      {
        src: "./map/images/image-map.png",
        type: 2,
        alt: "卫星地图",
      },
    ],
  });

  //方法
  function imgClick(e) {
    let type = parseInt(e.target.attributes["value"].value);
    switchMap(type);
  }

  function getImgClass(type) {
    let imgMargin = type === 1;

    if (vuexStore.state.mapTileType === type) {
      return { imgCurrent: true, imgMargin: imgMargin };
    } else {
      return { img: true, imgMargin: imgMargin };
    }
  }

  //App定义
  if (app) {
    app.unmount();
    $("#switchMapControlContainer").remove();
  }

  app = Vue.createApp({
    name: "switchMapControl",
    setup(props, context) {
      return {
        ...toRefs(state),

        //计算属性
        ...{},

        //方法
        ...{
          imgClick,
          getImgClass,
        },
      };
    },
  });
  app.mount("#switchMapControl");
}

export { initSwitchMapControl };
</script>
