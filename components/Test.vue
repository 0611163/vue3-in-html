<style scoped>
.root-div {
  background-color: #99ee99;
  padding: 10px;
}

.span-title {
  color: #aa9900;
  font-weight: bold;
  font-size: 25px;
  font-style: italic;
}

.content span {
  color: #aa9900;
}
</style>

<template>
  <div class="root-div">
    <el-row>
      <div class="span-title">我是Test组件</div>
    </el-row>

    <el-row>
      <div class="content">
        <span>这是Test组件内容</span>
      </div>
    </el-row>

    <test-2></test-2>
  </div>
</template>

<script>
import { loadVue } from "/js/loadHtml.js";
import { loadTemplate } from "/js/loadVue.js";
import {
  defineComponent,
  reactive,
  computed,
  toRefs,
  ref,
  getCurrentInstance,
} from "/js/importVue.js";

let { createTest2 } = await loadVue("/components/Test2/Test2.vue", "test2");

//组件定义
let componentName = "test";

async function createTest() {
  let [template, Test2] = await Promise.all([
    loadTemplate(componentName),
    createTest2(),
  ]);

  return defineComponent({
    name: componentName,
    template: template,
    components: {
      Test2,
    },
    beforeCreate() {},
    setup(props, context) {
      return {};
    },
  });
}

export { createTest, componentName };
</script>
