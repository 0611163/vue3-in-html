# vue3-in-html

    在html中使用vue3，不依赖nodejs和webpack，不依赖脚手架

## 功能

1. 编写了几个简单的组件，使用了element-plus和vuex
2. 在vue3组件中使用leaflet实现电子地图

## 特色

1. 原生 html 开发，不依赖 nodejs 和 webpack，不依赖脚手架
2. 支持在浏览器中直接运行.vue扩展名的组件文件
3. style 支持 scoped
4. 集成了 leaflet 实现电子地图
5. vue 和 jqeury 混合使用，方便以较小的修改量引入旧代码

## 代码分支

### 1. **<font color=#ff0000>master 分支</font>**

    主分支，该分支采用异步的方式加载vue文件

### 2. **<font color=#ff0000>sync 分支</font>**

    该分支采用同步的方式加载vue文件，文件较多时存在性能问题
    

## 说明

1. 组件style支持scoped，但实现原理和vue的scoped不同，缺陷是父组件中的样式可能会应用到子组件中具有相同class的标签上，
   出现这种情况时要为子组件受影响的css属性在class中设置一下该属性的值

2. 支持.vue扩展名的文件，从而使编写的vue模板代码在vscode中具有语法检查

3. 谷歌浏览器可以打开，火狐浏览器未测试，不支持IE浏览器

4. 电子地图代码是我从 https://gitee.com/s0611163/leaflet-demo 复制过来的，代码本身与vue没有瓜葛，额外写了一个组件MapPage用来引入电子地图功能，
   使用这种方式不需要把地图相关代码直接写在vue的组件中

## 关于 controlButtons.js 和 switchMapControl.js

    这两个电子地图相关的组件并没有使用 Vue.defineComponent 定义，而是使用 Vue.createApp 的方式定义的，是为了测试不同的实现方式；
    controlButtons 直接使用 jquery 实现，并混合了 vue；

## 思考

1. 为了解决vue文件加载性能问题，采用了异步函数，由于 async await 的传染性，导致使用defineComponent定义组件时，template必须异步获取，
   导致无法通过import导入定义的组件，必须定义异步函数创建组件，使用defineComponent定义父组件时，子组件必须异步获取

3. async await 的使用，使得代码简捷清晰，优雅地实现了vue文件的并行请求

## 注意

1. 对 iclient-leaflet.js 的引用要放在 proj4leaflet.js 的前面，否则 iclient-leaflet.js 会重写 proj4leaflet.js 中的 L.CRS 的 scale 方法，
   从而使百度地图无法正确加载瓦片；当使用 leaflet 加载百度地图，引用了 iclient-leaflet.js 并且图源不是超图提供时，可能会引发此问题


