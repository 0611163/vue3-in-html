<style scoped>
</style>

<template>
<el-dialog title="测试弹出框" v-model="dialogVisible" width="800px" :before-close="handleClose" :close-on-press-escape="false" :close-on-click-modal="false">
    <span>{{ content }}</span>

    <template #footer>
        <span class="dialog-footer">
            <el-button type="primary" @click="OK">确定</el-button>
        </span>
    </template>
</el-dialog>
</template>
