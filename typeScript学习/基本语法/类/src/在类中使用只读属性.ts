// 定义一个接口
interface IGoods {
  name: string,
  price: number,
  id: number
}

// 创建一个类
class Goods {
  name: string
  price: number
  readonly id: number
  constructor(name: string, price: number, id: number) {
    this.name = name
    this.price = price
    this.id = id
  }
  // 实现接口
  showGoodsInfo(): IGoods {
    return {
      name: this.name,
      price: this.price,
      id: this.id
    }
  }
}

// 创建一个实例对象
const toys = new Goods("puzzle", 68, 5)
// 调用实例中的方法
console.log(toys.showGoodsInfo());
// 更改可写属性
toys.name = "truck"
toys.price = 89

// 更改只读属性
// toys.id = 23  // 不允许修改
console.log(toys.showGoodsInfo());
