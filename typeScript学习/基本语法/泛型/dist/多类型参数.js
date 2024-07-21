"use strict";
// 编写一个交换两个不同类型元素元组中的数据
const newFun = function (arr) {
    return [arr[1], arr[0]];
};
// 调用函数
let res = newFun(["pos", null]);
console.log(res);
