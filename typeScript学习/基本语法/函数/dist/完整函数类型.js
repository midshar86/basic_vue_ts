"use strict";
// 完整函数类型在使用赋值式声明函数时使用
// 在使用完整函数类型时需要使用 => 来约束返回值
let newFun = function (m, n) {
    let blankArr = new Array(n);
    return blankArr.fill(m);
};
console.log(newFun("H", 6));
console.log(newFun(3, 3));
