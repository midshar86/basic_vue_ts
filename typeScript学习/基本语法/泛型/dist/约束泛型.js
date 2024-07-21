"use strict";
// 创建一个函数, 在函数中访问 length 属性
// 约束传递的参数类型为一个数组
const tFun1 = (val) => {
    return val.length;
};
console.log("数组的长度--直接约束参数为数组", tFun1([1, 2, 3, 4, 5]));
// 使用泛型数组
const tFun2 = (val) => {
    return val.length;
};
console.log("数组的长度--使用泛型数组", tFun1([1, 2, 3, 4, 5]));
// 现在, 既可以传递数组, 也可以传递字符串, 也可以传递类数组
const tFun3 = (val) => {
    return val.length;
};
console.log("----------使用接口约束泛型----------");
console.log("数组参数", tFun3("Hello World".split("")));
console.log("字符串参数", tFun3("Hello Typwscript"));
