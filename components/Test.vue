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
      <div class="content"><span>这是Test组件内容</span></div>
    </el-row>

    <test-2></test-2>
  </div>
</template>
