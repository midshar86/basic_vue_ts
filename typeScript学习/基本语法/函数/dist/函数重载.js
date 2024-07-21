"use strict";
// 定义一个函数, 要求传入参数后, 返回一个数组, 数组的 length=10, 并且每一项都是该参数
// 实现函数逻辑
function copyToArray(val) {
    let newArray = new Array(10);
    return newArray.fill(val);
}
// 调用函数
console.log(copyToArray(666));
console.log(copyToArray("字符串"));
