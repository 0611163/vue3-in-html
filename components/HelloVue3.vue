<style scoped>
.root-div {
  background-color: #eeeeee;
  padding: 10px;
}

.span-title {
  color: #00dd00;
  font-weight: bold;
  font-size: 25px;
}

.content span {
  color: #000000;
}
</style>

<style>
.content {
  color: #009933;
}
</style>

<template>
  <div class="root-div" v-if="visible">
    <el-row>
      <span class="span-title">{{ title }}</span>
    </el-row>

    <el-row>
      <el-date-picker
        v-model="dateTime"
        type="datetime"
        placeholder="选择日期和时间"
        :defaultTime="defaultTime"
      ></el-date-picker>
    </el-row>

    <el-row>
      <div class="content">
        <span>您选择的日期时间是：</span>
        {{ dateTimeStr }}
      </div>
    </el-row>

    <el-row :gutter="20">
      <el-button type="primary" size="small" @click="updateDateTime">更新日期时间</el-button>
      <el-button type="primary" size="small" @click="showDialog">显示对话框</el-button>
      <el-button type="primary" size="small" @click="changeMap(1)">高德地图</el-button>
      <el-button type="primary" size="small" @click="changeMap(2)">百度地图</el-button>
      <el-button type="primary" size="small" @click="changeMap(3)">SuperMap地图</el-button>
      <test-dialog ref="dialog"></test-dialog>
    </el-row>

    <el-row :gutter="20">
      <el-button type="primary" size="small" @click="changeMap(4)">第二个高德地图页面</el-button>
    </el-row>

    <el-row>
      右侧地图组件显示的是
      <span style="color: #ff0000; margin-left: 10px">{{ currentMap }}</span>
    </el-row>
  </div>
</template>

<script>
import { loadVue } from "/js/loadHtml.js";
import { loadTemplate } from "/js/loadVue.js";
import { vuexStore, CHANGE_MAP_TYPE } from "/js/vuexStore.js";
import {
  defineComponent,
  defineAsyncComponent,
  reactive,
  computed,
  toRefs,
  ref,
  getCurrentInstance,
} from "/js/importVue.js";

let { createTestDialog } = await loadVue(
  "/components/TestDialog.vue",
  "testDialog"
);

let self;
let router;

//状态及数据
const state = reactive({
  dateTime: "",
  defaultTime: new Date(),
});

//计算属性
const visible = computed(() => {
  return vuexStore.state.helloVue3Visible;
});

const dateTimeStr = computed(() => {
  if (state.dateTime) {
    return dayjs(state.dateTime).format("YYYY-MM-DD HH:mm:ss");
  }
});

const currentMap = computed(() => {
  if (vuexStore.state.mapType == 1) {
    return "高德地图";
  }

  if (vuexStore.state.mapType == 2) {
    return "百度地图";
  }

  if (vuexStore.state.mapType == 3) {
    return "SuperMap地图";
  }

  if (vuexStore.state.mapType == 4) {
    return "第二个高德地图页面";
  }
});

//方法
function updateDateTime() {
  state.dateTime = new Date();
}

function showDialog() {
  self.refs.dialog.show("父组件传给对话框的内容");
}

function changeMap(type) {
  if (type === 1) {
    this.$router.push("/");
  }

  if (type === 2) {
    this.$router.push("/baiduMap");
  }

  if (type === 3) {
    this.$router.push("/supermap");
  }

  if (type === 4) {
    this.$router.push("/map2");
  }

  vuexStore.commit(CHANGE_MAP_TYPE, type);
}

//组件定义
let componentName = "helloVue3";

async function createHelloVue3() {
  let [template, TestDialog] = await Promise.all([
    loadTemplate(componentName),
    createTestDialog(),
  ]);

  return defineComponent({
    name: componentName,
    template: template,
    props: {
      title: String,
    },
    components: {
      TestDialog,
    },
    beforeCreate() {},
    setup(props, context) {
      //console.log('props', props)
      //console.log('context', context)
      self = getCurrentInstance();
      router = getCurrentInstance().appContext.config.globalProperties.$router;

      return {
        ...toRefs(state),

        //计算属性
        ...{
          visible,
          dateTimeStr,
          currentMap,
        },

        //方法
        ...{
          updateDateTime,
          showDialog,
          changeMap,
        },
      };
    },
  });
}

let HelloVue3 = defineAsyncComponent(createHelloVue3);

export { HelloVue3, componentName };
</script>
