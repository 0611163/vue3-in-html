/**
 * 处理坐标，经纬度数据对调(建个新的，不要直接修改经纬度，图形可能会自动调整经纬度而导致出问题)
 */
function processCoord(coord) {
    var newCoord = [];
    for (var i = 0; i < coord.length; i++) {
        newCoord.push([]);
        for (var j = 0; j < coord[i].length; j++) {
            newCoord[i].push([coord[i][j][1], coord[i][j][0]]);
        }
    }
    return newCoord;
}

/**
 * 函数防抖
 */
function createDebounce(waitTime) {
    let timeout;

    return (func) => {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            timeout = undefined;
            func();
        }, waitTime || 500);
    };
}

export { processCoord, createDebounce }
