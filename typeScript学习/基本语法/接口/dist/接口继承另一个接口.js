"use strict";
// 定义一个类, 以实现 IComputed 接口
// 不仅需要满足 IComputed 接口, 还需要满足 IAdd 与 ISub 接口
class Computer {
    addFun(m, n) {
        return m + n;
    }
    subFun(m, n) {
        return m - n;
    }
    multiFun(m, n) {
        return m * n;
    }
    division(m, n) {
        return m / n;
    }
}
// 创建一个类的实例
const myComputer = new Computer();
// console.log(myComputer);
console.log("addFun", myComputer.addFun(10, 1));
console.log("subFun", myComputer.subFun(10, 1));
console.log("multiFun", myComputer.multiFun(10, 1));
console.log("division", myComputer.division(10, 1));
