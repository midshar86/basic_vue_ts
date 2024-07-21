// 定义一个函数, 默认接收两个参数并求和返回; 如果传入的参数多余两个, 将所有参数求和并返回
function addFun(a: number, b: number, ...argus: number[]): number {
  if (!argus.length) {
    return a + b
  } else {
    let allNums = [a, b, ...argus]
    return allNums.reduce((total, item) => total + item, 0)
  }
}

// 调用函数
// 传递两个参数
console.log(addFun(5, 6));
console.log(addFun(1, 2, 3, 4, 5, 6, 7, 8, 9));
