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
    <img v-for="item in imgs" @click="imgClick" :class="getImgClass(item.type)" :src="item.src" :alt="item.alt" :value="item.type" :key="item.type" />
</div>
</template>
