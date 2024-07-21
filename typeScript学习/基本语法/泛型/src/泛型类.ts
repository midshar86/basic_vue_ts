// 创建一个泛型类, 实现队列功能
class Queue<T> {
  private newArr: T[] = []
  enterQueue(param: T): T[] {
    this.newArr.push(param)
    return this.newArr
  }
  leaveQueue(): T[] {
    this.newArr.unshift()
    return this.newArr
  }
}

// 在创建类实例时, 明确泛型的类型
const que = new Queue<string>()
que.enterQueue('H')
que.enterQueue('E')
que.enterQueue('L')
que.enterQueue('L')
que.enterQueue('O')
console.log(que);

// 在创建类实例时, 明确泛型的类型
const nums = new Queue<number | string>()
nums.enterQueue("H")
nums.enterQueue(1)
nums.enterQueue("E")
nums.enterQueue(2)
nums.enterQueue("L")
nums.enterQueue(3)
nums.enterQueue("L")
nums.enterQueue(4)
nums.enterQueue("O")
nums.enterQueue(5)
console.log(nums);
