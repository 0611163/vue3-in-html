<style scoped>
.root-div {
  background-color: #99eedd;
  padding: 10px;
}

.span-title {
  color: #559922;
  font-weight: bold;
  font-size: 25px;
  font-style: normal;
}

.content span {
  color: #559922;
}
</style>

<template>
  <div class="root-div">
    <el-row>
      <div class="span-title">我是异步组件TestAsync</div>
    </el-row>

    <el-row>
      <div class="content">
        <span>这是异步组件TestAsync的内容</span>
      </div>
    </el-row>
  </div>
</template>

<script>
//测试异步组件

import { loadTemplate } from "/js/loadVue.js";
import {
  defineComponent,
  defineAsyncComponent,
  reactive,
  computed,
  toRefs,
  ref,
  getCurrentInstance,
} from "/js/importVue.js";

//组件定义
let componentName = "testAsync";

async function createTestAsync() {
  let template = await loadTemplate(componentName);

  return defineComponent({
    name: componentName,
    template: template,
    beforeCreate() {},
    setup(props, context) {
      return {};
    },
  });
}

let TestAsync = defineAsyncComponent(createTestAsync);

export { TestAsync, componentName };
</script>
