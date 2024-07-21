// 定义一个类
class Example {
  name: string
  age: number
  gender: string
  constructor(name: string, age: number, gender: string) {
    this.name = name
    this.age = age
    this.gender = gender
  }
  sayHi(): void {
    console.log(`This is an  ${this.constructor.name} class, and this is a function method.`);
  }
}
// 创建一个父类实例调用 sayHi 方法
const instanceOfExample = new Example("Lucy", 22, "female")
instanceOfExample.sayHi()

// -------------------------------------------------------

// 创建一个接口, 继承自类
interface IExample extends Example {
  introduction: string
}

// 定义另一个类, 继承自 Example 类, 并且需要实现接口
class OneOfExample extends Example implements IExample {
  introduction: string
  constructor(name: string, age: number, gender: string, introduction: string) {
    // 调用父类
    super(name, age, gender)
    this.introduction = introduction
  }
  sayHi(): void {
    super.sayHi()
  }
}

// 创建一个实例
const instanceOfOneOfExample = new OneOfExample("midshar", 18, "male", "This is an instance of OneOfExample.")
console.log(instanceOfOneOfExample);
// 调用子类实例中的方法
instanceOfOneOfExample.sayHi()