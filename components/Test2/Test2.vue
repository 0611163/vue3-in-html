<style scoped>
.root-div {
  background-color: #eeee99;
  padding: 10px;
}

.span-title {
  color: #aa0099;
  font-weight: bold;
  font-size: 25px;
  font-style: normal;
}

.content span {
  color: #aa0099;
}
</style>

<template>
  <div class="root-div">
    <el-row>
      <div class="span-title">我是Test2组件</div>
    </el-row>

    <el-row>
      <div class="content">
        <span>这是Test2组件内容，它的文件在子路径下</span>
      </div>
    </el-row>
  </div>
</template>

<script>
/**
 * 测试组件在子路径下
 */

import { loadTemplate } from "/js/loadVue.js";
import {
  defineComponent,
  reactive,
  computed,
  toRefs,
  ref,
  getCurrentInstance,
} from "/js/importVue.js";

//组件定义
let componentName = "test2";

async function createTest2() {
  let template = await loadTemplate(componentName, "Test2/");

  return defineComponent({
    name: componentName,
    template: template,
    beforeCreate() {},
    setup(props, context) {
      return {};
    },
  });
}

export { createTest2, componentName };
</script>
