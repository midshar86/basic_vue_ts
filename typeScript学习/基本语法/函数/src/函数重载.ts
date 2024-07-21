// 定义一个函数, 要求传入参数后, 返回一个数组, 数组的 length=10, 并且每一项都是该参数

// 限定该参数为字符串类型时, 返回字符串数组; 参数为数值类型时, 返回数值数组
// 分类设置规则
function copyToArray(val: number): number[]
function copyToArray(val: string): string[]
// 实现函数逻辑
function copyToArray(val: number | string): (number | string)[] {
  let newArray = new Array(10)
  return newArray.fill(val)
}

// 调用函数
console.log(copyToArray(666));
console.log(copyToArray("字符串"));