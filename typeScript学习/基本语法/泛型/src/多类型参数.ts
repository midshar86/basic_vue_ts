// 编写一个交换两个不同类型元素元组中的数据
const newFun = function <T, S>(arr: [T, S]): [S, T] {
  return [arr[1], arr[0]]
}

// 调用函数
let res: [null, string] = newFun<string, null>(["pos", null])
console.log(res)