/**
 * 地图配置文件
 */

let tileUrl = 'http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'; //电子地图在线瓦片
//let tileUrl = 'http://localhost:8161/{z}/{x}/{y}.png'; //电子地图
let tileUrlNight = 'http://localhost:8161/{z}/{x}/{y}.png'; //夜间模式电子地图
//let tileUrlImage = 'http://localhost:8163/{z}/{x}/{y}.jpg'; //影像地图
let tileUrlImage = 'http://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}'; //影像地图

//let baiduTileUrl = 'http://localhost:8162/{z}/{x}/{y}.png';
let baiduTileUrl = 'http://online1.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&p=1';
//let baiduTileUrlImage = 'http://localhost:8164/{z}/{x}/{y}.jpg';
let baiduTileUrlImage = 'http://shangetu1.map.bdimg.com/it/u=x={x};y={y};z={z};v=009;type=sate&fm=46';

let supermapUrl = "https://iserver.supermap.io/iserver/services/map-china400/rest/maps/China";

export { tileUrl, tileUrlNight, tileUrlImage, baiduTileUrl, baiduTileUrlImage, supermapUrl }
