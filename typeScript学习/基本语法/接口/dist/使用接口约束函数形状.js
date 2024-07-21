"use strict";
// 定义一个求阶乘的函数
let factoryFun = (val) => {
    if (val === 0 || val === 1) {
        return 1;
    }
    else {
        return val * factoryFun(val - 1);
    }
};
// 执行阶乘
console.log(factoryFun(5));
