// 定义一个接口, 包含一个方法
interface ISay {
  sayHi(): void
}

// 定义另一个接口, 包含一个属性
interface IProp {
  name: string
}

// 定义一个 Dog 类
// 使用 implements 实现多个类
class Dog implements ISay, IProp {
  // 先声明
  age: number
  name: string
  constructor(age: number, name: string) {
    this.age = age
    this.name = name
  }
  sayHi(): void {
    console.log("Hello, this is a class dog!");
  }
}

// 创建一个 Dog 实例
const dog = new Dog(18, "kitty")
console.log(dog);
// 调用实例中的 sayHi 方法
dog.sayHi()