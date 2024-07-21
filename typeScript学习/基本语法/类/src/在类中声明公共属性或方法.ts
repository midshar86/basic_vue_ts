// 创建一个类
class Person {
  // 默认的属性类型就是 public
  public name: string
  public age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  public sayHi(): void {
    console.log(`This is an instance of ${this.constructor.name}.`);
  }
}

// 创建一个实例对象
const person = new Person("Midsahr", 18)
person.sayHi()