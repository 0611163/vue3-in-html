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
</style><style>
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
        <el-date-picker v-model="dateTime" type="datetime" placeholder="选择日期和时间" :defaultTime="defaultTime">
        </el-date-picker>
    </el-row>

    <el-row>
        <div class="content">
            <span>您选择的日期时间是：</span>{{ dateTimeStr }}
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
        <span style="color: #ff0000; margin-left: 10px">
            {{ currentMap }}
        </span>
    </el-row>
</div>
</template>
