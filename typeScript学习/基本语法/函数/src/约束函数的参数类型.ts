// 创建一个函数, 仅允许函数接收数值类型数组的参数

// 冒泡排序, 传入一个数值数组, 返回一个排序后的数组
function bubbleSort(arr: number[]): number[] {
  // 外层循环控制内层循环两两比较的次数
  for (let i = 0; i < arr.length - 1; i++) {
    // 内层循环比较相邻元素
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j - 1]
        arr[j - 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

let newArr = [4, 3, 4, 4, 2, 1, 1, 2, 0]
console.log(bubbleSort(newArr));

// 选择排序
function selectSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    // 初始化最小值, 假设数组中最小的元素是未排序的首元素
    let min = arr[i]
    let minIndex = i
    // 循环遍历每一项, 与最小值比较, 并记录最小值以及最小值下标
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j]
        minIndex = j
      }
    }
    // 只有当最小值的下标变化后才交换
    if (minIndex !== i) {
      let temp = arr[i]
      arr[i] = min
      arr[minIndex] = temp
    }
  }
  return arr
}

let testArr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5]
console.log(selectSort(testArr));
