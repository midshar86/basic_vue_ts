// 创建一个函数, 要求传入两个参数. 第一个参数传递需要被填充的值, 第二个参数表示需要填充的数组长度, 返回填充后的数组

// 定义一个接口
interface IFun {
  <T>(paramOne: T, paramTwo: number): T[]
}

// 实现接口
// 函数的参数及返回值需要与接口保持一致
const fillTheArray: IFun = <T>(value: T, times: number): T[] => {
  // 创建一个长度为 times 的空数组
  let blankArray = new Array(times)
  // 调用数组的 fill 方法
  return blankArray.fill(value)
}

console.log(fillTheArray("Hello World", 5));
console.log(fillTheArray(666, 8));