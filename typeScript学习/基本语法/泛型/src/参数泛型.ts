// 定义一个函数, 用来填充数组. 接收两个参数, 第一个参数是任意类型, 第二个参数指定希望在数组中出现的次数
const fillArray = function <T>(item: T, times: number): T[] {
  let newArray = new Array(times)
  return newArray.fill(item)
}

console.log(fillArray("Hello", 10))
console.log(fillArray(null, 10))
console.log(fillArray(undefined, 10))
console.log(fillArray(666, 10))