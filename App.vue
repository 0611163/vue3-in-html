<style scoped>
.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.index-btn {
    height: 32px;
    background-color: #1188aa;
    border: none;
    border-radius: 3px;
    color: #ffffff;
    font-size: 14px;
    padding-left: 15px;
    padding-right: 15px;
}

.index-btn:hover {
    background-color: #1199bb;
    border: none;
}

.index-btn:focus {
    border: none;
    outline: none;
}

.leftContainer {
    padding-left: 10px;
    padding-top: 10px;
    padding-right: 10px;
}
</style>

<template>
<div>
    <el-row>
        <el-col :span="8" class="leftContainer">
            <el-row>
                <input id="btn" type="button" class="index-btn" value="隐藏HelloVue3组件" />
            </el-row>

            <el-row>
                <el-col :span="24">
                    <hello-vue-3 title="我是HelloVue3组件"></hello-vue-3>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="24">
                    <test></test>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="24">
                    <test-async></test-async>
                </el-col>
            </el-row>
        </el-col>

        <el-col :span="16">
            <!-- 不缓存路由组件 -->
            <!-- <router-view></router-view> -->

            <!-- 缓存路线组件 -->
            <router-view v-slot="{ Component }">
                <keep-alive>
                    <component :is="Component"></component>
                </keep-alive>
            </router-view>
        </el-col>
    </el-row>
</div>
</template>
