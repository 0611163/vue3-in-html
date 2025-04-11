<style scoped>
</style>

<template>
  <el-dialog
    title="测试弹出框"
    v-model="dialogVisible"
    width="800px"
    :before-close="handleClose"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
  >
    <span>{{ content }}</span>

    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="OK">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { getVueTemplateFromCache } from "/js/loadHtml.js";
import { vuexStore } from "/js/vuexStore.js";
import {
  defineComponent,
  reactive,
  computed,
  toRefs,
  watch,
} from "/js/importVue.js";

//状态及数据
const state = reactive({
  dialogVisible: false,
  content: "",
});

//方法
function show(content) {
  state.dialogVisible = true;
  state.content = content;
}

function handleClose() {
  state.dialogVisible = false;
}

function OK() {
  state.dialogVisible = false;
}

//组件定义
let componentName = "testDialog";

async function createTestDialog() {
  return defineComponent({
    name: componentName,
    template: getVueTemplateFromCache(componentName),
    props: {
      visible: Boolean,
    },
    beforeCreate() {},
    setup(props, context) {
      //console.log('props', props)
      //console.log('context', context)
      //watch(count, (newValue, oldValue) => { });

      return {
        ...toRefs(state),

        //计算属性
        ...{},

        //方法
        ...{
          show,
          handleClose,
          OK,
        },
      };
    },
  });
}

export { createTestDialog, componentName };
</script>
