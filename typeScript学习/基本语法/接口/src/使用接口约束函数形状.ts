// 定义一个函数接口
interface IFun {
  (base: number): number
}

// 定义一个求阶乘的函数
let factoryFun: IFun = (val: number): number => {
  if (val === 0 || val === 1) {
    return 1
  } else {
    return val * factoryFun(val - 1)
  }
}

// 执行阶乘
console.log(factoryFun(5));
